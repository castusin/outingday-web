
app.controller('paymentCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window','$http',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window,$http) {





        $scope.check_credentials = function(){

            $scope.message = "";
            var request = $http({
                method: "post",
                url: window.location.origin + "/app/Resorts/login.php",
                data: {
                    email: $scope.email,
                    pass: $scope.password
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            /* Check whether the HTTP Request is Successfull or not. */
            request.then(function (response){

                $scope.message = "From PHP file : "+response.data;

            },function (error){

            });
            /*request.success(function (data) {

                $scope.message = "From PHP file : "+data;
            });*/
        }



    }]);