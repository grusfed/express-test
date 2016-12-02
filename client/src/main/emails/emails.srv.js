function emailsSrv($q, $http) {
	return {
		getEmails: getEmails
	};

	function getEmails() {
		let deferred = $q.defer(),
			tpl = {
				from: 'user',
				subject: 'Some lorem subject',
				date: +new Date(),
				message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when'
			 };

		let list = Array.from({length: 20}, (item, i) => {
			return {
				from: tpl.from + i,
				subject: tpl.subject,
				date: tpl.date,
				message: tpl.message
			};
		});

		deferred.resolve(list);
		return deferred.promise;
	}
}

export { emailsSrv };
