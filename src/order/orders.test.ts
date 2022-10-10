import { Builder } from 'builder-pattern';
import Order from './order';
import Orders from './Orders';

describe('orders test', () => {
  let orders: Orders;
  let list: Order[];

  beforeEach(() => {
    orders = new Orders();
    list = [
      Builder<Order>().id('a8cfcb76-7f24-4420-a5ba-d46dd77bdffd').nmae('Banana Split').prepTime(14).build(),
      Builder<Order>().id('58e9b5fe-3fde-4a27-8e98-682e58a4a65d').nmae('McFlury').prepTime(14).build()
    ];
  });

  test('prepTime = 14s, currentTime = 10s, should return preared 2 orders at 24s', () => {
    //given
    orders.updateTime(10);
    orders.add(list);
    //when
    orders.updateTime(24);
    const result = orders.getPrepared();
    //then
    expect(result.length).toBe(2);
  });
});
