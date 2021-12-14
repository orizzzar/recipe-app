import { proxy } from "valtio";

export default proxy({
  value: 0,
  increase(by) {
    this.value += by;
  }
});