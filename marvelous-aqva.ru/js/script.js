"use strict";

//@import "elem/file.X";
var CONSTRUCTOR = function CONSTRUCTOR() {
  /* Menu */
  var choiceColorOpen, choiceColor, choiceSizeOpen, choiceSize, choiceSetOpen, choiceSet, choiceFillerOpen, choiceFiller, choiceDecorationOpen, choiceeDecoration, choiceBacklightOpen, choiceBacklightClose, choiceBacklight;
  /* color */

  choiceColorOpen = $("#constructor_choice-color");
  choiceColor = $("#constructor_part-color_block");
  /* size */

  choiceSizeOpen = $("#constructor_choice-size");
  choiceSize = $("#constructor_part-size_block");
  /* set */

  choiceSetOpen = $("#constructor_choice-set");
  choiceSet = $("#constructor_part-set_block");
  /* filler */

  choiceFillerOpen = $("#constructor_choice-filler");
  choiceFiller = $("#constructor_part-filler_block");
  /* decoration */

  choiceDecorationOpen = $("#constructor_choice-decoration");
  choiceeDecoration = $("#constructor_part-decoration_block");
  /* backlight */

  choiceBacklightOpen = $("#backlight_yes");
  choiceBacklightClose = $("#backlight_no");
  choiceBacklight = $("#constructor_part-backlight_block");
  /* #Menu# */

  /* Action */

  var colorList = $(".colorList-item");
  var block_tovar = $(".constructor_part-block");
  var shadowList = $(".backlightList-item");
  var shadow_tovar = $(".constructor_part-background_block");
  var sizeList = $(".sizeList-item");
  var setList = $(".setList-item");
  /* #Action# */

  var constructor_collector = {
    color: [choiceColorOpen, choiceColor],
    size: [choiceSizeOpen, choiceSize],
    set: [choiceSetOpen, choiceSet],
    filler: [choiceFillerOpen, choiceFiller],
    decoration: [choiceDecorationOpen, choiceeDecoration],
    backligh: [choiceBacklightOpen, choiceBacklightClose, choiceBacklight],
    Menu: function Menu() {
      constructor_collector.color[0].click(function () {
        constructor_collector.color[1].css("display", "block");
        clearStyleList(1);
      });
      constructor_collector.size[0].click(function () {
        constructor_collector.size[1].css("display", "block");
        clearStyleList(2);
      });
      constructor_collector.set[0].click(function () {
        constructor_collector.set[1].css("display", "block");
        clearStyleList(3);
      });
      constructor_collector.filler[0].click(function () {
        constructor_collector.filler[1].css("display", "block");
        clearStyleList(4);
      });
      constructor_collector.decoration[0].click(function () {
        constructor_collector.decoration[1].css("display", "block");
        clearStyleList(5);
      });
      constructor_collector.backligh[0].click(function () {
        constructor_collector.backligh[2].css("display", "block");
        clearStyleList(6);
      });
      constructor_collector.backligh[1].click(function () {
        constructor_collector.backligh[2].css("display", "");
        clearStyleList(7);
      });
    },
    Action: function Action() {
      colorList.click(function () {
        var colorBlock = $(this).attr('style');
        var modifColorBlock = colorBlock.replace(/background-color:/g, "");
        modifColorBlock = modifColorBlock.replace(/;/g, "");
        block_tovar.css('background-color', modifColorBlock);
      });
      shadowList.click(function () {
        var shadowBlock = $(this).attr('style');
        var modifShadowBlock = shadowBlock.replace(/background-color:/g, "");
        modifShadowBlock = modifShadowBlock.replace(/;/g, "");
        shadow_tovar.css("background-color", modifShadowBlock);
      });
      sizeList.click(function () {
        var sizeBlock = $(this).attr('value');
        block_tovar.css("height", sizeBlock);
      });
      setList.click(function () {
        var setBlock = $(this).attr('value');

        switch (setBlock) {
          case '0':
            block_tovar.css("border-radius", "10px");
            break;

          case '1':
            block_tovar.css("border-radius", "25px");
            break;

          case '2':
            block_tovar.css("border-radius", "50px");
            break;
        }
      });
    }
  };

  function clearStyleList(e) {
    switch (e) {
      case 1:
        constructor_collector.size[1].css("display", "");
        constructor_collector.set[1].css("display", "");
        constructor_collector.filler[1].css("display", "");
        constructor_collector.decoration[1].css("display", "");
        constructor_collector.backligh[2].css("display", "");
        clearChecked(constructor_collector.backligh[0], constructor_collector.backligh[1]);
        break;

      case 2:
        constructor_collector.color[1].css("display", "");
        constructor_collector.set[1].css("display", "");
        constructor_collector.filler[1].css("display", "");
        constructor_collector.decoration[1].css("display", "");
        constructor_collector.backligh[2].css("display", "");
        clearChecked(constructor_collector.backligh[0], constructor_collector.backligh[1]);
        break;

      case 3:
        constructor_collector.color[1].css("display", "");
        constructor_collector.size[1].css("display", "");
        constructor_collector.filler[1].css("display", "");
        constructor_collector.decoration[1].css("display", "");
        constructor_collector.backligh[2].css("display", "");
        clearChecked(constructor_collector.backligh[0], constructor_collector.backligh[1]);
        break;

      case 4:
        constructor_collector.color[1].css("display", "");
        constructor_collector.size[1].css("display", "");
        constructor_collector.set[1].css("display", "");
        constructor_collector.decoration[1].css("display", "");
        constructor_collector.backligh[2].css("display", "");
        clearChecked(constructor_collector.backligh[0], constructor_collector.backligh[1]);
        break;

      case 5:
        constructor_collector.color[1].css("display", "");
        constructor_collector.size[1].css("display", "");
        constructor_collector.set[1].css("display", "");
        constructor_collector.filler[1].css("display", "");
        constructor_collector.backligh[2].css("display", "");
        clearChecked(constructor_collector.backligh[0], constructor_collector.backligh[1]);
        break;

      case 6:
        constructor_collector.color[1].css("display", "");
        constructor_collector.size[1].css("display", "");
        constructor_collector.set[1].css("display", "");
        constructor_collector.filler[1].css("display", "");
        constructor_collector.decoration[1].css("display", "");
        break;

      case 7:
        constructor_collector.color[1].css("display", "");
        constructor_collector.size[1].css("display", "");
        constructor_collector.set[1].css("display", "");
        constructor_collector.filler[1].css("display", "");
        constructor_collector.backligh[2].css("display", "");
        constructor_collector.decoration[1].css("display", "");
        break;

      default:
        alert("Такого не существует");
        break;
    }
  }

  function clearChecked(open, close) {
    if (open.prop("checked", true)) {
      open.prop("checked", false);
      close.prop("checked", true);
    }
  }

  constructor_collector.Menu(); // меню

  constructor_collector.Action(); // функционал
};

CONSTRUCTOR();