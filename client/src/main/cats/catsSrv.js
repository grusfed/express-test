function catsSrv($q, $http) {
  const apiUrl = '/api/v1/cats';
  return {
    getCats: getCats,
    getCatById: getCatById,
    deleteCat: deleteCat,
    addCat: addCat,
    updateCat: updateCat
	};

  function addCat(cat) {
    let deferred = $q.defer();
    $http.post(apiUrl, cat).then(
        res => {
          console.log("addCat: " + res.data);
          return deferred.resolve(res.data)
      },
        err => {
        console.log('error: ', err);
        deferred.reject(err)
      }
    );
    return deferred.promise;
  }

  function updateCat(cat) {
    let deferred = $q.defer();
    $http.put(apiUrl + '/' + cat.id, cat).then(
        res => {
          console.log("updateCat: " + res.data);
        return deferred.resolve(res.data)
      },
        err => {
        console.log('error: ', err);
        deferred.reject(err)
      }
    );
    return deferred.promise;
  }

  function deleteCat(id) {
    let deferred = $q.defer();
    $http.delete(apiUrl + '/' + id).then(
        res => {
          console.log("getCatById: " + res.data);
        return deferred.resolve(res.data)
      },
        err => {
        console.log('error: ', err);
        deferred.reject(err)
      }
    );
    return deferred.promise;
  }

  function getCatById(id) {
    let deferred = $q.defer();
    $http.get(apiUrl + '/' + id).then(
        res => {
        console.log("getCatById: " + res.data);
        return deferred.resolve(res.data)
      },
        err => {
        console.log('error: ', err);
        deferred.reject(err)
      }
    );
    return deferred.promise;
  }

	function getCats() {
		let deferred = $q.defer();
		$http.get(apiUrl).then(
			res => {
        console.log("getCats: " + res.data);
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
