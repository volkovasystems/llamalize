"use strict";

/*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "llamalize",
              			"file": "llamalize.js",
              			"path": "llamalize/llamalize.js",
              			"module": "llamalize",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/llamalize.git",
              			"test": "llamalize-test.js",
              			"global": true
              		}
              	@end-module-configuration
              		Transform any human readable alphanumeric string divided by certain
              			characters into camel form.
              	@module-documentation:
              
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"titlelize": "titlelize"
              		}
              	@end-include
              */

var falzy = require("falzy");
var titlelize = require("titlelize");

var DROP_PATTERN = /^[0-9]+/;
var SPACE_PATTERN = /\s+/g;
var INFORMAL_PATTERN = /^[A-Z]/;

var llamalize = function llamalize(text, formal) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"text:required": "string",
                                                  			"formal:optional": boolean
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (falzy(text) || typeof text != "string") {
		return text;
	}

	text = titlelize(text).
	replace(DROP_PATTERN, "").
	replace(SPACE_PATTERN, "");

	if (formal) {
		return text;

	} else {
		return text.replace(INFORMAL_PATTERN, function (match) {return match.toLowerCase();});
	}
};

module.exports = llamalize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxsYW1hbGl6ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsInRpdGxlbGl6ZSIsIkRST1BfUEFUVEVSTiIsIlNQQUNFX1BBVFRFUk4iLCJJTkZPUk1BTF9QQVRURVJOIiwibGxhbWFsaXplIiwidGV4dCIsImZvcm1hbCIsInJlcGxhY2UiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxZQUFZRCxRQUFTLFdBQVQsQ0FBbEI7O0FBRUEsSUFBTUUsZUFBZSxTQUFyQjtBQUNBLElBQU1DLGdCQUFnQixNQUF0QjtBQUNBLElBQU1DLG1CQUFtQixRQUF6Qjs7QUFFQSxJQUFNQyxZQUFZLFNBQVNBLFNBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxNQUExQixFQUFrQztBQUNuRDs7Ozs7Ozs7O0FBU0EsS0FBSVIsTUFBT08sSUFBUCxLQUFpQixPQUFPQSxJQUFQLElBQWUsUUFBcEMsRUFBOEM7QUFDN0MsU0FBT0EsSUFBUDtBQUNBOztBQUVEQSxRQUFPTCxVQUFXSyxJQUFYO0FBQ0xFLFFBREssQ0FDSU4sWUFESixFQUNrQixFQURsQjtBQUVMTSxRQUZLLENBRUlMLGFBRkosRUFFbUIsRUFGbkIsQ0FBUDs7QUFJQSxLQUFJSSxNQUFKLEVBQVk7QUFDWCxTQUFPRCxJQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLEtBQUtFLE9BQUwsQ0FBY0osZ0JBQWQsRUFBZ0MsVUFBRUssS0FBRixVQUFhQSxNQUFNQyxXQUFOLEVBQWIsRUFBaEMsQ0FBUDtBQUNBO0FBQ0QsQ0F4QkQ7O0FBMEJBQyxPQUFPQyxPQUFQLEdBQWlCUCxTQUFqQiIsImZpbGUiOiJsbGFtYWxpemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJsbGFtYWxpemVcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwibGxhbWFsaXplLmpzXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcImxsYW1hbGl6ZS9sbGFtYWxpemUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJsbGFtYWxpemVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbGxhbWFsaXplLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJsbGFtYWxpemUtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cdFx0VHJhbnNmb3JtIGFueSBodW1hbiByZWFkYWJsZSBhbHBoYW51bWVyaWMgc3RyaW5nIGRpdmlkZWQgYnkgY2VydGFpblxyXG5cdFx0XHRjaGFyYWN0ZXJzIGludG8gY2FtZWwgZm9ybS5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcInRpdGxlbGl6ZVwiOiBcInRpdGxlbGl6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCB0aXRsZWxpemUgPSByZXF1aXJlKCBcInRpdGxlbGl6ZVwiICk7XHJcblxyXG5jb25zdCBEUk9QX1BBVFRFUk4gPSAvXlswLTldKy87XHJcbmNvbnN0IFNQQUNFX1BBVFRFUk4gPSAvXFxzKy9nO1xyXG5jb25zdCBJTkZPUk1BTF9QQVRURVJOID0gL15bQS1aXS87XHJcblxyXG5jb25zdCBsbGFtYWxpemUgPSBmdW5jdGlvbiBsbGFtYWxpemUoIHRleHQsIGZvcm1hbCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidGV4dDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFwiZm9ybWFsOm9wdGlvbmFsXCI6IGJvb2xlYW5cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIHRleHQgKSB8fCB0eXBlb2YgdGV4dCAhPSBcInN0cmluZ1wiICl7XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHR9XHJcblxyXG5cdHRleHQgPSB0aXRsZWxpemUoIHRleHQgKVxyXG5cdFx0LnJlcGxhY2UoIERST1BfUEFUVEVSTiwgXCJcIiApXHJcblx0XHQucmVwbGFjZSggU1BBQ0VfUEFUVEVSTiwgXCJcIiApO1xyXG5cclxuXHRpZiggZm9ybWFsICl7XHJcblx0XHRyZXR1cm4gdGV4dDtcclxuXHJcblx0fWVsc2V7XHJcblx0XHRyZXR1cm4gdGV4dC5yZXBsYWNlKCBJTkZPUk1BTF9QQVRURVJOLCAoIG1hdGNoICkgPT4gbWF0Y2gudG9Mb3dlckNhc2UoICkgKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxsYW1hbGl6ZTtcclxuIl19
//# sourceMappingURL=llamalize.support.js.map
