# Moving from Server-side to Client-side with Angular

A REST-ful master-detail application built using Angular via the [angular-cli](https://github.com/angular/angular-cli).

## Dependencies
- You need `node v >= 7.3` and `npm v >= 3` installed. We recommend using [nvm](https://github.com/creationix/nvm#installation) or [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)
- Install Angular CLI via `npm i -g @angular/cli@latest`
>>>>>>> 4201a59... Update README.md

### Getting Started
There are two main parts to this application. The first is the REST API, for which we are using `json-server`. The second part is the Angular application server which we will start using `ng serve`. We have bundled both of these commands into an NPM script called `start`. 

To get started run the following commands:

```bash
$ git clone https://github.com/onehungrymind/angular-server-to-client.git
$ cd angular-server-to-client
$ npm install
$ npm start
```

Then navigate to [http://localhost:4200](http://localhost:4200/#/items) in your browser.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

