import { AddressDTO } from "../../AddVendors/services/types";

export interface OrganizationIntialStateDTO {
    allOrganization: Array<OrganizationDTO>;
    error: string;
    loading: boolean;
  }

export interface OrganizationDTO{
      id: number,
      identity_id: number,
      vendor_type_id: number,
      first_name: string,
      middle_name: string,
      last_name: string,
      company_name: string,
      email: string,
      phone: number,
      created_by: number,
      created_at: string,
      updated_by: number,
      updated_at: string,
      is_active: number,
      vendor_address: AddressDTO[]
}