import React, { useEffect } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { AgEnum, Text } from "../../../../components/ui/Text";
import { containerStyle } from "../../../../styles/containerStyle";
import { IconSvgStar } from "../../../../assets/icons/profile/IconSvgStar";
import { IconSvgExit } from "../../../../assets/icons/profile/IconSvgExit";
import { Colors } from "../../../../styles/Colors";
import navigation from "../../../../base/Navigation";
import Navigation from "../../../../base/Navigation";
import { Screens } from "../../../../navigation/Screens";
import { ProfileCard } from "./components/ProfileCard";
import { observer } from "mobx-react";
import { useRootStore } from "../../../../base/hooks/useRootStore";
import { LoaderFlex } from "../../../../components/ui/Loader";
import { DimensionHelper } from "../../../../helpers/DimensionHelper";
import { ApplicationCard } from "../../../../components/ApplicationCard";

const rating = 5;

const avatar =
  'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg';

export const ProfileScreen = observer(() => {
  const {authStore, applicationStore, userStore} = useRootStore();

  const navigateToApplication = (id: number) => {
    navigation.navigate(Screens.IN_APPLICATION, {applicationId: id});
  };

  const navigateToScreen = (screen: Screens) => {
    Navigation.navigate(screen)
  }

  useEffect(() => {
    applicationStore.getMyApplications();
    userStore.getCurrentUser()
  }, []);

  if (applicationStore.loader || userStore.loader) {
    return <LoaderFlex />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={containerStyle}>
        <View style={styles.topContainer}>
          <Text Ag={AgEnum.H1}>Профиль</Text>
          <TouchableOpacity
            onPress={() => authStore.logout()}
            style={styles.iconExit}>
            <IconSvgExit />
          </TouchableOpacity>
        </View>

        <View style={styles.userInfoContainer}>
          <View>
            <Image style={styles.avatar} source={{uri: avatar}} />
          </View>

          <Text style={{marginTop: 12}} Ag={AgEnum.H1}>
            {userStore.userMe?.name}
          </Text>
          <Text Ag={AgEnum.Body}>Собственник</Text>
          <View style={styles.ratingContainer}>
            <IconSvgStar size={15} />
            <Text style={{marginLeft: 4}} Ag={AgEnum.Body}>
              {rating.toString()}
            </Text>
            <TouchableOpacity>
              <Text
                color={Colors.blue}
                style={{marginLeft: 8}}
                Ag={AgEnum.Body}>
                отзывов 1
              </Text>
            </TouchableOpacity>
          </View>

          {/*<View style={styles.starsContainer}>*/}
          {/*  {[...new Array(5)].map((_, i) =>*/}
          {/*    i + 1 <= rating ? (*/}
          {/*      <IconSvgStar key={i} />*/}
          {/*    ) : (*/}
          {/*      <IconSvgEmptyStar key={i} />*/}
          {/*    ),*/}
          {/*  )}*/}
          {/*</View>*/}
        </View>

        <View style={styles.applicationsContainer}>
          <Text Ag={AgEnum.H2}>Мои объявления</Text>

          {applicationStore.myApplication.length === 0 ? (
            <Text style={{paddingVertical: 16}} Ag={AgEnum.Body}>У вас нет объявлений</Text>
          ) : (
            <ScrollView horizontal={true}>
              {applicationStore.myApplication.map((item, index) => (
                <View
                  style={{
                    marginLeft: index === 0 ? 0 : 16,
                    width: DimensionHelper.width * 0.8,
                  }}
                  key={item.id}>
                  <ApplicationCard
                    pressCard={() => navigateToApplication(item.id)}
                    item={item}
                  />
                </View>
              ))}
            </ScrollView>
          )}
        </View>

        <ProfileCard
          title={'Профиль'}
          description={'Изменить настройки профиля'}
          onPress={() => {}}
        />

        <ProfileCard
          title={'Настройки'}
          description={'Изменить функционал приложения'}
          onPress={() => navigateToScreen(Screens.APP_SETTINGS)}
        />

        <ProfileCard
          title={'Помощь'}
          description={'Часто задаваемые вопросы'}
          onPress={() => navigateToScreen(Screens.FAQ)}
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  iconExit: {
    width: 40,
    height: 40,
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 32,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  // starsContainer: {
  //   marginTop: 6,
  //   flexDirection: 'row',
  // },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },

  applicationsContainer: {
    marginTop: 32,
  },
});
