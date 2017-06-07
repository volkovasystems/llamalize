
const assert = require( "assert" );
const llamalize = require( "./llamalize.js" );

assert.equal( llamalize( "hello-world" ), "helloWorld", "should have value 'helloWorld'" );

assert.equal( llamalize( "hello_world" ), "helloWorld", "should have value 'helloWorld'" );

assert.equal( llamalize( "helloWorld" ), "helloWorld", "should have value 'helloWorld'" );

assert.equal( llamalize( "hello world" ), "helloWorld", "should have value 'helloWorld'" );

assert.equal( llamalize( "hello world", true ), "HelloWorld", "should have value 'HelloWorld'" );

console.log( "ok" );
