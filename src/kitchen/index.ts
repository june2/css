import Courier from '../courier/Courier';
import Order from '../order/order';

export default class Kitchen {
  currentTime: number = 0;
  pickUpCount: number = 0;
  preparedOrders: Order[] = [];
  arrivedCourier: Courier[] = [];

  isReady() {
    return this.preparedOrders.length > 0 && this.arrivedCourier.length > 0;
  }

  pickUp() {
    const order = this.preparedOrders.shift();
    const courier = this.arrivedCourier.shift();
    this.pickUpCount++;
    console.log(`order(${order!.id}) picked up by courier(id=${courier!.id}) at ${this.currentTime}s..`);
  }

  updateTime(currentTime: number) {
    this.currentTime = currentTime;
  }
}
