var ListController = function ($scope, $http) {
  $scope.title = "Trang Quản lý giày";
  $scope.list_shoes = [];

  function onGetList() {
    $http.get(API_SHOES).then(
      function (res) {
        $scope.list_shoes = res.data;
      },
      function (err) {
        console.log(err);
      }
    );
  }
  onGetList();

  $scope.onDelete = function (deleteId) {
    var isConfirm = window.confirm("Do you want to delete?");

    if (isConfirm) {
      $http.delete(API_SHOES + "/" + deleteId).then(
        function (res) {
          onGetList();
        },
        function (err) {
          console.log(err);
        }
      );
    }
  };
};
