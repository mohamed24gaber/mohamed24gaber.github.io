(function(){
    /* click the cloud to split it open, click again to close */
    var reveal = document.getElementById('reveal');
    var hint = document.getElementById('hint');
    reveal.addEventListener('click', function(){
      var open = reveal.classList.toggle('is-open');
      reveal.setAttribute('aria-pressed', open ? 'true' : 'false');
      reveal.setAttribute('aria-label', open ? 'Close the cloud over the photo' : 'Open the cloud to show the photo');
      hint.lastChild.textContent = open ? ' Close the cloud' : ' Click the cloud';
    });

    /* one entrance pass per element, on load and on scroll */
    var items = document.querySelectorAll('.rise');
    if(!('IntersectionObserver' in window)){
      items.forEach(function(el){ el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
      });
    },{rootMargin:'0px 0px -12% 0px',threshold:.12});
    items.forEach(function(el){ io.observe(el); });
  })();