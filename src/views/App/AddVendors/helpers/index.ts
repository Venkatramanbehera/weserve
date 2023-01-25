import {CreateVendorDTO, ServiceWithIsCheckedDTO} from '../services/types';

export const isDisableSaveAddVendor = (data: CreateVendorDTO): boolean => {
  if (data.email && data.phone && data.name && data.vendor_type_id) {
    return true;
  } else {
    return false;
  }
};

export const getCheckedServiceId = (
  servicesData: ServiceWithIsCheckedDTO[],
) => {
  const result = servicesData.filter(service => {
    return service.isChecked;
  });
  return result;
};
