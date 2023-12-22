// method to validating URL 
module.exports.validateURL = function (str) {
  if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
    return true;
   } else {
    return false;
   }
}