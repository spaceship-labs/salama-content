var mm = require('marky-mark');
var _path = require('path');

module.exports=metaGenerator;

function metaGenerator(path){
  var posts=getPosts(path)
    .filter(validatePosts)
    .map(getMeta); 

  return separateByLang( posts );

  function getPosts(path){
    return mm.parseDirectorySync(path);
  }

  function validatePosts(post){
    var meta=post.meta;
    return meta.published && meta.language && meta.date && 
      meta.title && meta.description;
  }

  function getMeta(post){
      var meta=post.meta;
      meta.path=_path.join(meta.language,post.filename+'.md');
      return meta;
  }

  function separateByLang(posts){
    var langs={ all:posts }; 
    posts.forEach(function(post){
      var lang=post.language;
      if( !langs[lang] ){
        langs[lang]=[];
      }
      langs[lang].push(post);
    });
    return langs;
  }

}
