
app.controller('ResortDetailCtr',['$scope','$compile','$sce','$element','$state','GetParkDetailInfo','$rootScope','$localStorage','$window','$timeout','$q','$log','$modal','$mdDialog',
                       function ($scope,$compile,$sce,$element,$state,GetParkDetailInfo,$rootScope,$localStorage,$window,$timeout,$q,$log,$modal,$mdDialog) {
                 debugger;

                           if($localStorage.parkId == undefined) {
                               $window.location = '../../index.html';
                           }

                         else{

                               $rootScope.$on('profile-updated2', function(event, profileObj) {
                                   debugger;
                                   $scope.showLogOutBtn =true;
                                   $scope.showLoginBtn = false;
                                   $scope.firstName = $localStorage.firstName;
                                   $scope.lastName = $localStorage.lastName;

                                   if($localStorage.DP == undefined){
                                       $scope.DP = "../../assets/images/Login_Icon.png";

                                   }
                                   else {
                                       $scope.DP = $localStorage.DP;
                                   }
                               });


                               if($localStorage.username == undefined){
                                   $scope.showLoginBtn = true;
                                   $scope.showLogOutBtn =false;

                               }
                               else{

                                   $scope.showLogOutBtn =true;
                                   $scope.showLoginBtn = false;
                                   $scope.firstName = $localStorage.firstName;
                                   $scope.lastName = $localStorage.lastName;
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
                               }

                               $scope.qty = 0;


                               /*--------------------img slider------------------------*/
                               jssor_1_slider_init = function() {

                                   var jssor_1_options = {
                                       $AutoPlay: 1,
                                       $ArrowNavigatorOptions: {
                                           $Class: $JssorArrowNavigator$
                                       },
                                       $ThumbnailNavigatorOptions: {
                                           $Class: $JssorThumbnailNavigator$,
                                           $Cols: 9,
                                           $SpacingX: 3,
                                           $SpacingY: 3,
                                           $Align: 260
                                       }
                                   };

                                   var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

                                   /*responsive code begin*/
                                   /*remove responsive code if you don't want the slider scales while window resizing*/
                                   function ScaleSlider() {
                                       var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                                       if (refSize) {
                                           refSize = Math.min(refSize, 600);
                                           jssor_1_slider.$ScaleWidth(refSize);
                                       }
                                       else {
                                           window.setTimeout(ScaleSlider, 30);
                                       }
                                   }
                                   ScaleSlider();
                                   $Jssor$.$AddEvent(window, "load", ScaleSlider);
                                   $Jssor$.$AddEvent(window, "resize", ScaleSlider);
                                   $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
                                   /*responsive code end*/
                               };
                               /*--------------------img slider------------------------*/


                         /*  $scope.map = {
                               center: {
                                   latitude: 56.162939,
                                   longitude: 10.203921
                               },
                               zoom: 8
                           };
*/                         if($localStorage.res == undefined){
                               $scope.minCost1 = 0;
                                   }
                           else{
                           $scope.minCost1 = $localStorage.res.minCost1;
                           }


                         /*  $scope.latitude =   17.6579298;
                           $scope.longitude = 78.5847148;*/

                           var self = this;



                           self.repos         = loadAll();
                               self.selectedItem  = null;
                               self.searchText    = null;

                               self.querySearch   = querySearch;
                               /*  self.selectedItemChange = selectedItemChange;
                                self.searchTextChange   = searchTextChange;*/

                           // ******************************
                           // Internal methods
                           // ******************************

                           /**
                            * Search for repos... use $timeout to simulate
                            * remote dataservice call.
                            */
                           function querySearch (query) {
                               var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
                                   deferred;
                               if (self.simulateQuery) {
                                   deferred = $q.defer();
                                   $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
                                   return deferred.promise;
                               } else {
                                   return results;
                               }
                           }

                        /*   function searchTextChange(text) {
                               $log.info('Text changed to ' + text);
                           }

                           function selectedItemChange(item) {
                               $log.info('Item changed to ' + JSON.stringify(item));
                           }
*/
                           /**
                            * Build `components` list of key/value pairs
                            */
                           function loadAll() {
                               var repos =      $localStorage.localAreas;
                               /*[
                                {
                                'localArea'      : 'Madhapur',

                                'metro'  : 'Hyderabad',
                                'forks'     : 'India'
                                },
                                {
                                'localArea'      : 'Miyapur',

                                'metro'  : 'Hyderabad',
                                'forks'     : 'India'
                                },
                                {
                                'localArea'      : 'Kondapur ',

                                'metro'  : 'Hyderabad',
                                'forks'     : 'India'
                                },
                                {
                                'localArea'      : ' Adibatla ',

                                'metro'  : 'Hyderabad',
                                'forks'     : 'India'
                                },
                                {
                                'localArea'      : ' Hitech City ',

                                'metro'  : 'Hyderabad',
                                'forks'     : 'India'
                                },
                                {
                                'localArea'      : 'Banjara Hills ',

                                'metro'  : 'Hyderabad',
                                'forks'     : 'India'
                                }
                                ];*/
                               return repos.map( function (repo) {
                                   repo.value = repo.localArea.toLowerCase();
                                   return repo;
                               });
                           }

                           /**
                            * Create filter function for a query string
                            */
                           function createFilterFor(query) {
                               var lowercaseQuery = angular.lowercase(query);

                               return function filterFn(item) {
                                   return (item.value.indexOf(lowercaseQuery) === 0);
                               };

                           }


      $scope.AminitiesMaster=[
          {id:1,AminitiName:'Free WiFi Internet',AminitiLogo:'../../assets/images/AminitieLogos/WiFi.png'},
          {id:2,AminitiName:'Gymnasium/Health Club',AminitiLogo:'../../assets/images/AminitieLogos/Gymnasium_Health-Club.png'},
          {id:3,AminitiName:'Conference Facilities',AminitiLogo:'../../assets/images/AminitieLogos/ConferenceFacilities.png'},
          {id:4,AminitiName:'Business Center',AminitiLogo:'../../assets/images/AminitieLogos/BusinessCenter.png'},
          {id:5,AminitiName:'Cafe',AminitiLogo:'../../assets/images/AminitieLogos/Cafe.png'},
          {id:6,AminitiName:'Restaurant',AminitiLogo:'../../assets/images/AminitieLogos/Restaurant.png'},
          {id:7,AminitiName:'Doctor on call',AminitiLogo:'../../assets/images/AminitieLogos/DoctorOnCall.png'},
          {id:8,AminitiName:'Jacuzzi',AminitiLogo:'../../assets/images/AminitieLogos/Jacuzzi.png'},
          {id:9,AminitiName:'Sauna',AminitiLogo:'../../assets/images/AminitieLogos/Sauna.png'},
          {id:10,AminitiName:'Meeting facilities',AminitiLogo:'../../assets/images/AminitieLogos/MeetingFacilities.png'},
          {id:11,AminitiName:'Swimming pool',AminitiLogo:'../../assets/images/AminitieLogos/SwimmingPool.png'},
          {id:12,AminitiName:'Lounge',AminitiLogo:'../../assets/images/AminitieLogos/Lounge.png'},
          {id:13,AminitiName:'Spa',AminitiLogo:'../../assets/images/AminitieLogos/Spa.png'},
          {id:14,AminitiName:'Laundry service',AminitiLogo:'../../assets/images/AminitieLogos/LaundryService.png'},
          {id:15,AminitiName:'Babysitting or childcare',AminitiLogo:'../../assets/images/AminitieLogos/Babysitting.png'},
          {id:16,AminitiName:'Coffee shop',AminitiLogo:'../../assets/images/AminitieLogos/CoffeeShop.png'},
          {id:17,AminitiName:'Parking',AminitiLogo:'../../assets/images/AminitieLogos/Parking.png'},
          {id:18,AminitiName:'Massage',AminitiLogo:'../../assets/images/AminitieLogos/Massage.png'},
          {id:19,AminitiName:'Wi-Fi',AminitiLogo:'../../assets/images/AminitieLogos/WiFi.png'},
          {id:20,AminitiName:'Car rental',AminitiLogo:'../../assets/images/AminitieLogos/CarRental.png'},
          {id:21,AminitiName:'Library',AminitiLogo:'../../assets/images/AminitieLogos/Library.png'}
          ]



                          /* $scope.string = "002.jpg,003.jpg,004.jpg,005.jpg,006.jpg,007.jpg,008.jpg,009.jpg,010.jpg,011.jpg";

                           $scope.arrString = new Array();
                           $scope.arrString = $scope.string.split(',');
                           $scope.myInterval = 2000;
                           $scope.slides = [];
                           for (var i = 0; i < $scope.arrString.length; i++) {
                               $scope.slides.push({"image":$scope.arrString[i]});
                           }*/

                        /*   $scope.photos = [
                               {src: 'http://farm9.staticflickr.com/8042/7918423710_e6dd168d7c_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8449/7918424278_4835c85e7a_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8457/7918424412_bb641455c7_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8179/7918424842_c79f7e345c_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8315/7918425138_b739f0df53_b.jpg'},
                               {src: 'http://farm9.staticflickr.com/8461/7918425364_fe6753aa75_b.jpg'}
                           ];*/
// initial image index
                           $scope._Index = 0;
// if a current image is the same as requested image
                           $scope.isActive = function (index) {
                               return $scope._Index === index;
                           };
// show prev image
                           $scope.showPrev = function () {
                               $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
                           };
// show next image
                           $scope.showNext = function () {
                               $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
                           };
// show a certain image
                           $scope.showPhoto = function (index) {
                               $scope._Index = index;
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



                           var  parkId =$localStorage.parkId;
                           $scope.myDate = $localStorage.checkIn;
                           $scope.maxDate = $localStorage.checkOut;
                 debugger;
      $scope.startTimer();

    GetParkDetailInfo.GetParkDetail(parkId,$scope.myDate,$scope.maxDate).then(function(parkDetailRes){
                debugger;
        $scope.stopTimer();
        if(parkDetailRes.responseCode == 200){


            $scope.resultParkDetail = parkDetailRes.resultObject;
            $scope.ParkDetail =  parkDetailRes.parkDetails;

            $scope.PackageDetail= $.grep(parkDetailRes.parkDetails,function (pckg) {
                return pckg.facilityType == 'O';
            });

            for(i=0;i<$scope.PackageDetail.length;i++) {
                $scope.FIFO_PImage = $scope.PackageDetail[i].facilityImage.split(',');
                $scope.PackageDetail[i].facilityImage = $scope.FIFO_PImage[0];
            }

            $scope.RoomDetail =  $.grep(parkDetailRes.parkDetails,function (rms) {
                return rms.facilityType == 'R';
            });
            for(i=0;i<$scope.RoomDetail.length;i++) {
                $scope.FIFO_RImage = $scope.RoomDetail[i].facilityImage.split(',');
                $scope.RoomDetail[i].facilityImage = $scope.FIFO_RImage[0];
            }

            $localStorage.latitude = parkDetailRes.resultObject[0].latitude;
            $localStorage.longitude = parkDetailRes.resultObject[0].longitude;
            $scope.parkName = parkDetailRes.resultObject[0].name;


            var  centerProperty= {
                    lat: $localStorage.latitude,
                    lng: $localStorage.longitude
                };

             var   markersProperty= [{
                    latitude: $localStorage.latitude,
                    longitude: $localStorage.longitude
                }];
            angular.extend($scope, {
                centerProperty:centerProperty,
                zoomProperty: 15,
                markersProperty:markersProperty,
                clickedLatitudeProperty: null,
                clickedLongitudeProperty: null
            });



            if(parkDetailRes.resultObject[0].parkSubImages == undefined){
                parkDetailRes.resultObject[0].parkSubImages =  "";

            }


            $scope.resultParkDetailSubImg = parkDetailRes.resultObject[0].parkSubImages;
            $scope.AminitArray = parkDetailRes.resultObject[0].amenitiesString.split(',');
            $scope.GetAminitiList=[];
            for(i=0;i<$scope.AminitArray.length;i++){
                $scope.GetInfo = $.grep($scope.AminitiesMaster,function(ami){
                    return ami.id==$scope.AminitArray[i];
                })

                $scope.GetAminitiList.push($scope.GetInfo[0]);
            }

            $scope.arrString = new Array();
            $scope.arrString = $scope.resultParkDetailSubImg.split(',');

            $scope.photos = [];
            for (var i = 0; i < $scope.arrString.length; i++) {
                $scope.photos.push({"src":$scope.arrString[i]});
            }

            $localStorage.parkDetails = parkDetailRes.parkDetails;

        }

        else {


        }

    });

                      if(($localStorage.latitude == undefined) ||  ( $localStorage.longitude == undefined)){

                          angular.extend($scope, {
                              centerProperty: {
                                  lat: 17.4121531,
                                  lng: 78.12784
                              },
                              zoomProperty: 15,
                              markersProperty: [ {
                                  latitude: 17.4121531,
                                  longitude: 78.12784
                              }],
                              clickedLatitudeProperty: null,
                              clickedLongitudeProperty: null
                          });


                      }
                      else{
                          angular.extend($scope, {
                              centerProperty: {
                                  lat: $localStorage.latitude,
                                  lng: $localStorage.longitude
                              },
                              zoomProperty: 15,
                              markersProperty: [ {
                                  latitude: $localStorage.latitude,
                                  longitude: $localStorage.longitude
                              }],
                              clickedLatitudeProperty: null,
                              clickedLongitudeProperty: null
                          });
                      }


                      $scope.PackageShowImagesCall = function (park,index) {
                                   debugger;

                                   if (angular.element(document.getElementById('pcklistdiv'+ index))[0]==undefined) {

                                       $scope.BindData=$localStorage.parkDetails;
                                       $scope.GettingRoomInfo=$.grep($localStorage.parkDetails,function (prkrm) {
                                           return prkrm.facilityTypeCode==park.facilityTypeCode;
                                       })[0]

                                       $scope.facilitydescription = $scope.GettingRoomInfo.description;
                                       var GetParkfacilitydescription = $scope.GettingRoomInfo.description;

                                       $scope.ParkDetailfacilityImage = $scope.GettingRoomInfo.facilityImage;
                                       $scope.facilityarrString = new Array();
                                       $scope.facilityarrString = $scope.ParkDetailfacilityImage.split(',');

                                       $scope.facilityPhotos = [];
                                       for (var i = 0; i < $scope.FIFO_RImage.length; i++) {
                                           $scope.facilityPhotos.push({"src": $scope.FIFO_RImage[i]});
                                       }
                                       var html = '<div id="pcklistdiv'+index+'">' +
                                           '<md-card><div ng-cloak>' +
                                           '<md-content>' +
                                           '<md-tabs md-dynamic-height md-border-bottom>' +
                                           '<md-tab label="Photos">' +
                                           '<md-content class="md-padding">' +
                                           '<div class="">' +
                                           '<div style="width: 680px;">'+
                                           '<img ng-repeat="facility in facilityPhotos" class="slide" ng-swipe-right="showPrev()" ng-swipe-left="showNext()" ng-show="isActive($index)" ng-src="http://outingadmin.littlepandits.com/images/ResortsImages/{{facility.src}}" onError="this.onerror=null;this.src=\'../../assets/images/default-thumb.gif\';" />' +
                                           '<p class="arrow prev" href="#" ng-click="showPrev()"></p>' +
                                           '<p class="arrow next" href="#" ng-click="showNext()"></p>' +
                                           '</div></div>' +
                                           '</md-content>' +
                                           '</md-tab>' +
                                           '<md-tab label="Info">' +
                                           '<md-content class="md-padding">' +
                                           '<h1 class="md-display-2">Info</h1>' +
                                           // '<p data-ng-bind="facilitydescription"></p>' +
                                           '<p>'+GetParkfacilitydescription+'</p>' +
                                           '</md-content></md-tab>' +
                                           '</md-tabs></md-content>' +
                                           '</div></md-card>' +
                                           '</div>';
                                       angular.element(document.getElementById('packageContent'+ index)).append($compile(html)($scope));


                                   }
                                   else {

                                       angular.element(document.getElementById('pcklistdiv'+ index)).remove();
                                   }

                               }


                      $scope.RoomShowImagesCall = function (park,index) {
                                   debugger;

                                   if (angular.element(document.getElementById('listdiv'+ index))[0]==undefined) {

                                       $scope.GettingRoomInfo=$.grep($localStorage.parkDetails,function (prkrm) {
                                           return prkrm.facilityTypeCode==park.facilityTypeCode;
                                       })[0]


                                       $scope.facilitydescription = $scope.GettingRoomInfo.description;
                                       var GetRoomfacilitydescription = $scope.GettingRoomInfo.description;
                                       $scope.ParkDetailfacilityImage = $scope.GettingRoomInfo.facilityImage;
                                       $scope.facilityarrString = new Array();
                                       $scope.facilityarrString = $scope.ParkDetailfacilityImage.split(',');

                                       $scope.facilityPhotos = [];
                                       for (var i = 0; i < $scope.FIFO_RImage.length; i++) {
                                           $scope.facilityPhotos.push({"src": $scope.FIFO_RImage[i]});
                                       }
                                       $scope.BindData=$localStorage.parkDetails;
                                       var html = '<style>.slide {position: relative!important;top: 0;left: 0;width: 100%!important;height: 373px!important;}</style>' +
                                           '<div id="listdiv'+index+'">' +
                                           '<md-card><div ng-cloak>' +
                                           '<md-content>' +
                                           '<md-tabs md-dynamic-height md-border-bottom>' +
                                           '<md-tab label="Photos">' +
                                           '<md-content class="md-padding"' +
                                           '><div class="">' +
                                           '<div style="width: 680px;" class="slider">' +
                                           '<img ng-repeat="facility'+index+' in facilityPhotos" class="slide" ng-swipe-right="showPrev()" ng-swipe-left="showNext()" ng-show="isActive($index)" ng-src="http://outingadmin.littlepandits.com/images/ResortsImages/{{facility'+index+'.src}}" onError="this.onerror=null;this.src=\'../../assets/images/default-thumb.gif\';" />' +
                                           '<p class="arrow prev" href="#" ng-click="showPrev()"></p>' +
                                           '<p class="arrow next" href="#" ng-click="showNext()"></p>' +
                                           '</div>' +
                                           '</div>' +
                                           '</md-content></md-tab><md-tab label="Info">' +
                                           '<md-content class="md-padding"><h1 class="md-display-2">Info</h1>' +
                                           // '<p data-ng-bind="facilitydescription"></p>' +
                                           '<p>'+GetRoomfacilitydescription+'</p>' +
                                           '</md-content>' +
                                           '</md-tab>' +
                                           '</md-tabs></md-content>' +
                                           '</div>' +
                                           '</md-card></div>';
                                       angular.element(document.getElementById('roomsContent'+ index)).append($compile(html)($scope));


                                   }
                                   else {

                                       angular.element(document.getElementById('listdiv'+ index)).remove();
                                   }

                               }


                      $scope.loadEditForm = function () {
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

                      $scope.firstLineRegionModel  =$localStorage.modelsearch.cityName;
                      $scope.MainSearch=function(){
                               var searchArea =   $scope.ctrl.selectedItem;
                               $localStorage.searchInput =   searchArea;
                               $window.location='../../app/Resorts/Viewresorts.html';
                           }


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



           $scope.facilityTypList=[];

           $scope.BookPkgCall= function(park){

               debugger;
               $localStorage.bookPark = park;
               $scope.facilityTypList.push($localStorage.bookPark);
               $localStorage.facilityTypList =  $scope.facilityTypList;
               $localStorage.facilityTypeTitle  = park.facilityTypeTitle;

              if($scope.sum == undefined){
                  $localStorage.sum = 0;
              }
               else{
                  $localStorage.sum = $scope.sum;
              }


               $localStorage.FacilityNameList =  $scope.FacilityNameList;
               $window.location='../Resorts/packageDetails.html';
           };


           //--------------------------Add Aditionals Start-----------------------//

           $scope.FacilityItems={
               itemName:'',
               noOfItems:0,
               orgPrice:'',
               totalPrice:0
           }
           $scope.FacilityNameList=[];
           $localStorage.FacilityNameList =  $scope.FacilityNameList;
           /*  $scope.facilityTypList=[];*/
           $scope.addBookCall= function(facilityName){

               debugger;

               $scope.facilityTypList.push(facilityName);
               $localStorage.facilityTypList =  $scope.facilityTypList;
               $localStorage.Facilitypackageobject =  facilityName;
               $scope.facilityName = facilityName;


               $scope.FacilityItems.itemName=facilityName.facilityTypeTitle;
               $scope.FacilityItems.noOfItems=1;
               $scope.FacilityItems.orgPrice=facilityName.currentPrice;
               $scope.FacilityItems.totalPrice=1*facilityName.currentPrice;

               $scope.FacilityNameList.push($scope.FacilityItems);
               $localStorage.FacilityNameList =  $scope.FacilityNameList;
               $scope.FacilityItems={};

               if ($scope.sum == undefined){
                   var a = Number($scope.bookParkcurrentPrice || 0);
                   var b = Number($scope.facilityName.currentPrice || 0);
                   $scope.sum = a+b;
                   /*$scope.ServiceTax();*/
                   /*$localStorage.TotalPrice = $scope.sum;*/
               }
               else{
                   var a = Number($scope.sum || 0);
                   var b = Number($scope.facilityName.currentPrice || 0);
                   $scope.sum = a+b;
                  /* $scope.ServiceTax();*/
                   /*$localStorage.TotalPrice = $scope.sum;*/

               }

           } ;

           $scope.addCall= function(facilityName){

               debugger;
               /*for(i=0;i<$scope.FacilityNameList.length;i++){*/
               $scope.FindList = $.grep($scope.FacilityNameList,function (fl) {
                   return fl.itemName==facilityName.facilityTypeTitle;
               })[0];

               var SelIndexOf=$scope.FacilityNameList.map(function(x){return x.itemName}).indexOf($scope.FindList.itemName);
               $scope.FacilityNameList[SelIndexOf].noOfItems=$scope.FacilityNameList[SelIndexOf].noOfItems+1;
               $scope.FacilityNameList[SelIndexOf].totalPrice=$scope.FacilityNameList[SelIndexOf].noOfItems*$scope.FacilityNameList[SelIndexOf].orgPrice;

               $scope.facilityName = facilityName;

               var a = Number($scope.sum || 0);
               var b = Number($scope.facilityName.currentPrice || 0);
               $scope.sum = a+b;
              /* $scope.ServiceTax();*/
               /*$localStorage.TotalPrice = $scope.sum;*/
           } ;

           $scope.subCall= function(facilityName,qty){

                    debugger;

               $scope.FindList = $.grep($scope.FacilityNameList,function (fl) {
                   return fl.itemName==facilityName.facilityTypeTitle;
               })[0];

               var SelIndexOf=$scope.FacilityNameList.map(function(x){return x.itemName}).indexOf($scope.FindList.itemName);
               $scope.FacilityNameList[SelIndexOf].noOfItems=$scope.FacilityNameList[SelIndexOf].noOfItems-1;
               $scope.FacilityNameList[SelIndexOf].totalPrice=$scope.FacilityNameList[SelIndexOf].noOfItems*$scope.FacilityNameList[SelIndexOf].orgPrice;

               if($scope.FacilityNameList[SelIndexOf].noOfItems==0)
               {
                   $scope.FacilityNameList.splice(SelIndexOf, 1);
               }

               $scope.facilityName = facilityName;

               var a = Number($scope.sum || 0);
               var b = Number($scope.facilityName.currentPrice || 0);
               $scope.sum = a-b;
              /* $scope.ServiceTax();*/
               /*$localStorage.TotalPrice = $scope.sum;*/

           } ;

           //--------------------------Add Aditionals End------------------------//







            $scope.SkipRooms= function(){
                        debugger;

                   $localStorage.bookPark = "";
                   $localStorage.regularPrice  = 0;
                   $window.location='../Resorts/packageDetails.html';
               };

        }
}]);