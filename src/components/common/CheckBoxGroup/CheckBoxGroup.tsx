import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {styles} from '../CheckBoxGroup/CheckBoxGroup.style';
import {ServiceDTO} from '../../../views/App/AppState/Services/types';
import Button from '../Button/Button';
import CustomService from '../../../views/App/AddVendors/components/CustomService';
import {
  createMasterServiceDTO,
  ServiceWithIsCheckedDTO,
} from '../../../views/App/AddVendors/services/types';
import FormInput from '../FormTextInput/FormInput';
import {colors} from '../../../assets/colors/colors';
import {height, heightScale, widthScale} from '../../../utils/responsive.utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface CheckData {
  readonly id: number;
  name: string;
  isChecked: boolean;
}

interface CheckBoxGroupProps {
  data: CheckData[];
  onPress(data: CheckData[]): void;
  othersOnPress(data: createMasterServiceDTO): void;
  loading: boolean;
}

const updateIsChecked = (origData: ServiceDTO[]) => {
  return origData.map(data => {
    return {
      ...data,
      isChecked: false,
    };
  });
};

const checkIsSelectCheckBox = (
  checkGroupDataList: ServiceWithIsCheckedDTO[],
): boolean => {
  return (
    checkGroupDataList.filter(checkGroup => {
      return checkGroup.isChecked;
    }).length > 0
  );
};

const CheckBoxGroup = (props: CheckBoxGroupProps) => {
  const {data, onPress, othersOnPress, loading} = props;
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [checkGroupData, setCheckGroupData] = React.useState<ServiceDTO[]>([]);
  const selectedData = (id: number, value: boolean, origData: CheckData[]) => {
    const resultData = origData.map(checkData => {
      if (checkData.id === id) {
        return {
          ...checkData,
          isChecked: value,
        };
      } else {
        return {
          ...checkData,
        };
      }
    });
    setCheckGroupData(resultData);
  };
  React.useEffect(() => {
    setCheckGroupData(updateIsChecked(data));
  }, [data]);

  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderRadius: widthScale(8),
            padding: widthScale(8),
            // height: height * 0.43,
          }}>
          <FormInput
            formLabel="Search services"
            isLeftInputIcon={false}
            placeholder={'Enter the name of service'}
            isError={false}
            errorMessage={'Enter service properly'}
            textValue={searchQuery}
            onchange={(changedData: string) => {
              setSearchQuery(changedData);
              const filteredData = data.filter(check =>
                check.name.toLowerCase().includes(changedData.toLowerCase()),
              );
              setCheckGroupData(updateIsChecked(filteredData));
            }}
            type={'text'}
            isEditable={true}
            isValidationRequired={false}
          />
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {checkGroupData.length === 0 && (
              <Text style={styles.addOtherText}>No records found</Text>
            )}
            {checkGroupData.map((chekData, index: number) => {
              return (
                <BouncyCheckbox
                  key={index}
                  size={25}
                  fillColor={colors.primary}
                  unfillColor="#FFFFFF"
                  text={chekData.name}
                  iconStyle={styles.iconStyle}
                  innerIconStyle={styles.innerIconStyle}
                  textStyle={styles.textStyle}
                  isChecked={chekData.isChecked}
                  style={{marginVertical: heightScale(4)}}
                  onPress={(isChecked: boolean) => {
                    selectedData(chekData.id, isChecked, checkGroupData);
                  }}
                />
              );
            })}
          </KeyboardAwareScrollView>
        </View>
        <Button
          isLoading={loading}
          disabled={!checkIsSelectCheckBox(checkGroupData)}
          buttonText="Submit"
          onPress={() => {
            onPress(checkGroupData);
          }}
        />
        <View>
          <Text style={styles.addOtherText}>Add Other Service</Text>
          <CustomService
            loading={loading}
            onSubmit={(cusdata: createMasterServiceDTO) => {
              othersOnPress(cusdata);
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CheckBoxGroup;
// ServiceWithIsCheckedDTO[]
