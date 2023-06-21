var AddController = function ($scope, $http, $location) {
  $scope.nameInput = "";
  $scope.emailInput = "";
  $scope.avatarInput = "";
  $scope.statusInput = "";

  $scope.onSave = function () {
    $http
      .post(
        API_URL,
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
          alert("Thêm sản phẩm thành công");
        },
        function (err) {}
      );
  };
};
