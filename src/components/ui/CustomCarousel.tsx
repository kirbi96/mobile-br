import React, {useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import ImageCarousel from 'react-native-image-carousel';
import {DimensionHelper} from '../../helpers/DimensionHelper';
import {AgEnum, Text} from './Text';

interface ICustomCarousel {
  carouselData: {id: number | string; image: string}[];
}

export const CustomCarousel = ({carouselData}: ICustomCarousel) => {
  const carouselRef = useRef<any>();

  const closeCarousel = () => {
    carouselRef.current.close();
  };

  const fullScreenCarousel = (idx: number) => {
    return (
      <Image
        style={styles.fullImageContainer}
        source={{uri: carouselData[idx].image}}
        resizeMode={'contain'}
      />
    );
  };

  const headerCarousel = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={closeCarousel} style={styles.headerBtn}>
          <Text Ag={AgEnum.H2}>Закрыть</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageCarousel
        ref={carouselRef}
        renderContent={fullScreenCarousel}
        renderHeader={headerCarousel}>
        {carouselData.map(image => (
          <Image
            style={styles.image}
            key={image.id}
            source={{uri: image.image}}
          />
        ))}
      </ImageCarousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
  image: {
    width: DimensionHelper.width * 0.8,
    borderRadius: 6,
    marginLeft: 8,
    height: 220,
  },
  fullImageContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerBtn: {
    padding: 12,
  },
});
