$(document).ready(function() {
  var infoBox = $("#info-box");
  var closeButton = $("#close-button");
  var infoBoxBackground = $('#info-box-background')

  $("#info-button").click(function() {
    infoBox.fadeIn();
  });

  closeButton.click(function() {
    infoBox.fadeOut();
  });

  $("#info-button").click(function() {
    infoBoxBackground.fadeIn();
  });

  closeButton.click(function() {
    infoBoxBackground.fadeOut();
  });

  infoBoxBackground.click(function() {
    infoBox.fadeOut();
  });

  infoBoxBackground.click(function() {
    infoBoxBackground.fadeOut();
  });

});
