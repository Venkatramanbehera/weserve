import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import FormInput from '../../../../components/common/FormTextInput/FormInput';
import RadioButton from '../../../../components/common/RadioButton/RadioButton';
import Button from '../../../../components/common/Button/Button';
import {styles} from './AddVendors.style';
import {VendorProps} from '../container/vendorContainer';
import RnModal from '../../../../components/common/RnModal/RnModal';
import CheckBoxGroup from '../../../../components/common/CheckBoxGroup/CheckBoxGroup';
import {
  AddressDTO,
  CreateVendorDTO,
  CreateVendorStateDTO,
  ServiceWithIsCheckedDTO,
} from '../services/types';
import {getCheckedServiceId, isDisableSaveAddVendor} from '../helpers';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {height, width} from '../../../../utils/responsive.utils';
import {colors} from '../../../../assets/colors/colors';
import {phoneIcon} from '../../../../components/common/ServiceCard/Service';
import {Location_Icon} from '../../../../assets/images';

interface AddVendorsProps extends VendorProps {
  navigation: any;
}

export const validateSubmitAddress = (address: AddressDTO): boolean => {
  if (
    address.address_level1 &&
    address.address_level2 &&
    address.country &&
    address.state &&
    address.postal_code
  ) {
    return true;
  } else {
    return false;
  }
};

const AddVendors = (props: AddVendorsProps) => {
  const {
    saveVendor,
    error,
    vendorDetails,
    isDataSubmited,
    getServices,
    allServices,
    saveVendorAddressWithServices,
    isAddressAndServicesAdded,
    resetState,
    getIndividual,
    getOrganization,
    navigation,
    loading,
    resetVendorSubmition,
    resetAddressServiceSubmition,
    createService,
  } = props;
  const [vendor, setVendor] = React.useState<CreateVendorStateDTO>({
    name: '',
    email: '',
    phone: '',
    vendor_type_id: 2,
  });
  const [address, setAddress] = React.useState<AddressDTO>({
    address_level1: '',
    address_level2: '',
    country: '',
    landmark: '',
    lattitude: '0',
    longitude: '0',
    postal_code: '',
    service_id: [],
    state: '',
  });
  const [step, setStep] = React.useState<number>(0);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [isNextClicked, setIsNextClicked] = React.useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = React.useState<boolean>(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = React.useState<boolean>(false);
  const [vendorAddress, setVendorAddress] = React.useState<AddressDTO[]>([]);
  const [activeAddressId, setActiveAddressId] = React.useState<number>(0);
  React.useEffect(() => {
    if (isDataSubmited) {
      console.log('INSIDE IS DATA SUBMITTED');
      setIsSubmitSuccess(true);
      getIndividual();
      getOrganization();
      setIsNextClicked(false);
      setVendor({
        name: '',
        email: '',
        phone: '',
        vendor_type_id: 2,
      });
      setTimeout(() => {
        setIsSubmitSuccess(false);
        resetVendorSubmition();
      }, 1000);

      isNextClicked &&
        setTimeout(() => {
          setStep(1);
          setIsSubmitSuccess(false);
        }, 1000);
    }
  }, [
    getIndividual,
    getOrganization,
    isDataSubmited,
    isNextClicked,
    resetVendorSubmition,
  ]);

  React.useEffect(() => {
    getServices();
  }, [getServices]);

  React.useEffect(() => {
    setTimeout(() => {
      if (isAddressAndServicesAdded) {
        setStep(0);
        setVendorAddress([]);
        setActiveAddressId(0);
        setVendor({
          name: '',
          email: '',
          phone: '',
          vendor_type_id: 2,
        });
        resetAddressServiceSubmition();
        resetState();
        navigation.navigate('HomeTab');
      }
    }, 1000);
  }, [
    isAddressAndServicesAdded,
    resetState,
    navigation,
    resetAddressServiceSubmition,
  ]);

  const updateVendorAddressServicesById = (
    activeAddressIdNum: number,
    vendorAddressData: AddressDTO[],
    servicesData: ServiceWithIsCheckedDTO[],
  ) => {
    const result1 = vendorAddressData.map((addressUpdate, index: number) => {
      if (index === activeAddressIdNum) {
        return {
          ...addressUpdate,
          service_id: getCheckedServiceId(servicesData),
        };
      } else {
        return addressUpdate;
      }
    });
    setVendorAddress(result1);
  };

  return (
    <>
      <View style={styles.root}>
        <View style={styles.weserve}>
          <Text style={styles.weservewe}>Vendor </Text>
          <Text style={styles.weserveServ}>Creation</Text>
        </View>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          extraScrollHeight={24}
          enableAutomaticScroll={true}
          contentContainerStyle={styles.scrollContStyle}>
          {step === 0 && (
            <>
              {error && <Text style={styles.danger}>{error}</Text>}
              {isSubmitSuccess && (
                <Text style={styles.success}>
                  {'Vendor Created Sucessfully'}
                </Text>
              )}
              <FormInput
                formLabel="Name"
                isLeftInputIcon={false}
                placeholder={'Enter name of the entity'}
                isError={false}
                errorMessage={'Enter valid name'}
                textValue={vendor.name}
                onchange={(data: string) => {
                  setVendor({...vendor, name: data});
                }}
                type={'text'}
                isEditable={true}
                isValidationRequired={true}
              />
              <RadioButton
                label="Company Type"
                onPress={(data: 2 | 1) => {
                  setVendor({...vendor, vendor_type_id: data});
                }}
                data={[
                  {label: 'Organization', value: 2},
                  {label: 'Individual', value: 1},
                ]}
              />
              <FormInput
                formLabel="Phone Number"
                isLeftInputIcon={false}
                placeholder={'Enter Your Phone Number'}
                isError={false}
                errorMessage={'Invalid phone number'}
                textValue={String(vendor.phone)}
                onchange={(data: string) => {
                  setVendor({...vendor, phone: data});
                }}
                type={'number'}
                isEditable={true}
                isValidationRequired={false}
              />
              <FormInput
                formLabel="Email"
                placeholder={'Enter Your Email Id'}
                isError={false}
                errorMessage={'Email is invalid'}
                textValue={vendor.email}
                onchange={(data: string) => {
                  setVendor({...vendor, email: data});
                }}
                type={'email'}
                isEditable={true}
                isValidationRequired={true}
              />
            </>
          )}
          {step === 1 && (
            <>
              {vendorDetails && vendorDetails.name && vendorDetails.phone && (
                <View style={styles.container}>
                  <View style={styles.title}>
                    <Text numberOfLines={1} style={styles.txtName}>
                      {vendorDetails.name}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={styles.num}
                    onPress={() => {
                      Linking.openURL(`tel:${vendorDetails.phone}`);
                    }}>
                    <View style={styles.calldir}>
                      <Image source={phoneIcon} style={styles.phoneicon} />
                      <Text style={styles.phonenum}>{vendorDetails.phone}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              {isAddressAndServicesAdded && (
                <Text style={styles.success}>
                  {'Address and Service Added '}
                </Text>
              )}
              {vendorAddress && vendorAddress.length === 0 && (
                <Text style={[styles.comfortText, styles.mt2]}>
                  {'No Address or Service added yet for this vendor.'}
                </Text>
              )}
              {vendorAddress?.map((address, index: number) => {
                return (
                  <View key={index} style={styles.container}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={Location_Icon} />
                      <Text style={styles.comfortText}>
                        {'   '}
                        {address?.address_level1 +
                          ', ' +
                          address?.address_level2}
                      </Text>
                    </View>
                    <Text
                      style={[
                        styles.weservewe,
                        styles.mt2,
                        address?.service_id.length === 0 && styles.danger,
                      ]}>
                      {address?.service_id.length !== 0
                        ? 'Added Service: '
                        : 'No service selected for this address!!'}
                    </Text>
                    {address?.service_id?.map((addrId, indexNum: number) => {
                      return (
                        <Text style={styles.comfortText} key={indexNum}>
                          - {addrId.name}
                        </Text>
                      );
                    })}
                    <Button
                      isClear={true}
                      buttonText="Add services"
                      onPress={() => {
                        setIsOpenModal(true);
                        setActiveAddressId(index);
                      }}
                    />
                  </View>
                );
              })}
              <Button
                isClear={true}
                isLoading={loading}
                buttonText={
                  vendorAddress.length === 0
                    ? 'Add Address'
                    : 'Add another address'
                }
                onPress={() => {
                  setIsOpenModalEdit(true);
                }}
              />
            </>
          )}
          {step === 0 ? (
            <View style={styles.buttonContainer}>
              <Button
                isLoading={loading}
                buttonText={'Save'}
                disabled={
                  step === 0
                    ? !isDisableSaveAddVendor({
                        name: vendor.name,
                        email: vendor.email,
                        phone: parseInt(vendor.phone),
                        vendor_type_id: vendor.vendor_type_id,
                      })
                    : false
                }
                onPress={() => {
                  const updatedVendor: CreateVendorDTO = {
                    name: vendor.name,
                    email: vendor.email,
                    phone: parseInt(vendor.phone),
                    vendor_type_id: vendor.vendor_type_id,
                  };
                  if (step === 0) {
                    saveVendor(updatedVendor);
                  } else {
                    if (vendorAddress.length === 0) {
                      setStep(0);
                    } else {
                      vendorDetails?.id &&
                        vendorAddress &&
                        saveVendorAddressWithServices({
                          vendor_id: vendorDetails.id,
                          address: vendorAddress,
                        });
                    }
                  }
                }}
                isClear={true}
                style={{width: width / 4}}
              />

              <Button
                isLoading={loading}
                buttonText={'Save & Next'}
                disabled={
                  step === 0
                    ? !isDisableSaveAddVendor({
                        name: vendor.name,
                        email: vendor.email,
                        phone: parseInt(vendor.phone),
                        vendor_type_id: vendor.vendor_type_id,
                      })
                    : false
                }
                onPress={() => {
                  if (step === 0) {
                    const updatedVendor: CreateVendorDTO = {
                      name: vendor.name,
                      email: vendor.email,
                      phone: parseInt(vendor.phone),
                      vendor_type_id: vendor.vendor_type_id,
                    };
                    saveVendor(updatedVendor);
                    setIsNextClicked(true);
                  }
                }}
                style={{width: width / 3}}
              />
            </View>
          ) : (
            <View style={styles.buttonContainerStep2}>
              <Button
                isLoading={loading}
                buttonText={
                  vendorAddress.length === 0 && step === 1
                    ? 'Skip for this vendor'
                    : 'Save'
                }
                onPress={() => {
                  if (vendorAddress.length === 0) {
                    setStep(0);
                  } else {
                    vendorDetails?.id &&
                      vendorAddress &&
                      saveVendorAddressWithServices({
                        vendor_id: vendorDetails.id,
                        address: vendorAddress,
                      });
                  }
                }}
                // style={{width: width / 4}}
              />
            </View>
          )}
        </KeyboardAwareScrollView>
      </View>
      <RnModal
        isVisible={isOpenModal}
        height={height}
        width={width}
        onSwipe={() => {
          setIsOpenModal(false);
        }}>
        <View style={styles.modalheader}>
          <View style={[styles.weserve, styles.mt2, {marginBottom: 18}]}>
            <Text style={styles.weservewe}>Add </Text>
            <Text style={styles.weserveServ}>Service</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsOpenModal(false);
            }}>
            <Text style={styles.weservewe}>Close</Text>
          </TouchableOpacity>
        </View>

        <CheckBoxGroup
          othersOnPress={data => {
            createService(data);
            setIsOpenModal(false);
          }}
          loading={loading}
          data={allServices}
          onPress={data => {
            updateVendorAddressServicesById(
              activeAddressId,
              vendorAddress,
              data,
            );
            setIsOpenModal(false);
          }}
        />
      </RnModal>
      <RnModal
        isVisible={isOpenModalEdit}
        height={height}
        width={width}
        onSwipe={() => {
          setIsOpenModalEdit(false);
        }}>
        <View style={{flex: 1, backgroundColor: colors.container}}>
          <View style={styles.modalheader}>
            <View style={styles.weserve}>
              <Text style={styles.weservewe}>Add </Text>
              <Text style={styles.weserveServ}>Address</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsOpenModalEdit(false);
              }}>
              <Text style={styles.weservewe}>Close</Text>
            </TouchableOpacity>
          </View>

          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <FormInput
              formLabel="Address Label1"
              isLeftInputIcon={false}
              placeholder={'Address line 1'}
              isError={false}
              errorMessage={'Enter address properly'}
              textValue={address.address_level1}
              onchange={(data: string) => {
                setAddress({...address, address_level1: data});
              }}
              type={'text'}
              isEditable={true}
              isValidationRequired={false}
            />
            <FormInput
              formLabel="Address Label2"
              isLeftInputIcon={false}
              placeholder={'Address line 2'}
              isError={false}
              errorMessage={'Enter address properly'}
              textValue={address.address_level2}
              onchange={(data: string) => {
                setAddress({...address, address_level2: data});
              }}
              type={'text'}
              isEditable={true}
              isValidationRequired={false}
            />
            <FormInput
              formLabel="Landmark"
              isLeftInputIcon={false}
              placeholder={'Landmark details'}
              isError={false}
              errorMessage={'Enter landmark properly'}
              textValue={address.landmark}
              onchange={(data: string) => {
                setAddress({...address, landmark: data});
              }}
              type={'text'}
              isEditable={true}
              isValidationRequired={false}
            />
            <FormInput
              formLabel="State"
              isLeftInputIcon={false}
              placeholder={'State name'}
              isError={false}
              errorMessage={'Enter the state properly'}
              textValue={address.state}
              onchange={(data: string) => {
                setAddress({...address, state: data});
              }}
              type={'text'}
              isEditable={true}
              isValidationRequired={false}
            />
            <FormInput
              formLabel="Postal Code"
              isLeftInputIcon={false}
              placeholder={'Zip-code'}
              isError={false}
              errorMessage={'Enter the state properly'}
              textValue={address.postal_code}
              onchange={(data: string) => {
                setAddress({...address, postal_code: data});
              }}
              type={'number'}
              isEditable={true}
              isValidationRequired={false}
            />
            <FormInput
              formLabel="Country"
              isLeftInputIcon={false}
              placeholder={'Country name'}
              isError={false}
              errorMessage={'Enter the country properly'}
              textValue={address.country}
              onchange={(data: string) => {
                setAddress({...address, country: data});
              }}
              type={'text'}
              isEditable={true}
              isValidationRequired={false}
            />
          </KeyboardAwareScrollView>
          <Button
            buttonText="Submit Address"
            onPress={() => {
              setVendorAddress([...vendorAddress, address]);
              setIsOpenModalEdit(false);
              setAddress({
                address_level1: '',
                address_level2: '',
                country: '',
                landmark: '',
                lattitude: '',
                longitude: '',
                postal_code: '',
                service_id: [],
                state: '',
              });
            }}
            disabled={!validateSubmitAddress(address)}
          />
        </View>
      </RnModal>
    </>
  );
};

export default AddVendors;
