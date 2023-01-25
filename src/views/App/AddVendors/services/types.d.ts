import {ServiceDTO} from '../../AppState/Services/types';

export interface ServiceWithIsCheckedDTO extends ServiceDTO {
  isChecked: boolean;
}

export interface AddressDTO {
  readonly id?: number;
  address_level1: string;
  address_level2: string;
  landmark: string;
  postal_code: string;
  state: string;
  country: string;
  lattitude: string;
  longitude: string;
  service_id: ServiceDTO[];
}
export interface vendorDTO {
  id?: number;
  identity_id?: number;
  vendor_type_id?: number;
  name?: string;
  email?: string;
  phone?: number;
  vendor_address?: AddressDTO[];
  created_by?: number;
  created_at?: string;
  updated_by?: number;
  updated_at?: string;
  is_active?: number;
}

export interface VendorIntialStateDTO {
  vendor: vendorDTO;
  error: string;
  loading: boolean;
  isDataSubmited: boolean;
  services: ServiceDTO[];
  isAddressAndServicesAdded: boolean;
  isCustomServiceAdded: boolean;
}

interface UpdateServiceByIdDTO {
  id: number;
  data: ServicesDTO[];
}

export interface CreateVendorStateDTO {
  vendor_type_id: 2 | 1;
  name: string;
  email: string;
  phone: string;
}

export interface CreateVendorDTO extends CreateVendorStateDTO {
  phone: number;
}

export interface CreateVendorAddressServicesDTO {
  vendor_id: number;
  address: AddressDTO[];
}

export interface createMasterServiceDTO {
  name: string;
  description: string;
  type: 'Costom';
}
