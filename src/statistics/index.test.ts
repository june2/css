import Statistics from './index';

describe('calculate test', () => {
  test('should return ', () => {
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

  test('should return ', () => {
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
