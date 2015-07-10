(function(){
  var cantSeeMe = "hello world";

  var a = function(a1,a2,a3){
    b(a1,a2);
  };
  var b = function(b1,b2){
    c(b1);
  };
  var c = function(c1){
    console.log('C!');
  };

  window['click-to-call-a'].addEventListener('click',a);
})();
