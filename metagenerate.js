var fs = require('fs');
var _path = require('path');
var meta = require('./metagenerator');

var pathContent = _path.join(__dirname,'posts');
var pathMeta = _path.join(__dirname,'metadata');
var posts = meta(pathContent);
var prefix = 'locale-';

rmFiles(pathMeta);
for(var lang in posts){
  var filePath = _path.join(pathMeta,prefix+lang+'.json');
  var content = JSON.stringify(posts[lang], undefined, 2);
  write(filePath,content)
}

function write(path,content){
  fs.writeFile(path,content, function(err) {
    if(err) throw(err);
  }); 
}

function rmFiles(path) {
  var files = fs.readdirSync(path);
  if (files.length > 0){
    for (var i = 0; i < files.length; i++) {
      var filePath = path + '/' + files[i];
      if (fs.statSync(filePath).isFile()){
        fs.unlinkSync(filePath);
      }
      else{
        rmFiles(filePath);
      }
    }
  }
}
