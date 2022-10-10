import { getOrder } from '../src/mock';
import Orders from '../src/order/orders';
import Couriers from './courier/couriers';
import Kitchen from './kitchen';
import Statistics from './statistics';

const start = () => {
  let currentTime = 0;
  let range = 0;
  let size = 2;
  let orders = new Orders();
  let couriers = new Couriers();
  let statistics = new Statistics();
  let kitchen = new Kitchen();

  const inverval = setInterval(() => {
    console.log(`------ ${currentTime}s ------`);

    // get order from mock & dispatch couriers
    const newOrder = getOrder(range, size);
    if (newOrder.length > 0) {
      orders.add(newOrder);
      couriers.dispatchAll(newOrder.length);
    }

    // check couriers arrival
    if (couriers.isAvailable()) {
      const courierArrived = couriers.getCourierArrived();
      courierArrived.forEach((courier) => {
        kitchen.arrivedCourier.push(courier);
        statistics.arriveTime.push(courier.arriveTime);
      });
    }

    // check order prepare
    if (orders.isAvailable()) {
      const orderPrepared = orders.getPrepared();
      orderPrepared.forEach((order) => {
        kitchen.preparedOrders.push(order);
        statistics.readyTime.push(order.prepTime);
      });
    }

    // pickup
    if (kitchen.isReady()) {
      kitchen.pickUp();
    }

    // exit
    if (orders.orderCount === kitchen.pickUpCount) {
      clearInterval(inverval);
      statistics.print();
    }

    range += size;
    currentTime++;
    kitchen.updateTime(currentTime);
    orders.updateTime(currentTime);
    couriers.updateTime(currentTime);
  }, 1000);
};

start();
