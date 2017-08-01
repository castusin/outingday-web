
app.controller('confirmationDetailCtr',['$scope','$state','CreateUserServiceInfo','PayStatusServiceInfo','$rootScope','$localStorage','$window','$http','$filter','$modal','$mdDialog',
    function ($scope,$state,CreateUserServiceInfo,PayStatusServiceInfo,$rootScope,$localStorage,$window,$http,$filter,$modal,$mdDialog) {

       
        if($localStorage.parkId == undefined){
            $window.location='../../index.html';
        }

        else{




        $scope.mrs= $localStorage.mrs ;
        $scope.FirstName= $localStorage.FirstName ;
        $scope.LastName =$localStorage.LastName  ;
        $scope.Email =$localStorage.Email  ;
        $scope.PhoneNumber =$localStorage.PhoneNumber ;


        if($localStorage.facilityTypList == undefined){
            $scope.facilityTypList=[];
        }
        else{
        $scope.facilityTypList = $localStorage.facilityTypList;
        }


        $scope.createUser={
            firstName:'',
            lastName:'',
            phoneNumber1:'',
            phoneNumber2:'',
            address1:'',
            address2:'',
            city:'',
            state:'',
            pincode:'',
            parkId:'',
            userType:'',
            faciltiyTypecode:'',
            fromDate:'',
            toDate:'',
            qty:'',
            totalPrice:'',
            status:'',
            reservedDate:'',
            packageList:[]
        };

        for(i=0;i<$scope.facilityTypList.length;i++){

            $scope.packagesRoomList={
                title:'',
                typeCode:'',
                price:'',
                quantity:'',
                type:''
            };


            $scope.packagesRoomList.typeCode = $scope.facilityTypList[i].facilityTypeCode;
            $scope.packagesRoomList.price =  $scope.facilityTypList[i].regularPrice;
            $scope.packagesRoomList.title = $scope.facilityTypList[i].facilityTypeTitle;
            $scope.packagesRoomList.quantity = 1;
            $scope.packagesRoomList.type = $scope.facilityTypList[i].facilityType;

            $scope.createUser.packageList.push($scope.packagesRoomList);
        }

      /*  if($localStorage.bookPark == ""){
            $scope.packagesRoomList.typeCode = "";
            $scope.packagesRoomList.title = "";
            $scope.packagesRoomList.price = "";
            $scope.packagesRoomList.quantity = "";
            $scope.packagesRoomList.type = "";

        }
        else{
            $scope.packagesRoomList.typeCode = $localStorage.bookPark.facilityTypeCode;
            $scope.packagesRoomList.title = $localStorage.bookPark.facilityTypeTitle;
            $scope.packagesRoomList.price = $localStorage.bookPark.regularPrice;
            $scope.packagesRoomList.quantity = 1;
            $scope.packagesRoomList.type = "R";
          *//*  $scope.createUser.packageList = [];*//*
            $scope.createUser.packageList.push($scope.packagesRoomList);
        }

        if($localStorage.Facilitypackageobject == undefined){
        $scope.packagesRoomList.typeCode = "";
        $scope.packagesRoomList.price = "";
        $scope.packagesRoomList.title = "";
        $scope.packagesRoomList.quantity = "";
        $scope.packagesRoomList.type = "";
        }
         else{
            $scope.packagesRoomList.typeCode = $localStorage.Facilitypackageobject.facilityTypeCode;
            $scope.packagesRoomList.price =  $localStorage.Facilitypackageobject.regularPrice;
            $scope.packagesRoomList.title = $localStorage.Facilitypackageobject.facilityTypeTitle;
            $scope.packagesRoomList.quantity = 1;
            $scope.packagesRoomList.type = "O";
            $scope.createUser.packageList.push($scope.packagesRoomList);
        }*/

        $scope.resListPhoto = $localStorage.res.photoUrl;
        $scope.resListDes = $localStorage.res.description;
        $scope.resListName = $localStorage.res.name;

        $scope.datepicker = $localStorage.bookPark.date;

        $scope.bookParkcurrentPrice = $localStorage.bookPark.currentPrice;

        $scope.FacilityNameList = $localStorage.FacilityNameList;

        $scope.sum = $localStorage.TotalPrice ;



        $scope.checkout  ={
            txnid:"",
            key:"",
            amount:"",
            productinfo:"",
            firstname:"",
            email:"",
            phone:"",
            hash:"",
            surl:"",
            furl:"" ,
            service_provider:""
           


        }







        $scope.payment={
            lastName:'',
            firstname:''
        }





        $scope.checkIn = $localStorage.checkIn;
       /* $scope.checkIn = $filter('date')($scope.checkIn, "yyyy/MM/dd");*/
        $scope.checkOut=$localStorage.checkOut ;
       /* $scope.checkOut  = $filter('date')($scope.checkOut, "yyyy/MM/dd");*/
        $scope.reservedDate = new Date();
        $scope.reservedDate =  $filter('date')($scope.reservedDate, "yyyy-MM-dd");

        $scope.createUser.firstName=$localStorage.FirstName;

            if($localStorage.LastName == undefined){

                $scope.createUser.lastName="";
            }
            else{
                $scope.createUser.lastName=$localStorage.LastName;
            }

        $scope.createUser.emailId = $localStorage.Email;
        $scope.createUser.phoneNumber1=$localStorage.PhoneNumber;
        $scope.createUser. phoneNumber2="";
        $scope.createUser. address1="";
        $scope.createUser.address2="";
        $scope.createUser.city="";
        $scope.createUser.state="";
        $scope.createUser. pincode="";

        $scope.createUser.parkId=$localStorage.parkId;
        $scope.createUser.userType="G";


      /*  $scope.createUser. faciltiyTypecode=$localStorage.facilityTypeTitle;*/
        $scope.createUser.fromDate=$scope.checkIn;
        $scope.createUser.toDate=$scope.checkOut;
        $scope.createUser.qty="1";
        $scope.createUser.totalPrice=$localStorage.TotalPrice;
        $scope.createUser.status="P";
        $scope.createUser.reservedDate=$scope.reservedDate;



            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');

            };

            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');

            };

            $scope.$on('timer-stopped', function (event, data){
                console.log('Timer Stopped - data = ', data);
            });



            debugger;
            $scope.startTimer();
        CreateUserServiceInfo.CreateUserService($scope.createUser).then(function(createUserRes){
            $scope.stopTimer();
            debugger;
            if(createUserRes.responseCode == 200){


                $localStorage.TransactionId = createUserRes.resultObject;

                $scope.checkout.txnid = $localStorage.TransactionId;


            }

            else{


            }




        });


        $scope.checkout.firstname = $localStorage.FirstName;
        $scope.checkout.amount = $localStorage.TotalPrice ;
        $scope.checkout.key = "ClXeRsPQ";
        $scope.checkout.hash = "";
        $scope.checkout.productinfo = "outing day";
        $scope.checkout.email = $localStorage.Email;
        $scope.checkout.txnid = $localStorage.TransactionId;
        $scope.checkout.phone =$localStorage.PhoneNumber;
        $scope.checkout.surl = window.location.origin + "/app/Resorts/paymentsuccess.html";
        $scope.checkout.furl = window.location.origin + "/app/Resorts/paymentfail.html";
        $scope.checkout.service_provider ="payu_paisa";
        $scope.checkout.salt="hTk4cn2yeE";



        $scope.makePaymentCall= function(){


            $scope.checkout.firstname = $localStorage.FirstName;
            $scope.checkout.amount = $localStorage.TotalPrice ;
            $scope.checkout.key = "ClXeRsPQ";
            $scope.checkout.hash = "";
            $scope.checkout.productinfo = "outing day";
            $scope.checkout.email = $localStorage.Email;
            $scope.checkout.txnid = $localStorage.TransactionId;
            $scope.checkout.phone =$localStorage.PhoneNumber;
            $scope.checkout.surl = window.location.origin + "/app/Resorts/paymentsuccess.html";
            $scope.checkout.furl = window.location.origin + "/app/Resorts/paymentfail.html";
            $scope.checkout.service_provider ="payu_paisa";
            $scope.checkout.salt="hTk4cn2yeE";

            var string = $scope.checkout.key + '|' + $scope.checkout.txnid + '|' + $scope.checkout.amount + '|' + $scope.checkout.productinfo + '|' + $scope.checkout.firstname + '|' + $scope.checkout.email + '|||||||||||' + $scope.checkout.salt;
            $scope.checkout.hash = CryptoJS.SHA512(string,"");
            

        } ;

            $scope.ConfirmCall= function(){
                debugger;

                var TransactionId=$localStorage.TransactionId ;
                var paymentStatus="COD" ;
                var cod="Y" ;

                $scope.startTimer();
                PayStatusServiceInfo.PayStatusService(TransactionId,paymentStatus,cod).then(function(createUserRes){
                    $scope.stopTimer();
                    debugger;
                    if(createUserRes.responseCode == 200){

                        $localStorage.TransactionId = "";

                        $scope.codSuccess = "Congratulations!!! Your Order is placed sucessfully";
                        $window.location='../../index.html';

                        /*  $modal.open({
                         templateUrl: '../../app/Resorts/COD.html', // loads the template
                         backdrop: 'static', // setting backdrop allows us to close the modal window on clicking outside the modal window
                         windowClass: 'modal', // windowClass - additional CSS class(es) to be added to a modal window template
                         controller: function ($scope, $modalInstance, $log, user) {

                         $scope.user = user;
                         $scope.submit = function () {
                         $log.log('Submiting user info.'); // kinda console logs this statement
                         $log.log(user);
                         $modalInstance.dismiss('cancel'); // dismiss(reason) - a method that can be used to dismiss a modal, passing a reason
                         };
                         $scope.cancel = function () {
                         $modalInstance.dismiss('cancel');
                             $window.location='../../index.html';
                         };
                         },
                         resolve: {
                         user: function () {
                         return $scope.user;
                         }
                         }
                         });*/

                        /* $window.localStorage.clear();*/

                    }

                    else{

                        $localStorage.TransactionId = "";
                        /* $window.localStorage.clear();*/
                    }



                });






            }


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



        }
    }]);