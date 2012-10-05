
var fs = require( 'fs' )
  , JSONStream = require( 'JSONStream' )
  , parsedStream = JSONStream.parse( [ 'data', true ] )
  , fileStream = fs.createReadStream( 'rows.json' )

parsedStream.on( 'data', function( data ) {
  console.log( JSON.stringify( data ) )
})

fileStream.pipe( parsedStream )

