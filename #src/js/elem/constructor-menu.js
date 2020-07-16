$(document).ready(function()
{
    let color = new Array($("#color_item"),$("#color_block"));


    activeMenu(color[0],color[1]);
});


function activeMenu (e,f)
{
    e.click(function () {
        var id = f.attr('id');
        if(id == "color_block")
            f.attr('id',"click");
        else
            f.attr('id',"color_block");
	});
}