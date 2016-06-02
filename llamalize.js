"use strict";

/*:
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "llamalize",
			"file": "llamalize.js",
			"path": "llamalize/llamalize.js",
			"module": "llamalize",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/llamalize.git",
			"test": "llamalize-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"harden": "harden"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

var llamalize = function llamalize( text, formal ){
	/*:
		@meta-configuration:
			{
				"text:required": "string",
				"formal:optional": boolean
			}
		@end-meta-configuration
	*/

	if( !text ||
		text === "" ||
		typeof text != "string" )
	{
		return text;
	}

	if( llamalize.TEXT_PATTERN.test( text ) ){
		return text
			.toLowerCase( )
			.replace( llamalize.TERM_PATTERN,
				function onReplaced( match, divideCharacter ){
					if( divideCharacter ){
						return match.replace( divideCharacter, "" ).toUpperCase( );

					}else{
						return match.toUpperCase( );
					}
				} )
			.replace( llamalize.FIRST_LETTER_PATTERN,
				function onReplaced( match ){
					if( formal ){
						return match.toUpperCase( );

					}else{
						return match;
					}
				} );

	}else{
		return text;
	}
};

harden.bind( llamalize )
	( "TEXT_PATTERN", /^(?:[a-zA-Z0-9][a-zA-Z0-9]*[-_ ])*[a-zA-Z0-9][a-zA-Z0-9]*.*$/ );

harden.bind( llamalize )
	( "TERM_PATTERN", /([-_ ])[a-zA-Z0-9]/g );

harden.bind( llamalize )
	( "FIRST_LETTER_PATTERN", /^[a-zA-Z]/ );

if( typeof module != "undefined" ){
	module.exports = llamalize;
}
