//@import "elem/file.X";
var
    images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    image_clone, result_image,
    prelaoder = $(".prelaoder"),
    perc_display = $(".under-prelaoder");

for( var i = 0; i < images_total_count; i++)
{
    image_clone = new Image();
    image_clone.onload = iamge_loaded;
    image_clone.onerror = iamge_loaded;
    image_clone.src = images[i].src;
}


function iamge_loaded()
{
    $('body').css("overflow", "hidden");
    images_loaded_count++;
    result_image =  ( (100 / images_total_count) * images_loaded_count );    

    if(result_image >= 50)
    {
        perc_display.cssBefore("border-right-color", "#116EEF");
    }
    if(result_image >= 75)
    {
        perc_display.cssBefore("border-bottom-color", "#116EEF");
    }
    if(result_image == 100)
    {
        perc_display.cssBefore("border-left-color", "#116EEF");
    }

    perc_display.html(( result_image << 0) + '%');
    if(images_loaded_count >= images_total_count)
    {
        setTimeout( function() {
            if(!prelaoder.hasClass('done'))
            {
                prelaoder.addClass('done');
                $('body').css("overflow", "");
            }
        }, 1000);
    }
}

@@include('elem/menu.js')
@@include('elem/constructor.js')
@@include('elem/rating.js')
