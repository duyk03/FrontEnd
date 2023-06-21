var EditController = function ($scope, $http, $location, $routeParams) {
  var editId = $routeParams.id;
  $scope.editItem = {};
  $http.get(API_URL + editId).then(
    function (res) {
      $scope.editItem = res.data;
    },
    function (err) {
      console.log(err);
    }
  );

  // Lưu và quay về danh sách
  $scope.onSave = function () {
    $http
      .put(
        API_URL + editId,
        JSON.stringify({
          name: $scope.editItem.name,
          diaChi: $scope.editItem.diaChi,
          sdt: $scope.editItem.sdt,
          logo: $scope.editItem.logo,
          trangThai: $scope.editItem.trangThai,
        })
      )

      .then(
        function (res) {
          $location.path("/qlch");
          alert("Update sản phẩm thành công");
        },
        function (err) {
          console.log(err);
        }
      );
  };
};
