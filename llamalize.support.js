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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
              			],
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/llamalize.git",
              			"test": "llamalize-test.js",
              			"global": true
              		}
              	@end-module-configuration
              		Transform any human readable alphanumeric string divided by certain
              		characters into camel form. I named it llamalize because camelize is
              		too mainstream. And llamas are way better
              	@module-documentation:
              
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"harden": "harden",
              			"protype": "protype",
              			"titlelize": "titlelize"
              		}
              	@end-include
              */

var falzy = require("falzy");
var harden = require("harden");
var protype = require("protype");
var titlelize = require("titlelize");

var llamalize = function llamalize(text, formal) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"text:required": "string",
                                                  			"formal:optional": boolean
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (falzy(text) ||
	!protype(text, STRING))
	{
		return text;
	}

	text = titlelize(text).
	replace(llamalize.DROP_PATTERN, "").
	replace(llamalize.SPACE_PATTERN, "");

	if (formal) {
		return text;

	} else {
		return text.
		replace(llamalize.INFORMAL_PATTERN,
		function onReplace(match) {
			return match.toLowerCase();
		});
	}
};

harden.bind(llamalize)(
"DROP_PATTERN", /^[0-9]+/);

harden.bind(llamalize)(
"SPACE_PATTERN", /\s+/g);

harden.bind(llamalize)(
"INFORMAL_PATTERN", /^[A-Z]/);

module.exports = llamalize;

//# sourceMappingURL=llamalize.support.js.map