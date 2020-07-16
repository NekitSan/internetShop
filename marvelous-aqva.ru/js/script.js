"use strict";

//@import "elem/file.X";
$(document).ready(function () {
  var numOfClicks = 0;
  var $elem = $('.menu-title');
  $elem.on('click', function () {
    ++numOfClicks;

    if (numOfClicks % 2 !== 0) {
      $('.inner_menu').css("display", "block");
      $elem.css("border-bottom", "solid 3px #fff");
    } else {
      $('.inner_menu').css("display", "");
      $elem.css("border-bottom", "");
    }
  });
});
$(document).ready(function () {
  var color = new Array($("#color_item"), $("#color_block"));
  activeMenu(color[0], color[1]);
});

function activeMenu(e, f) {
  e.click(function () {
    var id = f.attr('id');
    if (id == "color_block") f.attr('id', "click");else f.attr('id', "color_block");
  });
}