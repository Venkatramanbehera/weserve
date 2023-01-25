import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {styles} from './Service.style';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const icon = require('../../../assets/images/star.png');
export const phoneIcon = require('../../../assets/images/call-calling.png');
const nextbtn = require('../../../assets/images/arrow-right.png');
const Trashbin = require('../../../assets/images/lf30_editor_piccygak.json');
const Editicon = require('../../../assets/images/edit (1).json');

interface Service {
  readonly id: number;
  name: string;
}

interface CardserviceProps {
  data: Array<any>;
  navigation: NavigationProp<ParamListBase>;
}

const rowTranslateAnimatedValues = {};
Array(20)
  .fill('')
  .forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });

const Service = (props: CardserviceProps) => {
  const {data, navigation} = props;
  const [listData, setListData] = useState<Array<any>>([]);
  React.useEffect(() => {
    if (data && data.length !== 0) {
      setListData(data);
    }
  }, [data]);

  const onSwipeValueChange = (swipeData: {key: any; value: any}) => {
    const {key, value} = swipeData;
    if (value < -Dimensions.get('window').width && !this.animationIsRunning) {
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start(() => {
        const newData = [...listData];
        const prevIndex = listData.findIndex(item => item.key === key);
        newData.splice(prevIndex, 1);
        setListData(newData);
        console.log('data deleteed');
      });
    }

    if (value < Dimensions.get('window').width && !this.animationIsRunning) {
      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start(() => {
        // navigation.navigate('Add');
      });
    }
  };

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text numberOfLines={1} style={styles.txtName}>
              {item.name}
            </Text>
            <View style={styles.rate_one}>
              <Image style={styles.imgstar} source={icon} />
              <Text style={styles.rating}>Un-rated</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${item.phone}`);
            }}
            style={styles.num}>
            <View style={styles.calldir}>
              <Image source={phoneIcon} style={styles.phoneicon} />
              <Text style={styles.phonenum}>{item.phone}</Text>
            </View>
          </TouchableOpacity>
          {/* <View>
            <Text style={styles.txtServices}>Services</Text>
            <View style={styles.srvItems}>
              <FlatList
                numColumns={3}
                data={services}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={styles.itemContent}>
                    <Text style={styles.items}>ItemTest</Text>
                  </View>
                )}
              />
            </View>
          </View> */}
          <View style={styles.arrow}>
            <Image source={nextbtn} style={styles.nextbtnimg} />
          </View>
        </View>
      </View>
    );
  };

  const renderHiddenItem = () => (
    <View style={styles.rowBack}>
      <View style={styles.backIconground}>
        <LottieView
          source={Editicon}
          style={{width: 30, height: 30}}
          autoPlay
        />
      </View>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <View style={styles.backIconground}>
          <LottieView
            source={Trashbin}
            style={{width: 50, height: 50}}
            autoPlay
          />
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <SwipeListView
        showsVerticalScrollIndicator={false}
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={null}
        rightOpenValue={-Dimensions.get('window').width}
        leftOpenValue={Dimensions.get('window').width}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={() => {}}
        useNativeDriver={false}
        disableLeftSwipe={true}
        disableRightSwipe={true}
      />
    </View>
  );
};

export default Service;
