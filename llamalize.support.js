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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxsYW1hbGl6ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsInRpdGxlbGl6ZSIsIkRST1BfUEFUVEVSTiIsIlNQQUNFX1BBVFRFUk4iLCJJTkZPUk1BTF9QQVRURVJOIiwibGxhbWFsaXplIiwidGV4dCIsImZvcm1hbCIsInJlcGxhY2UiLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxZQUFZRCxRQUFTLFdBQVQsQ0FBbEI7O0FBRUEsSUFBTUUsZUFBZSxTQUFyQjtBQUNBLElBQU1DLGdCQUFnQixNQUF0QjtBQUNBLElBQU1DLG1CQUFtQixRQUF6Qjs7QUFFQSxJQUFNQyxZQUFZLFNBQVNBLFNBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxNQUExQixFQUFrQztBQUNuRDs7Ozs7Ozs7O0FBU0EsS0FBSVIsTUFBT08sSUFBUCxLQUFpQixPQUFPQSxJQUFQLElBQWUsUUFBcEMsRUFBOEM7QUFDN0MsU0FBT0EsSUFBUDtBQUNBOztBQUVEQSxRQUFPTCxVQUFXSyxJQUFYO0FBQ0xFLFFBREssQ0FDSU4sWUFESixFQUNrQixFQURsQjtBQUVMTSxRQUZLLENBRUlMLGFBRkosRUFFbUIsRUFGbkIsQ0FBUDs7QUFJQSxLQUFJSSxNQUFKLEVBQVk7QUFDWCxTQUFPRCxJQUFQOztBQUVBLEVBSEQsTUFHSztBQUNKLFNBQU9BLEtBQUtFLE9BQUwsQ0FBY0osZ0JBQWQsRUFBZ0MsVUFBRUssS0FBRixVQUFhQSxNQUFNQyxXQUFOLEVBQWIsRUFBaEMsQ0FBUDtBQUNBO0FBQ0QsQ0F4QkQ7O0FBMEJBQyxPQUFPQyxPQUFQLEdBQWlCUCxTQUFqQiIsImZpbGUiOiJsbGFtYWxpemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibGxhbWFsaXplXCIsXG5cdFx0XHRcImZpbGVcIjogXCJsbGFtYWxpemUuanNcIixcblx0XHRcdFwicGF0aFwiOiBcImxsYW1hbGl6ZS9sbGFtYWxpemUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwibGxhbWFsaXplXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9sbGFtYWxpemUuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJsbGFtYWxpemUtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXHRcdFRyYW5zZm9ybSBhbnkgaHVtYW4gcmVhZGFibGUgYWxwaGFudW1lcmljIHN0cmluZyBkaXZpZGVkIGJ5IGNlcnRhaW5cblx0XHRcdGNoYXJhY3RlcnMgaW50byBjYW1lbCBmb3JtLlxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJ0aXRsZWxpemVcIjogXCJ0aXRsZWxpemVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgdGl0bGVsaXplID0gcmVxdWlyZSggXCJ0aXRsZWxpemVcIiApO1xuXG5jb25zdCBEUk9QX1BBVFRFUk4gPSAvXlswLTldKy87XG5jb25zdCBTUEFDRV9QQVRURVJOID0gL1xccysvZztcbmNvbnN0IElORk9STUFMX1BBVFRFUk4gPSAvXltBLVpdLztcblxuY29uc3QgbGxhbWFsaXplID0gZnVuY3Rpb24gbGxhbWFsaXplKCB0ZXh0LCBmb3JtYWwgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJ0ZXh0OnJlcXVpcmVkXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcdFwiZm9ybWFsOm9wdGlvbmFsXCI6IGJvb2xlYW5cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggdGV4dCApIHx8IHR5cGVvZiB0ZXh0ICE9IFwic3RyaW5nXCIgKXtcblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXG5cdHRleHQgPSB0aXRsZWxpemUoIHRleHQgKVxuXHRcdC5yZXBsYWNlKCBEUk9QX1BBVFRFUk4sIFwiXCIgKVxuXHRcdC5yZXBsYWNlKCBTUEFDRV9QQVRURVJOLCBcIlwiICk7XG5cblx0aWYoIGZvcm1hbCApe1xuXHRcdHJldHVybiB0ZXh0O1xuXG5cdH1lbHNle1xuXHRcdHJldHVybiB0ZXh0LnJlcGxhY2UoIElORk9STUFMX1BBVFRFUk4sICggbWF0Y2ggKSA9PiBtYXRjaC50b0xvd2VyQ2FzZSggKSApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxsYW1hbGl6ZTtcbiJdfQ==
//# sourceMappingURL=llamalize.support.js.map
