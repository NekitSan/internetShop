let CONSTRUCTOR = function () 
{
    /* Menu */
    let choiceColorOpen, choiceColor,
        choiceSizeOpen, choiceSize,
        choiceSetOpen, choiceSet,
        choiceFillerOpen, choiceFiller,
        choiceDecorationOpen, choiceeDecoration,
        choiceBacklightOpen, choiceBacklightClose, choiceBacklight;

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
    let colorList, shadowList,
        block_tovar, shadow_tovar,
        sizeList, setList,
        fillerList, filler_blocks,
        decorationList, decoration_blocks;

    block_tovar = $(".constructor_part-block");
    shadow_tovar = $(".constructor_part-block");

    colorList = $(".colorList-item");
    shadowList = $(".backlightList-item");
    sizeList = $(".sizeList-item");
    setList = $(".setList-item");

    fillerList = $(".fillerList-item");
    filler_blocks =
    {
        sand: "https://krot.info/uploads/posts/2020-01/1579372333_19-70.jpg",
        plastic: "https://cdn.recyclemag.ru/main/f/f1c5cc3483ff59de6d85e91a42488208.jpg",
        stone: "https://cdn3.static1-sima-land.com/items/791669/0/700.jpg?v=0"
    };

    decorationList = $(".decorationList-item");
    /* #Action# */

    let constructor_collector =
    { 
        color: 
        [
            choiceColorOpen,
            choiceColor,
            colorList
        ], 
        size: 
        [
            choiceSizeOpen,
            choiceSize,
            sizeList
        ], 
        set: 
        [
            choiceSetOpen,
            choiceSet,
            setList
        ], 
        filler: 
        [
            choiceFillerOpen,
            choiceFiller,
            fillerList
        ], 
        decoration: 
        [
            choiceDecorationOpen,
            choiceeDecoration,
            decorationList
        ], 
        backligh: 
        [
            choiceBacklightOpen,
            choiceBacklightClose,
            choiceBacklight,
            shadowList
        ],

        Menu()
        {
            constructor_collector.color[0].click(
                function()
                {
                    constructor_collector.color[1].css("display", "block");
                    clearStyleList(1);
                }
            );
            constructor_collector.size[0].click(
                function()
                {
                    constructor_collector.size[1].css("display", "block");
                    clearStyleList(2);
                }
            );
            constructor_collector.set[0].click(
                function()
                {
                    constructor_collector.set[1].css("display", "block");
                    clearStyleList(3);
                }
            );
            constructor_collector.filler[0].click(
                function()
                {
                    constructor_collector.filler[1].css("display", "block");
                    clearStyleList(4);
                }
            );
            constructor_collector.decoration[0].click(
                function()
                {
                    constructor_collector.decoration[1].css("display", "block");
                    clearStyleList(5);
                }
            );
            constructor_collector.backligh[0].click(
                function()
                {
                    constructor_collector.backligh[2].css("display", "block");
                    clearStyleList(6);
                }
            );
            constructor_collector.backligh[1].click(
                function()
                {
                    constructor_collector.backligh[2].css("display", "");
                    clearStyleList(7);
                }
            );
        },

        Action()
        {
            constructor_collector.color[2].click(
                function()
                {
                    var colorBlock = $(this).attr('style');

                    var modifColorBlock = colorBlock.replace(/background-color:/g, "");
                    modifColorBlock = modifColorBlock.replace(/;/g, "");
                    
                    block_tovar.css('background-color', modifColorBlock);
                }
            );

            constructor_collector.backligh[3].click(
                function()
                {
                    var shadowBlock = $(this).attr('style');

                    var modifShadowBlock = shadowBlock.replace(/background-color:/g, "");
                    modifShadowBlock = modifShadowBlock.replace(/;/g, "");
                    
                    shadow_tovar.css("background-color", modifShadowBlock);
                }
            );

            constructor_collector.size[2].click(
                function()
                {
                    var sizeBlock = $(this).attr('value');
                    
                    block_tovar.css("height", sizeBlock);
                }
            );

            constructor_collector.set[2].click(
                function()
                {
                    var setBlock = $(this).attr('value');

                    switch(setBlock)
                    {
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
                }
            );

            constructor_collector.filler[2].click(
                function()
                {
                    var fillerBlock = $(this).attr('value');

                    switch(fillerBlock)
                    {
                        case '0':
                            block_tovar.css("background-image", 'url(' + filler_blocks.sand + ')');
                        break;
                        case '1':
                            block_tovar.css("background-image", 'url(' + filler_blocks.plastic + ')');
                        break;
                        case '2':
                            block_tovar.css("background-image", 'url(' + filler_blocks.stone + ')');
                        break;
                    }
                }
            );

            constructor_collector.decoration[2].click(
                function()
                {
                    var decorationBlock = $(this).attr('value');

                    switch(decorationBlock)
                    {
                        case '0':
                            block_tovar.css("border", 'solid 5px');
                        break;
                        case '1':
                            block_tovar.css("border", 'solid 10px');
                        break;
                        case '2':
                            block_tovar.css("border", 'solid 0px');
                        break;
                    }
                }
            );

            $(".act").click(
                function()
                {
                    $(".constructor_clear").css("opacity", "1");
                }
            );

            $(".constructor_clear").click(
                function()
                {
                    clearStyleList(101);
                }
            );
        }
        
    };
    function clearStyleList(e)
    {
        switch(e)
        {
            case 1:
                constructor_collector.size[1].css("display", "");
                constructor_collector.set[1].css("display", "");
                constructor_collector.filler[1].css("display", "");
                constructor_collector.decoration[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                clearChecked(constructor_collector.backligh[0],constructor_collector.backligh[1]);
            break;
            case 2:
                constructor_collector.color[1].css("display", "");
                constructor_collector.set[1].css("display", "");
                constructor_collector.filler[1].css("display", "");
                constructor_collector.decoration[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                clearChecked(constructor_collector.backligh[0],constructor_collector.backligh[1]);
            break;
            case 3:
                constructor_collector.color[1].css("display", "");
                constructor_collector.size[1].css("display", "");
                constructor_collector.filler[1].css("display", "");
                constructor_collector.decoration[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                clearChecked(constructor_collector.backligh[0],constructor_collector.backligh[1]);
                
            break;
            case 4:
                constructor_collector.color[1].css("display", "");
                constructor_collector.size[1].css("display", "");
                constructor_collector.set[1].css("display", "");
                constructor_collector.decoration[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                clearChecked(constructor_collector.backligh[0],constructor_collector.backligh[1]);
                
            break;
            case 5:
                constructor_collector.color[1].css("display", "");
                constructor_collector.size[1].css("display", "");
                constructor_collector.set[1].css("display", "");
                constructor_collector.filler[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                clearChecked(constructor_collector.backligh[0],constructor_collector.backligh[1]);
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
                constructor_collector.decoration[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                $(".constructor_clear").css("opacity", "");
            break;
            case 101:
                constructor_collector.color[1].css("display", "");
                constructor_collector.size[1].css("display", "");
                constructor_collector.set[1].css("display", "");
                constructor_collector.filler[1].css("display", "");
                constructor_collector.decoration[1].css("display", "");
                constructor_collector.backligh[2].css("display", "");
                
                $(".constructor_clear").css("opacity", "");
                block_tovar.attr("style", "");
                shadow_tovar.attr("style", "");
                clearChecked(constructor_collector.backligh[0],constructor_collector.backligh[1]);
            break;
            default:
                alert("Такого не существует");
            break;
        }
    }

    function clearChecked (open, close)
    {
        if( open.prop("checked", true) )
            {
                open.prop("checked", false);
                close.prop("checked", true);
            }
    }

    constructor_collector.Menu(); // меню
    constructor_collector.Action(); // функционал

}


CONSTRUCTOR();