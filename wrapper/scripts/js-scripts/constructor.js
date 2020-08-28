const VERSION = 'Constructor 9.8.1';

// constructor
const button_param = $(".constructor__menu-category_item");
const button_group_color = $(".constructor__menu-color_item");
const button_color = $(".constructor__menu-color_item .color-item");
const color_window = $(".constructor__main-window");
const dataBox = $(".constructor__main-window_box");
const box = $(".constructor__main-window_box img");
const text_specifications = ".constructor_specifications";
const text_description = ".constructor_specifications";
const text_btns_group = ".constructor__menu-group_category";
const text_btns = ".constructor__menu-category_item";

//menu-description
$("#butt_description").on('click', function() {
    $(".constructor__main-group_content").show();
    $(".constructor_description").show();
});
$("#butt_specifications").on('click', function() {
    $(".constructor__main-group_content").show();
    $(".constructor_specifications").show();
});

$(".exit").on("click", function(){
    $(".constructor__main-group_content").hide();
    $(".constructor_description").hide();
    $(".constructor_specifications").hide();
});


button_param.click( function()
{
    // active menu
    var id_param = $(this).parent().attr("id");
    var text_button = ".constructor__menu-category_item";
    switch(id_param)
    {
        case "height":
            var meaning = $(this).text().replace(/\s/g, '');
            
            $(text_specifications + " " + "#spec_height").text(meaning);
        
            console.log("ID родителя: " + $(this).parent().attr("id"));
            if(meaning == "680")
            {
                $("._680").css("background-color", "");
                if($(text_btns_group + " " + text_btns).hasClass("_1000"))
                {
                    $("._1000").css("background-color", "gray");
                }
            }
            if(meaning == "1000")
            {
                $("._1000").css("background-color", "");
                if($(text_btns_group + " " + text_btns).hasClass("_680"))
                {
                    $("._680").css("background-color", "gray");
                }
            }

            //butt
            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active");
            }
            $(this).addClass("constructor__menu-active");
        break;
        case "diameter":
            var constr_val = $(this).text().replace(/\s/g, '');
            $(text_specifications + " " + "#spec_diameter").text(constr_val);
        
            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active");
            }
            $(this).addClass("constructor__menu-active");
        break;
        case "volume":
            var value = $(this).text().replace(/\s/g, '');
            dataBox.attr("data-volume", "_" + value);
            $(text_specifications + " " + "#spec_volume").text(value);
        
            console.log("ID родителя: " + $(this).parent().attr("id"));
            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active");
            }
            $(this).addClass("constructor__menu-active");
        break;
        case "equipment":
            var value = $(this).text().replace(/\s/g, '');
            dataBox.attr("data-equipment", value[0]);
            $(text_specifications + " " + "#spec_equipment").text(value);
        
            console.log("ID родителя: " + $(this).parent().attr("id"));
            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active");
            }
            $(this).addClass("constructor__menu-active");
        break;
        case "coating":
            var value = $(this).text().replace(/\s/g, '');
            $(text_specifications + " " + "#spec_coating").text(value);
        
            console.log("ID родителя: " + $(this).parent().attr("id"));
            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active");
            }
            $(this).addClass("constructor__menu-active");
        break;
    }
});

button_color.click( function()
{
    var id_param = $(this).parent(button_group_color).parent().attr("id");
    var text_button = ".constructor__menu-color_item .color-item";
    switch(id_param)
    {
        case "colorStand":
            var value = $(this).attr("data-color");
            $(text_specifications + " " + "#spec_coating").text(value);

            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active_color") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active_color");
            }
            $(this).addClass("constructor__menu-active_color");
        break;
        case "backlight":
            var value = $(this).attr("data-color");
            $(text_specifications + " " + "#spec_coating").text(value);

            console.log($(this).attr("data-color"));
            console.log("ID родителя: " + $(this).parent(button_group_color).parent().attr("id"));

            if( $("#" + id_param + " " + text_button).hasClass("constructor__menu-active_color") )
            {
                $("#" + id_param + " " + text_button).removeClass("constructor__menu-active_color");
            }
            $(this).addClass("constructor__menu-active_color");
        break;
    }
});