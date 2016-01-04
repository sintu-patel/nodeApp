ebookApp.controller('userController', function($scope, $http, $sce) {

	$scope.registeruser = function() {
		$scope.userData = {
			'name': $scope.name,
			'username': $scope.username,
			'password': $scope.password,
			'email': $scope.email,
			'phonenumber': $scope.phonenumber,
			'cityname': $scope.cityname
		};

		$scope.postData();
	};

	$scope.postData = function() {
		var serviceUrl = '/registeruser';
		var request = $http({
			method: 'post',
			url: serviceUrl,
			data: $scope.userData
		});

		request.success(function(response) {
			if (response.STATUS === 'ok') {
				alert('Records updated successfully');
			}
		});
	};


	$scope.login = function() {
		$scope.loginData = {
			'username': $scope.loginuser,
			'password': $scope.loginpassword
		};

		$scope.postLoginData();
	};

	$scope.postLoginData = function() {
		var serviceUrl = '/validatelogin';
		var request = $http({
			method: 'post',
			url: serviceUrl,
			data: $scope.loginData
		});

		request.success(function(response) {
			if (response.STATUS === 'ok') {
				alert('Logged In');
			}

			if (response.STATUS === 'invalid') {
				alert('invalid');
			}
		});
	};

});
