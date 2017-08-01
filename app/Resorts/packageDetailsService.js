

app.factory('getCouponcodeInfo',function ($http) {
    var webServiceUrl   = "http://od.littlepandits.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
    };

    return{

        GetCouponcodeService :  function(parkId,checkIn,couponCode){
                  debugger;
            var promise = $http.get(webServiceUrl+'getCouponcode?parkId='+parkId+'&checkIn='+checkIn+'&couponCode='+couponCode,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }

    }

});