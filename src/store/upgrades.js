import { proxy } from "valtio";


function makeUpgrade(properties) {
  return {
    buy() {
      this.amount++;
    },
    amount: 0,
    ...properties,
  }
}

export default proxy([
  makeUpgrade({
    basePrice: 10,
    perSec: 1,
  }),
  makeUpgrade({
    basePrice: 2,
    perSec: 50,
  }),
]);