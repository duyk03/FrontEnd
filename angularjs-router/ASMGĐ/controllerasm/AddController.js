var AddController = function ($scope, $http, $location) {
  $scope.nameInput = "";
  $scope.diaChiInput = "";
  $scope.sdtInput = "";
  $scope.logoInput =
    "https://haycafe.vn/wp-content/uploads/2021/11/hinh-anh-hoat-hinh-de-thuong-cute-dep-nhat.jpg";
  $scope.trangThaiInput = 0;
  $scope.onSave = function () {
    $http
      .post(
        API_URL,
        JSON.stringify({
          name: $scope.nameInput,
          diaChi: $scope.diaChiInput,
          sdt: $scope.sdtInput,
          logo: $scope.logoInput,
          trangThai: $scope.trangThaiInput,
        })
      )
      .then(
        function (res) {
          $location.path("/qlch");
          alert("Thêm sản phẩm thành công");
        },
        function (err) {}
      );
  };
};
