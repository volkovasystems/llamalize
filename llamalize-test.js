
const assert = require( "assert" );
const llamalize = require( "./llamalize.js" );

assert.equal( llamalize( "hello-world" ), "helloWorld", "should be equal to 'helloWorld'" );

assert.equal( llamalize( "hello_world" ), "helloWorld", "should be equal to 'helloWorld'" );

assert.equal( llamalize( "helloWorld" ), "helloWorld", "should be equal to 'helloWorld'" );

assert.equal( llamalize( "hello world" ), "helloWorld", "should be equal to 'helloWorld'" );

assert.equal( llamalize( "hello world", true ), "HelloWorld", "should be equal to 'HelloWorld'" );

console.log( "ok" );
