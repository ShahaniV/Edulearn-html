$(".list-header").on("click", function () {
  var $J_li = $(this).parents(".J_list");
  $J_li.hasClass("open") ? $J_li.removeClass("open") : $J_li.addClass("open");
});

//Grade 1 English==================================================================
$(function () {
  $("#g1-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g1-coverflow-english .fa-chevron-right").click(function () {
    $("#g1-english").coverflow("next");
  });

  $("#g1-coverflow-english .fa-chevron-left").click(function () {
    $("#g1-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g1-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g1-english").coverflow("next");
    }
  });
});

//Grade1 Math==========================================================================
$(function () {
  $("#g1-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g1-coverflow-math .fa-chevron-right").click(function () {
    $("#g1-math").coverflow("next");
  });

  $("#g1-coverflow-math .fa-chevron-left").click(function () {
    $("#g1-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g1-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g1-math").coverflow("next");
    }
  });
});

//Grade1 Filipino==========================================================================
$(function () {
  $("#g1-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g1-coverflow-fil .fa-chevron-right").click(function () {
    $("#g1-fil").coverflow("next");
  });

  $("#g1-coverflow-fil .fa-chevron-left").click(function () {
    $("#g1-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g1-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g1-fil").coverflow("next");
    }
  });
});

//Grade1 Science==========================================================================
$(function () {
  $("#g1-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g1-coverflow-science .fa-chevron-right").click(function () {
    $("#g1-science").coverflow("next");
  });

  $("#g1-coverflow-science .fa-chevron-left").click(function () {
    $("#g1-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g1-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g1-science").coverflow("next");
    }
  });
});
//Grade2 English==========================================================================
$(function () {
  $("#g2-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g2-coverflow-english .fa-chevron-right").click(function () {
    $("#g2-english").coverflow("next");
  });

  $("#g2-coverflow-english .fa-chevron-left").click(function () {
    $("#g2-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g2-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g2-english").coverflow("next");
    }
  });
});
//Grade2 Math==========================================================================
$(function () {
  $("#g2-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g2-coverflow-math .fa-chevron-right").click(function () {
    $("#g2-math").coverflow("next");
  });

  $("#g2-coverflow-math .fa-chevron-left").click(function () {
    $("#g2-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g2-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g2-math").coverflow("next");
    }
  });
});
//Grade2 Filipino==========================================================================
$(function () {
  $("#g2-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g2-coverflow-fil .fa-chevron-right").click(function () {
    $("#g2-fil").coverflow("next");
  });

  $("#g2-coverflow-fil .fa-chevron-left").click(function () {
    $("#g2-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g2-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g2-fil").coverflow("next");
    }
  });
});

//Grade2 Science==========================================================================
$(function () {
  $("#g2-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g2-coverflow-science .fa-chevron-right").click(function () {
    $("#g2-science").coverflow("next");
  });

  $("#g2-coverflow-science .fa-chevron-left").click(function () {
    $("#g2-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g2-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g2-science").coverflow("next");
    }
  });
});

//Grade 3 English==================================================================
$(function () {
  $("#g3-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g3-coverflow-english .fa-chevron-right").click(function () {
    $("#g3-english").coverflow("next");
  });

  $("#g3-coverflow-english .fa-chevron-left").click(function () {
    $("#g3-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g3-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g3-english").coverflow("next");
    }
  });
});

//Grade3 Math==========================================================================
$(function () {
  $("#g3-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g3-coverflow-math .fa-chevron-right").click(function () {
    $("#g3-math").coverflow("next");
  });

  $("#g3-coverflow-math .fa-chevron-left").click(function () {
    $("#g3-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g3-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g3-math").coverflow("next");
    }
  });
});

//Grade3 Filipino==========================================================================
$(function () {
  $("#g3-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g3-coverflow-fil .fa-chevron-right").click(function () {
    $("#g3-fil").coverflow("next");
  });

  $("#g3-coverflow-fil .fa-chevron-left").click(function () {
    $("#g3-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g3-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g3-fil").coverflow("next");
    }
  });
});

//Grade3 Science==========================================================================
$(function () {
  $("#g3-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g3-coverflow-science .fa-chevron-right").click(function () {
    $("#g3-science").coverflow("next");
  });

  $("#g3-coverflow-science .fa-chevron-left").click(function () {
    $("#g3-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g3-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g3-science").coverflow("next");
    }
  });
});
//Grade4 English==========================================================================
$(function () {
  $("#g4-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g4-coverflow-english .fa-chevron-right").click(function () {
    $("#g4-english").coverflow("next");
  });

  $("#g4-coverflow-english .fa-chevron-left").click(function () {
    $("#g4-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g4-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g4-english").coverflow("next");
    }
  });
});
//Grade4 Math==========================================================================
$(function () {
  $("#g4-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g4-coverflow-math .fa-chevron-right").click(function () {
    $("#g4-math").coverflow("next");
  });

  $("#g4-coverflow-math .fa-chevron-left").click(function () {
    $("#g4-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g4-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g4-math").coverflow("next");
    }
  });
});
//Grade4 Filipino==========================================================================
$(function () {
  $("#g4-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g4-coverflow-fil .fa-chevron-right").click(function () {
    $("#g4-fil").coverflow("next");
  });

  $("#g4-coverflow-fil .fa-chevron-left").click(function () {
    $("#g4-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g4-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g4-fil").coverflow("next");
    }
  });
});

//Grade4 Science==========================================================================
$(function () {
  $("#g4-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g4-coverflow-science .fa-chevron-right").click(function () {
    $("#g4-science").coverflow("next");
  });

  $("#g4-coverflow-science .fa-chevron-left").click(function () {
    $("#g4-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g4-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g4-science").coverflow("next");
    }
  });
});
