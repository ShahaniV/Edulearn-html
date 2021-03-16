window.onkeydown = function(e) {
    if(e.key == 'ArrowRight') {
      if(document.querySelector('.LibraryEntry.isActive')) {
       var Entry = document.querySelector('.LibraryEntry.isActive');
 
       if(Entry.nextElementSibling) {
         Entry.nextElementSibling.classList.add('isActive');
         Entry.nextElementSibling.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
         Entry.classList.remove('isActive');
       } else {
         Entry.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
       }
      } else {
       document.querySelector('.LibraryEntry').classList.add('isActive');
      }
    }
   
   if(e.key == 'ArrowLeft') {
      if(document.querySelector('.LibraryEntry.isActive')) {
       var Entry = document.querySelector('.LibraryEntry.isActive');
 
       if(Entry.previousElementSibling) {
         Entry.previousElementSibling.classList.add('isActive');
         Entry.previousElementSibling.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
         Entry.classList.remove('isActive');
       } else {
         Entry.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
       }
      } else {
       document.querySelector('.LibraryEntry').classList.add('isActive')
      }
    }
   e.preventDefault();
 }

$(document).ready(function () {
	var itemSelector = '.LibraryEntry';

	var $container = $('#gamelibrary').isotope({
		itemSelector: itemSelector,
		masonry: {
			columnWidth: itemSelector,
			isFitWidth: true
		}
	});

	//Ascending order
	var responsiveIsotope = [
		[480, 7],
		[720, 10]
	];

	var itemsPerPageDefault = 12;
	var itemsPerPage = defineItemsPerPage();
	var currentNumberPages = 1;
	var currentPage = 1;
	var currentFilter = '*';
	var filterAtribute = 'data-filter';
	var pageAtribute = 'data-page';
	var pagerClass = 'isotope-pager';

	function changeFilter(selector) {
		$container.isotope({
			filter: selector
		});
	}

	function goToPage(n) {
		currentPage = n;

		var selector = itemSelector;
		selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';
		selector += '[' + pageAtribute + '="' + currentPage + '"]';

		changeFilter(selector);
	}

	function defineItemsPerPage() {
		var pages = itemsPerPageDefault;

		for (var i = 0; i < responsiveIsotope.length; i++) {
			if ($(window).width() <= responsiveIsotope[i][0]) {
				pages = responsiveIsotope[i][1];
				break;
			}
		}

		return pages;
	}

	function setPagination() {
		var SettingsPagesOnItems = function () {
			var itemsLength = $container.children(itemSelector).length;

			var pages = Math.ceil(itemsLength / itemsPerPage);
			var item = 1;
			var page = 1;
			var selector = itemSelector;
			selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';

			$container.children(selector).each(function () {
				if (item > itemsPerPage) {
					page++;
					item = 1;
				}
				$(this).attr(pageAtribute, page);
				item++;
			});

			currentNumberPages = page;
		}();

		var CreatePagers = function () {
			var $isotopePager = ($('.' + pagerClass).length == 0) ? $('<div class="' + pagerClass + '"></div>') : $('.' + pagerClass);

			$isotopePager.html('');

			for (var i = 0; i < currentNumberPages; i++) {
				var $pager = $('<a href="javascript:void(0);" class="pager" ' + pageAtribute + '="' + (i + 1) + '"></a>');
				$pager.html(i + 1);

				$pager.click(function () {
					var page = $(this).eq(0).attr(pageAtribute);
					goToPage(page);
				});

				$pager.appendTo($isotopePager);
			}

			$container.after($isotopePager);
		}();
	}

	setPagination();
	goToPage(1);

	//additional click event for categories
	$('.filters a').click(function () {
		var filter = $(this).attr(filterAtribute);
		currentFilter = filter;

		setPagination();
		goToPage(1);
	});

	// responsive event
	$(window).resize(function () {
		itemsPerPage = defineItemsPerPage();
		setPagination();
	});
});

$(document).ready(function () {
	// filter items on button click
	$('.filter-button-group').on('click', 'li', function () {
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
		$('.filter-button-group li').removeClass('active');
		$(this).addClass('active');
	});
})

$(document).ready(function () {
	// filter items on button click
	$('.isotope-pager').on('click', 'a', function () {
		var filterValue = $(this).attr('data-page');

		$('.isotope-pager a').removeClass('active');
		$(this).addClass('active');
	});
})

//DARKMODE BUTTON
$(document).ready(function () {
	const pipe = document.querySelector(".pipe");
	const container = document.querySelector(".containerr");
	const icon = document.querySelector(".containerr i");
	var gcon = document.querySelector(".g-container");

	pipe.addEventListener("click", function () {
		container.classList.toggle("move");

		icon.classList.toggle("fa-sun");
		icon.classList.toggle("fa-moon");

		gcon.classList.toggle("change-bg");
		document.body.classList.toggle("change-bg");
	});
});

// jQuery extend functions for popup
(function ($) {
	$.fn.openPopup = function (settings) {
		var elem = $(this);
		// Establish our default settings
		var settings = $.extend({
			anim: 'fade'
		}, settings);
		elem.show();
		elem.find('.popup-content').addClass(settings.anim + 'In');
	}

	$.fn.closePopup = function (settings) {
		var elem = $(this);
		// Establish our default settings
		var settings = $.extend({
			anim: 'fade'
		}, settings);
		elem.find('.popup-content').removeClass(settings.anim + 'In').addClass(settings.anim + 'Out');

		setTimeout(function () {
			elem.hide();
			elem.find('.popup-content').removeClass(settings.anim + 'Out')
		}, 500);
	}
}(jQuery));

// Click functions for popup
$('.open-popup').click(function () {
	$('#' + $(this).data('id')).openPopup({
		anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
	});
});
$('.close-popup').click(function () {
	$('#' + $(this).data('id')).closePopup({
		anim: (!$(this).attr('data-animation') || $(this).data('animation') == null) ? 'fade' : $(this).data('animation')
	});
});

// To open/close the popup at any functions call the below
// $('#popup_default').openPopup();
// $('#popup_default').closePopup();




