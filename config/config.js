var myapp = angular.module('app', ['ui.router','ngAnimate']);
myapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'view/index.html',
            controller: 'index_ctr'
        })
        .state('PC.travel', {
            url: '/travel',
            templateUrl: 'view/PC_travel.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html',
            controller: 'login_ctr'
        }) 
        .state('register', {
            url: '/register',
            templateUrl: 'view/register.html',
            controller: 'register_ctr'
        })
        .state('demo',{
            url:'/demo',
            templateUrl:'view/demo.html',
            controller:'demo_ctr'
        })
        .state('buy',{
            url:'/buy',
            templateUrl:'view/buy.html',
            controller:'buy_ctr'
        })
        .state('cates',{
                url:'/cates',
                templateUrl:'view/cates.html',
                controller:'cates_ctr'
            })
        .state('home',{
                url:'/home',
                templateUrl:'view/home.html',
                // controller:'home_ctr'
            })
        .state('home.Am',{
                url:'/Am',
                templateUrl:'view/home_Am.html',
                controller:'home_Am_ctr'
            })
        .state('home.img',{
            url:'/img',
            templateUrl:'view/home_img.html',
            controller:'home_img_ctr'
        })
    $urlRouterProvider.otherwise('index');
}]);
