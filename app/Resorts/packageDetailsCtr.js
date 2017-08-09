
app.controller('packageDetailCtr',['$scope','$state','GetParkDetailInfo','$rootScope','$localStorage','$window','$location','$anchorScroll','getCouponcodeInfo','$modal','$mdDialog','$route',
    function ($scope,$state,GetParkDetailInfo,$rootScope,$localStorage,$window,$location,$anchorScroll,getCouponcodeInfo,$modal,$mdDialog,$route) {

           debugger;


        if($localStorage.parkId == undefined){
            $window.location='../../index.html';
        }

         else{


            $rootScope.$on('profile-updated3', function(event, profileObj) {
                debugger;
                $scope.showLogOutBtn =true;
                $scope.showLoginBtn = false;
                $scope.disableEmail =true;
                $scope.FirstName = $localStorage.firstName;
                $scope.userfirstName = $localStorage.firstName;
                $scope.LastName = $localStorage.lastName;
                $scope.userlastName = $localStorage.lastName;
                $scope.Email = $localStorage.username;
                $scope.PhoneNumber = $localStorage.phoneNumber;

                if($localStorage.DP == undefined){
                    $scope.DP = "../../assets/images/Login_Icon.png";

                }
                else{
                    $scope.DP = $localStorage.DP;
                }
                $window.location.reload();
            });

            if($localStorage.username == undefined){
                $scope.showLoginBtn = true;
                $scope.showLogOutBtn =false;
                $scope.disableEmail =false;


            }
            else{

                $scope.showLogOutBtn =true;
                $scope.showLoginBtn = false;
                $scope.disableEmail =true;
                $scope.FirstName = $localStorage.firstName;
                $scope.userfirstName = $localStorage.firstName;
                $scope.LastName = $localStorage.lastName;
                $scope.userlastName = $localStorage.lastName;
                $scope.Email = $localStorage.username;
                $scope.PhoneNumber = $localStorage.phoneNumber;
                if($localStorage.DP == undefined){
                    $scope.DP = "../../assets/images/Login_Icon.png";

                }
                else{
                    $scope.DP = $localStorage.DP;
                }

            }

            $scope.logOutCall =function(){
                debugger;
                $localStorage.username = undefined;
                $localStorage.DP =  undefined;
                $scope.showLoginBtn = true;
                $scope.showLogOutBtn =false;
                $scope.disableEmail =false;
                $scope.FirstName = "";
                $scope.LastName = "";
                $scope.Email = "";
                $scope.PhoneNumber ="";
            }



            $scope.ServiceTax= function(){
                debugger;
                if($scope.sum == 0) {
                    $localStorage.TotalPrice = $scope.sum;
                }
                else{
                    $scope.tax = 1;

                   var a= $scope.tax;
                   var b= $scope.sum;
                    $scope.Taxsum = a + b;
                    $localStorage.TotalPrice = $scope.Taxsum;
                }
            }


        $scope.qty = 0;
       /* $scope.increment = function() {
            $scope.qty++;
        };
        $scope.decrement = function() {
            $scope.qty--;
        };*/



        $scope.checkIn = $localStorage.checkIn;
        $scope.checkOut=$localStorage.checkOut ;

        if($localStorage.facilityTypList == undefined) {
            $scope.facilityTypList = [];
        }
        else{
        $scope.facilityTypList = $localStorage.facilityTypList;
        }

        var ctrl = this;
        if($localStorage.bookPark == ""){

            $scope.sum = $localStorage.regularPrice;
            $scope.bookParkcurrentPrice=  $localStorage.regularPrice;
        }
        else{
            $scope.ctrl.datepicker = $localStorage.bookPark.date;
            $scope.bookParkcurrentPrice = $localStorage.bookPark.currentPrice;

            $scope.sum = $localStorage.sum + $localStorage.bookPark.currentPrice;
            $scope.bookParkImg = $localStorage.bookPark.facilityImage;
            $scope.bookParkDes = $localStorage.bookPark.description;
        }

            $scope.ServiceTax();
      /*  $localStorage.TotalPrice = $scope.sum;*/



        $scope.resList = $localStorage.res;
        $scope.resListPhoto = $localStorage.res.photoUrl;
        $scope.resListDes = $localStorage.res.description;
        $scope.resListName = $localStorage.res.name;
        $scope.bookParkList= $localStorage.parkDetails ;




        //--------------------------Add Aditionals Start-----------------------//

            $scope.FacilityNameList = $localStorage.FacilityNameList;

        //--------------------------Add Aditionals End------------------------//

        $scope.deleteItem= function(facility){


            $scope.totalPrice   =  facility.totalPrice;
            $scope.FindList = $.grep($scope.FacilityNameList,function (fl) {
                return fl.itemName==facility.itemName;
            })[0];

            var SelIndexOf=$scope.FacilityNameList.map(function(x){return x.itemName}).indexOf($scope.FindList.itemName);


            var a = Number($scope.sum || 0);
            var b = Number($scope.totalPrice || 0);
            $scope.sum = a-b;
            $scope.FacilityNameList[SelIndexOf].noOfItems = 0;
            $scope.FacilityNameList.splice(SelIndexOf, 1);


        };


            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');

            };

            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');

            };

            $scope.$on('timer-stopped', function (event, data){
                console.log('Timer Stopped - data = ', data);
            });


            /*----------------couponCode service call -----------------*/
            $scope.couponCodeCall=function(){
                    debugger;
                var parkId = $localStorage.parkId;
                var checkIn = $localStorage.checkIn;
               /* $localStorage.checkIn;*/
                var couponCode = $scope.couponCode;
                $scope.successcouponCode = "";
                $scope.errorcouponCode ="";

                $scope.startTimer();
                getCouponcodeInfo.GetCouponcodeService(parkId,checkIn,couponCode).then(function(couponCodeRes){
                    $scope.stopTimer();

                       debugger;
                    if(couponCodeRes.responseCode == 200){
                        $scope.successcouponCode = "Coupon code successfully applied";

                        if(couponCodeRes.resultObject.couponType == 'F'){

                            $scope.discount =  couponCodeRes.resultObject.discount;
                            $scope.sum = $scope.sum - $scope.discount;
                            $scope.ServiceTax();
                            /*$localStorage.TotalPrice = $scope.sum;*/
                        }
                        else if(couponCodeRes.resultObject.couponType == 'P'){

                            $scope.percentage =  couponCodeRes.resultObject.discount;
                            $scope.afterPercentage = (($scope.percentage/100)*$scope.sum).toFixed(2);
                            $scope.sum = ($scope.sum - $scope.afterPercentage).toFixed(2);
                            $scope.ServiceTax();
                           /* $localStorage.TotalPrice = $scope.sum;*/

                        }


                    }

                    else{
                        $scope.errorcouponCode = "Coupon code invalid";
                    }

                });
            };
            /*----------------couponCode service call -----------------*/



            /*-------------- city location ---------------*/

            $scope.loadEditForm = function () {
                    debugger;
                $scope.checkItem = "yes";
                $modal.open({
                    templateUrl: '../../app/Resorts/modal.html',
                    controller: 'modalController as ctrl',
                    scope: $scope ,
                    backdrop: 'static',
                    keyboard: false
                })
                    .result.then(function() {



                        /* alert('closed');*/
                    }, function() {


                        $window.location='../../index.html';

                    });
            };

            if( $localStorage.localAreas == undefined){

                $scope.loadEditForm();
            }
            else{

            }

            if( $localStorage.localAreas == undefined){

                $scope.regionModel = function(){ return  "SELECT A REGION"; }
            }
            else{

                $scope.regionModel = function(){ return  $localStorage.modelsearch.cityName; }
            }

            /*-------------- city location ---------------*/

            /*-------------------  login signup calls --------------------*/
            $scope.loginPage = function(ev) {
                debugger;

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

            $scope.SignUpPage = function(ev) {
                debugger;

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
            /*-------------------  login signup calls --------------------*/



            $scope.submit= function(){


            if($scope.registration_form.$invalid){

               /* $("button").click(function() {*/
                    $('html,body').animate({
                            scrollTop: $(".result_title").offset().top},
                        'slow');
              /*  });*/
/*
                $location.hash('validateError');

                $anchorScroll();*/
            }
          else{
        console.log($scope.mrs);
            console.log( $scope.FirstName);
            console.log($scope.LastName);
            console.log($scope.Email);
            console.log( $scope.PhoneNumber);
      if($scope.mrs == undefined){
		   $localStorage.mrs = "Mr";
		  
	  }
	  else{
		  $localStorage.mrs = $scope.mrs; 
		  
	  }
           
            $localStorage.FirstName = $scope.FirstName;
            $localStorage.LastName = $scope.LastName;
            $localStorage.Email = $scope.Email;
            $localStorage.PhoneNumber = $scope.PhoneNumber;


            $window.location='../Resorts/confirmationDetails.html';
            }
        }


        }
    }]);