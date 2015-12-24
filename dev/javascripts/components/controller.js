ebookApp.controller('ebookController', function($scope, $http, $sce) {
	$scope.pageTitle = 'Hello This is pintu';
	$scope.pageContent = 'Hello this is content';
	$scope.pageImage = 'images/css3.png';
	$scope.currentPage = 1;
	$scope.totalPage = 6;

	$scope.ebookData = function() {
		var serviceUrl = '/getpage?pageNo=' + $scope.currentPage;
		$http.get(serviceUrl)
			.success(function(response) {
				$scope.pageTitle = response[0].pageTitle;
				$scope.pageContent = response[0].content;
				$scope.pageImage = response[0].img;
				$scope.progress = (($scope.currentPage / $scope.totalPage) * 100 ) + '%';
		});
	};
	$scope.ebookData();

	// Make ajax call and show page data
	$scope.showPage = function($event) {
		console.log($event);
		if ($event === 'play') {
			$scope.currentPage = 1;
		}

		if ($event === 'prevPage') {
			$scope.currentPage = $scope.currentPage === 1 ? $scope.totalPage : $scope.currentPage - 1;
		}

		if ($event === 'nextPage') {
			$scope.currentPage = $scope.currentPage === $scope.totalPage ? 1 : $scope.currentPage + 1;
		}

		$scope.ebookData();
	};

	// Toggle Menu options
	$scope.menuState = 'hidden';
	$scope.toggleMenu = function() {
		$scope.menuState = $scope.menuState === 'hidden' ? 'visible' : 'hidden';
	};
});
