import angular from 'angular';

// Create the module where our functionality can attach to
let appModule = angular.module('home', []);

// Controllers
import HomeComponent from './app/home.component';
appModule.component('homeComponent', HomeComponent);

export default appModule;