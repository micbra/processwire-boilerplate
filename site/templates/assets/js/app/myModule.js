PROJECT.myModule = (function($, win, doc, undefined) {

	/* private objects */
	var privateVar = 'This is a private Variable',
		anotherVar = 'This is another private Variable';

	function privateFunction() {
		console.log('private function returns: ' + privateVar );
	}


	/* return public object */
	return {
		publicMethod : function() {
			console.log('public method returns: This is a public method with access to private objects -> ' + privateVar );
			privateFunction();
			console.log(anotherVar);
		}
	}

})(jQuery, window, document);