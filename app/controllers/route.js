'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'views/about.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'views/blog.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog-single', {
    templateUrl: 'views/blog-single.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'views/portfolio.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio-single', {
    templateUrl: 'views/portfolio-single.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'views/checkout.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/error404', {
    templateUrl: 'views/error404.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pricing', {
    templateUrl: 'views/pricing.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'views/register.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/send-mail', {
    templateUrl: 'views/send-mail.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shop', {
    templateUrl: 'views/shop.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/shop-single', {
    templateUrl: 'views/shop-single.html',
    controller: 'homeCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/team', {
    templateUrl: 'views/team.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', [function() {

}])
