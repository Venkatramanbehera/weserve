'use strict';

import {Dimensions, Platform} from 'react-native';
export const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 783;
// Base Guideline is based on iphone X

let factor = 1; //0.5

export const horizontalScale = (size: number) =>
  (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;

export const heightScale = (size: number) => {
  if (Platform.OS === 'web') {
    factor = 0.12;
  }
  return size + (verticalScale(size) - size) * factor;
};

export const widthScale = (size: number) => {
  if (Platform.OS === 'web') {
    factor = 0.12;
  }
  return size + (horizontalScale(size) - size) * factor;
};

export const fontScale = (size: number) => {
  if (Platform.OS === 'web') {
    return widthScale(size + 5);
  } else {
    return heightScale(size);
  }
};

export const isIphoneX = () => {
  if (Platform.OS === 'ios' && height > 800) {
    return true;
  } else {
    return false;
  }
};

export const isIphone8 = () => {
  if (Platform.OS === 'ios' && height < guidelineBaseHeight) {
    return true;
  } else {
    return false;
  }
};

export const isHeightgreaterThan800 = () => {
  if (height > 800) {
    return true;
  } else {
    return false;
  }
};

export const isHeightgreaterThan700 = () => {
  if (height > 700) {
    return true;
  } else {
    return false;
  }
};
