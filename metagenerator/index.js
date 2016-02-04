var mm = require('marky-mark');

module.exports=metaGenerator;

function metaGenerator(){
  var gitpath='content'
  var path = __dirname+'/../'+gitpath;
  var posts= mm.parseDirectorySync(path)
    .filter(validatePosts)
    .map(getMeta);
  return separateByLang(posts);  

  function validatePosts(post){
    var meta=post.meta;
    return meta.published && meta.language && meta.date && 
      meta.title && meta.description;
  }

  function getMeta(post){
    var meta=post.meta;
    meta.path= gitpath+'/'+meta.language+'/'+post.filename+'.md';
    return meta;
  }

  function separateByLang(posts){
    var langs={all:posts}; 
    posts.forEach(function(post){
      var lang=post.language;
      if( !langs[lang]){
        langs[lang]=[];
      }
      langs[lang].push(post);
    });
    return langs;
  }
}

