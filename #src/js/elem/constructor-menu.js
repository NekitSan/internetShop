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

    /* Constructor */

    //('#constructor_color','#constructor_size','#constructor_configuration','#constructor_equipment','#constructor_backlight')

    function backgroud()
    {
        var list_background = "#constructor_color";
        var listItem_background = ".color-items";
        var listItemNumber_background = new Array(1,2,3,4);
        {
            let btnColor = new Component(list_background, listItem_background, listItemNumber_background[0]);
            let btnColor2 = new Component(list_background, listItem_background, listItemNumber_background[1]);
            let btnColor3 = new Component(list_background, listItem_background, listItemNumber_background[2]);
            let btnColor4 = new Component(list_background, listItem_background, listItemNumber_background[3]);
        
            btnColor.defineButton.on('click', function(){
                let act = new ActButton(
                    {
                        background: list_background,
                        block: '.edit_block',
                        value: $(this).attr('value'),
                        order: $(this).attr('data-order')
                    }
                ); 
                act.stylec();
                //запись в поле с формой на отправку
            });
        }
    }

    backgroud();
    /* #Constructor# */
});


/* 
 **Кнопки конструктора
 * передается значение обертки(котейнера) с кнопками(блоками)
 *  
*/

class Component
{
    constructor(nameGroup, nameBlock, numb)
    {
        this.nameGroup = nameGroup;
        this.nameBlock = nameBlock;
        this.numb = numb;
    }
    get defineButton()
    {
        return $(this.nameGroup + ' ' + this.nameBlock + ":nth-child(" + this.numb + ")");
    }
}

class ActButton
{
    constructor(options)
    {
        this.background = options.background;
        this.block = options.block;
        this.value = options.value;
        this.order = options.order;
    }
    stylec()
    {
        console.log(this.order);
        console.log(this.background);
        var arrStyleBack = $(this.background).css('background-image').length; // none(4) 

        activeConstr(this.order, this.background, this.value, arrStyleBack)
    }
}


class XXX{
    constructor(options)
    {
        this.element = options.element; // DOM
        this.property = options.property; // value
        this.selector = options.selector; // style
        this.quantity = options.quantity; // none
        this.mod = options.mod; // для подсветки
    }
    showHideStyle()
    {
        if(this.quantity == 4)
        {
            $(this.element).css(this.property, this.selector);
            if(this.mod = 1)
                $(this.element).css('border', '0px');
        }
        else
        {
            $(this.element).css(this.property, '');
            if(this.mod = 1)
                $(this.element).css('border', '');
        }
        console.log("Все работает! 2");
    }
}


function activeConstr(order, background, value, arrStyleBack)
{
    switch(order)
        {
            case '1':
                let propertyXXX = new XXX(
                    {
                        element: background,
                        property: 'background-image',
                        selector: 'url(/images/background/green.png)',
                        quantity: arrStyleBack,
                        mod: 1
                    }
                );
                propertyXXX.showHideStyle();
            break;
        }
}



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