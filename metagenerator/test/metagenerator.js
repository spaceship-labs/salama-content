var expect    = require('chai').expect;
var metagenerator = require('./../index.js');

describe('it should parse the meta from articles',function(){
  
  describe('it should have 2 objects in all',function(){
    var path=__dirname+'/test_lang';
    var meta=metagenerator(path);  
    expect( meta.all.length ).to.deep.equal( 2 );
  });
  
  describe('it should have 1 object in es_MX',function(){
    var path=__dirname+'/test_lang';
    var meta=metagenerator(path);  
    expect( meta.es_MX.length ).to.deep.equal( 1 );
  });
  
  describe('it should have 1 object in en_US',function(){
    var path=__dirname+'/test_lang';
    var meta=metagenerator(path);  
    expect( meta.en_US.length ).to.deep.equal( 1 );
  });

});
