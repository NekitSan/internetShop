$(document).ready(function() {
    let numOfClicks = 0;
    const $elem = $('.menu-title');

    $elem.on('click', () => {
        ++numOfClicks;
        if(numOfClicks % 2 !== 0)
        { 
            $('.inner_menu').css("display","block");
            $elem.css("border-bottom","solid 3px #fff");
        }
        else 
        {
            $('.inner_menu').css("display","");
            $elem.css("border-bottom","");
        }
    });
});