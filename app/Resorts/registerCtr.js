app.controller('registerCtr', ['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','$mdDialog','ngProgressFactory','RequestOTPServiceInfo',
    function($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,$mdDialog,ngProgressFactory,RequestOTPServiceInfo) {

      debugger;

        $scope.submitted = false;
        $scope.Otpfields = true;
        $scope.SignupFields = false;
        $scope.validateFields = false;
        $scope.RequestBtn = true;


        $scope.cancel = function(){

            $mdDialog.cancel();
        }


        $scope.loginPage = function(ev) {

            $mdDialog.cancel();
            $mdDialog.show({

                templateUrl: '../../app/Resorts/login.html',
                controller: 'loginCtr',
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








        $scope.RequestOtpCall=function(){
                  debugger;
            $scope.submitted = true;
            $scope.userexists = "";
            if($scope.phoneNumber == undefined){


            }
            else{
                $scope.submitted = false;

                var phoneNumber = $scope.phoneNumber;
                $localStorage.phoneNumber = $scope.phoneNumber;
                RequestOTPServiceInfo.RequestOTPService(phoneNumber).then(function(RegisterInfo){
                      debugger;


                    if(RegisterInfo.responseCode == 200){


                        $scope.RequestBtn = false;
                        $scope.validateFields = true;



                    }
                    else if((RegisterInfo.responseCode == 1) && (RegisterInfo.errorMessage == "user already exists, please login")){

                        $scope.userexists = "user already exists, please login";
                    }

                    else{


                    }

                });

            }
        };

        $scope.ValidateOTPCall=function(){
                debugger;

            $scope.invalidOTP = "";
            $scope.userexists = "";
                $scope.errorOTP = "";
            $scope.submitted = true;

            if($scope.OTP == undefined){


            }
            else{

                $scope.submitted = false;

                var phoneNumber = $localStorage.phoneNumber;
                var OTP = $scope.OTP;

                RequestOTPServiceInfo.ValidateOTPService(phoneNumber,OTP).then(function(OTPInfo){
                        debugger;


                    if(OTPInfo.responseCode == 0){

                        $scope.Otpfields = false;
                        $scope.RequestBtn = false;
                        $scope.validateFields = false;
                        $scope.SignupFields = true;



                    }
                    else if((OTPInfo.responseCode == 1) && (OTPInfo.errorMessage == "OTP is expired")){

                        $scope.errorOTP = "OTP is expired";

                    }

                    else if((OTPInfo.responseCode == 1) && (OTPInfo.errorMessage == "Invalid passcode")){

                        $scope.invalidOTP = "Invalid verification code";

                    }


                    else{


                    }

                });

            }

        };





        $scope.RegisterCall=function(){
              debugger;

            $scope.submitted = true;

            if(($scope.Firstname == undefined) || ($scope.Lastname == undefined) || ($scope.Email == undefined) || ($scope.Password == undefined)){


            }

         else{


                $scope.Registration ={

                    firstName : "",
                    lastName:"",
                    userName:"",
                    password:"",
                    phoneNumber:"",
                    userType:"U",
                    googleFbId:"",
                    profilePicUrl:"",
                    userGender:"",
                    userRole:"Castus",
                    createdBy:"Castus",

                    updatedBy:"Castus"



                }

                $scope.Registration.firstName = $scope.Firstname;
                $scope.Registration.lastName = $scope.Lastname;
                $scope.Registration.username = $scope.Email;
                $scope.Registration.password = $scope.Password;
                $scope.Registration.phoneNumber =  $localStorage.phoneNumber;




                RequestOTPServiceInfo.ParkRegistrationService($scope.Registration).then(function(RegistrationInfo){

                    debugger;

                    if(RegistrationInfo.responseCode == 200){

                        $scope.userDetails =  RegistrationInfo.resultObject;
                        $localStorage.username = RegistrationInfo.resultObject.username;
                        $localStorage.firstName  = RegistrationInfo.resultObject.firstName;
                        $localStorage.lastName  = RegistrationInfo.resultObject.lastName;
                        $localStorage.phoneNumber  = RegistrationInfo.resultObject.phoneNumber;

                        $mdDialog.hide();
                        $rootScope.$emit('profile-updated', {});
                        $rootScope.$emit('profile-updated1', {});
                        $rootScope.$emit('profile-updated2', {});
                        $rootScope.$emit('profile-updated3', {});

                    }

                    else{


                    }

                });


            }


        };




    }]);