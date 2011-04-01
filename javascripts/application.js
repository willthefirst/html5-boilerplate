var NAMESPACE = {
	common: {
		init: function() {
			
		}
	}
};

var UTIL = {
	exec: function( controller, action ) {
		var ns = NAMESPACE,
			act = ( action === undefined ) ? "init" : action;
		
		if ( controller !== "" && ns[controller] && typeof ns[controller][act] == "function" ) {
			ns[controller][act]();
		}
	},
	
	init: function() {
		var body = document.body,
			controller = body.getAttribute( "data-controller" ),
			action = body.getAttribute( "data-action" );
		
		UTIL.exec( "common" );
		UTIL.exec( controller );
		UTIL.exec( controller, action );
	}
};

$().ready( UTIL.init );