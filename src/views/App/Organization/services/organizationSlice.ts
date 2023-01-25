import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { axios } from '../../../../apis/setup.intersepter';
import { OrganizationDTO, OrganizationIntialStateDTO } from './types';
export const initialState: OrganizationIntialStateDTO = {
  allOrganization: [],
  error: '',
  loading: false,
};


export const getAllOrganization = createAsyncThunk('vender/organization', () => {
  return axios
    .get('/weserve/public/api/vendor/getAllActiveByVendorType/2')
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

export const organizationSlice = createSlice({
  name: 'allOrganization',
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(getAllOrganization.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllOrganization.fulfilled, (state,action: PayloadAction<OrganizationDTO[]>) => {
      state.loading = false;
      state.allOrganization = action.payload;
    });
    builder.addCase(getAllOrganization.rejected, (state, action: AnyAction) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export default organizationSlice.reducer;
export const {reset} = organizationSlice.actions;
