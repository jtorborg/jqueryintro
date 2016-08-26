//======Angular variable==============//
var myApp = angular.module("myApp", []);

//=====Angular Controller============//

myApp.controller("myController", ["$scope", "$http", function($scope, $http) {

    console.log("myController loaded");


     totalSalary = 0;
     $scope.indSalary = 0;
     values = {};
     var employees = [];
     $scope.userClick = function() {
       console.log("click");

         // initialize a new variable as an empty object
         var firstname = $scope.employeefirstname;
         var lastname = $scope.employeelastname;
         var id = $scope.idnumber;
         var jobtitle = $scope.jobtitle;
         var salary =  $scope.salary;

         var monthlySalary = ($scope.salary)/12



         employees.push(
         {firstname : $scope.employeefirstname,
         lastname : $scope.employeelastname,
         id : $scope.idnumber,
         jobtitle: $scope.jobtitle,
         salary : $scope.salary,
         monthlySalary :  ($scope.salary)/12
         });
         console.log(employees);

         $scope.employeesArray = employees;
         console.log($scope.employeesArray);

         $scope.employeefirstname = "";
         $scope.employeelastname = "";
         $scope.idnumber = "";
         $scope.jobtitle =  "";
         $scope.salary = "";

};









}]);




//
// indSalary = parseFloat(values.salary);
// totalSalary += indSalary / 12;
// values.salary = Math.round(indSalary);
// array.push(values);
//
// console.log(values);
// console.log(indSalary);
// console.log(totalSalary);
// console.log(array);
//
// // clear out inputs
// $('#employeeinfo').find('input[type=text]').val('');
//
// $("#misc").text('$' + totalSalary);
//
// console.log(totalSalary);
//
// array.forEach(function(element) {
// totalSalary = totalSalary + (array[i].salary);
//
//
// });
//
// ;
