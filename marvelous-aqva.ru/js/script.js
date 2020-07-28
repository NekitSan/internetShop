"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//@import "elem/file.X";
var images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    image_clone,
    result_image,
    prelaoder = $(".prelaoder"),
    perc_display = $(".under-prelaoder");

for (var i = 0; i < images_total_count; i++) {
  image_clone = new Image();
  image_clone.onload = iamge_loaded;
  image_clone.onerror = iamge_loaded;
  image_clone.src = images[i].src;
}

function iamge_loaded() {
  $('body').css("overflow", "hidden");
  images_loaded_count++;
  result_image = 100 / images_total_count * images_loaded_count;

  if (result_image >= 50) {
    perc_display.cssBefore("border-right-color", "#116EEF");
  }

  if (result_image >= 75) {
    perc_display.cssBefore("border-bottom-color", "#116EEF");
  }

  if (result_image == 100) {
    perc_display.cssBefore("border-left-color", "#116EEF");
  }

  perc_display.html((result_image << 0) + '%');

  if (images_loaded_count >= images_total_count) {
    setTimeout(function () {
      if (!prelaoder.hasClass('done')) {
        prelaoder.addClass('done');
        $('body').css("overflow", "");
      }
    }, 1000);
  }
}

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
  $(".open_lsit").on('click', function () {
    ++numOfClicks;

    if (numOfClicks % 2 !== 0) {
      $(this).siblings(".contacts__country-item_group").css("display", "block");
    } else {
      $(this).siblings(".contacts__country-item_group").css("display", "");
    }
  });
});
$(document).ready(function () {
  $('#size_block .heading').change(function () {
    var option_name = $('option:selected', this).attr("name");

    switch (option_name) {
      case 'none':
        $("#constructor_size680").css("display", "none");
        $("#constructor_size1000").css("display", "none");
        break;

      case '680':
        $("#constructor_size680").css("display", "block");
        $("#constructor_size1000").css("display", "none");
        break;

      case '1000':
        $("#constructor_size680").css("display", "none");
        $("#constructor_size1000").css("display", "block");
        break;
    }
  });
  maxSizeBlock($(".text_description-transfer"), 240, $(".text_description"));
  /* Active Menu */

  var h_block_list_elements = 72;
  maxSizeBlock($("#constructor_color"), h_block_list_elements, $("#color_block .list-constructor"));
  maxSizeBlock($("#constructor_size680"), h_block_list_elements, $("#size_block .list-constructor"));
  maxSizeBlock($("#constructor_size1000"), h_block_list_elements, $("#size_block .list-constructor"));
  maxSizeBlock($("#constructor_configuration"), h_block_list_elements, $("#configuration_block .list-constructor"));
  maxSizeBlock($("#constructor_equipment"), h_block_list_elements, $("#equipment_block .list-constructor"));
  maxSizeBlock($("#backlight"), h_block_list_elements, $("#backlight_block .list-constructor"));
  /* #Active Menu# */

  /* Constructor */
  //('#constructor_color','#constructor_size','#constructor_configuration','#constructor_equipment','#constructor_backlight')

  function constructorAct(list, list_item) {
    var btn = new Component(list, list_item);
    btn.defineButton.on('click', function () {
      var act = new ActButton({
        mod: list,
        block: '.edit_block',
        value: $(this).attr('value'),
        key: $(this).attr('data-key')
      });
      act.stylec(); //запись в поле с формой на отправку
    });
  }

  constructorAct("#constructor_color", ".color-items");
  constructorAct("#constructor_size680", ".text-items");
  constructorAct("#constructor_size1000", ".text-items");
  constructorAct("#configuration_block", ".text-items");
  constructorAct("#constructor_equipment", ".text-items");
  constructorAct("#constructor_backlight", ".color-items");
  /* #Constructor# */
});
/* 
 **Кнопки конструктора
 * передается значение обертки(контейнера) с кнопками(блоками)
 *  
*/

var Component = /*#__PURE__*/function () {
  function Component(nameGroup, nameBlock) {
    _classCallCheck(this, Component);

    this.nameGroup = nameGroup;
    this.nameBlock = nameBlock;
  }

  _createClass(Component, [{
    key: "defineButton",
    get: function get() {
      return $(this.nameGroup + ' ' + this.nameBlock);
    }
  }]);

  return Component;
}();

var ActButton = /*#__PURE__*/function () {
  function ActButton(options) {
    _classCallCheck(this, ActButton);

    this.mod = options.mod;
    this.block = options.block;
    this.value = options.value;
    this.key = options.key;
  }

  _createClass(ActButton, [{
    key: "stylec",
    value: function stylec() {
      /* Aquarium parameters */
      var urlImageAquarium = "images/constructor/sets/";
      var aquariumSizes680 = new Array('_90', '_130', '_150', '_200'); // h 680 mm

      var aquariumSizes1000 = new Array(212, 282, 395, 502, 635, 785); // h 1000 mm

      var aquariumSets = new Array('Б.png', 'С.png', 'П.png');
      var total_style_symbols = $(this.block).css('background-image').length; // none(4) 

      var colors_total_count = new Array('черный', 'венге', 'орех', 'кедр', 'клен', 'ваниль', 'белый', 'патина', 'фиолет', 'красный');
      console.log(this.mod);
      console.log(this.key);
      console.log("///////////");

      switch (this.mod) {
        case '#constructor_size680':
          var sizeStyle = $(this.mod).css('display').length;
          var sizeValue = $(this.mod).attr('data-key');

          if (sizeStyle != 4 && sizeValue == 680) {
            console.log(this.mod);
            console.log(this.key);
          }

          break;

        case '#constructor_size1000':
          var sizeStyle = $(this.mod).css('display').length;
          var sizeValue = $(this.mod).attr('data-key');

          if (sizeStyle != 4 && sizeValue == 1000) {
            console.log(this.mod);
            console.log(this.key);
          }

          break;

        case '#constructor_equipment':
          if (this.key == "Б") {
            console.log(this.mod);
            console.log(this.key);
          } else if (this.key == "С") {
            console.log(this.mod);
            console.log(this.key);
          } else if (this.key == "П") {
            console.log(this.mod);
            console.log(this.key);
          }

          break;
      }
    }
  }]);

  return ActButton;
}();
/* 
 **Подставляет скролл, если высота превышает родителя 
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