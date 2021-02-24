$(window).scroll(function()
{
    if($(this).scrollTop() > 40)
    {
        $('.backTop').show();
    }
    else
    {
        $('.backTop').hide();
    }
    //Cuon chuot
    local = $(window).scrollTop()
    console.log(local);
    if(local)
    {
        $('.nenden').hide();
    }
    else
    {
        $('.nenden').show();
    }

    //Waypoint
    $('.solieu').counterUp(
        {
            delay: 10,
            time: 3000
        }
    )
})
