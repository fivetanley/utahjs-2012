
var fs = require( 'fs' )
  , JSONStream = require( 'JSONStream' )

fs.readFile( 'rows.json', 'utf8', function( err, data ) {
  if ( err ) throw err
  console.log( JSON.parse( data ) )
})
