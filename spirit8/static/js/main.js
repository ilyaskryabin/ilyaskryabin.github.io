$(document).ready(function(){function e(){var e=$(document).scrollTop();$(s+" a").each(function(){var t=$(this).attr("href"),i=$(t);i.position().top<=e+1&&i.position().top+i.outerHeight()>e?($(s+" a.active").removeClass("active"),$(this).addClass("active")):$(this).removeClass("active")})}$(".header__btn-menu").click(function(){$(".header__nav").toggleClass("active")});var t=parseFloat($("#header").css("margin-top")),i=parseFloat($("#header").css("margin-bottom")),o=$("#header").height()+t+i;$(window).resize(function(){var e=$(window).height(),t=e-o;$("#top-banner").css("height",t)}),$(window).resize(),$(".scroll-link").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}}),$(".scroll-down").click(function(){var e=$(window).height();return $("body,html").animate({scrollTop:e},1e3),!1}),$(".js-slider__team").slick({dots:!0,arrows:!1,prevArrow:".team__arrow-prev",nextArrow:".team__arrow-next",speed:900,slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]}),$(".js-slider__services").slick({infinite:!1,speed:900,arrows:!1,prevArrow:".services__arrow-prev",nextArrow:".services__arrow-next",slidesToShow:4,slidesToScroll:4,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]}),$(".js-slider__clients").slick({dots:!0,speed:900,arrows:!1,prevArrow:".clients__arrow-prev",nextArrow:".clients__arrow-next",slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1}}]}),$(".js-slider__testimonials").slick({dots:!0,speed:900,arrows:!1,prevArrow:".testimonials__arrow-prev",nextArrow:".testimonials__arrow-next",slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:480,settings:{arrows:!0,dots:!1}}]}),$(function(){var e="";$("#flavor-nav a").click(function(){$("#all-flavors").fadeTo(200,.1),$("#flavor-nav a").removeClass("current"),$(this).addClass("current"),e=$(this).attr("rel"),$(".flavor").not("."+e).slideUp(),$("."+e).slideDown(),$("#all-flavors").fadeTo(600,1)})}),$(".popup-link").magnificPopup({type:"inline"}),jQuery(function(e){e(window).scroll(function(){var t=e(window).height()-e("#header-fixed").height();e(this).scrollTop()>t?e("#header-fixed").addClass("fixed"):e(this).scrollTop()<t&&e("#header-fixed").removeClass("fixed")})});var s=".header__nav";$(document).ready(function(){$(document).on("scroll",e),$("a[href^=#]").click(function(t){t.preventDefault(),$(document).off("scroll"),$(s+" a.active").removeClass("active"),$(this).addClass("active");var i=$(this).attr("href"),o=$(i);$("html, body").animate({scrollTop:o.offset().top},500,function(){window.location.hash=i,$(document).on("scroll",e)})})})});