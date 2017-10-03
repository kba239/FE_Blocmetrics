(function() {
  function MetricCtrl($stateParams, $firebaseArray, $scope, Graphs, $location) {

    var ref = firebase.database().ref();
    var songPlays = $firebaseArray(ref.child("songPlays"));

  }

  angular
    .module('FE_Blocmetrics')
    .controller('MetricCtrl', ['$stateParams', '$firebaseArray', '$scope', 'Graphs', '$location', MetricCtrl]);
})();
