/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file



interface IgridControllerScope extends ng.IScope {
    removeRow: (index) => void;
}

interface IgridController {

}

class gridController implements IgridController {
    static controllerId: string = "gridController";
    public removeTemplate: string = '<input type="button" value="remove" ng-click="removeRow(row.entity)" />';
    constructor(private $scope, private contactService) {
        $scope.myData = [];
        $scope.mySelections = [];
        this.getAllContacts();



        $scope.gridOptions = {

            data: 'myData',
            selectedItems: $scope.mySelections,
            showSelectionCheckbox: true,
            multiSelect: false,
            showGroupPanel: false,
            jqueryUIDraggable: true,
            filterOptions: { filterText: '', useExternalFilter: false },
            showFilter: true,
            columnDefs: [
                { field: 'Name', displayName: 'Name' },
                { field: 'Phone', displayName: 'Phone' },
                { field: 'Email', displayName: 'Email' },
                { field: 'LastModified', displayName: 'LastModifiedDate', cellFilter: 'date:\'yyyy-MM-dd\'' },
                { field: 'remove', displayName: '', cellTemplate: this.removeTemplate }]

        };
        $scope.removeRow = (index) => this.RemoveContacts(index);
    }

    private getAllContacts() {
        var promise = this.contactService.GetAllContacts();
        promise.then(result=> {
            this.$scope.myData = result;
        });
    }
    private RemoveContacts=(row)=> {

        angular.forEach(this.$scope.myData, function (data, index) {
            if (data.Id == row.Id) {
                this.$scope.myData.splice(index, 1)
        }
        });


}

}

// Update the app1 variable name to be that of your module variable
app.controller(gridController.controllerId, ['$scope', 'contactService', ($scope, contactService) =>
    new gridController($scope, contactService)
]);
