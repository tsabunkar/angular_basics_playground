# Angular_Basics

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
---------------------------------------------------------------------------------

Angular is used to create a SPA applications

---------------------------------------------------------------------------------

The Angular CLI is a great tool for big and very big applications
It allows you to focus on Angular code instead of workflow tasks

---------------------------------------------------------------------------------
ngModel is -> built in Directive which is use for 2 way data binding

---------------------------------------------------------------------------------
TypeScript -> Is the superset of JS.
->This language is Strongly Typed.
->It has features like Types, Classes, Interface..etc Which makes the functional 
pgmmigng paradiam much similar to OOP paradiam 
->This make sure that our syntax is correct at time we write/type it, rather than running it.
-> Typescript is compiled to Javascript by Angular CLI and in the browser JS will be running there.

---------------------------------------------------------------------------------
Behind the Scene the Angular CLI uses Webpack Tool which bundles all our JS and CSS files and add them to index.html file

---------------------------------------------------------------------------------
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

---------------------------------------------------------------------------------
How does Angular get Started and loaded ?
Angular CLI host the development server in localhost:4200 by running the command
ng serve -o

---------------------------------------------------------------------------------
Angular kickstart/Trigger its application from  -> main.ts file
platformBrowserDynamic().bootstrapModule(AppModule)

---------------------------------------------------------------------------------
Angular works on the concept of -> Resusable component.
---------------------------------------------------------------------------------
decorators -> Enanche / add some features to our normal TypeScript(.ts) file
---------------------------------------------------------------------------------
Module -> Angular bundle group of similar component into a module/packages
module has decorator called -> NgModule
Angular wont scan all our component(i.e- html,css,ts files) rather it will only scan module.ts file[b'coz this module has list/inform of all the components, Pipes, other modules imported, etc].

---------------------------------------------------------------------------------
selector of the component should not override / should not be the same as builtin Html tag.
->Custome Element/tag Selector
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
above selector can be written as custome html elem/tag -> <app-server></app-server>

->Custome Attribute Selector
@Component({
    selector: '[app-server]',
    templateUrl: './server.component.html'
})
above selector can be written as custome html attribute -> <div app-server></div>

->Custome Class Selector
@Component({
    selector: '.app-server',
    templateUrl: './server.component.html'
})
above selector can be written as custome class for an html attribute  -> 
<div class="app-server"></div>
Thus, only 3 type of custome selector exist in the Angular

---------------------------------------------------------------------------------
DataBinding :-
Databinding <=> Communication
After reciving some inform from Server we need to communicate this inform from (.ts) file [business logic] to (.html) file [Template] --> is called Output Data to User
for Output Data to user we can use -> String Interploation 
                              Property Binding
Now if user click the button in the template then we need to trigger some event i.e-
inform should be txred from (.html) file to (.ts) file -> React to User Events
for Reacting to User Event use -> Event binding
Another way of communication is called -> Two Way data binding

---------------------------------------------------------------------------------     Note in String Interpolation the value inside the String interpolation i.e inside the double quotes{{}} must be of String type or which can be converted to String type                            

---------------------------------------------------------------------------------
<button class="btn btn-primary" [disabled]="!allowNewServer" >Add Servers</button>
 Note Square[] barcket means Property binding In the above we are property binding 
html attribute (ie- disabled attribute) we can also use property bidning to
bind directives and custome selector (compo)

---------------------------------------------------------------------------------
How to choose b/w Interpolation or Property binding ?
When we want to display any text to Template use interpolation
If we want to change some property, Html attribute value, directive value then use
Property binding
Note : Don't mix up the syntax<button [disbaled]="{{allowNewServer}}"></button>
This will break our application (Syntax Error)

---------------------------------------------------------------------------------
<b> Usage of $event (is called $event object)</b>
<input type="text" class="form-control" (input)="onUpdateServerName($event)"> 

(input) is the input event which listen for input text value entered in it and then
invokes the function passed as value for this event binding. 

$event -> is like a "reseverd variable name" which is written in the html file
 while event binding.

 #This $event gives the inform of cooridantes where event occured, gives the access
to event data,fetch the event related inform,.. etc and this inform is passed to (.ts) file
specifically to the function in which it is written i.e-> UpdateServerName() 

#for above $event we r geeting information like -
InputEvent {isTrusted: true, data: "T", isComposing: false, inputType: "insertText", dataTransfer: null, …}


---------------------------------------------------------------------------------
What are Directives ?
Directives are the instructions in the DOM
Directives are nothing but custome selector's (custome element selector, custome
class selector, custome attribute selector) which is used to represent the Component
Ex -
<p appTurnGreen> Recieve a green background</p>

@Directive({
  selector : '[appTurnGreen]'
})

some of the builtin directives are ->
*ngIf,*ngFor -> These are structural directives which changes the structure of the DOM, Note- * indicate it is Structural directive  ==> BUILT-IN STRUCTURAL DIRECTIVE
<ng-template> -> ==> BUILTIN ELEMENT DIRECTIVE
<p [ngStyle]="{style: expression}"></p> -> Where Style -> Css style name and expression is Css style value ==> BUILTIN ATTRIBUTE DIRECTIVE

Note : 1)Unlike builtin Structural directive, builtin attribute directive don't add or remove elem. They only change the elem they were placed on.
2)All the builtin directive can be identified by-> preffix with 'ng'


---------------------------------------------------------------------------------

