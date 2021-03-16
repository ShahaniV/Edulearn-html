$(".list-header").on("click", function () {
  var $J_li = $(this).parents(".J_list");
  $J_li.hasClass("open") ? $J_li.removeClass("open") : $J_li.addClass("open");
});

//Grade 7 English==================================================================
$(function () {
  $("#g7-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g7-coverflow-english .fa-chevron-right").click(function () {
    $("#g7-english").coverflow("next");
  });

  $("#g7-coverflow-english .fa-chevron-left").click(function () {
    $("#g7-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g7-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g7-english").coverflow("next");
    }
  });
});

//Grade7 Math==========================================================================
$(function () {
  $("#g7-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g7-coverflow-math .fa-chevron-right").click(function () {
    $("#g7-math").coverflow("next");
  });

  $("#g7-coverflow-math .fa-chevron-left").click(function () {
    $("#g7-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g7-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g7-math").coverflow("next");
    }
  });
});

//Grade7 Filipino==========================================================================
$(function () {
  $("#g7-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g7-coverflow-fil .fa-chevron-right").click(function () {
    $("#g7-fil").coverflow("next");
  });

  $("#g7-coverflow-fil .fa-chevron-left").click(function () {
    $("#g7-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g7-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g7-fil").coverflow("next");
    }
  });
});

//Grade7 Science==========================================================================
$(function () {
  $("#g7-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g7-coverflow-science .fa-chevron-right").click(function () {
    $("#g7-science").coverflow("next");
  });

  $("#g7-coverflow-science .fa-chevron-left").click(function () {
    $("#g7-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g7-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g7-science").coverflow("next");
    }
  });
});
//Grade8 English==========================================================================
$(function () {
  $("#g8-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g8-coverflow-english .fa-chevron-right").click(function () {
    $("#g8-english").coverflow("next");
  });

  $("#g8-coverflow-english .fa-chevron-left").click(function () {
    $("#g8-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g8-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g8-english").coverflow("next");
    }
  });
});
//Grade8 Math==========================================================================
$(function () {
  $("#g8-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g8-coverflow-math .fa-chevron-right").click(function () {
    $("#g8-math").coverflow("next");
  });

  $("#g8-coverflow-math .fa-chevron-left").click(function () {
    $("#g8-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g8-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g8-math").coverflow("next");
    }
  });
});
//Grade8 Filipino==========================================================================
$(function () {
  $("#g8-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g8-coverflow-fil .fa-chevron-right").click(function () {
    $("#g8-fil").coverflow("next");
  });

  $("#g8-coverflow-fil .fa-chevron-left").click(function () {
    $("#g8-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g8-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g8-fil").coverflow("next");
    }
  });
});

//Grade8 Science==========================================================================
$(function () {
  $("#g8-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g8-coverflow-science .fa-chevron-right").click(function () {
    $("#g8-science").coverflow("next");
  });

  $("#g8-coverflow-science .fa-chevron-left").click(function () {
    $("#g8-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g8-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g8-science").coverflow("next");
    }
  });
});

//Grade 9 English==================================================================
$(function () {
  $("#g9-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g9-coverflow-english .fa-chevron-right").click(function () {
    $("#g9-english").coverflow("next");
  });

  $("#g9-coverflow-english .fa-chevron-left").click(function () {
    $("#g9-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g9-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g9-english").coverflow("next");
    }
  });
});

//Grade9 Math==========================================================================
$(function () {
  $("#g9-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g9-coverflow-math .fa-chevron-right").click(function () {
    $("#g9-math").coverflow("next");
  });

  $("#g9-coverflow-math .fa-chevron-left").click(function () {
    $("#g9-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g9-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g9-math").coverflow("next");
    }
  });
});

//Grade9 Filipino==========================================================================
$(function () {
  $("#g9-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g9-coverflow-fil .fa-chevron-right").click(function () {
    $("#g9-fil").coverflow("next");
  });

  $("#g9-coverflow-fil .fa-chevron-left").click(function () {
    $("#g9-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g9-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g9-fil").coverflow("next");
    }
  });
});

//Grade9 Science==========================================================================
$(function () {
  $("#g9-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g9-coverflow-science .fa-chevron-right").click(function () {
    $("#g9-science").coverflow("next");
  });

  $("#g9-coverflow-science .fa-chevron-left").click(function () {
    $("#g9-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g9-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g9-science").coverflow("next");
    }
  });
});
//Grade10 English==========================================================================
$(function () {
  $("#g10-english").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g10-coverflow-english .fa-chevron-right").click(function () {
    $("#g10-english").coverflow("next");
  });

  $("#g10-coverflow-english .fa-chevron-left").click(function () {
    $("#g10-english").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g10-english").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g10-english").coverflow("next");
    }
  });
});
//Grade10 Math==========================================================================
$(function () {
  $("#g10-math").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g10-coverflow-math .fa-chevron-right").click(function () {
    $("#g10-math").coverflow("next");
  });

  $("#g10-coverflow-math .fa-chevron-left").click(function () {
    $("#g10-math").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g10-math").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g10-math").coverflow("next");
    }
  });
});
//Grade10 Filipino==========================================================================
$(function () {
  $("#g10-fil").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g10-coverflow-fil .fa-chevron-right").click(function () {
    $("#g10-fil").coverflow("next");
  });

  $("#g10-coverflow-fil .fa-chevron-left").click(function () {
    $("#g10-fil").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g10-fil").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g10-fil").coverflow("next");
    }
  });
});

//Grade10 Science==========================================================================
$(function () {
  $("#g10-science").coverflow({
    active: 1,
    select: function (event, ui) {
      console.log();
    },
  });

  $(".ui-state-active a").click(function () {
    window.location = $this.attr("href");
  });

  $("#g10-coverflow-science .fa-chevron-right").click(function () {
    $("#g10-science").coverflow("next");
  });

  $("#g10-coverflow-science .fa-chevron-left").click(function () {
    $("#g10-science").coverflow("prev");
  });

  $("body").keydown(function (e) {
    // left arrow
    if ((e.keyCode || e.which) == 37) {
      $("#g10-science").coverflow("prev");
    }
    // right arrow
    if ((e.keyCode || e.which) == 39) {
      $("#g10-science").coverflow("next");
    }
  });
});
