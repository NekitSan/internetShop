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
  $('#color_block .heading').change(function () {
    var option_name = $('option:selected', this).attr("name");

    switch (option_name) {
      case 'none':
        $("#constructor_color_gloss").css("display", "none");
        $("#constructor_color_matt").css("display", "none");
        break;

      case 'gloss':
        $("#constructor_color_gloss").css("display", "block");
        $("#constructor_color_matt").css("display", "none");
        break;

      case 'matt':
        $("#constructor_color_gloss").css("display", "none");
        $("#constructor_color_matt").css("display", "block");
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
        key: $(this).attr('data-key'),
        url: "images/constructor/sets/"
      });
      act.stylec(); //запись в поле с формой на отправку
    });
  }

  constructorAct("#constructor_color", ".color-items");
  constructorAct("#constructor_size680", ".text-items");
  constructorAct("#constructor_size1000", ".text-items");
  constructorAct("#configuration_block", ".text-items");
  constructorAct("#constructor_equipment", ".text-items");
  constructorAct("#backlight_block", ".color-items");
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
    this.url = options.url;
  }

  _createClass(ActButton, [{
    key: "stylec",
    value: function stylec() {
      /* Aquarium parameters */
      switch (this.mod) {
        case '#constructor_size680':
          var sizeStyle = $(this.mod).css('display').length;
          var sizeValue = $(this.mod).attr('data-mod');

          if (sizeStyle != 4 && sizeValue == 680) {
            $(this.block).attr("data-mod", sizeValue);
            $(this.block).attr("data-size", this.key);
            $("#description-height").html(sizeValue);
            $("#description-size").html(this.key);
          }

          break;

        case '#constructor_size1000':
          var sizeStyle = $(this.mod).css('display').length;
          var sizeValue = $(this.mod).attr('data-mod');

          if (sizeStyle != 4 && sizeValue == 1000) {
            $(this.block).attr("data-mod", sizeValue);
            $(this.block).attr("data-size", this.key);
            $("#description-height").html(sizeValue);
            $("#description-size").html(this.key);
          }

          break;

        case '#constructor_equipment':
          if ($(this.block).attr("data-color") != "") {
            var dataURL = $(this.block).attr("data-url");

            if ($(this.block).attr("data-mod") == 680) {
              if (this.key == "Б") {
                $(this.block + ' source').attr("srcset", dataURL + this.key + '.webp');
                $(this.block + ' img').attr("src", dataURL + this.key + '.png');
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "С") {
                $(this.block + ' source').attr("srcset", dataURL + this.key + '.webp');
                $(this.block + ' img').attr("src", dataURL + this.key + '.png');
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "П") {
                $(this.block + ' source').attr("srcset", dataURL + this.key + '.webp');
                $(this.block + ' img').attr("src", dataURL + this.key + '.png');
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              }
            } else if ($(this.block).attr("data-mod") == 1000) {
              if (this.key == "Б") {
                $(this.block + ' source').attr("srcset", dataURL + this.key + '.webp');
                $(this.block + ' img').attr("src", dataURL + this.key + '.png');
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "С") {
                $(this.block + ' source').attr("srcset", dataURL + this.key + '.webp');
                $(this.block + ' img').attr("src", dataURL + this.key + '.png');
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "П") {
                $(this.block + ' source').attr("srcset", dataURL + this.key + '.webp');
                $(this.block + ' img').attr("src", dataURL + this.key + '.png');
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              }
            }
          } else {
            if ($(this.block).attr("data-mod") == 680) {
              if (this.key == "Б") {
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "С") {
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "П") {
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              }
            } else if ($(this.block).attr("data-mod") == 1000) {
              if (this.key == "Б") {
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "С") {
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              } else if (this.key == "П") {
                $("#description-equipment").html(this.value);
                $(this.block).attr("data-set", this.key);
              }
            } else {
              alert("Вы не выбрали объем");
            }
          }

          break;

        case '#configuration_block':
          if ($(this.block).attr("data-set") == "Б") {
            $("#description-configuration").html(this.value);
            $(this.block).attr("data-config", this.key);
          } else if ($(this.block).attr("data-set") == "С") {
            $("#description-configuration").html(this.value);
            $(this.block).attr("data-config", this.key);
          } else if ($(this.block).attr("data-set") == "П") {
            $("#description-configuration").html(this.value);
            $(this.block).attr("data-config", this.key);
          } else {
            alert("Вы не выбрали комплектацию или объем");
          }

          break;

        case '#constructor_color':
          if ($(this.block).attr("data-config") != "") {
            var sizeValue = $(this.mod).attr('data-coating');

            if (sizeValue) {
              $("#description-color").html('глянцевый, ' + this.key);
              $(this.block).attr("data-color", this.key);
              $(this.block).attr("data-url", this.url + this.key + '_90');
              $(this.block + ' source').attr("srcset", this.url + this.key + '_90' + $(this.block).attr("data-set") + '.webp');
              $(this.block + ' img').attr("src", this.url + this.key + '_90' + $(this.block).attr("data-set") + '.png');
            } else if (sizeValue) {
              $("#description-color").html(this.key);
              $(this.block).attr("data-color", this.key);
              $(this.block).attr("data-url", this.url + this.key + '_90');
              $(this.block + ' source').attr("srcset", this.url + this.key + '_90' + $(this.block).attr("data-set") + '.webp');
              $(this.block + ' img').attr("src", this.url + this.key + '_90' + $(this.block).attr("data-set") + '.png');
            }
          } else {
            alert("Вы не выбрали предыдущие детали");
          }

          break;

        case '#backlight_block':
          if ($(this.block).attr("data-color") != "") {
            $("#description-backlight").html(this.key);
            $("#constructor-block").css("background-image", 'url(' + this.value + ')');
            $("#constructor-block").css("border", 'none');
          } else {
            alert("Вы не выбрали предыдущие детали");
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