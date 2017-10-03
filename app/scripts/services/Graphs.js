(function() {
  function Graphs() {

    var countSongPlays = function(songPlaysArray) {
      var data = {};
      angular.forEach(songPlaysArray, function(song) {
        data[song.title] ? data[song.title] += 1 : data[song.title] = 1;
      });

      var graphData = [];

      for(var title in data) {
        graphData.push({
          title: title,
          data: data[title]
        });
      }
      return graphData;
    };
  }

  angular
    .module('FE_Blocmetrics')
    .factory('Graphs', Graphs);
})();
