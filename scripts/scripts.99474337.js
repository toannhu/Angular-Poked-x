"use strict";angular.module("appApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider","$qProvider",function(a,b,c){a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl",controllerAs:"home"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),b.hashPrefix(""),c.errorOnUnhandledRejections(!1)}]),angular.module("appApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("appApp").controller("HomeCtrl",["$scope","pokemonAPIservice",function(a,b){a.change=function(){void 0!==a.search&&a.fetch()},a.fetch=function(){return b.getDetails(a.search).then(function(b){a.gotData=b})}}]),angular.module("appApp").directive("ngEnter",function(){return function(a,b,c){b.bind("keydown keypress",function(b){13===b.which&&(a.$apply(function(){a.$eval(c.ngEnter)}),b.preventDefault())})}}).directive("lowercase",function(){return{require:"ngModel",link:function(a,b,c,d){var e=function(a){void 0===a&&(a="");var c=a.toLowerCase();if(c!==a){var e=b[0].selectionStart;d.$setViewValue(c),d.$render(),b[0].selectionStart=e,b[0].selectionEnd=e}return c};d.$parsers.push(e),e(a[c.ngModel])}}}),angular.module("appApp").filter("filter",function(){return function(a){return"filter filter: "+a}}),angular.module("appApp").factory("pokemonAPIservice",["$http",function(a){var b={};return b.getDetails=function(b){return a.get("https://pokeapi.co/api/v2/pokemon/"+b+"/").then(function(a){return console.log(a.data),a.data},function(a){console.log(a)})},b}]),angular.module("appApp").run(["$templateCache",function(a){a.put("views/about.html",'<p style="margin: 0 0 30px 0; font-size: 16px">An AngularJS project to show Pokemon info which is using RESTful API from <a href="https://pokeapi.co/">https://pokeapi.co/</a> </p>'),a.put("views/home.html",'<div class="table-responsive"> <div class="row marketing"> <div class="form-group col-md-12" style="display:inline"> <div class="input-group"> <input class="form-control" placeholder="Enter Pokemon Number or Name (E.g: &quot;1&quot; or &quot;Bulbasaur&quot;)" type="text" ng-model="search" ng-enter="change()" lowercase> <span class="input-group-addon" ng-click="change()"> <span class="glyphicon glyphicon-search"></span> </span> </div> </div> <div ng-if="gotData" class="row marketing gifs"> <table class="table table-bordered"> <thead class="thead-inverse"> <tr> <th></th> <th colspan="5">Pokedéx</th> </tr> </thead> <tbody> <tr> <td> <img ng-src="{{gotData.sprites.front_default}}" class="img-rounded" style="width: 200px; display: block; margin: 0 auto"> </td> <td> <div style="margin: 10px 0 20px 0"> <h4 style="display: inline"> <span class="label label-info">Name</span> </h4> <span style="margin-left: 40px"> <strong>{{gotData.name | uppercase}}</strong> </span> </div> <div style="margin: 10px 0 20px 0"> <h4 style="display: inline"> <span class="label label-info">Weight</span> </h4> <span style="margin-left: 40px"> <strong>{{gotData.weight}}</strong> </span> </div> <div style="margin: 10px 0 20px 0"> <h4 style="display: inline"> <span class="label label-info">Height</span> </h4> <span style="margin-left: 40px"> <strong>{{gotData.height}}</strong> </span> </div> <div style="margin: 10px 0 20px 0"> <h4 style="display: inline"> <span class="label label-info">Type</span> </h4> <span style="margin-left: 40px"> <div ng-repeat="x in gotData.types " style="display: inline-block"> <div ng-switch="x.type.name "> <div ng-switch-when="grass"> <span class="label" style="background-color: green; margin-right: 10px">Grass</span> </div> <div ng-switch-when="poison"> <span class="label" style="background-color: purple; margin-right: 10px">Poison</span> </div> <div ng-switch-when="fire"> <span class="label" style="background-color: orange; margin-right: 10px">Fire</span> </div> <div ng-switch-when="flying"> <span class="label" style="background-color: #A890F0; margin-right: 10px">Flying</span> </div> <div ng-switch-when="ice"> <span class="label" style="background-color: turquoise; margin-right: 10px">Ice</span> </div> <div ng-switch-when="electric"> <span class="label" style="background-color: yellow; margin-right: 10px">Electric</span> </div> <div ng-switch-when="ground"> <span class="label" style="background-color: brown; margin-right: 10px">Ground</span> </div> <div ng-switch-when="rock"> <span class="label" style="background-color: brown; margin-right: 10px">Rock</span> </div> <div ng-switch-when="fight"> <span class="label" style="background-color: red; margin-right: 10px">Fighting</span> </div> <div ng-switch-default> <span class="label" style="background-color: gray; margin-right: 10px">Normal</span> </div> </div> </div> </span> </div> </td> </tr> </tbody> </table> </div> <div ng-if="!gotData" class="row marketing empty"> <div class="alert alert-danger" role="alert"> No results found! :( Please submit again! </div> </div> </div></div>')}]);