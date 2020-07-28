(function(a){'use string';a.pseudoElements={length:0};var b=function(c){if('object'==typeof c.argument||c.argument!==void 0&&c.property!==void 0){for(var d of c.elements.get()){d.pseudoElements||(d.pseudoElements={styleSheet:null,before:{index:null,properties:null},after:{index:null,properties:null},id:null});var e=function(){if(null!==d.pseudoElements.id)return+d.getAttribute('data-pe--id')!==d.pseudoElements.id&&d.setAttribute('data-pe--id',d.pseudoElements.id),'[data-pe--id="'+d.pseudoElements.id+'"]::'+c.pseudoElement;var k=a.pseudoElements.length;return a.pseudoElements.length++,d.pseudoElements.id=k,d.setAttribute('data-pe--id',k),'[data-pe--id="'+k+'"]::'+c.pseudoElement}();if(!d.pseudoElements.styleSheet)if(document.styleSheets[0])d.pseudoElements.styleSheet=document.styleSheets[0];else{var f=document.createElement('style');document.head.appendChild(f),d.pseudoElements.styleSheet=f.sheet}if(d.pseudoElements[c.pseudoElement].properties&&d.pseudoElements[c.pseudoElement].index&&d.pseudoElements.styleSheet.deleteRule(d.pseudoElements[c.pseudoElement].index),'object'==typeof c.argument){if(c.argument=a.extend({},c.argument),!d.pseudoElements[c.pseudoElement].properties&&!d.pseudoElements[c.pseudoElement].index){var g=d.pseudoElements.styleSheet.rules.length||d.pseudoElements.styleSheet.cssRules.length||d.pseudoElements.styleSheet.length;d.pseudoElements[c.pseudoElement].index=g,d.pseudoElements[c.pseudoElement].properties=c.argument}var h='';for(var i in c.argument)d.pseudoElements[c.pseudoElement].properties[i]='function'==typeof c.argument[i]?c.argument[i]():c.argument[i];for(var i in d.pseudoElements[c.pseudoElement].properties)h+=i+': '+d.pseudoElements[c.pseudoElement].properties[i]+' !important; ';d.pseudoElements.styleSheet.addRule(e,h,d.pseudoElements[c.pseudoElement].index)}else if(void 0!==c.argument&&void 0!==c.property){if(!d.pseudoElements[c.pseudoElement].properties&&!d.pseudoElements[c.pseudoElement].index){var g=d.pseudoElements.styleSheet.rules.length||d.pseudoElements.styleSheet.cssRules.length||d.pseudoElements.styleSheet.length;d.pseudoElements[c.pseudoElement].index=g,d.pseudoElements[c.pseudoElement].properties={}}d.pseudoElements[c.pseudoElement].properties[c.argument]='function'==typeof c.property?c.property():c.property;var h='';for(var i in d.pseudoElements[c.pseudoElement].properties)h+=i+': '+d.pseudoElements[c.pseudoElement].properties[i]+' !important; ';d.pseudoElements.styleSheet.addRule(e,h,d.pseudoElements[c.pseudoElement].index)}}return a(c.elements)}if(void 0!==c.argument&&void 0===c.property){var d=a(c.elements).get(0),j=window.getComputedStyle(d,'::'+c.pseudoElement).getPropertyValue(c.argument);return d.pseudoElements?a(c.elements).get(0).pseudoElements[c.pseudoElement].properties[c.argument]||j:j||null}return console.error('Invalid values!'),!1};a.fn.cssBefore=function(c,d){return b({elements:this,pseudoElement:'before',argument:c,property:d})},a.fn.cssAfter=function(c,d){return b({elements:this,pseudoElement:'after',argument:c,property:d})}})(jQuery);
var
images = document.images,
images_total_count = images.length,
images_loaded_count = 0,
image_clone, result_image,
prelaoder = $(".prelaoder"),
perc_display = $(".under-prelaoder");

for( var i = 0; i < images_total_count; i++)
{
    image_clone = new Image();
    image_clone.onload = iamge_loaded;
    image_clone.onerror = iamge_loaded;
    image_clone.src = images[i].src;
}


function iamge_loaded()
{
    $('body').css("overflow", "hidden");
    images_loaded_count++;
    result_image =  ( (100 / images_total_count) * images_loaded_count );    

    if(result_image >= 50)
    {
        perc_display.cssBefore("border-right-color", "#116EEF");
    }
    if(result_image >= 75)
    {
        perc_display.cssBefore("border-bottom-color", "#116EEF");
    }
    if(result_image == 100)
    {
        perc_display.cssBefore("border-left-color", "#116EEF");
    }

    perc_display.html(( result_image << 0) + '%');
    if(images_loaded_count >= images_total_count)
    {
        setTimeout( function() {
            if(!prelaoder.hasClass('done'))
            {
                prelaoder.addClass('done');
                $('body').css("overflow", "");
            }
        }, 1000);
    }
}