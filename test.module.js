"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
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
	@end-test-license

	@test-configuration:
		{
			"package": "llamalize",
			"path": "llamalize/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/llamalize.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"llamalize": "llamalize"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const llamalize = require( "./llamalize.js" );
//: @end-server

//: @client:
const llamalize = require( "./llamalize.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "llamalize", ( ) => {

	describe( "`llamalize( 'hello-world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			assert.equal( llamalize( "hello-world" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'hello_world' )`", ( ) => {
		it( "should be equal to 'helloWorld'" , ( ) => {

			assert.equal( llamalize( "hello_world" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'helloWorld' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			assert.equal( llamalize( "helloWorld" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'hello world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			assert.equal( llamalize( "hello world" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'hello world', true )`", ( ) => {
		it( "should be equal to 'HelloWorld'", ( ) => {

			assert.equal( llamalize( "hello world", true ), "HelloWorld" );

		} );
	} );

} );


//: @end-server


//: @client:

describe( "llamalize", ( ) => {

	describe( "`llamalize( 'hello-world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			assert.equal( llamalize( "hello-world" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'hello_world' )`", ( ) => {
		it( "should be equal to 'helloWorld'" , ( ) => {

			assert.equal( llamalize( "hello_world" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'helloWorld' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			assert.equal( llamalize( "helloWorld" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'hello world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			assert.equal( llamalize( "hello world" ), "helloWorld" );

		} );
	} );

	describe( "`llamalize( 'hello world', true )`", ( ) => {
		it( "should be equal to 'HelloWorld'", ( ) => {

			assert.equal( llamalize( "hello world", true ), "HelloWorld" );

		} );
	} );

} );


//: @end-client

//: @bridge:

describe( "llamalize", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`llamalize( 'hello-world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return llamalize( "hello-world" );
				}

			).value;

			assert.equal( result, "helloWorld" );

		} );
	} );


	describe( "`llamalize( 'hello_world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return llamalize( "hello_world" );
				}

			).value;

			assert.equal( result, "helloWorld" );

		} );
	} );


	describe( "`llamalize( 'helloWorld' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return llamalize( "helloWorld" );
				}

			).value;

			assert.equal( result, "helloWorld" );

		} );
	} );


	describe( "`llamalize( 'hello world' )`", ( ) => {
		it( "should be equal to 'helloWorld'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return llamalize( "hello world" );
				}

			).value;

			assert.equal( result, "helloWorld" );

		} );
	} );


	describe( "`llamalize( 'hello world', true )`", ( ) => {
		it( "should be equal to 'HelloWorld'", ( ) => {

			let result = browser.url( bridgeURL ).execute(

				function( ){
					return llamalize( "hello world", true );
				}

			).value;

			assert.equal( result, "HelloWorld" );

		} );
	} );

} );

//: @end-bridge