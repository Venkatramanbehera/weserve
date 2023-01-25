import {connect} from 'react-redux';
import {RootState, TypedDispatch} from '../../../../redux/redux-store';
import {ServiceDTO} from '../../AppState/Services/types';
import {getAllIndividual} from '../../Individual/services/individualSlice';
import {getAllOrganization} from '../../Organization/services/organizationSlice';
import AddVendors from '../components/AddVendors';
import {
  CreateVendorDTO,
  vendorDTO,
  AddressDTO,
  CreateVendorAddressServicesDTO,
  createMasterServiceDTO,
} from '../services/types';
import {
  createVendor,
  addAddressToVendor,
  getAllServices,
  createVendorAddressWithServices,
  resetAddVendor,
  resetVendorSubmit,
  resetAddressServiceSubmit,
  createCustomServices,
} from '../services/vendorSlice';

interface StateProps {
  vendorDetails: vendorDTO;
  error: string;
  loading: boolean;
  isDataSubmited: boolean;
  allServices: ServiceDTO[];
  isAddressAndServicesAdded: boolean;
}
interface DispatchProps {
  saveVendor(data: CreateVendorDTO): void;
  saveVendorAddressWithServices(data: CreateVendorAddressServicesDTO): void;
  addVendorAddress(data: AddressDTO[]): void;
  getServices(): void;
  resetState(): void;
  getOrganization(): void;
  getIndividual(): void;
  resetVendorSubmition(): void;
  resetAddressServiceSubmition(): void;
  createService(data: createMasterServiceDTO): void;
}

const mapStateToProps = (state: RootState): StateProps => {
  return {
    vendorDetails: state.vendors.vendor,
    error: state.vendors.error,
    loading: state.vendors.loading,
    isDataSubmited: state.vendors.isDataSubmited,
    allServices: state.vendors.services,
    isAddressAndServicesAdded: state.vendors.isAddressAndServicesAdded,
  };
};

const mapDispatchToProps = (dispatch: TypedDispatch): DispatchProps => {
  return {
    saveVendor: (data: CreateVendorDTO) => {
      dispatch(createVendor(data));
    },
    addVendorAddress: (data: AddressDTO[]) => {
      dispatch(addAddressToVendor(data));
    },
    getServices: () => {
      dispatch(getAllServices());
    },
    saveVendorAddressWithServices: (data: CreateVendorAddressServicesDTO) => {
      dispatch(createVendorAddressWithServices(data));
    },
    resetState: () => {
      dispatch(resetAddVendor());
    },
    getOrganization: () => {
      dispatch(getAllOrganization());
    },
    getIndividual: () => {
      dispatch(getAllIndividual());
    },
    resetVendorSubmition: () => {
      dispatch(resetVendorSubmit());
    },
    resetAddressServiceSubmition: () => {
      dispatch(resetAddressServiceSubmit());
    },
    createService: (data: createMasterServiceDTO) => {
      dispatch(createCustomServices(data));
    },
  };
};

export interface VendorProps extends StateProps, DispatchProps {}
export const AddVendorComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddVendors);
