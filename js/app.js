$(document).ready(function () {
  $("main > div > img").click(function () {
    let img = $(this).attr("alt");
    $(this).attr("src", "img/" + img + "G.jpg");
  });
});

// div con position absolute oculto
