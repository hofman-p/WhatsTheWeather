app.factory('Weather', function($http, OpenWeatherConfig) {
  return {
    GetFromCity: function(cityName) {
      return $http.get(OpenWeatherConfig.API_BASE + cityName + OpenWeatherConfig.API_UNITS + OpenWeatherConfig.API_KEY);
    }
  }
})
