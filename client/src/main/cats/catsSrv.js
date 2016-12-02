function catsSrv($q, $http) {
  const apiUrl = '/api/v1/cats';
  return {
    getCats: getCats
	};

	function getCats() {
		let deferred = $q.defer();
		$http.get(apiUrl).then(
			res => {
        console.log(res);
        return deferred.resolve(res.data)
      },
			err => {
        console.log('error: ', err);
        deferred.reject(err)
      }
		);
		return deferred.promise;
	}
}
catsSrv.$inject = ['$q', '$http'];

export { catsSrv };
