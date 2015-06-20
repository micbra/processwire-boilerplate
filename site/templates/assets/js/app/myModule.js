PROJECT.myModule = (function($, win, doc, undefined) {

	/* private objects */
	var privateVar = 'This is a private Variable',
		anotherVar = 'This is another private Variable';

	function privateFunction() {
		console.log('private function returns: ' + privateVar );
	}
	function anotherPrivateFunction() {
		api.anotherPublicMethod();
	}


	/* public methods */
	var api = {
		publicMethod : function() {
			console.log('public method returns: This is a public method with access to private objects -> ' + privateVar );
			privateFunction();
			console.log(anotherVar);
		},
		anotherPublicMethod: function() {
			api.publicMethod();
		}
	};
	
	/* return public methods */
	return api;

})(jQuery, window, document);
