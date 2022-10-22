let clicked = false;

$("#btn").click(() => {
  if (!clicked) {
    $("#target").html("Goodbye World");
    clicked = true;
  } else {
    $("#target").html("Hello World");
    clicked = false;
  }
});
