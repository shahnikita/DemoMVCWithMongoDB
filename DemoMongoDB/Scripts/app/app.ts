
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />
var apiPaths = {
    ContactApi: 'api/Contacts/',
    getAllContacts: "Home/GetAllContacts",
    createContact: "api/Contacts/CreateContact",
    deleteContact: "api/Contacts/DeleteContact",
    getContact: "api/Contacts/GetContact",
    updateContact: "api/Contacts/UpdateContact"

};

var app = angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'ngGrid']); 
app.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);