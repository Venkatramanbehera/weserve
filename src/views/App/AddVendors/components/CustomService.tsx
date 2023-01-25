import {View} from 'react-native';
import React from 'react';
import {createMasterServiceDTO} from '../services/types';
import FormInput from '../../../../components/common/FormTextInput/FormInput';
import Button from '../../../../components/common/Button/Button';

interface CustomServiceProps {
  onSubmit(data: createMasterServiceDTO): void;
  loading: boolean;
}

export const disableCustomServiceBtn = (name: string): boolean => {
  if (name) {
    return true;
  } else {
    return false;
  }
};

const CustomService = (props: CustomServiceProps) => {
  const {onSubmit, loading} = props;
  const [service, setService] = React.useState<createMasterServiceDTO>({
    name: '',
    description: 'Custom Description',
    type: 'Costom',
  });
  return (
    <View>
      <FormInput
        formLabel="Service Name"
        isLeftInputIcon={false}
        placeholder={'Enter the name of service'}
        isError={false}
        errorMessage={'Enter service properly'}
        textValue={service.name}
        onchange={(data: string) => {
          setService({...service, name: data});
        }}
        type={'text'}
        isEditable={true}
        isValidationRequired={false}
      />
      <Button
        isLoading={loading}
        buttonText="Add other service"
        onPress={() => {
          onSubmit(service);
          setService({...service, name: ''});
        }}
        disabled={!disableCustomServiceBtn(service.name)}
      />
    </View>
  );
};

export default CustomService;
