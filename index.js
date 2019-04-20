import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './styles.css';

// Import your app functionality
import './app'

// Create and bootstrap application
const requires = [
  'ui.router',
  'app'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);