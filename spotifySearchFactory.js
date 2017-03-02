(function () {
  angular.module('spotify').factory('Spotify', ['$http', function ($http) {

    var url = 'https://api.spotify.com/v1/search';

    function reguestToSpotify(cb) {
      $http(formatURI()).success(cb);
    }

    function formatURI(artist, album, song) {
      return {
        query: (arguments[0] ? 'artist:' + arguments[0] : '')
        + (arguments[1] ? ' album:' + arguments[1] : '')
        + ' track:'
        + (arguments[2] ? ' album:' + arguments[2] : '')
        + '*'
      };
    }

    return {
      get: {
        artists: {
          byName: function (options, callback) {

          }
        },
        artist: {
          byId: function (options, callback) {

          },
          byName: function (options, callback) {

          }
        },
        albums: {
          byName: function (options, callback) {

          }
        },
        album: {
          byId: function (options, callback) {

          },
          byName: function (options, callback) {

          }
        },
        songs: {
          byId: function (options, callback) {

          },
          byName: function (options, callback) {

          }
        }
      }
    };
  }
  ]);
})();

