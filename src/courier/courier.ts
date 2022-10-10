const ARRIVE_TIME_MIN = 3;
const ARRIVE_TIME_MAX = 15;
let INDEX = 0;

export default class Courier {
  id: number;
  arriveTime: number;

  constructor() {
    this.id = ++INDEX;
    this.arriveTime = this.getRandomArriveTime();
  }

  private getRandomArriveTime() {
    return Math.floor(Math.random() * (ARRIVE_TIME_MAX - ARRIVE_TIME_MIN)) + ARRIVE_TIME_MIN;
  }
}
