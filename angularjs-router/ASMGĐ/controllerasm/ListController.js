var ListController = function ($scope, $http, $location) {
  $scope.danhsach = [];
  $scope.isLoading = true;

  $scope.onGetList = function () {
    $http.get(API_URL).then(
      function (res) {
        if (res.status == 200) {
          $scope.isLoading = false;
          $scope.danhsach = res.data;
        }
      },
      function (err) {
        console.log(err);
      }
    );
  };
  $scope.onDelete = function (deleteId) {
    var isConfirm = window.confirm("Do you want to delete?");

    if (isConfirm) {
      $http.delete(API_URL + deleteId).then(
        function (res) {
          onGetList();
        },
        function (err) {
          console.log(err);
        }
      );
    }
  };

  $scope.onGetList();
};
