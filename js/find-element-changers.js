(function(){
  var toggle = false;
  setInterval(function(){
    var el = document.querySelector('section.present #my-randomly-flashing-text');
    if (el) {
      toggle = !toggle;
      el.setAttribute( 'style', 'color:' + (toggle && 'red' || 'white'));
    }
  },2000);
})();
