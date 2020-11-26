// Declaring Variables
const starsCollection = $(".container svg");

// Event on Mouse Enter and Mouse Leave
$(starsCollection)
  .on("mouseenter", function () {
    let hoveredStar = $(this)[0].id; // Declaring the star hovered
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

// Event on click
$(starsCollection).on("click", function () {
  let clickedStar = $(this)[0].id; // Declaring the star clicked
  let starsToBeFilledIn = $(this).parent().children("svg"); // Targeting remaining stars

  for (i = 0; i < starsToBeFilledIn.length; i++) {
    $(starsToBeFilledIn).removeClass("clicked");
  }

  for (i = 0; i < clickedStar; i++) {
    $(starsToBeFilledIn).addClass("clicked");
  }

  // Showing id of the star clicked
  console.log(clickedStar);
});
