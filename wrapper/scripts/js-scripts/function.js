function listPhones(e, property)
{
    $(e).on('click', function() {
        if(e == ".phone")
        {
            var phone = $(this).text();
            $(".phone__choice span").text(phone);
            $(".phone__to_choice").hide();
        }
        
        $(document).mouseup(function (e)
        {
            var outside_block = $(".phone__to_choice");
            if (!outside_block.is(e.target) && outside_block.has(e.target).length === 0)
            {
                    outside_block.hide();
            }
        });

        $(".phone__to_choice").css("display", property);
    });

}