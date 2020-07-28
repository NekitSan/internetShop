$(document).ready(function()
{
    $('#size_block .heading').change(function(){
        var option_name = $('option:selected',this).attr("name");
        switch(option_name)
        {
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


    maxSizeBlock($(".text_description-transfer"),240,$(".text_description"));

    /* Active Menu */
    const h_block_list_elements = 72;
    maxSizeBlock($("#constructor_color"),h_block_list_elements,$("#color_block .list-constructor"));
    maxSizeBlock($("#constructor_size680"),h_block_list_elements,$("#size_block .list-constructor"));
    maxSizeBlock($("#constructor_size1000"),h_block_list_elements,$("#size_block .list-constructor"));
    maxSizeBlock($("#constructor_configuration"),h_block_list_elements,$("#configuration_block .list-constructor"));
    maxSizeBlock($("#constructor_equipment"),h_block_list_elements,$("#equipment_block .list-constructor"));
    maxSizeBlock($("#backlight"),h_block_list_elements,$("#backlight_block .list-constructor"));
    /* #Active Menu# */

    /* Constructor */

    //('#constructor_color','#constructor_size','#constructor_configuration','#constructor_equipment','#constructor_backlight')

    function constructorAct(list, list_item)
    {
        let btn = new Component(list, list_item);
        
        btn.defineButton.on('click', function(){
            let act = new ActButton(
                {
                    mod: list,
                    block: '.edit_block',
                    value: $(this).attr('value'),
                    key: $(this).attr('data-key')
                }); 
                act.stylec();
            //запись в поле с формой на отправку
        });
    }

    constructorAct("#constructor_color", ".color-items");
    constructorAct("#constructor_size680", ".text-items");
    constructorAct("#constructor_size1000", ".text-items");
    constructorAct("#configuration_block", ".text-items");
    constructorAct("#constructor_equipment", ".text-items");
    constructorAct("#constructor_backlight", ".color-items");
    /* #Constructor# */
});


/* 
 **Кнопки конструктора
 * передается значение обертки(контейнера) с кнопками(блоками)
 *  
*/

class Component
{
    constructor(nameGroup, nameBlock)
    {
        this.nameGroup = nameGroup;
        this.nameBlock = nameBlock;
    }
    get defineButton()
    {
        return $(this.nameGroup + ' ' + this.nameBlock);
    }
}

class ActButton
{
    constructor(options)
    {
        this.mod = options.mod;
        this.block = options.block;
        this.value = options.value;
        this.key = options.key;
    }
    stylec()
    {

        /* Aquarium parameters */
        var urlImageAquarium = "images/constructor/sets/";
        var aquariumSizes680 = new Array('_90', '_130', '_150', '_200'); // h 680 mm
        var aquariumSizes1000 = new Array(212, 282, 395, 502, 635, 785); // h 1000 mm
        var aquariumSets = new Array('Б.png', 'С.png', 'П.png');

        var total_style_symbols = $(this.block).css('background-image').length; // none(4) 
        var colors_total_count = new Array(
            'черный','венге','орех','кедр',
            'клен','ваниль','белый','патина',
            'фиолет','красный',);

            console.log(this.mod);
            console.log(this.key);
            console.log("///////////");
        
            switch(this.mod)
            {
                case '#constructor_size680':
                    var sizeStyle = $(this.mod).css('display').length;
                    var sizeValue = $(this.mod).attr('data-key');
                    if(sizeStyle != 4 && sizeValue == 680)
                    {
                        console.log(this.mod);
                        console.log(this.key);
                    }
                break;
                case '#constructor_size1000':
                    var sizeStyle = $(this.mod).css('display').length;
                    var sizeValue = $(this.mod).attr('data-key');
                    if(sizeStyle != 4 && sizeValue == 1000)
                    {
                        console.log(this.mod);
                        console.log(this.key);
                    }
                break;
                case '#constructor_equipment':
                    if(this.key == "Б")
                    {
                        console.log(this.mod);
                        console.log(this.key);
                    }
                    else if(this.key == "С")
                    {
                        console.log(this.mod);
                        console.log(this.key);
                    }
                    else if(this.key == "П")
                    {
                        console.log(this.mod);
                        console.log(this.key);
                    }
                break;
            }
    }
}



/* 
 **Подставляет скролл, если высота превышает родителя 
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