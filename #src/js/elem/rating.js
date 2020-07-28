showImg($(".show_list-img"), "show-img", 1, 1);

function rating(numb)
{
    const max_rating = 5;
    for(var i = 1; i<= numb; i++)
    {

    }
}

/* 
 **Показывает список картинок при нажатии
 * show_text - название блока, у которого берется высота
 * valueClass - названия класса списка картинок
 * mod - зависит какой стиль "display" подставится (0 - block, 1 - flex)
 * btn_mod - зависит будет ли скрытие или показ надписи (0 - нет, 1 - да)
 
 * Поправить: Почему-то появляется id у блока show_text(никак не мешает)
*/
function showImg(show_text, valueClass, mod, btn_mod)
{
    show_text.click(function(){
        var origin_id = $(this).attr('data-key');
        var id = $(this).siblings('.' + valueClass).attr("id");

        var key = new Array('click','click_flex');
        var btn = new Array('.open_list-img','.close_list-img');

        if(id == key[mod])
        {
            $('.' + origin_id).attr('id', origin_id);
            $('.' + valueClass).removeClass(origin_id);
            if(btn_mod == 1)
            {
                $('.' + origin_id + ' ' + btn[0]).show();
                $('.' + origin_id + ' ' + btn[1]).hide();
                $(this).removeClass(origin_id);
            }
        }
        else
        {
            $(this).siblings('.' + valueClass).addClass(origin_id);
            $('.' + origin_id).attr('id', key[mod]);
            if(btn_mod == 1)
            {
                $(this).addClass(origin_id);
                $('.' + origin_id + ' ' + btn[1]).show();
                $('.' + origin_id + ' ' + btn[0]).hide();
            }
        }
    })
}