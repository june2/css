import { Builder } from 'builder-pattern';
import { getOrder } from './index';
import Order from '../order/order';

describe('mock test', () => {
  test('should get 2 orders from mock data', () => {
    //given
    const range = 0;
    const size = 2;
    //when
    const orders = getOrder(range, size);
    //then
    const result: Order[] = [
      Builder<Order>().id('a8cfcb76-7f24-4420-a5ba-d46dd77bdffd').nmae('Banana Split').prepTime(4).build(),
      Builder<Order>().id('58e9b5fe-3fde-4a27-8e98-682e58a4a65d').nmae('McFlury').prepTime(14).build()
    ];
    expect(orders).toEqual(result);
  });
});
