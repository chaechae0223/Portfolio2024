$(document).ready(function () {

  new TypeIt("#asyncExec", {
    waitUntilVisible: true,
  })
    .type("Hello. Love yourself Portfolio...")
    .exec(async () => {
      //-- Return a promise that resolves after something happens.
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve();
        }, 2000);
      });
    })
    .type("")
    .go();

  $(".intro_box_left").click(function () {

    $(".intro").fadeOut()
    $(".main").animate({ opacity: 1 }, 2000)

  })

  $(".intro_box_right").click(function () {

    $(".intro").fadeOut()
    $(".main").animate({ opacity: 1 }, 2000)


  })



  $(".character_img").click(function () {

    $(".popup").fadeIn()


  })


  $(".box_green_sm").click(function () {

    $(".box_pink_big").css({ "background-color": "#A9FFBC" })

    $(".box_pink_sm").css({ "z-index": "0", "margin-top": "-360px" })

    $(".box_pink_w").css({ "display": "none" })

    $(".box_green_img").css({ "margin-top": "30px" })

    $(this).css({ "z-index": "99", "margin-top": "-380px" })

    $(".box_green_w").css({ "display": "block" })

  })


  $(".box_pink_sm").click(function () {

    $(".box_pink_big").css({ "background-color": "#FFEDED" })

    $(".box_green_sm").css({ "z-index": "0", "margin-top": "-360px" })

    $(".box_pink_w").css({ "display": "block" })

    $(this).css({ "z-index": "10", "margin-top": "-380px" })

    $(".box_green_w").css({ "display": "none" })

  })

  $(".popup .x").click(function () {

    $(this).parent(".popup").fadeOut()



  })

  $(".pro1_2").click(function () {


    $(".cn_list").css({ 'display': 'block' });
    
    $(".pro2_cn").fadeOut();

    $(".pro3_cn").fadeOut();

    $(".pro4_cn").fadeOut();

    $(".pro1_cn").fadeIn();


  })


  $(".pro2_2").click(function () {


    $(".cn_list").css({ 'display': 'block' });
    
    $(".pro1_cn").fadeOut();

    $(".pro3_cn").fadeOut();

    $(".pro4_cn").fadeOut();

    $(".pro2_cn").fadeIn();


  })


  
  $(".pro4_2").click(function () {


    $(".cn_list").css({ 'display': 'block' });
    
    $(".pro1_cn").fadeOut();

    $(".pro2_cn").fadeOut();

    $(".pro3_cn").fadeOut();

    $(".pro4_cn").fadeIn();


  })

  $(".pro3_2").click(function () {


    $(".cn_list").css({ 'display': 'block' });
    
    $(".pro1_cn").fadeOut();

    $(".pro2_cn").fadeOut();

    $(".pro4_cn").fadeOut();

    $(".pro3_cn").fadeIn();


  })

  $(".cn_list .cn_list_x").click(function () {

    $(this).parent(".cn_list").fadeOut()


  })






})