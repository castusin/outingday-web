app.controller('modalController', ['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','getParksLocalArea','$mdDialog','ngProgressFactory','ViewCitiesInfo',
    function($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,getParksLocalArea,$mdDialog,ngProgressFactory,ViewCitiesInfo) {

        debugger;




        var self = this;

        self.selectedItem  = null;
        self.searchText    = null;

        self.querySearch   = querySearch;
        /*  self.selectedItemChange = selectedItemChange;
         self.searchTextChange   = searchTextChange;*/


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

      /*  function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }*/
        $mdUtil.enableScrolling();
        /**
         * Build `components` list of key/value pairs
         */

    /*-------------------- viewCities service integration starts----------------------*/
        $scope.startTimer = function (){
            $scope.$broadcast('timer-start');

        };

        $scope.stopTimer = function (){
            $scope.$broadcast('timer-stop');

        };

        $scope.$on('timer-stopped', function (event, data){
            console.log('Timer Stopped - data = ', data);
        });


        $scope.startTimer();
        ViewCitiesInfo.ViewCitiesService().then(function(ViewCitiesInfo){
               debugger;
            $scope.stopTimer();
            if(ViewCitiesInfo.responseCode == 200){


                $localStorage.ViewCities =   ViewCitiesInfo.resultObject;

                self.repos         = loadAll();
                function loadAll()

                {


                    var repos = $localStorage.ViewCities;
                    /*  $scope.ctrl.selectedItem = $localStorage.localAreas[0];*/



                    return repos.map( function (repo) {
                        repo.value = repo.cityName.toLowerCase();
                        return repo;
                    });
                }

            }

            else{



            }

        });


        /*-------------------- viewCities service integration Ends----------------------*/
        if( $localStorage.ViewCities == undefined){
            self.repos         = loadAll();
            function loadAll() {

                var repos =    [
                    {stateId:10000002,
                        stateName:"Telangana",
                        cityId:"10000001",
                        cityName : "Hyderabad"
                    }
                ];


                return repos.map( function (repo) {
                    repo.value = repo.cityName.toLowerCase();
                    return repo;
                });
            }
        }

        else{
            self.repos         = loadAll();
            function loadAll()

            {


                var repos = $localStorage.ViewCities;
                /*  $scope.ctrl.selectedItem = $localStorage.localAreas[0];*/



                return repos.map( function (repo) {
                    repo.value = repo.cityName.toLowerCase();
                    return repo;
                });
            }

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

        $scope.citySearchCall = function (cityKey) {
                   debugger;

            if(cityKey == undefined){
                $localStorage.modelsearch =   $scope.ctrl.selectedItem;
                var localArea =   $scope.ctrl.selectedItem.cityKey;

            }
            else{
                $localStorage.modelsearch =   cityKey;
                var localArea =   cityKey.cityKey;
            }



            /*-------------  loader starts --------------*/


            $scope.progressbar = ngProgressFactory.createInstance();
            $scope.progressbar.start();
            $scope.progressbar.setColor('#EC971F');
            $scope.progressbar.setHeight('4px');

            $scope.startTimer();
            getParksLocalArea.ParksLocalAreaDataService(localArea).then(function(localAreaInfo){
                $scope.stopTimer();
                if(localAreaInfo.responseCode == 200){


                    $localStorage.localAreas =   localAreaInfo.resultObject;
                    $timeout($scope.progressbar.complete(), 1000);
                    $scope.$dismiss();
                }

                else{
                    $timeout($scope.progressbar.complete(), 1000);

                    $scope.$dismiss();
                }

            });

        };

        $scope.status = '  ';
        $scope.customFullscreen = false;

        $scope.showAdvanced = function(ev) {

            $scope.$close();
            $mdDialog.show({

                templateUrl: '../../app/Resorts/AllCities.html',
                controller: 'modalController as ctrl',
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

        $scope.hidecitymodal = function () {



            $mdDialog.hide();
        };

        $scope.cancel = function(){

            $mdDialog.cancel();
        }




    }]);