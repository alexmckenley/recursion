// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:

var stringifyJSON = function (obj) {
  if(typeof obj === "string"){
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)){
    return '[' + _.map(obj, function(value){
      return stringifyJSON(value);
    }).join(",") +  ']';
  }

  if (obj && typeof obj === "object"){
    var temp = _.map(obj, function(value, key){
      if( typeof value !== "function" && typeof value !== "undefined"){
        return stringifyJSON(key) + ":" + stringifyJSON(value);
      }
    });
    temp = _.filter(temp, function(value){
      return value !== undefined
    });
    temp = temp.join(",");
    return '{' +  temp + '}';
  }
  
    return "" + obj;
};
