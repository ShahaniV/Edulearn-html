
  //Grade 5 English==================================================================
  $(function() {
  
      $('#g5-english').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g5-coverflow-english .fa-chevron-right').click(function() {
        $('#g5-english').coverflow('next');
      });
    
      $('#g5-coverflow-english .fa-chevron-left').click(function() {
        $('#g5-english').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g5-english').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g5-english').coverflow('next');
        }
      });
    
    });
  
  
    //Grade5 Math==========================================================================
    $(function() {
  
      $('#g5-math').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g5-coverflow-math .fa-chevron-right').click(function() {
        $('#g5-math').coverflow('next');
      });
    
      $('#g5-coverflow-math .fa-chevron-left').click(function() {
        $('#g5-math').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g5-math').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g5-math').coverflow('next');
        }
      });
    
    });
  
    //Grade5 Filipino==========================================================================
    $(function() {
  
      $('#g5-fil').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g5-coverflow-fil .fa-chevron-right').click(function() {
        $('#g5-fil').coverflow('next');
      });
    
      $('#g5-coverflow-fil .fa-chevron-left').click(function() {
        $('#g5-fil').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g5-fil').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g5-fil').coverflow('next');
        }
      });
    
    });
  
    //Grade5 Science==========================================================================
    $(function() {
  
      $('#g5-science').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g5-coverflow-science .fa-chevron-right').click(function() {
        $('#g5-science').coverflow('next');
      });
    
      $('#g5-coverflow-science .fa-chevron-left').click(function() {
        $('#g5-science').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g5-science').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g5-science').coverflow('next');
        }
      });
    
    });
    //Grade6 English==========================================================================
    $(function() {
  
      $('#g6-english').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g6-coverflow-english .fa-chevron-right').click(function() {
        $('#g6-english').coverflow('next');
      });
    
      $('#g6-coverflow-english .fa-chevron-left').click(function() {
        $('#g6-english').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g6-english').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g6-english').coverflow('next');
        }
      });
    
    });
    //Grade6 Math==========================================================================
    $(function() {
  
      $('#g6-math').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g6-coverflow-math .fa-chevron-right').click(function() {
        $('#g6-math').coverflow('next');
      });
    
      $('#g6-coverflow-math .fa-chevron-left').click(function() {
        $('#g6-math').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g6-math').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g6-math').coverflow('next');
        }
      });
    
    });
    //Grade6 Filipino==========================================================================
    $(function() {
  
      $('#g6-fil').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g6-coverflow-fil .fa-chevron-right').click(function() {
        $('#g6-fil').coverflow('next');
      });
    
      $('#g6-coverflow-fil .fa-chevron-left').click(function() {
        $('#g6-fil').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g6-fil').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g6-fil').coverflow('next');
        }
      });
    
    });
  
    //Grade6 Science==========================================================================
    $(function() {
  
      $('#g6-science').coverflow({
        active: 1,
        select: function(event, ui) {
          console.log();
        }
      });
    
      $('.ui-state-active a').click(function() {
        window.location = $this.attr('href');
      });
    
      $('#g6-coverflow-science .fa-chevron-right').click(function() {
        $('#g6-science').coverflow('next');
      });
    
      $('#g6-coverflow-science .fa-chevron-left').click(function() {
        $('#g6-science').coverflow('prev');
      });
    
      $("body").keydown(function(e) {
        // left arrow
        if ((e.keyCode || e.which) == 37) {
          $('#g6-science').coverflow('prev');
        }
        // right arrow
        if ((e.keyCode || e.which) == 39) {
          $('#g6-science').coverflow('next');
        }
      });
    
    });
  