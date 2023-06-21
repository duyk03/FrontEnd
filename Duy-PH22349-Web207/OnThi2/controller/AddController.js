var AddController = function ($scope, $http, $location) {
  $scope.nameInput = "";
  $scope.emailInput = "";
  $scope.avatarInput = "";
  $scope.statusInput = "";

  $scope.onSave349 = function () {
    $http
      .post(
        URL,
        JSON.stringify({
          name: $scope.nameInput,
          email: $scope.emailInput,
          avatar: $scope.avatarInput,
          status: $scope.statusInput,
        })
      )
      .then(
        function (res) {
          $location.path("/list");
          alert("Thêm thành công");
        },
        function (err) {
          console.log(err);
        }
      );
  };
};
