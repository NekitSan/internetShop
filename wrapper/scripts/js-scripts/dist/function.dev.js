"use strict";

function listPhones(e, property) {
  $(e).on('click', function () {
    if (e == ".phone") {
      var phone = $(this).text();
      $(".phone__choice span").text(phone);
      $(".phone__to_choice").hide();
    }

    $(document).mouseup(function (e) {
      var outside_block = $(".phone__to_choice");

      if (!outside_block.is(e.target) && outside_block.has(e.target).length === 0) {
        outside_block.hide();
      }
    });
    $(".phone__to_choice").css("display", property);
  });
}

function basketFull() {
  if ($("#basket__full").attr("data-full") == "") {
    $("#basket__clear").show();
    $("#basket__full").hide();
  } else {
    $("#basket__clear").hide();
    $("#basket__full").show();
  }
}

function modalWindow(block, subblock) {
  var left = 646;
  var bottom = 524;
  $(block).on("click", function () {
    var url = $(this).children(subblock).attr("src");
    var alt = $(this).children(subblock).attr("alt");
    $("#modal__image").attr("src", url);
    $("#modal__image").attr("alt", alt);
    $("#modal").show();
  });
  $(".modal__item-modal_exit").on("click", function () {
    $("#modal").hide();
    $("#modal__image").attr("src", "");
    $("#modal__image").attr("alt", "Здесь будет выбранное изображения");
  });
}