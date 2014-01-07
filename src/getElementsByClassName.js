// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className, root) {
  var result = [];
  var root = root || document.body;
  if( $(root).hasClass(className) ){
    result.push(root);
    // console.log("true");
  }


  for(var i = 0; i < root.childNodes.length; i++){
    var child = root.childNodes[i];
    result = result.concat(getElementsByClassName(className, child));
  }
  return result;
};
