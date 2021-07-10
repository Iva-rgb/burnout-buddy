export default {
    methods: {
		$goToRoute(routeName, paramsObj, queryObj) {
			paramsObj = paramsObj || {};
			queryObj = queryObj || {};

			const routeObject = {
				name: routeName,
				params: {
					...paramsObj
				},
				query: {
					...queryObj,
				},
			};
			if (this.$route.name !== routeObject.name) this.$router.push(routeObject);
		},
    }
}