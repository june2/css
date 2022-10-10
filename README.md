### requirement

- [x] The system should receive 2 delivery orders per second
- [x] Each order takes some time (defined as `prepTime` in order JSON) to be prepared
- [x] Upon receiving an order, the system should immediately dispatch a courier
- [x] Couriers arrive randomly following a uniform distribution, 3-15 seconds after they’ve been dispatched
- [x] Matched: a courier is dispatched for a specific order and may only pick up that order
- [x] First-in-first-out
- [x] Average food wait time (milliseconds) between order ready and pickup
- [x] unit testing
- [x] Average courier wait time (milliseconds) between arrival and order pickup
- [x] unit testing
- [x] console output (order received, order prepared, courier dispatched, courier arrived, order picked up)


### prerequisites
Before starting this tutorial, you must install:
- node.js : v16.14.0
- npm  : v8.3.1
- yarn : v1.22.10
 
### install & run 
```sh
$ yarn
$ yarn start
```

### unit test
```sh
$ yarn test
```
 
 
 
