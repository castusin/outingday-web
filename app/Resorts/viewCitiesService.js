

app.factory('ViewCitiesInfo',function ($http) {
    var webServiceUrl   = "http://od.littlepandits.com/";
                         /* "http://od.littlepandits.com/";*/
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
    };

    return{

        ViewCitiesService :  function(localArea){

            var promise = $http.get(webServiceUrl+'viewCities',config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }

    }

});