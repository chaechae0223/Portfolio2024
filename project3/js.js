$(document).ready(function(){

    $('.intro').on('click', function() {
        // $(this).addClass('hide');

        $(this).animate({'opacity':0},700,function(){
            $(this).addClass('hide')
        })

    })

        var hrNum;
        var minNum;
    
       setInterval(function(){
    
         // 내장객체를 활용해서 시간정보가져오기
    
         var now = new Date();
         var hr = now.getHours();
         var min = now.getMinutes();  
    
         if (min >= 10) {
             // 10보다 클경우
             minNum = min
     
         } else {
             // 10보다 작을경우
             minNum = '0' + min 
         }
         if (hr >= 10) {
             // 10보다 클경우
             hrNum = hr
         } else {
             // 10보다 작을경우
             hrNum = '0' + hr
         }      
             
             $('.hr').text(hrNum)
             $('.min').text(minNum)
           },1000)


    $('header h1').click(function(){

        $('.intro').removeClass('hide');
        $('.intro').animate({'opacity':1},700)

    })
     
    new TypeIt("#asyncExec", {
        waitUntilVisible: true,
      })
        .type("dokyeom")
        .exec(async () => {
          //-- Return a promise that resolves after something happens.
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve();
            }, 2000);
          });
        })
        .type(".kr")
        .go();

    $('.pic_left').mouseenter(function(){

        for(let i = 0; i<2; i++){

            $(this).find('ul').eq(i).css({'animation-play-state':'paused'});

        }

    })

    $('.pic_left').mouseleave(function(){

        for(let i = 0; i<2; i++){

            $(this).find('ul').eq(i).css({'animation': `ani${i+1} 60s infinite linear`});

        }

    })

    
    $('.pic_center').mouseenter(function(){

        for(let i = 0; i<2; i++){

            $(this).find('ul').eq(i).css({'animation-play-state':'paused'});

        }

    })

    $('.pic_center').mouseleave(function(){

        for(let i = 0; i<2; i++){

            $(this).find('ul').eq(i).css({'animation': `ani${i+3} 60s infinite linear`});

        }

    })

    $('.pic_right').mouseenter(function(){

        for(let i = 0; i<2; i++){

            $(this).find('ul').eq(i).css({'animation-play-state':'paused'});

        }

    })

    $('.pic_right').mouseleave(function(){

        for(let i = 0; i<2; i++){

            $(this).find('ul').eq(i).css({'animation': `ani${i+5} 60s infinite linear`});

        }

    })




    $('nav li').click(function(){
        var i = $(this).index()
        console.log(i)
        $('article').removeClass('on')
        $('article').eq(i).addClass('on')

    })

    $('nav .main').click(function(){


    $('.home .img').css({'left' : '-100%'}).stop().animate({'left':'50%'},1000)
    $('.home .txt').css({'right' : '-100%'}).stop().animate({'right':'50%'},1000)

})

$('.intro').click(function(){


    $('.home .img').css({'left' : '-100%'}).stop().animate({'left':'50%'},1200)
    $('.home .txt').css({'right' : '-100%'}).stop().animate({'right':'50%'},1200)

})

$('.profile .img').click(function(){

})


})