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
  maxSizeBlock($(".text_description-transfer"), 240, $(".text_description"));
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

$(document).ready(function () {//images/rating/stars.png
});
showImg($(".show_list-img"), "show-img", 1, 1);

function rating(numb) {
  var max_rating = 5;

  for (var i = 1; i <= numb; i++) {}
}
/* 
 **Показывает список картинок при нажатии
 * show_text - название блока, у которого берется высота
 * valueClass - названия класса списка картинок
 * mod - зависит какой стиль "display" подставится (0 - block, 1 - flex)
 * btn_mod - зависит будет ли скрытие или показ надписи (0 - нет, 1 - да)
 
 * Поправить: Почему-то появляется id у блока show_text(никак не мешает)
*/


function showImg(show_text, valueClass, mod, btn_mod) {
  show_text.click(function () {
    var origin_id = $(this).attr('data-key');
    var id = $(this).siblings('.' + valueClass).attr("id");
    var key = new Array('click', 'click_flex');
    var btn = new Array('.open_list-img', '.close_list-img');

    if (id == key[mod]) {
      $('.' + origin_id).attr('id', origin_id);
      $('.' + valueClass).removeClass(origin_id);

      if (btn_mod == 1) {
        $('.' + origin_id + ' ' + btn[0]).show();
        $('.' + origin_id + ' ' + btn[1]).hide();
        $(this).removeClass(origin_id);
      }
    } else {
      $(this).siblings('.' + valueClass).addClass(origin_id);
      $('.' + origin_id).attr('id', key[mod]);

      if (btn_mod == 1) {
        $(this).addClass(origin_id);
        $('.' + origin_id + ' ' + btn[1]).show();
        $('.' + origin_id + ' ' + btn[0]).hide();
      }
    }
  });
}