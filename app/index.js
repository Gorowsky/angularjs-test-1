import angular from 'angular';

// Create the module where our functionality can attach to
let appModule = angular.module('app', []);

// Include our UI-Router config settings
import AppConfig from './app.config';
appModule.config(AppConfig);

// Controllers
import AppCtrl from './home.controller';
appModule.controller('AppCtrl', AppCtrl);

export default appModule;