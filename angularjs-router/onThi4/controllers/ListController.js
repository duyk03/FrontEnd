var ListController = function ($scope, $http) {
  $scope.title = "Quản lý sinh viên";
  $scope.list_sinhVien = [];

  function onGetList349() {
    $http.get(API_URL).then(
      function (res) {
        $scope.list_sinhVien = res.data;
      },
      function (err) {
        console.log(err);
      }
    );
  }
  onGetList349();

  $scope.onDelete349 = function (deleteId) {
    var confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      $http.delete(API_URL + "/" + deleteId).then(
        function (res) {
          onGetList349();
        },
        function (err) {}
      );
    }
  };
};
