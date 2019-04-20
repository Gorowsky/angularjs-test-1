import angular from 'angular';
import ngRoute from 'angular-route';

// Import your app stylesheets
import './styles.css';

// Import your app functionality
import './src/app';

// Create and bootstrap application
const requires = [
  ngRoute,
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);