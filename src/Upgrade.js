import React from 'react';
import { Text, Button } from 'react-native';
import { useSnapshot } from 'valtio';
import countValt from './store/count';

const calcPrice = (basePrice, amount) => Math.floor(basePrice * 1.15 ** amount);

export default function Upgrade({upgradeValt}) {
  const countSnap = useSnapshot(countValt);
  const upgradeSnap = useSnapshot(upgradeValt);

  function buy() {
    if (!isEnough()) return;
    upgradeValt.buy();
    countValt.increase(-getPrice());
  }

  function getPrice() {
    return calcPrice(upgradeSnap.basePrice, upgradeSnap.amount);
  }

  function isEnough() {
    return countSnap.value >= getPrice();
  }

  return (
    <Button onPress={buy} title={'buy for ' + getPrice()} disabled={!isEnough()}/>
  );
};
