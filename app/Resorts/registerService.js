

app.factory('RequestOTPServiceInfo',function ($http) {
    var webServiceUrl   = "http://od.littlepandits.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
    };

    return{

        ParkUserCheck :  function(emailId){

            var promise = $http.get(webServiceUrl+'parkUserCheck?emailId='+emailId,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        },

        RequestOTPService :  function(phoneNumber){

            var promise = $http.get(webServiceUrl+'requestOTPService?phoneNumber='+phoneNumber,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        },

        ValidateOTPService :  function(phoneNumber,OTP){

            var promise = $http.get(webServiceUrl+'validateOTPService?phoneNumber='+phoneNumber+'&otp='+OTP,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        },

        ParkRegistrationService :  function(Registration){

            var promise = $http.post(webServiceUrl+'parkRegestration',Registration,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }






    }

});