// Shelter JS

$(function(){

    /* prepend menu icon */
    $('.seealso').prepend('<div id="menu-icon">See also</div>');
    
    /* toggle nav */
    $("#menu-icon").on("click", function(){
        $("#nav").slideToggle();
        $(this).toggleClass("active");
    });
    
    $('#content-menu-link').click(function () {
    
        if ($('.nav-open').length) $('.nav-open').removeClass('nav-open');
        else $('#content').addClass('nav-open');
    
    });
    
    /* hide menu on content article click */
    $('#content-article, .content').click(function() {
        if ($('.nav-open').length) {
            $('.nav-open').removeClass('nav-open');
        }
    });
    
    
    if (document.documentElement.clientWidth < 767) {
    
    
    //Add Inactive Class To All Accordion Headers
        $('.accordion-header').toggleClass('inactive-header');
       
        // The Accordion Effect
        $('.accordion-header').click(function () {
            if($(this).is('.inactive-header')) {
               $(this).removeClass('inactive-header').addClass('active-header');
                $(this).next().slideToggle().toggleClass('open-content');
            }
            
            else {
                $(this).removeClass('active-header').addClass('inactive-header');
                $(this).next().slideToggle().toggleClass('open-content');
            }
        });
        
        // Fix scroll
        fixscroll($('#content-menu-link'), 106, $('#content'));
    }

});

// Functions
fixscroll = function (ele, pad, container) {
    
    if (ele.length) {
    
        var pad = pad || 20,
                top = ele.parent().offset().top,
                height = ele.height(),
                ws = $(window).scrollTop(),
                cbot = container.offset().top + container.height() - (height + pad);
        
        $(window).unbind('scroll').scroll(function () { fixscroll(ele, pad, container); });
        
        if (ws > (top - pad) && ws < cbot) ele.css({ top: ((ws - top) + pad) + 'px' });
        else if (ws < (top - pad)) ele.css({ top: '106px' });
    
    }
    
};