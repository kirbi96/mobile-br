import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {AgEnum, Text} from '../../../components/ui/Text';
import {containerStyle} from '../../../styles/containerStyle';
import {IconSvgStar} from '../../../assets/icons/profile/IconSvgStar';
import {IconSvgEmptyStar} from '../../../assets/icons/profile/IconSvgEmptyStar';

const rating = 5;

const avatar =
  'https://trikky.ru/wp-content/blogs.dir/1/files/2020/08/17/2859972401.jpg';

export const ProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={containerStyle}>
        <Text Ag={AgEnum.H1}>Профиль</Text>

        <View style={styles.topContainer}>
          <View style={styles.nameContainer}>
            <Text Ag={AgEnum.H1}>Лилия ⋅ {rating}</Text>
            <View style={styles.starsContainer}>
              {[...new Array(5)].map((_, i) =>
                i + 1 <= rating ? <IconSvgStar /> : <IconSvgEmptyStar />,
              )}
            </View>
          </View>

          <View>
            <Image style={styles.avatar} source={{uri: avatar}} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  nameContainer: {},
  starsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
});
