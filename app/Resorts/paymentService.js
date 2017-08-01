


app.factory('PayStatusServiceInfo',function ($http) {
    var webServiceUrl   = "http://od.littlepandits.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'OD1@34'}
    };

    return{

        PayStatusService :  function(transactionId,paymentStatus,cod){
            debugger;
            var promise = $http.get(webServiceUrl+'paymentStatus?transactionId='+transactionId+'&status='+paymentStatus+'&cod='+cod,config) .then(function(response) {

                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }

    }

});