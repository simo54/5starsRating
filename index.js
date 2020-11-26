// Declaring Variables
const startsCollection = $(".container svg");
const baseColor = "#eeeeee";
const onHover = "#fcf876";

$(() => {
  $(startsCollection)
    .on("mouseenter", function () {
      let hoveredStar = $(this)[0].id;
      $(this)
        .parent()
        .children("svg")
        .each(function (event) {
          event < hoveredStar
            ? $("path, polygon, circle", this)
                .addClass("onHover")
                .removeClass("unHover")
            : $("path, polygon, circle", this)
                .addClass("unHover")
                .removeClass("onHover");
        });
    })
    .on("mouseleave", function () {
      $(this)
        .parent()
        .children("svg")
        .each(function () {
          $("path, polygon, circle", this).removeClass("onHover");
        });
    });
});

$(() => {
  $(startsCollection).on("click", function () {
    let hoveredStar = $(this)[0].id;
    let starsToBeFilledIn = $(this).parent().children("svg");

    for (i = 0; i < starsToBeFilledIn.length; i++) {
      $(starsToBeFilledIn[i]).removeClass("clicked");
    }

    for (i = 0; i < hoveredStar; i++) {
      $(starsToBeFilledIn).addClass("clicked");
    }
  });
});
