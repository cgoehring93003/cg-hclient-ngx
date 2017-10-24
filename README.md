# Hclient

This project was an early prototype to try out the newer http client (HttpClient) that was new for 4.3.  It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.


It has a dependency on a simplistic back-end on an express server that returns a list of names like this:

[{"id":"1","firstName":"John","lastName":"Doe","city":"Boston","state":"MA","zip":"02111","dogName":"Fido","fishName":"Bubbles","carBrand":"Ford"},{"id":"2","firstName":"Anna","lastName":"Smith","city":"Pittsburgh","state":"PA","zip":"15202","dogName":"eFifi","fishName":"Tad","carBrand":"Chevy"},{"id":"3","firstName":"Dave","lastName":"Reynolds","city":"Oklahoma City","state":"OK","zip":"73102","dogName":"Rambo","fishName":"Bubbles","carBrand":"Ford"},{"id":"4","firstName":"Annabelle","lastName":"Jones","city":"Dayton","state":"OH","zip":"45390","dogName":"Jinx","fishName":"Tad","carBrand":"Chevy"},{"id":"5","firstName":"Rick","lastName":"Thompson","city":"Latrobe","state":"PA","zip":"15650","dogName":"Pepe","fishName":"Gil","carBrand":"Ford"},{"id":"6","firstName":"Ray","lastName":"Johnson","city":"Phoenix","state":"AZ","zip":"85003","dogName":"Tag","fishName":"Ricky","carBrand":"Chevy"},{"id":"7","firstName":"William","lastName":"Clinton","city":"Atlanta","state":"GA","zip":"30303","dogName":"Rover","fishName":"Darby","carBrand":"Ford"},{"id":"8","firstName":"Melissa","lastName":"Smith","city":"Detroit","state":"MI","zip":"48204","dogName":"felix","fishName":"Sponge Bob","carBrand":"Chevy"},{"id":"9","firstName":"Peter","lastName":"Jones","city":"Fresno","state":"CA","zip":"93702","dogName":"Fufu","fishName":"Flipper","carBrand":"VW"}]

The back-end is not included in the repository.  Moved on to work on the Rendezvous project.

the intent here was to try out the HttpClient and a bit of the latest forms in angular 4.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
