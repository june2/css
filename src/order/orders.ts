import Order from './order';

export default class Orders {
  currentTime: number = 0;
  orderCount: number = 0;
  map: Map<number, Order[]> = new Map();

  add(newOrders: Order[]) {
    newOrders.forEach((order) => {
      const totalTime = order.prepTime + this.currentTime;
      if (this.map.has(totalTime)) {
        this.map.get(totalTime)!.push(order);
      } else {
        this.map.set(totalTime, [order]);
      }
    });
    this.orderCount += newOrders.length;
    newOrders.forEach((order) => {
      console.log(`order(id=${order.id}) received at ${this.currentTime}s..`);
    });
  }

  isEmpty(): boolean {
    return this.map.size === 0;
  }

  isAvailable(): boolean {
    return this.map.has(this.currentTime);
  }

  getPrepared(): Order[] {
    const orders = this.map.get(this.currentTime)!;
    this.map.delete(this.currentTime);
    orders.forEach((order) => {
      console.log(`order(id=${order.id}) prepared at ${this.currentTime}s..`);
    });
    return orders;
  }

  updateTime(currentTime: number) {
    this.currentTime = currentTime;
  }
}
