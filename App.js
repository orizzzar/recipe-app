import React from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from './src/Counter';
import Upgrade from './src/Upgrade';
import upgradesValt from './src/store/upgrades';

export default function App() {
  return (
    <View style={styles.container}>

      <Counter/>

      <View>
        {upgradesValt.map((upgradeValt, i) => (
          <Upgrade upgradeValt={upgradeValt} key={i}/>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
