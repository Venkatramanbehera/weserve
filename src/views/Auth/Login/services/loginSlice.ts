import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {axios} from '../../../../apis/index.apis';
import {
  LoginDTO,
  LoginIntialStateDTO,
  LoginResponseData,
  RefreshTokenBodyDTO,
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserDetailsDTO} from './types';
export const initialState: LoginIntialStateDTO = {
  isLogin: false,
  error: '',
  loading: false,
  userDetails: {},
};

const storeData = async (data: LoginResponseData) => {
  try {
    await AsyncStorage.setItem('WE_SERVE_USER_DATA', JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const login = createAsyncThunk('user/login', (data: LoginDTO) => {
  return axios
    .post('https://demo.invincix.com/weserve/public/api/auth/login', data)
    .then(response => {
      if (response.status === 200) {
        storeData(response?.data?.data);
      }
      return response.data.data;
    })
    .catch(e => {
      const customError = {
        name: 'Custom axios error',
        message: e.response.data.message,
        data: e.response.data, // serializable
      };
      throw customError;
    });
});

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    reset: () => initialState,
    setAccessToken: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.userDetails = {
        ...state.userDetails,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      login.fulfilled,
      (state, action: PayloadAction<UserDetailsDTO>) => {
        state.loading = false;
        state.isLogin = true;
        state.userDetails = action.payload;
      },
    );
    builder.addCase(login.rejected, (state, action: AnyAction) => {
      state.loading = false;
      state.isLogin = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default loginSlice.reducer;
export const {reset, setAccessToken} = loginSlice.actions;
