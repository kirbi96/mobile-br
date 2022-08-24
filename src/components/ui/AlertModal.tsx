import React from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {AgEnum, Text} from './Text';
import {Button} from './Button';
import {Colors} from '../../styles/Colors';

interface IAlertModal {
  visible: boolean;
  closeModal: () => void;
  text: string;
}

export const AlertModal = ({visible, text, closeModal}: IAlertModal) => {
  return (
    <Modal isVisible={visible} style={styles.modalView}>
      <View style={styles.containerStyle}>
        <View style={styles.content}>
          <Text Ag={AgEnum.Body}>{text}</Text>
          <Button style={{marginTop: 16}} onPress={closeModal} title={'Ок'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
    top: '30%',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  content: {
    borderRadius: 8,
    width: '100%',
    paddingHorizontal: 26,
    paddingBottom: 32,
    paddingTop: 42,
    backgroundColor: Colors.gray700,
    overflow: 'hidden',
  },
});
