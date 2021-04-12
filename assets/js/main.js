var topPicksScroll = $(".scroll-container");
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
        const targetId = event.currentTarget.getAttribute("href").split("#")[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: $(targetElement).offset().top }, speed);
        }
    });

$(".btn-custom").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

$(".btn-custom-attr").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

$(".btn-custom-hos").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

$(".btn-custom-fd").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

$(".btn-custom-tt").click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#map-section").offset().top,
        },
        speed
    );
});

$(".btn-toptip").click(function () {
    $("#tp-Content-2").toggle(speed);
});

$(".btn-toptip").click(function () {
    $("#tp-Content-1").toggle(speed);
});

$(".btn-toptip").click(function () {
    $("#top-tip-img").toggle(speed);
});

$(".btn-scroll").click(function () {
    $(".tp-hidden").show(speed);
});

$(".btn-scroll").click(function () {
    $(".btn-scroll").hide(speed);
});

$(topPicksScroll).on("click", ".btn-scroll", function () {
    var scrollTo = $(this);
    topPicksScroll.animate(
        {
            scrollTop: scrollTo.offset().top - topPicksScroll.offset().top + topPicksScroll.scrollTop(),
        },
        speed
    );
});
