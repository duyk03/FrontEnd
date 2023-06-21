var EditController = function ($scope, $http, $location, $routeParams) {
  var editId = $routeParams.id;
  $scope.editItem = {};
  $http.get(URL + editId).then(
    function (res) {
      $scope.editItem = res.data;
    },
    function (err) {
      console.log(err);
    }
  );
  $scope.onSave349 = function () {
    $http
      .put(
        URL + editId,
        JSON.stringify({
          name: $scope.editItem.name,
          email: $scope.editItem.email,
          avatar: $scope.editItem.avatar,
          status: $scope.editItem.status,
        })
      )
      .then(
        function (res) {
          $location.path("/list");
          alert("Update thành công");
        },
        function (err) {
          console.log(err);
        }
      );
  };
};
