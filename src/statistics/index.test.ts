import Statistics from './index';

describe('calculate test', () => {
  test('foodReady = 10s 4s, courierArrive = 5s 3s, should foodWaitAvg is 0, courierWaitAvg is 3', () => {
    //given
    const readyTime = [10, 4, 2];
    const arriveTime = [5, 3];
    const statistics = new Statistics(readyTime, arriveTime);
    //when
    statistics.calculate();
    //then
    expect(statistics.foodWaitTimes).toEqual([0, 0]);
    expect(statistics.courierWaitTimes).toEqual([5, 1]);
    expect(statistics.foodWaitAvgTime).toEqual(0);
    expect(statistics.courierWaitAvgTime).toEqual(3);
  });

  test('foodReady = 1s 4s 2s, courierArrive = 15s 13s 13s, should foodWaitAvg is 11.33, courierWaitAvg is 0', () => {
    //given
    const readyTime = [1, 4, 2];
    const arriveTime = [15, 13, 13, 9];
    const statistics = new Statistics(readyTime, arriveTime);
    //when
    statistics.calculate();
    //then
    expect(statistics.foodWaitTimes).toEqual([14, 9, 11]);
    expect(statistics.courierWaitTimes).toEqual([0, 0, 0]);
    expect(statistics.foodWaitAvgTime).toEqual(11.333333333333334);
    expect(statistics.courierWaitAvgTime).toEqual(0);
  });
});
