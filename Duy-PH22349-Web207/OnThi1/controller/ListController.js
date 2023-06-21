var ListController = function ($scope, $http) {
  $scope.title = "Quan ly sinh vien";
  $scope.list_sinhVien = [];

  function onGetList349() {
    $http.get(URL).then(
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
      $http.delete(URL + "/" + deleteId).then(
        function (res) {
          onGetList349();
        },
        function (err) {
          console.log(err);
        }
      );
    }
  };
};
