
app.controller('confirmationSuccessCtr',['$scope','$state','PayStatusServiceInfo','$rootScope','$localStorage','$window','$http',
    function ($scope,$state,PayStatusServiceInfo,$rootScope,$localStorage,$window,$http) {



        var TransactionId=$localStorage.TransactionId ;

        var paymentStatus="S" ;
        var cod="N" ;


        PayStatusServiceInfo.PayStatusService(TransactionId,paymentStatus,cod).then(function(createUserRes){

                if(createUserRes.responseCode == 200){

                    $localStorage.TransactionId = "";
                    /* $window.localStorage.clear();*/


                }

                else{
                    $localStorage.TransactionId = "";
                    /* $window.localStorage.clear();*/

                }



            });






    }]);