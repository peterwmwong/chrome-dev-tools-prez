(function(){
  var a = function(a1,a2,a3){
    console.log('<enter> a');
    b(a1,a2);
    console.log('<exit> a');
  };
  var b = function(b1,b2){
    console.log('<enter> b');
    c(b1);
    console.log('<exit> b');
  };
  var c = function(c1){
    console.log('<enter> c');
    console.log('<exit> c');
  };

  window['click-to-call-a'].addEventListener('click',a);
})();
