// Part 1

// class Drone {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//
//   static getCompany() {
//     console.log('in getCompany');
//   }
//
//   fly() {
//     console.log('Drone ' + this.id + ' is flying');
//   }
// }
// Drone.maxHeight = 2000;
//
// let drone = new Drone('A112', 'Flyer');
// let drone2 = new Drone('A113', 'Twirl');
//
// Drone.getCompany();

// Part 2

// class Drone {
//   constructor(id) {
//     this._id = id;
//   }
//
//   get id() {
//     return this._id + ' Temp marking';
//   }
//
//   set id(value) {
//     this._id = value;
//   }
// }
//
// let drone = new Drone('A123');
// drone.id = 'B456';
// console.log(drone.id);

// Part 3 (inheriting value to parent class)

// class Vehicle {
//   constructor(lisenceNum) {
//     this.lisenceNum = lisenceNum;
//   }
// }
//
// class Drone extends Vehicle {
//
// }
//
// class Car extends Vehicle {
//   constructor(lisenceNum) {
//     super(lisenceNum);
//   }
// }
//
// let c = new Car('A123');
//
// console.log(c.lisenceNum);

// Part 4

// class Vehicle {
//   constructor() {
//     this.gpsEnabled = true;
//   }
// }
//
// class Car extends Vehicle {
//   constructor() {
//     super();
//     this.gpsEnabled = false;
//   }
// }
//
// let c = new Car();
//
// console.log(c.gpsEnabled);

// Part 5

// class Vehicle {
//   start() {
//     console.log('starting vehicle');
//   }
//
//   static getCompanyName() {
//     console.log('My Company');
//   }
// }
//
// class Car extends Vehicle {
//   start() {
//     super.start();
//     console.log('starting car');
//   }
//
//   static getCompanyName() {
//     super.getCompanyName();
//     console.log('My Other Company');
//   }
// }
//
// let c = new Car();
// Car.getCompanyName();

// Part 6

import $ from 'jquery';
// import {Car} from './classes/car.js';
// import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import{FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';
import {MapPage} from './map-page.js';

export class App extends ApplicationBase {
  constructor() {
    super('Fleet Manager');
    this.dataService = new FleetDataService();
    this.dataService.loadData(fleet);

    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Cars', new CarsPage());
    this.addRoute('Drones', null);
    this.addRoute('Map', new MapPage());

  }
}

export let application = new App();

application.show($('body'));
// import {Button} from './ui/button.js';
// import {Image} from './ui/image.js';
// import {TitleBar} from './ui/titlebar.js'
// import {DataTable} from './ui/data-table.js';
// import {GoogleMap} from './ui/google-map.js';

// let b = new Button('Click Me');
// b.appendToElement($('body'));
//
// let i = new Image('../images/drone.png');
// i.appendToElement($('body'));

// let tb = new TitleBar('Our Application');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));
// let headers = "License Make Model Miles".split(' ');
// let dataService = new FleetDataService();

// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));
// let centerOfMap = {lat: 40.783661, lng: -73.965883};
// let map = new GoogleMap(centerOfMap, dataService.cars);
// map.appendToElement($('body'));

// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// for (let e of dataService.errors)
//   console.log(e.message);

// let car = dataService.getCarByLicense('DEF123');
// let cars = dataService.getCarsSortedByLicense();

// let cars = dataService.filterCarsByMake('e');

// for (let car of cars)
// console.log(car.make);
