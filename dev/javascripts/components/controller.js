ebookApp.controller('ebookController', function($scope, $http, $sce) {
	$scope.currentPage = 1;
	$scope.totalPage = 6;

	$scope.ebookData = function() {
		var serviceUrl = '/getpage?pageNo=' + $scope.currentPage;
		$http.get(serviceUrl)
		.success(function(response) {
			$scope.pageTitle = response[0].pageTitle;
			$scope.pageContent = response[0].content;
			$scope.pageImage = response[0].img;
			$scope.progress = (($scope.currentPage / $scope.totalPage) * 100) + '%';
		});
	};

	// Make ajax call and show page data
	$scope.showPage = function($event) {
		if ($event === 'play') {
			$scope.currentPage = 1;
		}

		else if ($event === 'prevPage') {
			$scope.currentPage = $scope.currentPage === 1 ? $scope.totalPage : $scope.currentPage - 1;
		}

		else if ($event === 'nextPage') {
			$scope.currentPage = $scope.currentPage === $scope.totalPage ? 1 : $scope.currentPage + 1;
		}

		else {
			$scope.currentPage = parseInt($event, 10);
		}

		$scope.ebookData();
	};

	// Toggle Menu options
	$scope.menuState = 'hidden';
	$scope.toggleMenu = function() {
		$scope.menuState = $scope.menuState === 'hidden' ? 'visible' : 'hidden';
	};

	$scope.addPage = function() {
		$scope.editPageNo = $scope.pageno;
		$scope.editTitle = $scope.pagetitle;
		$scope.editcontent = $scope.pagecontent;
		$scope.editimage = $scope.pageimage;

		var pagaDataArr = {
			'pageNo': $scope.editPageNo,
			'pageTitle': $scope.editTitle,
			'content': $scope.editcontent,
			'img': $scope.editimage
		};

		$scope.pagaDataArr = pagaDataArr;
		$scope.postData();
	};

	$scope.postData = function() {
		var pageParams = $scope.pagaDataArr;
		var serviceUrl = '/insertdata';
		var request = $http({
			method: 'post',
			url: serviceUrl,
			data: $scope.pagaDataArr
		});

		request.success(function(response) {
			if (response.STATUS === 'ok') {
				alert('Records updated successfully');
				$scope.pageno = parseInt(response.totalCount, 10) + 1;
				$scope.pagetitle = '';
				$scope.pagecontent = '';
				$scope.pageimage = '';
			}
		});
	};
});
