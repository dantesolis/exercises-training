export const customMatchers = {
	toEqualJSON: function(util, customEqualityTesters) {
		return {
			compare: function(actual, expected) {
				var str = JSON.stringify;
				var dump = function(collection){
					return str(collection.map(function(element){
						return str(element);
					}).sort());
				};
				var pass = util.equals(dump(actual), dump(expected), customEqualityTesters);
				return { pass,
					message: `Expected ${str(actual)} ${pass ? 'not ': ''}to be equal to ${str(expected)}`
				};
			}
		};
	}
};
