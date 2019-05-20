//testing numbers
module.exports.absolute=function(number){
    return number>=0?number:-number;
}
//testing strings 
module.exports.greet=function(name){
    return 'welcome' + name;
}
//testing arrays
module.exports.getCurrrencies=function(){
    return ['euro','inr','usd'];
}