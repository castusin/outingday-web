

app.factory('CreateUserServiceInfo',function ($http) {
    var webServiceUrl   = "http://od.littlepandits.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
    };

    return{

        CreateUserService :  function(createUser){

            var promise = $http.post(webServiceUrl+'parkReservation',createUser,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }
    }


});




app.factory('paymentServiceInfo',function ($http) {
    var webServiceUrl   =  "http://karunakarworks.littlepandits.com/app/Resorts/payment.php/";
    var config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    };

    return{

      paymentService :  function(payment){

            var promise = $http.post(webServiceUrl+payment,config);
            return promise;
        }
    }


});