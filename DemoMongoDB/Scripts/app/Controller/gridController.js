/// <reference path="../app.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file

var gridController = (function () {
    function gridController($scope, contactService) {
        var _this = this;
        this.$scope = $scope;
        this.contactService = contactService;
        this.removeTemplate = '<input type="button" value="remove" ng-click="removeRow(row.entity)" />';
        this.RemoveContacts = function (row) {
            angular.forEach(_this.$scope.myData, function (data, index) {
                if (data.Id == row.Id) {
                    this.$scope.myData.splice(index, 1);
                }
            });
        };
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
        $scope.removeRow = function (index) {
            return _this.RemoveContacts(index);
        };
    }
    gridController.prototype.getAllContacts = function () {
        var _this = this;
        var promise = this.contactService.GetAllContacts();
        promise.then(function (result) {
            _this.$scope.myData = result;
        });
    };
    gridController.controllerId = "gridController";
    return gridController;
})();

// Update the app1 variable name to be that of your module variable
app.controller(gridController.controllerId, [
    '$scope', 'contactService', function ($scope, contactService) {
        return new gridController($scope, contactService);
    }
]);
//# sourceMappingURL=gridController.js.map
