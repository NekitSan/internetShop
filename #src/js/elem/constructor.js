function rightUrlConstructor()
{
    var url = window.location.href,
    right_url = /\bconstructor/g.test(url);

    return right_url;
}

if(rightUrlConstructor() == true)
{
    $(document).ready(function()
    {
        var display_width = $(document).width();
        if(display_width < 900)
        {
            $(".constructor_part:nth-child(1)").addClass("disable_button");
            $(".menu_parameters").append( $(".constructor_part:nth-child(1) .active_menu") );
            $('.menu_parameters').removeClass("disable_button");
            $('.item_parameters').addClass("disable_button");
            $('#item_parameters').addClass("active");
        }
        else{
            $('#item_parameters').addClass("disable_button");
            $('.text_details').removeClass("disable_button");
            $("#item_creat").addClass("active");
            item_parameters
        }

        /* Button */
        $('#size_block .heading').change(function(){
            var option_name = $('option:selected',this).attr("name");
            switch(option_name)
            {
                case 'none':
                    $("#constructor_size680").addClass("disable_button");
                    $("#constructor_size1000").addClass("disable_button");
                break;
                case '680':
                    $(".edit_block").attr('data-common-volume', '90')
                    $("#constructor_size680").removeClass("disable_button");
                    $("#constructor_size1000").addClass("disable_button");
                break;
                case '1000':
                    $(".edit_block").attr('data-common-volume', '212')
                    $("#constructor_size1000").removeClass("disable_button");
                    $("#constructor_size680").addClass("disable_button");
                break;
            }
        });
        $('#color_block .heading').change(function(){
            var option_name = $('option:selected',this).attr("name");
            switch(option_name)
            {
                case 'none':
                    $(".matt").addClass("disable_button");
                    $(".gloss").addClass("disable_button");
                    $("#details-coating").val('Глянец');
                break;
                case 'gloss':
                    $(".gloss").removeClass("disable_button");
                    $(".matt").addClass("disable_button");
                    $("#details-coating").val('Глянец');
                break;
                case 'matt':
                    $(".matt").removeClass("disable_button");
                    $(".gloss").addClass("disable_button");
                    $("#details-coating").val('Матовое');
                break;
            }
        });
        $('.tabBar_group-item').on('click', function(){
            var option_name = $(this).attr("id");
                switch(option_name)
                {
                    case 'item_parameters':
                        $(this).siblings('.tabBar_group-item').removeClass("active");
                        $(".item_parameters").addClass("active");
                        $(this).addClass("active");

                        $(".menu_parameters").removeClass("disable_button");
                        $(".text_description").addClass("disable_button");
                        $(".text_details").addClass("disable_button");
                    break;
                    case 'item_description':
                        $(this).siblings('.tabBar_group-item').removeClass("active");
                        $(".item_parameters").removeClass("active");
                        $(this).addClass("active");

                        $(".menu_parameters").addClass("disable_button");
                        $(".text_description").removeClass("disable_button");
                        $(".text_details").addClass("disable_button");
                    break;
                    case 'item_creat':
                        $(this).siblings('.tabBar_group-item').removeClass("active");
                        $(".item_parameters").removeClass("active");
                        $(this).addClass("active");

                        $(".menu_parameters").addClass("disable_button");
                        $(".text_details").removeClass("disable_button");
                        $(".text_description").addClass("disable_button");
                    break;
                }
        });
        /* #Button# */

        /* Active Menu */
        maxSizeBlock($(".text_description-transfer"),240,$(".text_description"));

        const h_block_list_elements = 72;
        maxSizeBlock($("#constructor_size680"),h_block_list_elements,$("._size680"));
        maxSizeBlock($("#constructor_size1000"),h_block_list_elements,$("._size1000"));
        maxSizeBlock($("#constructor_sets"),h_block_list_elements,$("#sets_block .list-constructor"));
        maxSizeBlock($("#constructor_color"),h_block_list_elements,$("#color_block .list-constructor"));
        maxSizeBlock($("#constructor_backlight"),h_block_list_elements,$("#backlight_block .list-constructor"));
        /* #Active Menu# */

        /* Constructor */
        function constructorAct(list, list_item)
        {
            let btn = new Component(list, list_item);
            
            btn.defineButton.on('click', function(){
                let act = new Collector(
                    {
                        mod: list,
                        block: '.edit_block',
                        value: $(this).attr('value'),
                        key: $(this).attr('data-key'),
                        url: $(".edit_block").attr('data-url'),
                        sets: $(".edit_block").attr('data-mod'),
                        common_volume: ('_' + $(".edit_block").attr('data-common-volume')),
                        datacolor: $(".edit_block").attr('data-color')
                    }); 
                    act.collector();
            });
        }

        constructorAct("#constructor_color", ".color-items");
        constructorAct("#constructor_size680", ".text-items");
        constructorAct("#constructor_size1000", ".text-items");
        constructorAct("#sets_block", ".text-items");
        constructorAct("#backlight_block", ".color-items");
    });
        /* #Constructor# */

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

    class Collector
    {
        constructor(options)
        {
            this.mod = options.mod;
            this.block = options.block;
            this.value = options.value;
            this.key = options.key;
            this.url = options.url;
            this.sets = options.sets;
            this.common_volume = options.common_volume;
            this.datacolor = options.datacolor;
        }

        collector()
        {
            var setsData;
                switch(this.mod)
                {
                    case '#constructor_size680':
                        var sizeValue = $(this.mod).attr('data-mod');
                        if(sizeValue == 680)
                        {
                            $(this.block).attr("data-mod", sizeValue);
                            $(this.block).attr("data-size", this.key);
                            $("#details-height").val(sizeValue);
                            $("#details-volume").val(this.key);
                            $(".edit_block").val('data-common-volume', '90');

                            $(this.block + ' source').attr("srcset", this.url + sizeValue + '/' + this.datacolor + this.common_volume  + $(this.block).attr("data-set") + '.webp');
                            $(this.block + ' img').attr("src", sizeValue + '/' + this.datacolor + this.common_volume  + $(this.block).attr("data-set") + '.png');

                            switch(this.key) {
                                case '90':
                                    $(".main-block-constructor #constructor-block .edit_block").width(140);
                                    $(".main-block-constructor #constructor-block .edit_block").height(380);
                                break;
                                case '130':
                                    $(".main-block-constructor #constructor-block .edit_block").width(160);
                                    $(".main-block-constructor #constructor-block .edit_block").height(385);
                                break;
                                case '150':
                                    $(".main-block-constructor #constructor-block .edit_block").width(180);
                                    $(".main-block-constructor #constructor-block .edit_block").height(390);
                                break;
                                case '200':
                                    $(".main-block-constructor #constructor-block .edit_block").width(200);
                                    $(".main-block-constructor #constructor-block .edit_block").height(400);
                                break;
                                default:
                                    $(".main-block-constructor #constructor-block .edit_block").width('');
                                    $(".main-block-constructor #constructor-block .edit_block").height('');
                                break;
                            }
                        }
                    break;
                    case '#constructor_size1000':
                        var sizeValue = $(this.mod).attr('data-mod');
                        if(sizeValue == 1000)
                        {
                            $(".edit_block").attr('data-common-volume', '212');
                            $(this.block).attr("data-mod", sizeValue);
                            $(this.block).attr("data-size", this.key);
                            $("#details-height").val(sizeValue);
                            $("#details-volume").val(this.key);
                            
                            $(this.block + ' source').attr("srcset", this.url + sizeValue + '/' + this.datacolor + this.common_volume  + $(this.block).attr("data-set") + '.webp');
                            $(this.block + ' img').attr("src", sizeValue + '/' + this.datacolor + this.common_volume  + $(this.block).attr("data-set") + '.png');

                            switch(this.key) {
                                case '212':
                                    $(".main-block-constructor #constructor-block .edit_block").width(140);
                                    $(".main-block-constructor #constructor-block .edit_block").height(380);
                                break;
                                case '282':
                                    $(".main-block-constructor #constructor-block .edit_block").width(160);
                                    $(".main-block-constructor #constructor-block .edit_block").height(383);
                                break;
                                case '395':
                                    $(".main-block-constructor #constructor-block .edit_block").width(180);
                                    $(".main-block-constructor #constructor-block .edit_block").height(386);
                                break;
                                case '502':
                                    $(".main-block-constructor #constructor-block .edit_block").width(200);
                                    $(".main-block-constructor #constructor-block .edit_block").height(390);
                                break;
                                case '635':
                                    $(".main-block-constructor #constructor-block .edit_block").width(220);
                                    $(".main-block-constructor #constructor-block .edit_block").height(395);
                                break;
                                case '785':
                                    $(".main-block-constructor #constructor-block .edit_block").width(240);
                                    $(".main-block-constructor #constructor-block .edit_block").height(400);
                                break;
                                default:
                                    $(".main-block-constructor #constructor-block .edit_block").width('');
                                    $(".main-block-constructor #constructor-block .edit_block").height('');
                                break;
                            }
                        }
                    break;
                    case '#sets_block':
                        if($('.edit_block').attr('data-common-volume') == "90")
                        {
                                setsData = '680/';
                                if(this.key == "Б")
                                {
                                    $(this.block + ' source').attr("srcset", this.url + setsData + this.datacolor + this.common_volume + this.key + '.webp');
                                    $(this.block + ' img').attr("src", this.url + setsData + this.datacolor + this.common_volume + this.key + '.png');
                                    $(this.block).attr("data-set", (this.key));
                                    $("#details-sets").val(this.value);
                                }
                                else if(this.key == "С")
                                {
                                    $(this.block + ' source').attr("srcset", this.url + setsData + this.datacolor + this.common_volume + this.key + '.webp');
                                    $(this.block + ' img').attr("src", this.url + setsData + this.datacolor + this.common_volume + this.key + '.png');
                                    $(this.block).attr("data-set", (this.key));
                                    $("#details-sets").val(this.value);
                                }
                                else if(this.key == "П")
                                {
                                    $(this.block + ' source').attr("srcset", this.url + setsData + this.datacolor + this.common_volume + this.key + '.webp');
                                    $(this.block + ' img').attr("src", this.url + setsData + this.datacolor + this.common_volume + this.key + '.png');
                                    $(this.block).attr("data-set", (this.key));
                                    $("#details-sets").val(this.value);
                                }
                        }
                        if($('.edit_block').attr('data-common-volume') == "212")
                        {
                                setsData = '1000/';
                                if(this.key == "Б")
                                {
                                    $(this.block + ' source').attr("srcset", this.url + setsData + this.datacolor + this.common_volume + this.key + '.webp');
                                    $(this.block + ' img').attr("src", this.url + setsData + this.datacolor + this.common_volume + this.key + '.png');
                                    $(this.block).attr("data-set", (this.key));
                                    $("#details-sets").val(this.value);
                                }
                                else if(this.key == "С")
                                {
                                    $(this.block + ' source').attr("srcset", this.url + setsData + this.datacolor + this.common_volume + this.key + '.webp');
                                    $(this.block + ' img').attr("src", this.url + setsData + this.datacolor + this.common_volume + this.key + '.png');
                                    $(this.block).attr("data-set", (this.key));
                                    $("#details-sets").val(this.value);
                                }
                                else if(this.key == "П")
                                {
                                    $(this.block + ' source').attr("srcset", this.url + setsData + this.datacolor + this.common_volume + this.key + '.webp');
                                    $(this.block + ' img').attr("src", this.url + setsData + this.datacolor + this.common_volume + this.key + '.png');
                                    $(this.block).attr("data-set", (this.key));
                                    $("#details-sets").val(this.value);
                                }
                        }
                    break;
                    case '#constructor_color':
                            var sizeValue = $(this.mod).attr('data-coating');
                            if(sizeValue)
                            {
                                
                                $("#details-color").val(this.key);
                                $(this.block).attr("data-color", this.key);

                                $(this.block + ' source').attr("srcset", this.url + this.sets + '/' +  this.key + this.common_volume  + $(this.block).attr("data-set") + '.webp');
                                $(this.block + ' img').attr("src", this.url + this.sets + '/' +  this.key + this.common_volume  + $(this.block).attr("data-set") + '.png');
                            }
                            else if(sizeValue)
                            {
                                $("#details-color").val(this.key);
                                $(this.block).attr("data-color", this.key);

                                $(this.block + ' source').attr("srcset", this.url + this.sets + '/' +  this.key + this.common_volume  + $(this.block).attr("data-set") + '.webp');
                                $(this.block + ' img').attr("src", this.url + this.sets + '/' +  this.key + this.common_volume  + $(this.block).attr("data-set") + '.png');
                            }
                    break;
                    case '#backlight_block':
                        $("#details-backlight").val(this.key);
                        $("#constructor-block").css("background-image", 'url(' + this.value + ')');

                        if(this.key == 'отсуствует')
                        {
                            $("#details-backlight").val(this.key);
                            $("#constructor-block").css("background-image", '');
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
}
