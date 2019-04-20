import angular from 'angular';

const appModule = angular.module('home', []);

import HomeComponent from './app/home.component';
appModule.component('homeComponent', HomeComponent);

export default appModule;