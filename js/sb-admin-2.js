(function($) {
    "use strict"; // Start of use strict

    // Toggle the side navigation
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        if ($(".sidebar").hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Close any open menu accordions when window is resized below 768px
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.sidebar .collapse').collapse('hide');
        };

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
            $("body").addClass("sidebar-toggled");
            $(".sidebar").addClass("toggled");
            $('.sidebar .collapse').collapse('hide');
        };
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
        if ($(window).width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Scroll to top button appear
    $(document).on('scroll', function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function(e) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        e.preventDefault();
    });

    // show image add product admin
    if ($('#image').val() == "") {
        $('#immage_form_product').hide();
    } else {
        $('#immage_form_product').show();
        $('#immage_form_product').prop("src", $('#image').val());
    }
    $('#image').change(function() {
        if ($('#image').val() == "") {
            $('#immage_form_product').hide();
        } else {
            $('#immage_form_product').show();
            $('#immage_form_product').prop("src", $('#image').val());
        }

    });

    // paging
    $(document).ready(function() {
        var total_item = $(".page_table > tr").length;
        var item_page = 2;
        var total_page = Math.ceil(total_item / item_page);
        var current_page = 1;
        var start = (current_page - 1) * item_page;
        var end = current_page * item_page;
        var previous = '<li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span> </a> </li>';
        var next = '<li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
        var item = "";
        for (var i = 1; i <= total_page; i++) {
            item += '<li class="page-item" data-page=' + i + '><a class="page-link" href="?page=' + i + '">' + i + '</a></li>'
        }
        if (total_page < 2) {
            $("#page_nav").hide();
        } else {
            if (current_page == 1) {
                $('#page_nav').html(item + next);
            } else if (current_page == total_page) {
                $('#page_nav').html(previous + item);
            } else {
                $('#page_nav').html(previous + item + next);
            }

        }
    });


})(jQuery); // End of use strict