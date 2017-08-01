app.controller('loginCtr', ['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','$mdDialog','ngProgressFactory','LoginServiceInfo','RequestOTPServiceInfo',
    function($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,$mdDialog,ngProgressFactory,LoginServiceInfo,RequestOTPServiceInfo) {





        $scope.submitted = false;

        $scope.cancel = function(){

            $mdDialog.cancel();
        }


        $scope.SignUpPage = function(ev) {

            debugger;
            $mdDialog.cancel();
            $mdDialog.show({

                templateUrl: '../../app/Resorts/register.html',
                controller: 'registerCtr',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {

                    $scope.status = 'You cancelled the dialog.';
                });
        };

        $scope.FBParkUserCheckCall = function(emailId){
            debugger;

            $localStorage.firstName =  emailId.first_name;
            $localStorage.LastName =  emailId.last_name;
            $localStorage.Email =  emailId.email;
            $localStorage.Id =  emailId.id;
            $localStorage.DP = emailId.picture.data.url;



            RequestOTPServiceInfo.ParkUserCheck($localStorage.Email).then(function(ParkUserCheckInfo){
                debugger;


                if(ParkUserCheckInfo.responseCode == 200){

                    $scope.userDetails =  ParkUserCheckInfo.resultObject;
                    $localStorage.username = ParkUserCheckInfo.resultObject.username;
                    $localStorage.firstName  = ParkUserCheckInfo.resultObject.firstName;
                    $localStorage.lastName  = ParkUserCheckInfo.resultObject.lastName;
                    $localStorage.phoneNumber  = ParkUserCheckInfo.resultObject.phoneNumber;
                    $mdDialog.hide();
                    $rootScope.$emit('profile-updated', {});
                    $rootScope.$emit('profile-updated1', {});
                    $rootScope.$emit('profile-updated2', {});
                    $rootScope.$emit('profile-updated3', {});

                }

                else{


                    $mdDialog.hide();

                    $scope.loginPage = function(ev) {

                         debugger;
                        $mdDialog.show({

                            templateUrl: '../../app/Resorts/phonenumber.html',
                            controller: 'phoneNumberCtr',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true,
                            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                        })
                            .then(function(answer) {
                                $scope.status = 'You said the information was "' + answer + '".';
                            }, function() {

                                $scope.status = 'You cancelled the dialog.';
                            });
                    };

                    $scope.loginPage();


                }

            });

        };


        $scope.GoogleParkUserCheckCall = function(emailId){
            debugger;

            $localStorage.firstName =  emailId.ofa;
            $localStorage.LastName =  emailId.wea;
            $localStorage.Email =  emailId.U3;
            $localStorage.Id =  emailId.Eea;
            $localStorage.DP =  emailId.Paa;


            RequestOTPServiceInfo.ParkUserCheck($localStorage.Email).then(function(ParkUserCheckInfo){
                debugger;


                if(ParkUserCheckInfo.responseCode == 200){

                    $scope.userDetails =  ParkUserCheckInfo.resultObject;
                    $localStorage.username = ParkUserCheckInfo.resultObject.username;
                    $localStorage.firstName  = ParkUserCheckInfo.resultObject.firstName;
                    $localStorage.lastName  = ParkUserCheckInfo.resultObject.lastName;
                    $localStorage.phoneNumber  = ParkUserCheckInfo.resultObject.phoneNumber;
                    $mdDialog.hide();
                    $rootScope.$emit('profile-updated', {});
                    $rootScope.$emit('profile-updated1', {});
                    $rootScope.$emit('profile-updated2', {});
                    $rootScope.$emit('profile-updated3', {});

                }

                else{


                    $mdDialog.hide();

                    $scope.loginPage = function(ev) {


                        $mdDialog.show({

                            templateUrl: '../../app/Resorts/phonenumber.html',
                            controller: 'phoneNumberCtr',
                            parent: angular.element(document.body),
                            targetEvent: ev,
                            clickOutsideToClose:true,
                            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
                        })
                            .then(function(answer) {
                                $scope.status = 'You said the information was "' + answer + '".';
                            }, function() {

                                $scope.status = 'You cancelled the dialog.';
                            });
                    };

                    $scope.loginPage();


                }

            });

        }




        $scope.LoginCall=function(){
                debugger;

            $scope.submitted = true;
           if($scope.userForm.$valid){

               $scope.loginFail="";

               var username = $scope.username;

               var password = $scope.Password;

               LoginServiceInfo.LoginService(username,password).then(function(OTPInfo){

                   debugger;

                   if(OTPInfo == undefined){

                       $scope.loginFail = "The username or password you have entered is incorrect.";
                   }


                  else if(OTPInfo.responseCode == 200){

                       $scope.userDetails =  OTPInfo.resultObject;
                       $localStorage.username = OTPInfo.resultObject.username;
                       $localStorage.firstName  = OTPInfo.resultObject.firstName;
                       $localStorage.lastName  = OTPInfo.resultObject.lastName;
                       $localStorage.phoneNumber  = OTPInfo.resultObject.phoneNumber;
                       $mdDialog.hide();

                       $rootScope.$emit('profile-updated', {});
                       $rootScope.$emit('profile-updated1', {});
                       $rootScope.$emit('profile-updated2', {});
                       $rootScope.$emit('profile-updated3', {});



                   }

                   else{

                       $scope.loginFail = "The username or password you have entered is incorrect.";
                   }

               });

           }

          else{



           }


        };





    }]);