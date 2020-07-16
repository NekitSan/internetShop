"use strict";

//@import "elem/file.X";
$(document).ready(function () {
  /* Для телефонов */
  var numOfClicks = 0;
  var elem = $('.menu-title');
  elem.on('click', function () {
    ++numOfClicks;

    if (numOfClicks % 2 !== 0) {
      $('.inner_menu').css("display", "block");
      elem.css("border-bottom", "solid 3px #fff");
    } else {
      $('.inner_menu').css("display", "");
      elem.css("border-bottom", "");
    }
  });
});
$(document).ready(function () {
  maxSizeBlock($(".text_description"), 322, $(".active_menu-description"));
  /* Active Menu */

  maxSizeBlock($("#constructor_color"), 42, $("#color_block .list-constructor"));
  maxSizeBlock($("#constructor_size"), 42, $("#size_block .list-constructor"));
  maxSizeBlock($("#configuration_block"), 42, $("#configuration_block .list-constructor"));
  maxSizeBlock($("#constructor_equipment"), 42, $("#equipment_block .list-constructor"));
  maxSizeBlock($("#backlight"), 42, $("#backlight_block .list-constructor"));
  /* #Active Menu# */
});
/* 
 **Подставляет скролл, если высота привышает родителя 
 * name - название блока, у которого берется высота
 * h - максимальная высота
 * block - блок которому будет применяться скролл
*/

function maxSizeBlock(name, h, block) {
  var h_block = name.height();

  if (h_block > h) {
    block.css("overflow-y", "scroll");
  }
}

function activeMenu(e, f, key) {
  e.click(function () {
    var id = f.attr('id');
    if (id == key) f.attr('id', "click");else f.attr('id', key);
  });
}