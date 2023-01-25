import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import {axios} from '../../../../apis/index.apis';
import {AppStateDTO, ServiceDTO} from './types';

export const initialState: AppStateDTO = {
  error: '',
  loading: false,
  services: [],
};

export const getAllServices = createAsyncThunk(
  'master/getAllMasterService',
  () => {
    return axios
      .get('/weserve/public/api/master/MasterService/getAll')
      .then(Response => {
        return Response.data;
      })
      .catch(e => {
        const customError = {
          name: 'Custom axios error',
          message: e.response.data.message,
          data: e.response.data, // serializable
        };
        throw customError;
      });
  },
);

export const appStateSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllServices.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      getAllServices.fulfilled,
      (state, action: PayloadAction<ServiceDTO[]>) => {
        state.loading = false;
        state.services = action.payload;
      },
    );
    builder.addCase(getAllServices.rejected, (state, action: AnyAction) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default appStateSlice.reducer;
