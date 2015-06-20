PROJECT.myModule = (function($, win, doc, undefined) {

	/* private */
	var _private = {
		var privateVar = 'this is a private variable';

		function privateFunction() {
			console.log( privateVar );
		}
		function anotherPrivateFunction() {
			_public.anotherPublicMethod();
		}
	}


	/* public */
	var _public = {
		publicMethod : function() {},
		anotherPublicMethod: function() {},
		yetAnotherPublicMethod: _private.privateFunction
	};
	
	/* return public object */
	return _public;

})(jQuery, window, document);
