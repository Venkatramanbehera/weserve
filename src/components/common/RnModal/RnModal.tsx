import React from 'react';
import Modal from 'react-native-modal';
import {styles} from './RnModal.style';
type RnModalProps = {
  children: any;
  testID?: string;
  isVisible: boolean;
  width: number;
  height: number;
  onSwipe(): void;
  containerStyle?: {};
};
const RnModal = (props: RnModalProps) => {
  const {children, testID, isVisible, width, height, onSwipe, containerStyle} =
    props;
  return (
    <Modal
      useNativeDriver={true}
      testID={testID}
      isVisible={isVisible}
      hasBackdrop={true}
      backdropOpacity={0.3}
      deviceHeight={height}
      deviceWidth={width}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      panResponderThreshold={10}
      scrollHorizontal={false}
      onSwipeComplete={() => {}}
      onBackdropPress={() => {}}
      onBackButtonPress={onSwipe}
      style={[styles.root, containerStyle]}>
      {children}
    </Modal>
  );
};

export default RnModal;
