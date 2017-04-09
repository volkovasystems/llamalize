"use strict";

const llamalize = require( "./llamalize.js" );

console.log( llamalize( "hello-world" ) );

console.log( llamalize( "hello_world" ) );

console.log( llamalize( "helloWorld" ) );

console.log( llamalize( "hello world" ) );

console.log( llamalize( "hello world", true ) );
