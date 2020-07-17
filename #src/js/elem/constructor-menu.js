$(document).ready(function()
{
    maxSizeBlock($(".text_description-transfer"),240,$(".text_description"));

    /* Active Menu */
    maxSizeBlock($("#constructor_color"),42,$("#color_block .list-constructor"));
    maxSizeBlock($("#constructor_size"),42,$("#size_block .list-constructor"));
    maxSizeBlock($("#configuration_block"),42,$("#configuration_block .list-constructor"));
    maxSizeBlock($("#constructor_equipment"),42,$("#equipment_block .list-constructor"));
    maxSizeBlock($("#backlight"),42,$("#backlight_block .list-constructor"));
    /* #Active Menu# */
});

/* 
 **Подставляет скролл, если высота привышает родителя 
 * name - название блока, у которого берется высота
 * h - максимальная высота
 * block - блок которому будет применяться скролл
*/
function maxSizeBlock(name, h, block)
{
    var h_block = name.height();
    if(h_block > h)
    {
        block.css("overflow-y","scroll");
    }
}

function activeMenu (e,f,key)
{
    e.click(function () {
        var id = f.attr('id');
        if(id == key)
            f.attr('id', "click");
        else
            f.attr('id', key);
	});
}