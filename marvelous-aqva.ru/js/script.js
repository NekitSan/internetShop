"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//@import "elem/file.X";
$(document).ready(function () {
  /* Для телефонов */
  var numOfClicks = 0;
  var elem = $('.menu-title');
  elem.on('click', function () {
    ++numOfClicks;

    if (numOfClicks % 2 !== 0) {
      $('.burger rect:nth-child(1)').css("transform", "translate(10%, 0%) rotate(45deg)");
      $('.burger rect:nth-child(2)').css("transform", "translate(-25%, 60%) rotate(-45deg)");
      $('.burger rect:nth-child(3)').css("opacity", "0");
      $('.inner_menu').css("display", "block");
      $('.links__group').css("display", "block");
      elem.css("border-bottom", "solid 3px #fff");
    } else {
      $('.inner_menu').css("display", "");
      $('.links__group').css("display", "");
      elem.css("border-bottom", "");
      $('.burger rect:nth-child(1)').css("transform", "");
      $('.burger rect:nth-child(2)').css("transform", "");
      $('.burger rect:nth-child(3)').css("opacity", "");
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

  /* Constructor */
  //('#constructor_color','#constructor_size','#constructor_configuration','#constructor_equipment','#constructor_backlight')

  function backgroud() {
    var list_background = "#constructor_color";
    var listItem_background = ".color-items";
    var listItemNumber_background = new Array(1, 2, 3, 4);
    {
      var btnColor = new Component(list_background, listItem_background, listItemNumber_background[0]);
      var btnColor2 = new Component(list_background, listItem_background, listItemNumber_background[1]);
      var btnColor3 = new Component(list_background, listItem_background, listItemNumber_background[2]);
      var btnColor4 = new Component(list_background, listItem_background, listItemNumber_background[3]);
      btnColor.defineButton.on('click', function () {
        var act = new ActButton({
          background: list_background,
          block: '.edit_block',
          value: $(this).attr('value'),
          order: $(this).attr('data-order')
        });
        act.stylec(); //запись в поле с формой на отправку
      });
    }
  }

  backgroud();
  /* #Constructor# */
});
/* 
 **Кнопки конструктора
 * передается значение обертки(котейнера) с кнопками(блоками)
 *  
*/

var Component = /*#__PURE__*/function () {
  function Component(nameGroup, nameBlock, numb) {
    _classCallCheck(this, Component);

    this.nameGroup = nameGroup;
    this.nameBlock = nameBlock;
    this.numb = numb;
  }

  _createClass(Component, [{
    key: "defineButton",
    get: function get() {
      return $(this.nameGroup + ' ' + this.nameBlock + ":nth-child(" + this.numb + ")");
    }
  }]);

  return Component;
}();

var ActButton = /*#__PURE__*/function () {
  function ActButton(options) {
    _classCallCheck(this, ActButton);

    this.background = options.background;
    this.block = options.block;
    this.value = options.value;
    this.order = options.order;
  }

  _createClass(ActButton, [{
    key: "stylec",
    value: function stylec() {
      console.log(this.order);
      console.log(this.background);
      var arrStyleBack = $(this.background).css('background-image').length; // none(4) 

      activeConstr(this.order, this.background, this.value, arrStyleBack);
    }
  }]);

  return ActButton;
}();

var XXX = /*#__PURE__*/function () {
  function XXX(options) {
    _classCallCheck(this, XXX);

    this.element = options.element; // DOM

    this.property = options.property; // value

    this.selector = options.selector; // style

    this.quantity = options.quantity; // none

    this.mod = options.mod; // для подсветки
  }

  _createClass(XXX, [{
    key: "showHideStyle",
    value: function showHideStyle() {
      if (this.quantity == 4) {
        $(this.element).css(this.property, this.selector);
        if (this.mod = 1) $(this.element).css('border', '0px');
      } else {
        $(this.element).css(this.property, '');
        if (this.mod = 1) $(this.element).css('border', '');
      }

      console.log("Все работает! 2");
    }
  }]);

  return XXX;
}();

function activeConstr(order, background, value, arrStyleBack) {
  switch (order) {
    case '1':
      var propertyXXX = new XXX({
        element: background,
        property: 'background-image',
        selector: 'url(/images/background/green.png)',
        quantity: arrStyleBack,
        mod: 1
      });
      propertyXXX.showHideStyle();
      break;
  }
}
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