"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VERSION = 'Constructor 9.9.0';
var button_param = $(".constructor__menu-category_item");
var button_group_color = $(".constructor__menu-color_item");
var button_color = $(".constructor__menu-color_item .color-item");
var color_window = $(".constructor__main-window");
var dataBox = $(".constructor__main-window_box");
var dataBoxImage = $(".constructor__main-window_box img");
var text_specifications = ".constructor_specifications";
var text_description = ".constructor_specifications";
var text_btns_group = ".constructor__menu-group_category";
var text_btns = ".constructor__menu-category_item";
var urlSets = "images/constructor/sets/";
var register = '.png';
$(document).ready(function () {
  var timeout = 10000;
  $(".constructor__menu").children().on("click", function (c) {
    var size = dataBox.attr("data-sets") + "/";
    var color = dataBox.attr("data-color");
    var volume = dataBox.attr("data-volume");
    var equipm = dataBox.attr("data-equipment");
    var act = new EditAquarium({
      url: urlSets,
      size: "680/",
      color: color,
      volume: "_90",
      equipm: equipm,
      register: register
    });
    act.edit();
  });
});
$("#butt_description").on('click', function () {
  $(".constructor__main-group_content").show();
  $(".constructor_description").show();
});
$("#butt_specifications").on('click', function () {
  $(".constructor__main-group_content").show();
  $(".constructor_specifications").show();
});
$(".exit").on("click", function () {
  $(".constructor__main-group_content").hide();
  $(".constructor_description").hide();
  $(".constructor_specifications").hide();
});
button_param.click(function (c) {
  var e = $(this).parent().attr("id");
  var f = ".constructor__menu-category_item";
  button_param.removeAttr("id");
  button_color.removeAttr("id");
  $(this).attr("id", "act");

  if ($(this).hasClass("constructor__menu-disable") == false) {
    if ($("#" + e + " " + f).hasClass("constructor__menu-active")) {
      $("#" + e + " " + f).removeClass("constructor__menu-active");
    }

    $(this).addClass("constructor__menu-active");
  }

  switch (e) {
    case "height":
      var a = $(this).text().replace(/\s/g, '');
      $(text_specifications + " #spec_height").text(a);

      if (a == "680") {
        $("._680").removeClass("constructor__menu-disable");
        nullValues(a);

        if ($(text_btns_group + " " + text_btns).hasClass("_1000")) {
          $("._1000").addClass("constructor__menu-disable");
        }
      }

      if (a == "1000") {
        $("._1000").removeClass("constructor__menu-disable");
        nullValues(a);

        if ($(text_btns_group + " " + text_btns).hasClass("_680")) {
          $("._680").addClass("constructor__menu-disable");
        }
      }

      break;

    case "diameter":
      var a = $(this).text().replace(/\s/g, '');
      var d = $(this).hasClass("constructor__menu-disable");
      var b = $(c.target).attr("class").replace(/\bconstructor__menu-category_item pointer\b\s/g, '');
      b = b.replace(/\bconstructor__menu-active\b/g, '');
      b = b.replace(/\s/g, '');
      b = b.replace(/_/g, '');

      if (b == "680") {
        $("#height .constructor__menu-category_item:nth-child(2)").addClass("constructor__menu-active");
        $(text_specifications + " #spec_height").text("680");
        dataBox.attr("data-sets", b);

        if (dataBox.attr("data-sets") == b) {
          dataBox.attr("data-volume", $(this).attr("data-volume"));
        }

        if ($(text_btns_group + " " + text_btns).hasClass("_1000")) {
          $("._1000").addClass("constructor__menu-disable");
        }
      } else if (b == "1000") {
        $("#height .constructor__menu-category_item:nth-child(3)").addClass("constructor__menu-active");
        $(text_specifications + " #spec_height").text("1000");
        $("._1000").removeClass("constructor__menu-disable");
        dataBox.attr("data-sets", b);

        if (dataBox.attr("data-sets") == b) {
          dataBox.attr("data-volume", $(this).attr("data-volume"));
        }

        if ($(text_btns_group + " " + text_btns).hasClass("_680")) {
          $("._680").addClass("constructor__menu-disable");
        }
      }

      if (d == true) {
        alert("Невозможно выбрать. Не соотвествует высоте.");
      } else if (d == false) {
        $(text_specifications + " #spec_diameter").text(a);
      }

      break;

    case "volume":
      var a = $(this).text().replace(/\s/g, '');
      var d = $(this).hasClass("constructor__menu-disable");
      var b = $(c.target).attr("class").replace(/\bconstructor__menu-category_item pointer\b\s/g, '');
      b = b.replace(/\bconstructor__menu-active\b/g, '');
      b = b.replace(/\s/g, '');

      if (b == "_680") {
        $("._680").removeClass("constructor__menu-disable");
        $(text_specifications + " #spec_height").text("680");
        dataBox.attr("data-sets", "680");

        if ($(text_btns_group + " " + text_btns).hasClass("_1000")) {
          $("._1000").addClass("constructor__menu-disable");
        }
      } else if (b == "_1000") {
        $("._1000").removeClass("constructor__menu-disable");
        $(text_specifications + " #spec_height").text("1000");
        dataBox.attr("data-sets", "1000");

        if ($(text_btns_group + " " + text_btns).hasClass("_680")) {
          $("._680").addClass("constructor__menu-disable");
        }
      }

      if (d == true) {
        alert("Невозможно выбрать. Не соотвествует высоте.");
      } else if (d == false) {
        dataBox.attr("data-volume", "_" + a);
        $(text_specifications + " #spec_volume").text(a);
      }

      break;

    case "equipment":
      var a = $(this).text().replace(/\s/g, '');
      var d = $(this).hasClass("constructor__menu-disable");

      if (d == true) {
        alert("Невозможно выбрать. Не соотвествует высоте.");
      } else if (d == false) {
        dataBox.attr("data-equipment", a[0]);
        $(text_specifications + " #spec_equipment").text(a);
      }

      break;

    case "coating":
      var a = $(this).text().replace(/\s/g, '');
      var d = $(this).hasClass("constructor__menu-disable");

      if (a == "Все") {
        $("#colorStand .color-item").removeClass("constructor__menu-active_color");
        $("#colorStand .gloss:nth-child(1)").addClass("constructor__menu-active_color");
        $("#colorStand .gloss").removeClass("disable");
        $("#colorStand .matt").removeClass("disable");
        dataBox.attr("data-color", "черный");
        $("#spec_color").text("черный");
        $(text_specifications + " #spec_coating").text("Глянцевое");
      } else if (a == "Глянцевое") {
        $("#colorStand .color-item").removeClass("constructor__menu-active_color");
        $("#colorStand .gloss:nth-child(1)").addClass("constructor__menu-active_color");
        $("#colorStand .gloss").removeClass("disable");
        $("#colorStand .matt").addClass("disable");
        dataBox.attr("data-color", "черный");
        $("#spec_color").text("черный");
        $(text_specifications + " #spec_coating").text(a);
      } else if (a == "Матовое") {
        $("#colorStand .color-item").removeClass("constructor__menu-active_color");
        $("#colorStand .matt:nth-child(5)").addClass("constructor__menu-active_color");
        $("#colorStand .matt").removeClass("disable");
        $("#colorStand .gloss").addClass("disable");
        dataBox.attr("data-color", "венге");
        $("#spec_color").text("венге");
        $(text_specifications + " #spec_coating").text(a);
      }

      break;
  }
});
button_color.click(function () {
  var c = $(this).attr("data-color");
  var e = $(this).parent(button_group_color).parent().attr("id");
  var f = ".constructor__menu-color_item .color-item";
  button_param.removeAttr("id");
  button_color.removeAttr("id");
  $(this).attr("id", "act");

  if ($(this).hasClass("constructor__menu-disable") == false) {
    if ($("#" + e + " " + f).hasClass("constructor__menu-active_color")) {
      $("#" + e + " " + f).removeClass("constructor__menu-active_color");
    }

    $(this).addClass("constructor__menu-active_color");
  }

  switch (e) {
    case "colorStand":
      if ($(this).hasClass("matt")) {
        $("#coating .constructor__menu-category_item").removeClass("constructor__menu-active");
        $("#coating .constructor__menu-category_item:nth-child(3)").addClass("constructor__menu-active");
      } else if ($(this).hasClass("gloss")) {
        $("#coating .constructor__menu-category_item").removeClass("constructor__menu-active");
        $("#coating .constructor__menu-category_item:nth-child(4)").addClass("constructor__menu-active");
      }

      dataBox.attr("data-color", c);
      $(text_specifications + " #spec_color").text(c);
      break;

    case "backlight":
      color_window.css("background-image", "url(" + $(this).children('img').attr("src") + ")");
      $(text_specifications + " #spec_backlight").text(c);
      break;
  }
});

var EditAquarium =
/*#__PURE__*/
function () {
  function EditAquarium(option) {
    _classCallCheck(this, EditAquarium);

    this.url = option.url;
    this.size = option.size;
    this.color = option.color;
    this.volume = option.volume;
    this.equipm = option.equipm;
    this.register = option.register;
  }

  _createClass(EditAquarium, [{
    key: "edit",
    value: function edit() {
      var mainUrl = this.url + this.size + this.color + this.volume + this.equipm + this.register;
      dataBoxImage.attr("src", mainUrl);
    }
  }]);

  return EditAquarium;
}();

function nullValues(c) {
  switch (c) {
    case "680":
      dataBox.attr("data-sets", "680");
      dataBox.attr("data-volume", "_90");
      break;

    case "1000":
      dataBox.attr("data-sets", "1000");
      dataBox.attr("data-volume", "_212");
      break;
  }
}