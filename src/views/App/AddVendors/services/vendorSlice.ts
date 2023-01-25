import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {axios} from '../../../../apis/setup.intersepter';
import {ServiceDTO} from '../../AppState/Services/types';
import {
  AddressDTO,
  createMasterServiceDTO,
  CreateVendorAddressServicesDTO,
  CreateVendorDTO,
  vendorDTO,
  VendorIntialStateDTO,
} from './types';

export const initialState: VendorIntialStateDTO = {
  vendor: {},
  error: '',
  loading: false,
  isDataSubmited: false,
  isAddressAndServicesAdded: false,
  services: [],
  isCustomServiceAdded: false,
};

export const createVendor = createAsyncThunk(
  '/weserve/public/api/vendor/create',
  (data: CreateVendorDTO) => {
    return axios
      .post('/weserve/public/api/vendor/create', data)
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
  },
);
export const updateVendor = createAsyncThunk(
  'weserve/public/api/vendor/update/id',
  (data: CreateVendorAddressServicesDTO) => {
    return axios
      .post(`weserve/public/api/vendor/update/${data.vendor_id}`, data)
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
  },
);
export const createVendorAddressWithServices = createAsyncThunk(
  '/weserve/public/api/vendorAddress/create',
  (data: CreateVendorAddressServicesDTO) => {
    return axios
      .post('/weserve/public/api/vendorAddress/create', data)
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
  },
);
export const createCustomServices = createAsyncThunk(
  '/weserve/public/api/master/MasterService/create',
  (data: createMasterServiceDTO) => {
    return axios
      .post('/weserve/public/api/master/MasterService/create', data)
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
  },
);

export const getAllServices = createAsyncThunk(
  'master/getAllMasterService',
  () => {
    return axios
      .get('/weserve/public/api/master/MasterService/getAll')
      .then(Response => {
        return Response.data.data;
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

export const vendorSlice = createSlice({
  name: 'vendors',
  initialState,
  reducers: {
    resetAddVendor: () => initialState,
    resetVendorSubmit: state => {
      state.isDataSubmited = false;
    },
    resetAddressServiceSubmit: state => {
      state.isAddressAndServicesAdded = false;
    },
    addAddressToVendor: (state, action: PayloadAction<AddressDTO[]>) => {
      const updatedVendor = {...state.vendor, vendor_address: action.payload};
      state.vendor = updatedVendor;
    },
  },
  extraReducers: builder => {
    builder.addCase(createVendor.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      createVendor.fulfilled,
      (state, action: PayloadAction<vendorDTO>) => {
        state.loading = false;
        state.isDataSubmited = true;
        state.vendor = action.payload;
      },
    );
    builder.addCase(createVendor.rejected, (state, action: AnyAction) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
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
    builder.addCase(createVendorAddressWithServices.pending, state => {
      state.loading = true;
    });
    builder.addCase(createVendorAddressWithServices.fulfilled, state => {
      state.loading = false;
      state.isAddressAndServicesAdded = true;
    });
    builder.addCase(
      createVendorAddressWithServices.rejected,
      (state, action: AnyAction) => {
        state.loading = false;
        state.isAddressAndServicesAdded = true;
        state.error = action.error.message || 'Something went wrong';
      },
    );
    builder.addCase(createCustomServices.pending, state => {
      state.loading = true;
    });
    builder.addCase(
      createCustomServices.fulfilled,
      (state, action: PayloadAction<ServiceDTO>) => {
        console.log('action.payload', action.payload);
        state.services = [...state.services, action.payload];
        state.loading = false;
        state.isCustomServiceAdded = true;
      },
    );
    builder.addCase(
      createCustomServices.rejected,
      (state, action: AnyAction) => {
        state.loading = false;
        state.isCustomServiceAdded = false;
        state.error = action.error.message || 'Something went wrong';
      },
    );
  },
});
export const {
  resetAddVendor,
  addAddressToVendor,
  resetVendorSubmit,
  resetAddressServiceSubmit,
} = vendorSlice.actions;
export default vendorSlice.reducer;
