// Variable with class of .scroll-container
var topPicksScroll = $(".scroll-container");

// Variable speed for all functions
const speed = 1000;

// Navbar Collapse on Scroll (adjusted to suit my project)- https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("hideNav").style.top = "0";
    } else {
        document.getElementById("hideNav").style.top = "-82px";
    }
    prevScrollpos = currentScrollPos;
};

// Function to collapse Navbar on mobile device on Click
$(".navbar-nav>li>a").click(function () {
    $(".navbar-collapse").collapse("hide");
});

// Smooth Scrolling adjusted to suit my project - https://documentation.unbounce.com/hc/en-us/articles/360022719471-Adding-Smooth-Scrolling-Links-and-Buttons-for-Anchor-Links

$('a[href*="#"]')
    .filter((i, a) => a.getAttribute("href").startsWith("#") || a.href.startsWith(`${location.href}#`))
    .unbind("click.smoothScroll")
    .bind("click.smoothScroll", (event) => {
        const targetNav = event.currentTarget.getAttribute("href").split("#")[1];
        const targetElement = document.getElementById(targetNav);

        if (targetElement) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $(targetElement).offset().top }, speed);
        }
    });

// Function to scroll map section when clicking initial landing button
$(".btn-custom").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

// Function to scroll map section when clicking attraction button 
$(".btn-custom-attr").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

// Function to scroll map section when clicking hostel button 
$(".btn-custom-hos").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

// Function to scroll map section when clicking food & drink button 
$(".btn-custom-fd").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

// Function to scroll map section when clicking button under top tips section
$(".btn-custom-tt").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

// Function to toggle top tips content when clicking top tips button 
$(".btn-toptip-down").click(function () {
    $("#tt-Content-2").show(speed);
});

// Function to toggle top tips content image when clicking top tips button 
$(".btn-toptip-down").click(function () {
    $("#top-tip-img").toggle(speed);
});

// Function to show hidden top picks when clicking .btn-scroll
$(".btn-scroll").click(function () {
    $(".tp-hidden").show(speed);
});

// Function to hide .btn-scroll on click
$(".btn-scroll").click(function () {
    $(".btn-scroll").hide(speed);
});

// Function to hide top tips down button on click
$(".btn-toptip-down").click(function () {
    $("#tt-Content-1").hide(speed);
});

// Function to show top tips content on click by down arrow
$(".btn-toptip-up").click(function () {
    $("#tt-Content-1").show(speed);
});

// Function to show top tips img on click
$(".btn-toptip-up").click(function () {
    $("#top-tip-img").toggle(speed);
});

// Function to hide top tips content on on click by up arrow
$(".btn-toptip-up").click(function () {
    $("#tt-Content-2").hide(speed);
});

// Function to hide top tips up button on click
$(".btn-toptip-up").click(function () {
    $(".btn-toptip-up").hide(speed);
});

// Function to show top tips up button on click
$(".btn-toptip-down").click(function () {
    $(".btn-toptip-up").show(speed);
});

// Function to scroll to top of .btn scroll postion on click
$(topPicksScroll).on("click", ".btn-scroll", function () {
    var scrollTo = $(this);
    topPicksScroll.animate(
        {
            scrollTop: scrollTo.offset().top - topPicksScroll.offset().top + topPicksScroll.scrollTop(),
        },
        speed
    );
});
