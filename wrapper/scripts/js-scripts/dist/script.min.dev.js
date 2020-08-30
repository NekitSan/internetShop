"use strict";

function listPhones(b, d) {
  $(b).on('click', function () {
    if (b == ".phone") {
      var e = $(this).text();
      $(".phone__choice span").text(e);
      $(".phone__to_choice").hide();
    }

    $(document).mouseup(function (c) {
      var a = $(".phone__to_choice");

      if (!a.is(c.target) && a.has(c.target).length === 0) {
        a.hide();
      }
    });
    $(".phone__to_choice").css("display", d);
  });
}

listPhones(".phone__choice .icons", "block");
listPhones(".phone", "none");