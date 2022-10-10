/**
- Average food wait time (milliseconds) between ready and pickup
- Average courier wait time (milliseconds) between arrival and pickup

ex)
order ~ arrival ~ ready ~ pickup
  => ready ~ pickup (food) = 0
  => arrival ~ pickup (courier) = ready - arrival
order ~ ready ~ arrival ~ pickup
  => ready ~ pickup (food) = arrival - ready
  => arrival ~ pickup (courier) = 0  
*/
export default class Statistics {
  foodWaitAvgTime!: number;
  courierWaitAvgTime!: number;
  foodWaitTimes: number[] = [];
  courierWaitTimes: number[] = [];
  readyTime: number[] = [];
  arriveTime: number[] = [];

  constructor(readyTime?: number[], arriveTime?: number[]) {
    if (readyTime) {
      this.readyTime = readyTime;
    }
    if (arriveTime) {
      this.arriveTime = arriveTime;
    }
  }

  print() {
    this.calculate();
    console.log('------ statistics ------');
    console.log('total order count:', this.foodWaitTimes.length);
    console.log('total courier count:', this.courierWaitTimes.length);
    console.log('Average food wait time:', this.foodWaitAvgTime);
    console.log('Average courier wait time:', this.courierWaitAvgTime);
  }

  calculate() {
    let len = this.readyTime.length > this.arriveTime.length ? this.arriveTime.length : this.readyTime.length;

    for (let i = 0; i < len; i++) {
      if (this.readyTime[i] > this.arriveTime[i]) {
        this.foodWaitTimes.push(0);
        this.courierWaitTimes.push(Math.abs(this.readyTime[i] - this.arriveTime[i]));
      } else {
        this.foodWaitTimes.push(Math.abs(this.readyTime[i] - this.arriveTime[i]));
        this.courierWaitTimes.push(0);
      }
    }

    this.getAvg();
  }

  private getAvg() {
    this.foodWaitAvgTime = this.foodWaitTimes.reduce((a, b) => a + b, 0) / this.foodWaitTimes.length;
    this.courierWaitAvgTime = this.courierWaitTimes.reduce((a, b) => a + b, 0) / this.courierWaitTimes.length;
  }
}
