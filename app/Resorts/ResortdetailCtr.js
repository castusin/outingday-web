
app.controller('ResortDetailCtr',['$scope','$compile','$sce','$element','$state','GetParkDetailInfo','$rootScope','$localStorage','$window','$timeout','$q','$log','$modal','$mdDialog',
                       function ($scope,$compile,$sce,$element,$state,GetParkDetailInfo,$rootScope,$localStorage,$window,$timeout,$q,$log,$modal,$mdDialog) {
                 debugger;

                           if($localStorage.parkId == undefined){
                               $window.location='../../index.html';
                           }

                         else{


                               $scope.ShowPhotosInfo = false;


                               $rootScope.$on('profile-updated2', function(event, profileObj) {
                                   debugger;
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
            $scope.ParkDetail = parkDetailRes.parkDetails;
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

        else{


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


       $scope.ShowImagesCall = function (park,index) {
           debugger;
           $scope.divId=true;
           var myEl = angular.element(document.querySelector('#divId' + index));
           //myEl.append('<b>Bharath</b>\n<hr>');
           $scope.snippet='<md-card><div ng-cloak><md-content><md-tabs md-dynamic-height md-border-bottom><md-tab label="Photos"><md-content class="md-padding"><div class="container"><div style="width: 680px;"><img   ng-repeat="facility in facilityPhotos" class="slide" ng-swipe-right="showPrev()" ng-swipe-left="showNext()" ng-show="isActive($index)" ng-src="http://admin.outingday.com/images/ResortsImages/{{facility.src}}" onError="this.onerror=null;this.src=\'../../assets/images/default-thumb.gif\';" /><p class="arrow prev" href="#" ng-click="showPrev()"></p><p class="arrow next" href="#" ng-click="showNext()"></p></div></div></md-content></md-tab><md-tab label="Info"><md-content class="md-padding"><h1 class="md-display-2">Info</h1><p data-ng-bind="facilitydescription"></p></md-content></md-tab></md-tabs></md-content></div></md-card>';

           $scope.deliberatelyTrustDangerousSnippet = function() {
               return $sce.trustAsHtml($scope.snippet);
           };
           myEl.hide();

           // myEl.append('<md-card>\n' +
           //     '            <div ng-cloak>\n' +
           //     '                <md-content>\n' +
           //     '                    <md-tabs md-dynamic-height md-border-bottom>\n' +
           //     '                        <md-tab label="Photos">\n' +
           //     '                            <md-content class="md-padding">\n' +
           //     '                                <div class="container">\n' +
           //     '                                    <div style="width: 680px;">\n' +
           //     '                                        <img   ng-repeat="facility in facilityPhotos" class="slide" ng-swipe-right="showPrev()" ng-swipe-left="showNext()" ng-show="isActive($index)" ng-src="http://admin.outingday.com/images/ResortsImages/{{facility.src}}" onError="this.onerror=null;this.src=\'../../assets/images/default-thumb.gif\';" />\n' +
           //     '                                        <p class="arrow prev" href="#" ng-click="showPrev()"></p>\n' +
           //     '                                        <p class="arrow next" href="#" ng-click="showNext()"></p>\n' +
           //     '                                    </div>\n' +
           //     '                                </div>\n' +
           //     '                            </md-content>\n' +
           //     '                        </md-tab>\n' +
           //     '                        <md-tab label="Info">\n' +
           //     '                            <md-content class="md-padding">\n' +
           //     '                                <h1 class="md-display-2">Info</h1>\n' +
           //     '                                <p data-ng-bind="facilitydescription"></p>\n' +
           //     '                            </md-content>\n' +
           //     '                        </md-tab>\n' +
           //     '                    </md-tabs>\n' +
           //     '                </md-content>\n' +
           //     '            </div>\n' +
           //     '        </md-card>');

            //angular.element(myEl).append($compile(html)($scope));


           var showHide = $scope.ShowPhotosInfo;
           if (showHide == false) {
               $scope.ShowPhotosInfo = true;
               $scope.facilitydescription = park.description;
               $scope.ParkDetailfacilityImage = park.facilityImage;
               $scope.facilityarrString = new Array();
               $scope.facilityarrString = $scope.ParkDetailfacilityImage.split(',');

               $scope.facilityPhotos = [];
               for (var i = 0; i < $scope.facilityarrString.length; i++) {
                   $scope.facilityPhotos.push({"src": $scope.facilityarrString[i]});
               }
           }
           else {
               $scope.ShowPhotosInfo = false;
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



                           $scope.BookPkgCall= function(park){
                               $scope.facilityTypList=[];
                               debugger;
                               $localStorage.bookPark = park;
                               $scope.facilityTypList.push($localStorage.bookPark);
                               $localStorage.facilityTypList =  $scope.facilityTypList;
                               $localStorage.facilityTypeTitle  = park.facilityTypeTitle;
                               $window.location='../Resorts/packageDetails.html';
                           }
                           $scope.SkipRooms= function(){
                                    debugger;

                               $localStorage.bookPark = "";
                               $localStorage.regularPrice  = 0;
                               $window.location='../Resorts/packageDetails.html';
                           }
        }
}]);