//TOPBAR TEXT CHANGER
(function() {
  var words = [
      "contact us today for repairing your phone",
      "apply coupon <span>'newuser'</span> for getting special discount"
    ],
    i = 0;
  setInterval(function() {
    $("#changingword").fadeOut(function() {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 4000);
})();
//Sticky Header
$(window).on("scroll load", function() {
  $(window).scrollTop() > $(".siteHeader").outerHeight()
    ? $(".siteHeader").addClass("sticky")
    : $(".siteHeader").removeClass("sticky");
});
// mobile menu js
$(".mobileMenuTrigger").click(function() {
  $(".mobileMenuWrapperOuter").addClass("on");
  $("body").addClass("mobileMenuActive");
});
$(".mobileMenuCloseWrapper").click(function() {
  $(".mobileMenuWrapperOuter").removeClass("on");
  $("body").removeClass("mobileMenuActive");
});
//Login Signup Popup
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
