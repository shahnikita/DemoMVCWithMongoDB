// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file
//// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

var contactService = (function () {
    function contactService($resource) {
        this.$resource = $resource;
        this.getAllContactResource = this.$resource(apiPaths.getAllContacts);
    }
    contactService.prototype.GetAllContacts = function () {
        var promise = this.getAllContactResource.query().$promise;
        return promise;
    };
    contactService.serviceId = "contactService";
    return contactService;
})();

// Update the app1 variable name to be that of your module variable
app.factory(contactService.serviceId, [
    '$resource', function ($resource) {
        return new contactService($resource);
    }
]);
//# sourceMappingURL=contactService.js.map
