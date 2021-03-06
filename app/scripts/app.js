(function() {
  function config($locationProvider, $stateProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
          });

      $stateProvider
          .state('home', {
              url: '/',
              controller: 'HomeCtrl as home',
              templateUrl: '/templates/home.html'
          })
          .state('metric', {
              url: '/metric',
              controller: 'MetricCtrl as metric',
              templateUrl: '/templates/metric.html'
          });
   }

   angular
        .module('FE_Blocmetrics', ['ui.router', 'firebase'])
        .config(config);
})();
