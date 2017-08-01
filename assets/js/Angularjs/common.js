



app.controller('MainCtr',['$scope','$state','$window','$rootScope','$localStorage' ,'$timeout','$q','$log','$mdUtil','ModalService','$modal','$filter','$mdDialog'
                           ,function ($scope,$state,$window,$rootScope,$localStorage,$timeout,$q,$log,$mdUtil,ModalService,$modal,$filter,$mdDialog) {


       /* $('#myModal').modal('show');*/

        $rootScope.$on('profile-updated', function(event, profileObj) {
           debugger;
            $scope.showLogOutBtn =true;
            $scope.showLoginBtn = false;
            $scope.firstName = $localStorage.firstName;
            $scope.lastName = $localStorage.lastName;

            if($localStorage.DP == undefined){
                $scope.DP = "assets/images/Login_Icon.png";

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
                $scope.DP = "assets/images/Login_Icon.png";

            }
            else{
                $scope.DP = $localStorage.DP;
            }

        }

        $scope.logOutCall =function(){

            $localStorage.username = undefined;
            $localStorage.DP =  undefined;
                $scope.showLoginBtn = true;
            $scope.showLogOutBtn =false;
        }


        $scope.offersList =[

            {
                offerimg : "offer_1.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",

                offerrating : "1500/-",
                offerprice:   "1300/-",
                save:          "Save-20%",
                offerparkId : "100001",
                amenitiesString:"1,4,6,8,9",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.4484363 ,
                localArea:"Madhapur" ,
                longitude:78.374136,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"FabHotel Tanisha Jubilee Hills",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
              /*  parkId:100318,*/
                parkSubImages:"100318_images/10.jpg,100318_images/1.jpg,100318_images/2.jpg,100318_images/3.jpg,100318_images/4.jpg,100318_images/5.jpg,100318_images/6.jpg,100318_images/7.jpg,100318_images/8.jpg,100318_images/9.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"101.jpg",
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            },
            {
                offerimg : "offer_2.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",
                offerrating : "1800/-",
                offerprice:   "1300/-",

                save:          "Save-30%",
                offerparkId : "100002",
                amenitiesString:"6,8,9,10,11",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.4484363,
                localArea:"Madhapur" ,
                longitude:78.374136,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"ITC Kakatiya- A Luxury Collection Hotel",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
              /*  parkId:100318,*/
                parkSubImages:"100318_images/10.jpg,100318_images/1.jpg,100318_images/2.jpg,100318_images/3.jpg,100318_images/4.jpg,100318_images/5.jpg,100318_images/6.jpg,100318_images/7.jpg,100318_images/8.jpg,100318_images/9.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"102.jpg",
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            },
            {
                offerimg : "offer_3.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",
                offerrating : "2000/-",
                offerprice:   "1300/-",
                save:          "Save-40%",
                offerparkId : "100003",
                amenitiesString:"12,15,16,18",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.4484363 ,
                localArea:"Madhapur" ,
                longitude:78.374136,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"Our Nest",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
               /* parkId:100318,*/
                parkSubImages:"100003_images/1.jpg,100003_images/2.jpg,100003_images/3.jpg,100003_images/4.jpg,100003_images/5.jpg,100003_images/6.jpg,100003_images/7.jpg,100003_images/8.jpg,100003_images/9.jpg,100003_images/10.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"103.jpg" ,
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            },
            {
                offerimg : "offer_4.jpg",
                offerdes : "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset .",
                offerrating : "2500/-" ,
                offerprice:   "1500/-",
                save:          "Save-20%",

                offerparkId : "100004",
                amenitiesString:"2,4,6,8",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.4484363,
                localArea:"Madhapur" ,
                longitude:78.374136,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"Aditya Park - A Sarovar Portico Hotel",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                /*parkId:100318,*/
                parkSubImages:"100004_images/1.jpg,100004_images/2.jpg,100004_images/3.jpg,100004_images/4.jpg,100004_images/5.jpg,100004_images/6.jpg,100004_images/7.jpg,100004_images/8.jpg,100004_images/9.jpg,100004_images/10.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"104.jpg" ,
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            }];




        $scope.popularCategoryList =[
            {
                popularname : "Golkonda Resorts & Spa",
                popularimg : "pop_1.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.1" ,
                popularparkId : "100317",
                amenitiesString:"1,2,3,4",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.3895459,
                localArea:"Madhapur" ,
                longitude:78.3140424,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"Golkonda Resorts & Spa",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                /*parkId:100318,*/
                parkSubImages:"100318_images/10.jpg,100318_images/1.jpg,100318_images/2.jpg,100318_images/3.jpg,100318_images/4.jpg,100318_images/5.jpg,100318_images/6.jpg,100318_images/7.jpg,100318_images/8.jpg,100318_images/9.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"100317_Golkonda Resorts & Spa.jpg",
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            },
        {
        popularname : "Summer Green Resort",
        popularimg : "pop_2.jpg",
        populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

        popularrating : "3.1" ,
        popularparkId : "100318",
        amenitiesString:"1,5,16,17",
        appId:"a8edd8e0",
        city:"Hyderabad",
        currentPrice:0,
        description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
            details:"",
        durationString:"3",
        latitude:17.5703221 ,
        localArea:"Madhapur" ,
        longitude:78.5531653,
        maxPeople:"10",
        metro:"Hyderabad" ,
        minCost1:2000 ,
        minCost1People:15 ,
        minCost2:2500,
        minCost2People:20 ,
        minCost3:0 ,
        minCost3People:0,
        name:"Summer Green Resort",
        natureString:"3,7",
        odRating:0 ,
        overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
       /* parkId:100318,*/
        parkSubImages:"100318_images/10.jpg,100318_images/1.jpg,100318_images/2.jpg,100318_images/3.jpg,100318_images/4.jpg,100318_images/5.jpg,100318_images/6.jpg,100318_images/7.jpg,100318_images/8.jpg,100318_images/9.jpg",
        parkType:"Resort",
        parksubcategory:"FamilyResort" ,
        photoUrl:"100318_Summer Green Resort.jpg" ,
        pin:500081,
        specialOfferPercentage:0,
        specialRate:0,
        sponsoredFlag:"" ,
        state:"Telangana",
        streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
        subCategoryString:"",
        tag:"" ,
        typeString:"2,3"
            },
            {
                popularname : "Dream Valley Resort & Spa",
                popularimg : "pop_3.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.0" ,
                popularparkId : "100319",
                amenitiesString:"2,3,9,10",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.41782 ,
                localArea:"Madhapur" ,
                longitude:78.4447847,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"Dream Valley Resort & Spa",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                /*parkId:100318,*/
                parkSubImages:"100318_images/10.jpg,100318_images/1.jpg,100318_images/2.jpg,100318_images/3.jpg,100318_images/4.jpg,100318_images/5.jpg,100318_images/6.jpg,100318_images/7.jpg,100318_images/8.jpg,100318_images/9.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"100319_Dream Valley Resort & Spa.jpg",
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            },
            {
                popularname : "Mrugavani Resort and Spa",
                popularimg : "pop_4.jpg",
                populardes : "This property is 9 minutes walk from the beach. Located in Baga, 1.9 km from Britto's, Ticlo Resorts.",

                popularrating : "4.1",
                popularparkId : "100320",
                amenitiesString:"4,5,11,12",
                appId:"a8edd8e0",
                city:"Hyderabad",
                currentPrice:0,
                description:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                details:"",
                durationString:"3",
                latitude:17.3527399,
                localArea:"Madhapur" ,
                longitude:78.3352874,
                maxPeople:"10",
                metro:"Hyderabad" ,
                minCost1:2000 ,
                minCost1People:15 ,
                minCost2:2500,
                minCost2People:20 ,
                minCost3:0 ,
                minCost3People:0,
                name:"Mrugavani Resort and Spa",
                natureString:"3,7",
                odRating:0 ,
                overviewText:"All the rooms at the property come with attached bathrooms and modern conveniences like cable TV, telephone, mini bar and tea/coffee maker. Well maintained attached bathrooms here are fitted with essential toiletries. Superb accommodation and a courteous staff ensure that stay is enjoyable and memorable for guests.",
                /*parkId:100318,*/
                parkSubImages:"100318_images/10.jpg,100318_images/1.jpg,100318_images/2.jpg,100318_images/3.jpg,100318_images/4.jpg,100318_images/5.jpg,100318_images/6.jpg,100318_images/7.jpg,100318_images/8.jpg,100318_images/9.jpg",
                parkType:"Resort",
                parksubcategory:"FamilyResort" ,
                photoUrl:"100320_Mrugavani Resort and Spa.jpg",
                pin:500081,
                specialOfferPercentage:0,
                specialRate:0,
                sponsoredFlag:"" ,
                state:"Telangana",
                streetAddress:"Survey No 55/E, Beside Kims Hospital, Gachibowli - Miyapur Road, Kondapur,Hyderabad - 500084",
                subCategoryString:"",
                tag:"" ,
                typeString:"2,3"
            } ];






        this.myDate = new Date();
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
        );
        $scope.minimumDate = new Date();
        $scope.maximumDate = new Date($scope.minimumDate.getFullYear(),$scope.minimumDate.getMonth(),$scope.minimumDate.getDate()+90);

        /*$scope.maxDate = new Date(2017, 8, 10);*/



        var self = this;

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
        if( $localStorage.localAreas == undefined){
        self.repos         = loadAll();
        function loadAll() {

                var repos =    [
                    {
                        'localArea'      : 'Madhapur',

                        'metro'  : 'Hyderabad',
                        'forks'     : 'India'
                    }
                ];






            /*    var repos =    $localStorage.localAreas123;*/




            return repos.map( function (repo) {
                repo.value = repo.localArea.toLowerCase();
                return repo;
            });
        }
        }

         else{
            self.repos         = loadAll();
            function loadAll()

            {


                var repos = $localStorage.localAreas;
              /*  $scope.ctrl.selectedItem = $localStorage.localAreas[0];*/



                return repos.map( function (repo) {
                    repo.value = repo.localArea.toLowerCase();
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




        $scope.loadEditForm = function () {
            $scope.checkItem = "yes";
            $modal.open({
                templateUrl: 'app/Resorts/modal.html',
                controller: 'modalController as ctrl',
                scope: $scope ,
                backdrop: 'static',
                keyboard: false
            })
                .result.then(function() {



                   /* alert('closed');*/
                }, function() {


                    $window.location='index.html';

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


    $scope.MainSearch=function(ctrl){    



		if($scope.ctrl.selectedItem==null){
             alert("Please select Area/Resort Name");
			 return false;
		}		


       // var area=  $scope.details.address_components[0].types[1];
        // var city=  $scope.details.address_components[1].types[0];
        // var dist=   $scope.details.address_components[2].types[0];
        // var state=  $scope.details.address_components[3].types[0] ;
        // var country=  $scope.details.address_components[4].types[0];

        // var lat=  $scope.details.geometry.location.lat() ;
        // var lng=  $scope.details.geometry.location.lng() ;
        $scope.ctrl.myDate =  $filter('date')($scope.ctrl.myDate, "yyyy-MM-dd");
        $scope.ctrl.maxDate =  $filter('date')($scope.ctrl.maxDate, "yyyy-MM-dd");


          var searchArea =   $scope.ctrl.selectedItem;
          /*var searchresult =  $scope.result;*/
        $localStorage.searchInput =   searchArea;
        $localStorage.checkIn =   $scope.ctrl.myDate;
        $localStorage.checkOut =   $scope.ctrl.maxDate;



        /*$state.go('ResortsImages');*/
        $window.location='../../app/Resorts/Viewresorts.html';

    }


        $scope.loginPage = function(ev) {


            $mdDialog.show({

                templateUrl: 'app/Resorts/login.html',
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


            $mdDialog.show({

                templateUrl: 'app/Resorts/register.html',
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



        $scope.offerCall= function(parkId,res){

            $scope.ctrl.myDate =  $filter('date')($scope.ctrl.myDate, "yyyy-MM-dd");
            $scope.ctrl.maxDate =  $filter('date')($scope.ctrl.maxDate, "yyyy-MM-dd");

            $localStorage.checkIn =   $scope.ctrl.myDate;
            $localStorage.checkOut =   $scope.ctrl.maxDate;
            $localStorage.res = res;
            $localStorage.parkId = parkId;
            $window.location='../../app/Resorts/Details.html';
        }

        $scope.popularCall= function(parkId,res){

            $scope.ctrl.myDate =  $filter('date')($scope.ctrl.myDate, "yyyy-MM-dd");
            $scope.ctrl.maxDate =  $filter('date')($scope.ctrl.maxDate, "yyyy-MM-dd");

            $localStorage.checkIn =   $scope.ctrl.myDate;
            $localStorage.checkOut =   $scope.ctrl.maxDate;
            $localStorage.res = res;
            $localStorage.parkId = parkId;
            $window.location='../../app/Resorts/Details.html';
        }



}]);


