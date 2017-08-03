app.controller('phoneNumberCtr', ['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','$mdDialog','ngProgressFactory','RequestOTPServiceInfo',
    function($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,$mdDialog,ngProgressFactory,RequestOTPServiceInfo) {



            debugger;


        if($localStorage.Email == undefined ){

            $scope.ShowEmailField = true;
            $scope.showPhoneField = false;
        }
         else{
            $scope.ShowEmailField = false;
            $scope.showPhoneField = true;

        }


        $scope.cancel = function(){

            $mdDialog.cancel();
        }

        $scope.submitted = false;
        $scope.RegisterCall=function(){

            $scope.submitted = true;
                debugger;
            $scope.Phnuserexists="";
            if(($scope.PhoneNumber == undefined) || ($scope.username == undefined)){


            }

           else{

                $scope.Registration ={

                    firstName : "",
                    lastName:"",
                    userName:"",
                    password:"",
                    phoneNumber:"",
                    userType:"G",
                    googleFbId:"",
                    profilePicUrl:"",
                    userGender:"",
                    userRole:"Castus",
                    createdBy:"Castus",

                    updatedBy:"Castus"



                }

                $scope.Registration.firstName = $localStorage.firstName;
                $scope.Registration.lastName = $localStorage.LastName;

                if($localStorage.Email == undefined){

                    $scope.Registration.username = $scope.username;

                }
                else{
                    $scope.Registration.username = $localStorage.Email;
                }

                $scope.Registration.googleFbId = $localStorage.Id;

                $scope.Registration.phoneNumber =  $scope.PhoneNumber;




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
                    else if((RegistrationInfo.responseCode == 1) && (RegistrationInfo.errorMessage == "user already exists, please login")){

                        $scope.Phnuserexists = "user already exists, please login";
                    }

                    else{


                    }

                });


            }


        };

        $scope.RegisterPhoneCall=function(){

            $scope.submitted = true;
            debugger;
            $scope.Phnuserexists="";

           if(($localStorage.Email == undefined) || ($scope.PhoneNumber == undefined)){


            }
            else{

                $scope.Registration ={

                    firstName : "",
                    lastName:"",
                    userName:"",
                    password:"",
                    phoneNumber:"",
                    userType:"G",
                    googleFbId:"",
                    profilePicUrl:"",
                    userGender:"",
                    userRole:"Castus",
                    createdBy:"Castus",

                    updatedBy:"Castus"



                }

                $scope.Registration.firstName = $localStorage.firstName;
                $scope.Registration.lastName = $localStorage.LastName;

                if($localStorage.Email == undefined){

                    $scope.Registration.username = $scope.username;

                }
                else{
                    $scope.Registration.username = $localStorage.Email;
                }

                $scope.Registration.googleFbId = $localStorage.Id;

                $scope.Registration.phoneNumber =  $scope.PhoneNumber;




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
                    else if((RegistrationInfo.responseCode == 1) && (RegistrationInfo.errorMessage == "user already exists, please login")){

                        $scope.Phnuserexists = "user already exists, please login";
                    }

                    else{


                    }

                });


            }


        };




    }]);