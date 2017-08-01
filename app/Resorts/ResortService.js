


    app.factory('GetParksInfo',function ($http) {
        var webServiceUrl   = "http://od.littlepandits.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
         };

        return{

            GetParksService :  function(parks,myDate,maxDate){

                var promise = $http.get(webServiceUrl+'getParksinfo?&parkType=resort&metro='+parks.localArea+'&localArea='+parks.localArea+'&checkIn='+myDate+'&checkOut='+maxDate,config) .then(function(response) {

                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });