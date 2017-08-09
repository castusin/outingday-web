
var app = angular.module('MyApp', ['uiSlider','ngMaterial','ngRoute','hm.readmore','ui.router','ui.bootstrap','ngStorage','ngProgress','ngAnimate','ngTouch','angularModalService','dibari.angular-ellipsis','moment-picker','angular-hmac-sha512','ngSanitize','angular-preload-image','google-maps','timer','ngMessages']);

app.config(function($stateProvider, $urlRouterProvider) {

    /*$urlRouterProvider.otherwise('/home');*/

    $stateProvider


        .state('Resorts', {
            url: '/Resorts',
            /*templateUrl:'../journey/ResortsImages/ResortsImages.html',*/
            templateUrl:'app/Resorts/Viewresorts.html',
            controller:'ResortCtr'
        })
 .state('success', {
            url: '/success',
            /*templateUrl:'../journey/ResortsImages/ResortsImages.html',*/
            templateUrl:'app/Resorts/success.html',
            controller:'success'
        })


});

app.directive('ngEnter', function () { //a directive to 'enter key press' in elements with the "ng-enter" attribute

    return function (scope, element, attrs) {

        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
})

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                // this next if is necessary for when using ng-required on your input.
                // In such cases, when a letter is typed first, this parser will be called
                // again, and the 2nd time, the value will be undefined
                if (inputValue == undefined) return ''
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});

app .directive('overwriteEmail', function() {
    var EMAIL_REGEXP = /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/;

    /*/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;*/
    return {
        require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // only apply the validator if ngModel is present and Angular has added the email validator
            if (ctrl && ctrl.$validators.email) {

                // this will overwrite the default Angular email validator
                ctrl.$validators.email = function(modelValue) {
                    return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                };
            }
        }
    };
})

app.directive('ellipsis', [function () {
        return {
            required: 'ngBindHtml',
            restrict: 'A',
            priority: 100,
            link: function ($scope, element, attrs, ctrl) {
                $scope.hasEllipsis = false;
                $scope.$watch(element.html(), function(value) {
                    if (!$scope.hasEllipsis) {
                        // apply this code ONCE
                        $scope.hasEllipsis = true;
                        $(element).trunk8({
                            fill: '&hellip; <a id="read-more" href="#">read more</a>', /*(Default: '&hellip;') The string to insert in place of the omitted text. This value may include HTML.*/
                            lines: 3, /*(Default: 1) The number of lines of text-wrap to tolerate before truncating. This value must be an integer greater than or equal to 1.*/
                            //side: 'right', /*(Default: 'right') The side of the text from which to truncate. Valid values include 'center', 'left', and 'right'.*/
                            tooltip: false, /*(Default: true) When true, the title attribute of the targeted HTML element will be set to the original, untruncated string. Valid values include true and false.*/
                            //width: 'auto', /*(Default: 'auto') The width, in characters, of the desired text. When set to 'auto', trunk8 will maximize the amount of text without spilling over.*/
                            parseHTML: true /*(Default: 'false') When true, parse and save html structure and restore structure in the truncated text.*/
                            //onTruncate /*(Callback): Called after truncation is completed.*/
                        });
                        $(element).on('click', '#read-more', function (event) {
                            $(element).trunk8('revert').append(' <a id="read-less" href="#">read less</a>');
                        });
                        $(element).on('click', '#read-less', function (event) {
                            $(element).trunk8();
                        });
                    }
                });
            }
        };
    }]);

app.directive('starRating', function() {

    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li class="star" ng-repeat="star in stars" ng-class="{ filled: star.filled }" ng-click="toggle($index)"  ng-mouseleave="onMouseLeave($event)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '='
        },
        link: function(scope, elem, attrs) {

            // Initialise the stars array.
            scope.stars = [];

            var updateStars = function(rating) {

                for (var i = 0; i < scope.max; i++) {
                    var filled = i < Math.round(rating);
                    // Check if the item in the stars array exists and
                    // append it, otherwise update it.
                    if (scope.stars[i] === undefined) {
                        scope.stars.push({
                            filled: filled
                        });
                    } else {
                        scope.stars[i].filled = filled;
                    }
                }

            };

            // Trigger an update immediately.
            updateStars(scope.ratingValue);

            // Triggered when the cursor enters a star rating (li element).
            scope.onMouseEnter = function (event, rating) {
                updateStars(rating);
            };

            // Triggered when the cursor leaves a star rating.
            scope.onMouseLeave = function (event) {
                updateStars(scope.ratingValue);
            };

            scope.$watch('ratingValue', function(value, previousValue) {
                // Only update the view when the value changed.
                if (value !== previousValue) {
                    updateStars(scope.ratingValue);
                }
            });

        }
    }
});

app.filter('INR', function () {
    return function (input) {
        if (! isNaN(input)) {
            var currencySymbol = '₹';
            //var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!
            var result = input.toString().split('.');

            var lastThree = result[0].substring(result[0].length - 3);
            var otherNumbers = result[0].substring(0, result[0].length - 3);
            if (otherNumbers != '')
                lastThree = ',' + lastThree;
            var output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

            if (result.length > 1) {
                output += "." + result[1];
            }

            return currencySymbol + output;
        }
    }
});

app.directive('onLoadClicker', ['$timeout',
    function($timeout) {
        return {
            restrict: 'A',
            priority: -1,
            link: function($scope, iElm, iAttrs, controller) {
                $timeout(function() {
                    iElm.triggerHandler('click');
                }, 0);
            }
        };
    }
])

app.filter("foo", function(){
        return function(inputArray){
            return inputArray.map(function(item){
                return {a: item};
            });
        };
    });

app.factory('myMastersList',function () {
    return{
        GetTypesMaster:function () {
            var GetTypmstList=[
                {Id:1,typename:'Friends ',typeCount:''},
                {Id:2,typename:'Family&Kids ',typeCount:''},
                {Id:3,typename:'Corporate Team ',typeCount:''},
                {Id:4,typename:'Couples ',typeCount:''},
                {Id:5,typename:'Join a group ',typeCount:''},
                {Id:6,typename:'Solo ',typeCount:''}
            ];
            return GetTypmstList;
        },
        GetNatureMaster:function () {
            var GetNaturesList = [
                {Id:1,NatureName:'Day Outs ',NatureCount:''},
                {Id:2,NatureName:'Family fun ',NatureCount:''},
                {Id:3,NatureName:'Perfect for Monsoon ',NatureCount:''},
                {Id:4,NatureName:'Sports & Games ',NatureCount:''},
                {Id:5,NatureName:'Adventure Special ',NatureCount:''},
                {Id:6,NatureName:'Team Experiances ',NatureCount:''},
                {Id:7,NatureName:'Food & Drinks ',NatureCount:''},
                {Id:8,NatureName:'Spa & Rejuvanation ',NatureCount:''},
                {Id:9,NatureName:'Night life ',NatureCount:''}
            ];
            return GetNaturesList;
        },
        GetDurationMaster:function () {
            var getDurationList = [
                {Id:1,durationName:'0-2 Hours'},
                {Id:2,durationName:'2-5 Hours'},
                {Id:3,durationName:'Full'},
                {Id:4,durationName:'Multi Day'}
            ];
            return getDurationList;
        },
        GetRattingMaster:function () {
            var getRattingList=[
                {Id:5,ratVal:'5'},
                {Id:4,ratVal:'4'},
                {Id:3,ratVal:'3'},
                {Id:2,ratVal:'2'},
                {Id:1,ratVal:'1'},
            ];
            return getRattingList;
        }
    }
    
})