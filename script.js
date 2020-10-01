$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      console.log("olasssssss");
      $('.navbar').addClass("sticky");
    } else {
    }
  })
});
