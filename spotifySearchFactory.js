(function () {
    angular.module('spotify').factory('Spotify', Spotify);

    Spotify.$inject = ['$http'];

    function Spotify($http) {

    var url = 'https://api.spotify.com/v1/search';

    /*Future interface*/
    var spotifyServiceInterface = {};

    spotifyServiceInterface.get = {};
    spotifyServiceInterface.get.artist = {};
    spotifyServiceInterface.get.artist.byID = {};
    spotifyServiceInterface.get.artist.byName = {};
    spotifyServiceInterface.get.artist.byAlbum = {};

    spotifyServiceInterface.get.artists = {};
    spotifyServiceInterface.get.artists.byName = {};
    spotifyServiceInterface.get.artists.byAlbum = {};

    spotifyServiceInterface.get.album = {};
    spotifyServiceInterface.get.album.byName = {};
    spotifyServiceInterface.get.album.byId = {};

    spotifyServiceInterface.get.track = {};
    spotifyServiceInterface.get.track.byName = {};
    spotifyServiceInterface.get.track.byId = {};

    spotifyServiceInterface.get.playlist = {};
    spotifyServiceInterface.get.playlist.byName = {};
    spotifyServiceInterface.get.playlist.byId = {};


    function reguestToSpotify(cb) {
      $http(formatURI()).success(cb);
    }

    function formatURI(searchTagsObject) {
      var queryString = "?";

      return {
        query: (arguments[0] ? 'artist:' + arguments[0] : '')
        + (arguments[1] ? ' album:' + arguments[1] : '')
        + ' track:'
        + (arguments[2] ? ' album:' + arguments[2] : '')
        + '*'
      };
    }

    return spotifyServiceInterface;
  }
})();

