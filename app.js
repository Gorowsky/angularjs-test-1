import angular from 'angular';
import './styles.css';
import './src/index';

const requires = [
  'home'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);