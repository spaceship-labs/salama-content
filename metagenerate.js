var fs = require('fs');
var meta=require('./metagenerator')();
var prefix="locale-";

for(var lang in meta){
  var path =__dirname+'/metadata/'+prefix+lang+'.json';
  var content = JSON.stringify(meta[lang], undefined, 2); 
  write(path,content);
}

function write(path,content){
  fs.writeFile(path,content, function(err) {
    if(err) throw(err);
  }); 
}
