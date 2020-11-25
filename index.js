const start = $("svg");
const baseColor = "black";
const onHover = "yellow";

$(() => {
  $(start)
    .on("mouseenter", function () {
      $("path, polygon, circle", this).attr("fill", onHover);
    })
    .on("mouseleave", function () {
      $("path, polygon, circle", this).attr("fill", baseColor);
    });
});

/**
 * 1. Define Stars icons svg
 * 2. Select all stars and apply an hover attribute where you can change colors when you hover it and reinstate their color when you hover off.
 */
