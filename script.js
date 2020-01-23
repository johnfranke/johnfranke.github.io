//Hides current city and 5 day forecast until user searches for a city
$(".current-condition").hide();
$(".forecast-title").hide();
var forecastdisplay;

//Setting the query URL with API Key and adds the city that the user inputs
$(".search").on("click", function() {
    var theCity = $(".the-city").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + theCity + "&appid=49972f5423544d7ddb0bdd76f3805d92";
    var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + theCity + "&appid=49972f5423544d7ddb0bdd76f3805d92";
    var lat;
    var lon;
    if (forecastdisplay === true) {
        $(".forecast-day").remove();
        forecastdisplay = false;
    }

//This calls the current weather conditions from open weather map. Then adds the different fields to the html.
    $.ajax({
        url: queryURL,
        method: "GET",
        statusCode: {
            404: function() {
              return;
            }
          }    
    }).then(function(response){
        console.log(response);
        $(".previous-searches").prepend("<button class='previous-search mt-1'>" + theCity + "</button>");
        localStorage.setItem(theCity, theCity);
        $(".current-condition").show();
        $(".forecast-title").show();
        var iconcode = response.weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        $(".icon").attr('src', iconurl)
        lat = response.coord.lat;
        lon = response.coord.lon;
        $(".current-city").text(response.name + " " + moment().format('l'));
        var currentTemp = response.main.temp * (9/5) - 459.67;
        $(".current-temp").text("Temperature: " + currentTemp.toFixed(1) + " °F");
        $(".current-hum").text("Humidity: " + response.main.humidity + "%");
        $(".current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        queryURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?&appid=49972f5423544d7ddb0bdd76f3805d92&lat=" + lat + "&lon=" + lon;

        //This call gets the UV index using the longitude and lattitude from the previous one
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            $(".current-uv").text("UV Index: " + response[0].value);
        })
    })

//This is where we are getting the 5 day forecast and appending it to the html
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        var forecastTimes = response.list;
        for (i = 0; i < forecastTimes.length; i++) {
            if (forecastTimes[i].dt_txt[12] === "2") {
                var forecastdate = forecastTimes[i].dt_txt;
                var forecastdatedisplay = forecastdate.charAt(5) + forecastdate.charAt(6) + "/" + forecastdate.charAt(8) + forecastdate.charAt(9) +
                "/" + forecastdate.charAt(0) + forecastdate.charAt(1) + forecastdate.charAt(2) + forecastdate.charAt(3);
                var fcIcon = forecastTimes[i].weather[0].icon;
                var fcIconURL = "http://openweathermap.org/img/w/" + fcIcon + ".png";
                var fcTemp = forecastTimes[i].main.temp * (9/5) - 459.67;
                var fcHumidity = forecastTimes[i].main.humidity;
                if (forecastdisplay === false || forecastdisplay === undefined) {
                    $(".forecast-days").append("<div class='col-md-2 col-lg-2 forecast-day'>" + "<h6>" + forecastdatedisplay + "<h6>" + "<img class='ficon' src=" + fcIconURL + " alt='Weather icon'>" + "<div class='forecast-day'>Temp: " + fcTemp.toFixed(1) + " °F" + "</div><div class='forecast-day'>Humidity: " + fcHumidity + "%</div></div></div>");
                } 
            }
        }
        forecastdisplay = true;
    })
});

//This shows current weather conditions and 5 day forcast for previous cities when the city is clicked on
$(document).on("click", ".previous-search", function() {
    var theCity = $(this).text();
    $(".the-city").val(theCity);
    $(".search").click();
    $(this).remove();
});

//This takes the previous searches from localStorage and prepends them to the previous search list
function showPrevious() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]));
    }
    for (x = 0; x < values.length; x++) {
        $(".previous-searches").prepend("<button class='previous-search mt-1'>" + values[x] + "</button>");
    }
}
showPrevious();

//This clears the previous searches when user clicks on clear history button.
$(".clear").on("click", function() {
    localStorage.clear();
    $(".previous-search").remove();
});