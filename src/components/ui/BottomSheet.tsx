import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import {Colors} from '../../styles/Colors';
import {DimensionHelper} from '../../helpers/DimensionHelper';
import navigation from '../../base/Navigation';
import {Screens} from '../../navigation/Screens';
import {ApplicationCard} from '../ApplicationCard';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';

export const BottomSheet = observer(() => {
  const {applicationStore} = useRootStore();

  const navigateToApplication = () => {
    navigation.navigate(Screens.IN_APPLICATION);
  };

  return (
    <View style={styles.container}>
      <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={[56, '50%', DimensionHelper.height - 120]}
        // snapPoints={[
        //   56,
        //   DimensionHelper.height - 130,
        //   DimensionHelper.height - 120,
        // ]}
        initialSnapIndex={1}
        renderHandle={() => (
          <View style={styles.header}>
            <View style={styles.panelHandle} />
          </View>
        )}
        data={applicationStore.allApplications.map(application => application)}
        keyExtractor={i => i.id.toString()}
        renderItem={({item}: any) => (
          <ApplicationCard
            key={item}
            pressCard={navigateToApplication}
            item={item}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  contentContainerStyle: {
    padding: 16,
    backgroundColor: Colors.gray800,
  },
  header: {
    alignItems: 'center',
    backgroundColor: Colors.gray800,
    borderWidth: 2,
    borderColor: Colors.gray700,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderBottomColor: Colors.white,
  },
  panelHandle: {
    width: 40,
    height: 2,
    backgroundColor: Colors.gray700,
    borderRadius: 4,
  },
});
