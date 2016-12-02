function usersSrv($q, $http) {
	return {
		getUsers: getUsers
	};

	function getUsers(num=5) {
		let deferred = $q.defer();
		$http.get(`https://randomuser.me/api/?results=${num}`).then(
			res => deferred.resolve(res.data.results),
			err => deferred.reject(err)
		);
		return deferred.promise;
	}
}
usersSrv.$inject = ['$q', '$http'];

export { usersSrv };