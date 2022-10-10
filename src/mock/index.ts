import { Builder } from 'builder-pattern';
import data from './data';
import Order from '../order/order';

export const getOrder = (range: number, size: number): Order[] => {
  // order received
  let arr = data.slice(range, range + size);

  return arr.map((o) => Builder<Order>().id(o.id).nmae(o.name).prepTime(o.prepTime).build());
};
