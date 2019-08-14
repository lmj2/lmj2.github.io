(function(){
    $('.animated').click(function(){
        if($(this).attr('href') != undefined)
            window.location.href=$(this).attr('href');
    });
    $('.img-container').mouseover(function(){
        var desc_container = $(this).children('.desc-container');
        $(desc_container).css({
            'display':'none'
        });

        var h = $(this).children('.animated');
        var wrap = $(h).children('div.wrapper');

        var wid_wrap = $(this).children('.desc-container').width();
        var wid_con = $(this).width();
        var hei_con = $(this).height();
        var hei_wrap = $(this).children('.desc-container').height();
        $(wrap).css({
           // 'left':(wid_con-wid_wrap)/4+"px",
            //'top':(hei_con - hei_wrap )/2+"px",
            'bottom':"20px",
        });
        $(h).css({
            'display':'block',

        })
    });
    $('.img-container').mouseout(function(){
        var h = $(this).children('.animated');
        $(h).css({
            'display':'none',
        })
        var desc_container = $(this).children('.desc-container');
        $(desc_container).css({
            'display':'block',
        });
    });
    var ratio = 1.097;
    var imgSrc = $('#tag-image').attr('src');
    // getRatio(imgSrc,function(w,h){
    //     console.log(w+"---"+h);
    //     ratio = w / h;
    // });
    $(window).resize(function(){
        if($(window).width()>768){
            var img_container = $('.gallery > .img-col');
            var wi = $(img_container).width();
            $('.gallery .img-col').css({
                'height':Math.floor(wi/ratio)+"px",
            });
        }
    });
    // function getRatio(url,callback){
    //     var img = new Image();
    //     img.src = url;
    //     if(img.complete){
    //         callback(img.width,img.height);
    //     }else{
    //         img.onload = function(){
    //             callback(img.width,img.height);
    //         }
    //     }
    // }
})();