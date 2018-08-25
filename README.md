# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---------------------------------------------------------------------------------

Angular is used to create a SPA applications


The Angular CLI is a great tool for big and very big applications
It allows you to focus on Angular code instead of workflow tasks


ngModel is -> built in Directive which is use for 2 way data binding


TypeScript -> Is the superset of JS.
->This language is Strongly Typed.
->It has features like Types, Classes, Interface..etc Which makes the functional 
pgmmigng paradiam much similar to OOP paradiam 
->This make sure that our syntax is correct at time we write/type it, rather than running it.
-> Typescript is compiled to Javascript by Angular CLI and in the browser JS will be running there.


Behind the Scene the Angular CLI uses Webpack Tool which bundles all our JS and CSS files and add them to index.html file


BootStrap can be added in to Angualr project in 2 ways :-
1) Direct CDN link in the index.html file 
2) npm install bootstrap@3
 then go to angular.json file inside that search for styles under build object
 and then add this bit of code "node_modules/bootstrap/dist/css/bootstrap.min.css"
  "build" : { 
  --
  --
  "styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
--
--
  }
To check weather this bootStrap is added properly run ur project goto http://localhost:4200/
 f12 > Elements >  Inside the <head> tag u can c the new <style> has been added
 which is of Bootstrap v3.3.7


How does Angular get Started and loaded ?
Angular CLI host the development server in localhost:4200 by running the command
ng serve -o


Angular kickstart/Trigger its application from  -> main.ts file
platformBrowserDynamic().bootstrapModule(AppModule)


Angular works on the concept of -> Resusable component.

decorators -> Enanche / add some features to our normal TypeScript(.ts) file