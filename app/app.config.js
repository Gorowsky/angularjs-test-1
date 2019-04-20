function AppConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app', {
    url: '',
    controller: 'AppCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'app/app.html'
  });

};

export default AppConfig;