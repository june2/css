import Courier from './Courier';

export default class Couriers {
  currentTime: number = 0;
  map: Map<number, Courier[]> = new Map();

  isEmpty(): boolean {
    return this.map.size === 0;
  }

  isAvailable(): boolean {
    return this.map.has(this.currentTime);
  }

  getCourierArrived(): Courier[] {
    const couriers = this.map.get(this.currentTime)!;
    this.map.delete(this.currentTime);
    couriers.forEach((courier) => {
      console.log(`courier(id=${courier.id}) arrived at ${this.currentTime}s..`);
    });
    return couriers;
  }

  dispatchAll(num: number) {
    for (var i = 0; i < num; i++) {
      this.dispatch();
    }
  }

  private dispatch() {
    const courier = new Courier();
    let totalTime = this.currentTime + courier.arriveTime;
    if (this.map.has(totalTime)) {
      this.map.get(totalTime)!.push(courier);
    } else {
      this.map.set(totalTime, [courier]);
    }
    console.log(`courier(id=${courier.id}) dispatch, will arrive after ${courier.arriveTime}s..`);
  }

  updateTime(currentTime: number) {
    this.currentTime = currentTime;
  }
}
