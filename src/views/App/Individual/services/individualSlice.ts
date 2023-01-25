import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {axios} from '../../../../apis/setup.intersepter';
import {IndividualDTO, IndividualIntialStateDTO} from './types';
export const initialState: IndividualIntialStateDTO = {
  allIndividual: [],
  error: '',
  loading: false,
};

export const getAllIndividual = createAsyncThunk('vender/Individual', () => {
  return axios
    .get('/weserve/public/api/vendor/getAllActiveByVendorType/1')
    .then(response => {
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

export const IndividualSlice = createSlice({
  name: 'allIndividual',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getAllIndividual.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getAllIndividual.fulfilled,
      (state, action: PayloadAction<IndividualDTO[]>) => {
        state.loading = false;
        state.allIndividual = action.payload;
      },
    );
    builder.addCase(getAllIndividual.rejected, (state, action: AnyAction) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default IndividualSlice.reducer;
export const {reset} = IndividualSlice.actions;
