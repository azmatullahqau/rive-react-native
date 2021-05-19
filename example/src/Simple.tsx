import * as React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Rive from 'rive-react-native';

export default function Simple() {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Rive style={styles.animation} resourceName={'flying_car'} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  animation: {
    width: '100%',
    height: 500,
    marginVertical: 20,
  },
});