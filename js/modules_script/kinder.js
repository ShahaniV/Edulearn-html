$('.list-header').on('click', function() {
    var $J_li = $(this).parents('.J_list')
    $J_li.hasClass('open') ? $J_li.removeClass('open') : $J_li.addClass('open');
  })
  
  //Kinder Learning==================================================================
  $(function() {
  
      $('#k-learning').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#k-coverflow-learning .fa-chevron-right').click(function() {
        $('#k-learning').coverflow('next');
      });
    
      $('#k-coverflow-learning .fa-chevron-left').click(function() {
        $('#k-learning').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#k-learning').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#k-learning').coverflow('next');
        }
      });
    
    });
  
  
    //Kinder Reading==========================================================================
    $(function() {
  
      $('#k-reading').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#k-coverflow-reading .fa-chevron-right').click(function() {
        $('#k-reading').coverflow('next');
      });
    
      $('#k-coverflow-reading .fa-chevron-left').click(function() {
        $('#k-reading').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#k-reading').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#k-reading').coverflow('next');
        }
      });
    
    });