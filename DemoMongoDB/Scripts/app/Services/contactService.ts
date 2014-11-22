
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file
//// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />

interface IcontactService {
    
    GetAllContacts: () => void;
}

class contactService implements IcontactService {
    static serviceId: string = "contactService";
    private getAllContactResource;

    constructor(private $resource: ng.resource.IResourceService) {
        this.getAllContactResource = this.$resource(apiPaths.getAllContacts);

    }

    GetAllContacts() {
        var promise: ng.IPromise<any> = this.getAllContactResource.query().$promise;
        return promise;

    }
}

// Update the app1 variable name to be that of your module variable
app.factory(contactService.serviceId, [ '$resource', ( $resource) =>
    new contactService( $resource)
]);
