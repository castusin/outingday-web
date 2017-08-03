
app.controller('ResortCtr',['$scope','$state','myMastersList','GetParksInfo','$rootScope','$window', '$localStorage','$timeout','$q','$log','ngProgressFactory','$modal','$filter','$mdDialog',
    function ($scope,$state,myMastersList,GetParksInfo,$rootScope,$window,$localStorage,$timeout,$q,$log,ngProgressFactory,$modal,$filter,$mdDialog) {

           debugger;

      /*  $scope.color = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        };

        $scope.rating1 = 3;
        $scope.rating2 = 2;
        $scope.rating3 = 4;

        $scope.disabled1 = Math.floor(Math.random() * 100);
        $scope.disabled2 = 0;
        $scope.disabled3 = 70;

        $scope.invert = Math.floor(Math.random() * 100);

        $scope.isDisabled = true;
*/



        if($localStorage.searchInput == undefined){
            $window.location='../../index.html';
        }
        else{


            $rootScope.$on('profile-updated1', function(event, profileObj) {
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






            $scope.ctrl.selectedItem = $localStorage.searchInput;
        $scope.cityName =  $localStorage.modelsearch.cityName;
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
        }*/

        /**
         * Build `components` list of key/value pairs
         */

        function loadAll() {
            var repos =      $localStorage.localAreas;
          /*  $scope.ctrl.selectedItem = $localStorage.localAreas[0];*/

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

        /*-----Latest Filter Code bk start------*/

        $scope.GetTypesMastersList=myMastersList.GetTypesMaster();
        $scope.GetNatureMastersList=myMastersList.GetNatureMaster();
        $scope.GetDurationMasterList=myMastersList.GetDurationMaster();
        $scope.GetRattingMasterList=myMastersList.GetRattingMaster();

        /*-------------------------------------*/





       /* this.myDate = new Date();
        this.isOpen = false;

        this.minDate = new Date(
            this.myDate.getFullYear(),
            this.myDate.getMonth(),
            this.myDate.getDate() - 1
        );

        this.maxDate = new Date(
            this.myDate.getFullYear(),
            this.myDate.getMonth(),
            this.myDate.getDate() + 1
        );*/

        $scope.ctrl.myDate = new Date($localStorage.checkIn);
        $scope.ctrl.maxDate = new Date($localStorage.checkOut);
        $scope.minimumDate = new Date();
        $scope.maximumDate = new Date($scope.minimumDate.getFullYear(),$scope.minimumDate.getMonth(),$scope.minimumDate.getDate()+90);


        $scope.result = '';
        $scope.options = {
            country: 'in'
        };
        $scope.details = '';


		   
         $scope.currentPage = 1;
         $scope.numPerPage = 6;
         $scope.maxSize = 5;

        /*   var park =  $rootScope.searchInput;

         if(park == "Madhapur, Hyderabad, Telangana, India"){

         var Metro = "Hyderabad";
         var localArea = "Madhapur";
         var odRating = "5";
         }*/
        /*---------------------------------------*/

        $scope.todos = [];
        $scope.OrgDataList='';
        $scope.GetOurSearchInfoList='';
        $scope.GetPreviousInfoList='';
        $scope.GoToDisplayData='';

        /*---------------------------------------*/

        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
        $scope.progressbar.setColor('#EC971F');
        $scope.progressbar.setHeight('4px');

        $scope.parks =  $localStorage.searchInput;
        $scope.myDate = $localStorage.checkIn;
        $scope.maxDate = $localStorage.checkOut;

            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');

            };

            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');

            };

            $scope.$on('timer-stopped', function (event, data){
                console.log('Timer Stopped - data = ', data);
            });


        $scope.LoadFunction=function(){

            $('#img-load').show();
            $('#img-load1').show();
            $('#img-load2').show();
            $('#img-load3').show();
            $('#img-load4').show();
            $('#img-load5').show();

            $scope.startTimer();
            GetParksInfo.GetParksService($scope.parks,$scope.myDate,$scope.maxDate).then(function(ParksInfo){
                $scope.stopTimer();


                if(ParksInfo.responseCode == 200){
                    $timeout($scope.progressbar.complete(), 1000);
                    $('#img-load').hide();
                    $('#img-load1').hide();
                    $('#img-load2').hide();
                    $('#img-load3').hide();
                    $('#img-load4').hide();
                    $('#img-load5').hide();
                    debugger;
                 $scope.DetailsListInfo=ParksInfo.resultObject;
                 $scope.GetFillAllSearchInfoList=ParksInfo.resultObject;
                    $scope.GetOurSearchInfoList=ParksInfo.resultObject;

                    var pagesShown = 1;
                    var pageSize = 9;

                    $scope.paginationLimit = function(data) {
                        return pageSize * pagesShown;
                    };
                    $scope.hasMoreItemsToShow = function() {
                        return pagesShown < ($scope.DetailsListInfo.length / pageSize);
                    };
                    $scope.showMoreItems = function() {
                        pagesShown = pagesShown + 1;
                    };


                    // *//*--------------------CountingValues start--------------------------*//*

                    for (i = 0; i < $scope.GetTypesMastersList.length; i++) {
                        $scope.SelectedTypeCount = $.grep($scope.GetOurSearchInfoList, function (typs) {
                            return typs.typeString.match($scope.GetTypesMastersList[i].Id);
                        }).length;
                        $scope.GetTypesMastersList[i].typeCount=$scope.SelectedTypeCount;

                    }
                    // *//*--------------------CountingValues End--------------------------*//*
                    // *//*--------------------Counting Natures Start---------------------*//*

                    for (i = 0; i < $scope.GetNatureMastersList.length; i++) {
                        $scope.SelectedNatureCount = $.grep($scope.GetOurSearchInfoList, function (ntur) {
                            return ntur.natureString.match($scope.GetNatureMastersList[i].Id);
                        }).length;
                        $scope.GetNatureMastersList[i].NatureCount=$scope.SelectedNatureCount;

                    }
                    // *//*--------------------Counting Natures Start---------------------*//*

                }

                else{
                    $timeout($scope.progressbar.complete(), 1000);
                    $('#img-load').hide();
                    $('#img-load1').hide();
                    $('#img-load2').hide();
                    $('#img-load3').hide();
                    $('#img-load4').hide();
                    $('#img-load5').hide();


                }

            });
        }
        $scope.LoadFunction();



       /* $(document).ready(function () {
            $('div img').hide();
        });

        $(window).load(function () {
            $('div img').show();
        });
*/
        $scope.viewResortsCall=function(){
debugger;
          /*  $scope.progressbar = ngProgressFactory.createInstance();
            $scope.progressbar.start();
            $scope.progressbar.setColor('#EC971F');
            $scope.progressbar.setHeight('4px');*/


        $scope.TypSelection=[];
        $scope.NatureSelection=[];
        $scope.GetTypesMastersList=myMastersList.GetTypesMaster();
        $scope.GetNatureMastersList=myMastersList.GetNatureMaster();
        $scope.GetDurationMasterList=myMastersList.GetDurationMaster();

        $scope.ctrl.myDate =  $filter('date')($scope.ctrl.myDate, "yyyy-MM-dd");
        $scope.ctrl.maxDate =  $filter('date')($scope.ctrl.maxDate, "yyyy-MM-dd");
		
	    $localStorage.checkIn =   $scope.ctrl.myDate;
        $localStorage.checkOut =   $scope.ctrl.maxDate;		

            if($scope.ctrl.selectedItem == null){

                $scope.parks =  $localStorage.searchInput;
            }
            else{
                $scope.parks =  $scope.ctrl.selectedItem;
                $localStorage.searchInput = $scope.ctrl.selectedItem;
            }

			$scope.myDate = $localStorage.checkIn;
			$scope.maxDate = $localStorage.checkOut;
            $scope.LoadFunction();

        }

        /*//-------------Popularity Filter Start----------------//*/
        $scope.popHL=function () {

            $scope.GoToDisplayData = $scope.GetOurSearchInfoList.sort(function(popObj1,popObj2){return parseInt(popObj2.popularity)-parseInt(popObj1.popularity)});
            GetOutPutDataInfo();
        }
        /*//-------------Popularity Filter End----------------//*/

        /*//-------------Ratting Filter Start----------------//*/
        $scope.ratingHL=function () {

            $scope.GoToDisplayData = $scope.GetOurSearchInfoList.sort(function(rtgObj1,rtgObj2){return rtgObj2.odRating-rtgObj1.odRating});
            GetOutPutDataInfo();
        }
        /*//-------------Ratting Filter End----------------//*/

        /*//-------------Cost high to Low Start----------------//*/
        $scope.minCostHL=function () {

            $scope.GoToDisplayData = $scope.GetOurSearchInfoList.sort(function(costHLObj1,costHLObj2){return costHLObj2.minCost1-costHLObj1.minCost1});
            GetOutPutDataInfo();
        }
        /*//-------------Cost high to Low End----------------//*/

        /*//-------------Cost low to high Start----------------//*/
        $scope.minCostLH=function () {

            $scope.GoToDisplayData = $scope.GetOurSearchInfoList.sort(function(costLHObj1,costLHObj2){return costLHObj1.minCost1-costLHObj2.minCost1});
            GetOutPutDataInfo();
        }
        /*//-------------Cost low to high End----------------//*/

        /*--------------1 Peoples Filter Start----------------------*/
        $scope.NmbOfPleTempData={};
        $scope.GetPeoplesFilter=function(pplVal){

            $scope.GetpplVal=pplVal;

            if($scope.NmbOfPleTempData.length==undefined) {
                $scope.NmbOfPleTempData = $scope.GetOurSearchInfoList;
            }

            $scope.PeoplesFilter = [];
            $scope.SelectedPeoples = $.grep($scope.NmbOfPleTempData, function (ppl) {
                return ppl.maxPeople == $scope.GetpplVal
            });
            for (j = 0; j < $scope.SelectedPeoples.length; j++) {
                $scope.PeoplesFilter.push($scope.SelectedPeoples[j]);
            }

            $scope.GoToDisplayData = $scope.PeoplesFilter;
            GetOutPutDataInfo();
        };

        /*--------------1 Peoples Filter End-----------------------*/

        /*---------------2 Type Filter start-----------------*/
        $scope.TypSelection=[];
        $scope.TypTempData={};

        $scope.GetTypesFilter=function(TypeVal) {

            $scope.TypeFiltter = [];
            var GetVal = $scope.TypSelection.indexOf(TypeVal);
            if (GetVal > -1) {
                $scope.TypSelection.splice(GetVal, 1);
                if($scope.TypSelection.length!=0) {
                    $scope.RemoveTypeTempData = {};
                    if ($scope.RemoveTypeTempData.length == undefined) {
                        $scope.RemoveTypeTempData = $scope.GetOurSearchInfoList;
                    }
                    else {
                        $scope.RemoveTypeTempData = $scope.TypTempData;
                    }
                    for (i = 0; i < $scope.TypSelection.length; i++) {
                        $scope.SelectedTypes = $.grep($scope.RemoveTypeTempData, function (typs) {
                            return typs.typeString.match($scope.TypSelection[i]);
                        });

                        for (j = 0; j < $scope.SelectedTypes.length; j++) {
                            $scope.TypeFiltter.push($scope.SelectedTypes[j]);
                        }
                        $scope.SelectedTypes = '';
                    }
                }
                else {
                    $scope.SelectedTypes=$scope.TypTempData;
                    for (j = 0; j < $scope.SelectedTypes.length; j++) {
                        $scope.TypeFiltter.push($scope.SelectedTypes[j]);
                    }
                }
            }
            else {
                $scope.TypSelection.push(TypeVal);
                if($scope.TypTempData.length==undefined){
                    $scope.TypTempData = $scope.GetOurSearchInfoList;
                }

                for (i = 0; i < $scope.TypSelection.length; i++) {
                    $scope.SelectedTypes = $.grep($scope.TypTempData, function (typs) {
                        return typs.typeString.match($scope.TypSelection[i]);
                    });

                    for (j = 0; j < $scope.SelectedTypes.length; j++) {
                        $scope.TypeFiltter.push($scope.SelectedTypes[j]);
                    }
                    $scope.SelectedTypes='';
                }
            }
            $scope.GoToDisplayData=$scope.TypeFiltter;

            GetOutPutDataInfo();
        };

        /*----------------2 Type Filter End-----------------*/

        /*--------------3 Nature Filter Start----------------------*/
        $scope.NatureSelection=[];
        $scope.NatureTempData={};
        $scope.GetNatureFilter=function(NatVal){

            $scope.NatureFiltter = [];
            var GetVal = $scope.NatureSelection.indexOf(NatVal);
            if (GetVal > -1) {
                $scope.NatureSelection.splice(GetVal, 1);
                if($scope.NatureSelection.length!=0) {
                    $scope.RemoveNatureTempData = {};
                    if ($scope.RemoveNatureTempData.length == undefined) {
                        $scope.RemoveNatureTempData = $scope.GetOurSearchInfoList;
                    }
                    for (i = 0; i < $scope.NatureSelection.length; i++) {

                        $scope.SelectedNatures = $.grep($scope.RemoveNatureTempData, function (ntr) {
                            return ntr.natureString.match($scope.NatureSelection[i]);
                        });

                        for (j = 0; j < $scope.SelectedNatures.length; j++) {
                            $scope.NatureFiltter.push($scope.SelectedNatures[j]);
                        }
                    }
                }
                else {
                    $scope.SelectedNatures=$scope.NatureTempData;
                    for (j = 0; j < $scope.SelectedNatures.length; j++) {
                        $scope.NatureFiltter.push($scope.SelectedNatures[j]);
                    }
                }
            }
            else {
                $scope.NatureSelection.push(NatVal);
                if($scope.NatureTempData.length==undefined){
                    $scope.NatureTempData = $scope.GetOurSearchInfoList;
                }
                for (i = 0; i < $scope.NatureSelection.length; i++) {

                    $scope.SelectedNatures = $.grep($scope.NatureTempData, function (ntr) {
                        return ntr.natureString.match($scope.NatureSelection[i]);
                    });

                    for (j = 0; j < $scope.SelectedNatures.length; j++) {
                        $scope.NatureFiltter.push($scope.SelectedNatures[j]);
                    }
                }
            }
            $scope.GoToDisplayData=$scope.NatureFiltter;
            GetOutPutDataInfo();
        };
        /*--------------3 Nature Filter End----------------------*/

            /*--------------4 Duration Filter Start------------------*/
            $scope.HoursSelection=[];
            $scope.HoursTempData={};
            $scope.GetHoursFilter=function (hrVal) {
                debugger;
                $scope.HoursFiltter = [];
                var GetVal = $scope.HoursSelection.indexOf(hrVal);
                if(GetVal > -1) {
                    $scope.HoursSelection.splice(GetVal, 1);
                    if ($scope.HoursSelection.length != 0) {
                        $scope.RemoveHoursTempData = {};
                        if ($scope.RemoveHoursTempData.length == undefined) {
                            $scope.RemoveHoursTempData = $scope.GetOurSearchInfoList;
                        }
                        for (i = 0; i < $scope.HoursSelection.length; i++) {
                            $scope.SelectedHours = $.grep($scope.RemoveHoursTempData, function (srList) {
                                return srList.durationString == $scope.HoursSelection[i];
                            });

                            for (j = 0; j < $scope.SelectedHours.length; j++) {
                                $scope.HoursFiltter.push($scope.SelectedHours[j]);
                            }
                        }
                    }
                    else {
                        $scope.SelectedHours = $scope.HoursTempData;
                        for (j = 0; j < $scope.SelectedHours.length; j++) {
                            $scope.HoursFiltter.push($scope.SelectedHours[j]);
                        }
                    }
                }
                else {

                    $scope.HoursSelection.push(hrVal);
                    if ($scope.HoursTempData.length == undefined) {
                        $scope.HoursTempData = $scope.GetOurSearchInfoList;
                    }

                    for (i = 0; i < $scope.HoursSelection.length; i++) {
                        $scope.SelectedHours = $.grep($scope.HoursTempData, function (srList) {
                            return srList.durationString == $scope.HoursSelection[i];
                        });

                        for (j = 0; j < $scope.SelectedHours.length; j++) {
                            $scope.HoursFiltter.push($scope.SelectedHours[j]);
                        }
                    }

                }

                $scope.GoToDisplayData=$scope.HoursFiltter;
                GetOutPutDataInfo();
            };
            /*--------------4 Duration Filter End------------------*/

            /*-------------- 5 Ratting Filter Start----------------*/
            debugger;
            $scope.RtgSelection=[];
            $scope.RtgTempData={};
            $scope.GetRattingFilter=function (rtgVal) {
                debugger;
                $scope.RtgFiltter = [];
                var GetVal = $scope.RtgSelection.indexOf(rtgVal);
                if (GetVal > -1) {
                    $scope.RtgSelection.splice(GetVal, 1);
                    if ($scope.RtgSelection.length != 0) {
                        $scope.RemoveRtgTempData = {};
                        if ($scope.RemoveRtgTempData.length == undefined) {
                            $scope.RemoveRtgTempData = $scope.GetOurSearchInfoList;
                        }
                        for (i = 0; i < $scope.RtgSelection.length; i++) {
                            $scope.SelectedRtgs = $.grep($scope.RemoveRtgTempData, function (rtgVal) {
                                return rtgVal.odRating== $scope.RtgSelection[i];
                            });
                            for (j = 0; j < $scope.SelectedRtgs.length; j++) {
                                $scope.RtgFiltter.push($scope.SelectedRtgs[j]);
                            }
                        }

                    }
                    else {
                        $scope.SelectedRtgs = $scope.RtgTempData;
                        for (j = 0; j < $scope.SelectedRtgs.length; j++) {
                            $scope.RtgFiltter.push($scope.SelectedRtgs[j]);
                        }
                    }

                }
                else {
                    $scope.RtgSelection.push(rtgVal);
                    if($scope.RtgTempData.length==undefined){
                        $scope.RtgTempData = $scope.GetOurSearchInfoList;
                    }
                    for (i = 0; i < $scope.RtgSelection.length; i++) {

                        $scope.SelectedRtgs = $.grep($scope.RtgTempData, function (rtgVal) {
                            return rtgVal.odRating==$scope.RtgSelection[i];
                        });

                        for (j = 0; j < $scope.SelectedRtgs.length; j++) {
                            $scope.RtgFiltter.push($scope.SelectedRtgs[j]);
                        }
                    }

                }
                $scope.GoToDisplayData=$scope.RtgFiltter;
                GetOutPutDataInfo();

            }


            /*-------------- 5 Ratting Filter End----------------*/

            /*--------------6 Price filter Start-----------*/

            $scope.PricSelection=[];
            $scope.PriceTampData={};
            $scope.GetPriceFilter=function (fltVal) {
                debugger;
                $scope.prcFiltter = [];
                $scope.prcFiltter = $.grep($scope.GetFillAllSearchInfoList, function (GetfltVal) {
                    return fltVal<=GetfltVal.minCost1;
                });
                $scope.GoToDisplayData=$scope.prcFiltter;
                GetOutPutDataInfo();
            }


            /*--------------6 Price filter End-----------*/




//---------------Main Functionalty starts-------------------//
         function GetOutPutDataInfo(){

debugger;
             $scope.DetailsListInfo = $scope.GoToDisplayData;
             var pagesShown = 1;
             var pageSize = 9;

             $scope.paginationLimit = function(data) {
                 return pageSize * pagesShown;
             };
             $scope.hasMoreItemsToShow = function() {
                 return pagesShown < ($scope.DetailsListInfo.length / pageSize);
             };
             $scope.showMoreItems = function() {
                 pagesShown = pagesShown + 1;
             };
             $scope.GetOurSearchInfoList=$scope.GoToDisplayData;




             // $scope.$watch('currentPage + numPerPage', function () {
             //     var begin = (($scope.currentPage - 1) * $scope.numPerPage)
             //         , end = begin + $scope.numPerPage;
             //    // debugger;
             // });
        };
//---------------Main Functionalty Ends-------------------//


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



        $scope.bookResort= function(parkId,res){
                 debugger;

            $localStorage.res = res;
            $localStorage.parkId = parkId;
            $window.location='../Resorts/Details.html';
        }



        }
    }]);


