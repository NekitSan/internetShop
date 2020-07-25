$(document).ready(function() {
    /* Для телефонов */
    let numOfClicks = 0;
    const elem = $('.menu-title');

    elem.on('click', () => {
        ++numOfClicks;
        if(numOfClicks % 2 !== 0)
        { 
            $('.burger rect:nth-child(1)').css("transform","translate(10%, 0%) rotate(45deg)");
            $('.burger rect:nth-child(2)').css("transform","translate(-25%, 60%) rotate(-45deg)");
            $('.burger rect:nth-child(3)').css("opacity","0");
            $('.inner_menu').css("display","block");
            $('.links__group').css("display","block");
            elem.css("border-bottom","solid 3px #fff");
        }
        else 
        {
            $('.inner_menu').css("display","");
            $('.links__group').css("display","");
            elem.css("border-bottom","");
            $('.burger rect:nth-child(1)').css("transform","");
            $('.burger rect:nth-child(2)').css("transform","");
            $('.burger rect:nth-child(3)').css("opacity","");
        }
    });
});