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

var assert = require("should");



//: @client:
var llamalize = require("./llamalize.support.js");
//: @end-client






//: @client: 

describe("llamalize", function () {

	describe("\"llamalize( \"hello-world\" )\"", function () {
		it("should have value 'helloWorld'", function () {

			assert.equal(llamalize("hello-world"), "helloWorld");

		});
	});

	describe("\"llamalize( \"hello-world\" )\"", function () {
		it("should have value 'helloWorld'", function () {

			assert.equal(llamalize("hello_world"), "helloWorld");

		});
	});

	describe("\"llamalize( \"helloWorld\" )\"", function () {
		it("should have value 'helloWorld'", function () {

			assert.equal(llamalize("helloWorld"), "helloWorld");

		});
	});

	describe("\"llamalize( \"hello world\" )\"", function () {
		it("should have value 'helloWorld'", function () {

			assert.equal(llamalize("hello world"), "helloWorld");

		});
	});

	describe("\"llamalize( \"hello world\", true )\"", function () {
		it("should have value 'HelloWorld'", function () {

			assert.equal(llamalize("hello world", true), "HelloWorld");

		});
	});
});


//: @end-client









// const assert = require( "assert" );
// const llamalize = require( "./llamalize.js" );

// assert.equal( llamalize( "hello-world" ), "helloWorld", "should have value 'helloWorld'" );

// assert.equal( llamalize( "hello_world" ), "helloWorld", "should have value 'helloWorld'" );

// assert.equal( llamalize( "helloWorld" ), "helloWorld", "should have value 'helloWorld'" );

// assert.equal( llamalize( "hello world" ), "helloWorld", "should have value 'helloWorld'" );

// assert.equal( llamalize( "hello world", true ), "HelloWorld", "should have value 'HelloWorld'" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibGxhbWFsaXplIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsWUFBWUQsUUFBUyx3QkFBVCxDQUFsQjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsV0FBVixFQUF1QixZQUFPOztBQUU3QkEsOENBQTBDLFlBQU87QUFDaERDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLEtBQVAsQ0FBY0gsVUFBVyxhQUFYLENBQWQsRUFBMEMsWUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLDhDQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGdDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLFlBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyw2Q0FBeUMsWUFBTztBQUMvQ0MsS0FBSSxnQ0FBSixFQUFzQyxZQUFPOztBQUU1Q0osVUFBT0ssS0FBUCxDQUFjSCxVQUFXLFlBQVgsQ0FBZCxFQUF5QyxZQUF6Qzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsOENBQTBDLFlBQU87QUFDaERDLEtBQUksZ0NBQUosRUFBc0MsWUFBTzs7QUFFNUNKLFVBQU9LLEtBQVAsQ0FBY0gsVUFBVyxhQUFYLENBQWQsRUFBMEMsWUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLG9EQUFnRCxZQUFPO0FBQ3REQyxLQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxFQUEwQixJQUExQixDQUFkLEVBQWdELFlBQWhEOztBQUVBLEdBSkQ7QUFLQSxFQU5EO0FBT0EsQ0F6Q0Q7OztBQTRDQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcImxsYW1hbGl6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJsbGFtYWxpemUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2xsYW1hbGl6ZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcImxsYW1hbGl6ZVwiOiBcImxsYW1hbGl6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBsbGFtYWxpemUgPSByZXF1aXJlKCBcIi4vbGxhbWFsaXplLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5cclxuZGVzY3JpYmUoIFwibGxhbWFsaXplXCIsICggKSA9PiB7XHJcblx0XHJcblx0ZGVzY3JpYmUoIGBcImxsYW1hbGl6ZSggXCJoZWxsby13b3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG9Xb3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggbGxhbWFsaXplKCBcImhlbGxvLXdvcmxkXCIgKSwgXCJoZWxsb1dvcmxkXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwibGxhbWFsaXplKCBcImhlbGxvLXdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsb1dvcmxkJ1wiICwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggbGxhbWFsaXplKCBcImhlbGxvX3dvcmxkXCIgKSwgXCJoZWxsb1dvcmxkXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwibGxhbWFsaXplKCBcImhlbGxvV29ybGRcIiApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgJ2hlbGxvV29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxsYW1hbGl6ZSggXCJoZWxsb1dvcmxkXCIgKSwgXCJoZWxsb1dvcmxkXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwibGxhbWFsaXplKCBcImhlbGxvIHdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsb1dvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBsbGFtYWxpemUoIFwiaGVsbG8gd29ybGRcIiApLCBcImhlbGxvV29ybGRcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBgXCJsbGFtYWxpemUoIFwiaGVsbG8gd29ybGRcIiwgdHJ1ZSApXCJgLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgJ0hlbGxvV29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGxsYW1hbGl6ZSggXCJoZWxsbyB3b3JsZFwiLCB0cnVlICksIFwiSGVsbG9Xb3JsZFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxufSApO1xyXG5cclxuXHJcbi8vOiBAZW5kLWNsaWVudFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBjb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcImFzc2VydFwiICk7XHJcbi8vIGNvbnN0IGxsYW1hbGl6ZSA9IHJlcXVpcmUoIFwiLi9sbGFtYWxpemUuanNcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBsbGFtYWxpemUoIFwiaGVsbG8td29ybGRcIiApLCBcImhlbGxvV29ybGRcIiwgXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG9Xb3JsZCdcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBsbGFtYWxpemUoIFwiaGVsbG9fd29ybGRcIiApLCBcImhlbGxvV29ybGRcIiwgXCJzaG91bGQgaGF2ZSB2YWx1ZSAnaGVsbG9Xb3JsZCdcIiApO1xyXG5cclxuLy8gYXNzZXJ0LmVxdWFsKCBsbGFtYWxpemUoIFwiaGVsbG9Xb3JsZFwiICksIFwiaGVsbG9Xb3JsZFwiLCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsb1dvcmxkJ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGxsYW1hbGl6ZSggXCJoZWxsbyB3b3JsZFwiICksIFwiaGVsbG9Xb3JsZFwiLCBcInNob3VsZCBoYXZlIHZhbHVlICdoZWxsb1dvcmxkJ1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGxsYW1hbGl6ZSggXCJoZWxsbyB3b3JsZFwiLCB0cnVlICksIFwiSGVsbG9Xb3JsZFwiLCBcInNob3VsZCBoYXZlIHZhbHVlICdIZWxsb1dvcmxkJ1wiICk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyggXCJva1wiICk7XHJcbiJdfQ==
//# sourceMappingURL=test.support.js.map
