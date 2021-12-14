import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSnapshot } from 'valtio';
import countValt from './store/count';
import upgradesValt from './store/upgrades';

const rate = 0.1;

export default function Counter() {
  const countSnap = useSnapshot(countValt);
  const upgradesSnap = useSnapshot(upgradesValt);

  const increase = upgradesSnap.reduce((increase, {amount, perSec}) => {
    return increase + amount * perSec * rate;
  }, 0);

  useEffect(() => {
    const interval = setInterval(
      () => countValt.increase(increase),
      1000 * rate,
    );
    return () => clearInterval(interval);
  }, [upgradesSnap]);

  function clicked() {
    countValt.increase(1);
  }

  return (
    <View>
      <Button onPress={clicked} title={Math.floor(countSnap.value).toString()}/>
    </View>
  );
};
