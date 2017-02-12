// Weather controller

app.controller("WeatherCtrl", function($scope, Weather, OpenWeatherConfig) {

  $scope.GetWeatherFromCity = function(cityName) {
    console.log(cityName);
    Weather.GetFromCity(cityName)
    .success(function(data) {
      console.log("Getting weather from " + cityName + " city");
      console.log(data);
      $scope.weatherData = data;
      $scope.weatherData.icon = OpenWeatherConfig.API_IMG + data.weather[0].icon + '.png';
      $scope.didResearch = true;
    })
    .error(function(err) {
      console.error("Error getting weather from : " + cityName);
      console.error(err);
    })
      // $scope.weatherData.icon = OpenWeatherConfig.imgUrl + data.weather[0].icon + '.png';
      // $scope.weatherData.main = data.weather[0].main;
      // $scope.weatherData.city = data.name;
      // $scope.weatherData.description = data.weather[0].description;
      // $scope.weatherData.temp = data.main.temp;
  };
})
