$(document).ready(function(){$("#menu").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top-129;$("body,html").animate({scrollTop:n},1500)})});
$(document).ready(function(){$("#but").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top-62;$("body,html").animate({scrollTop:n},1500)})});
$(document).ready(function(){$("#but2").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top-62;$("body,html").animate({scrollTop:n},1500)})});
$(document).ready(function(){$("#but3").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top-62;$("body,html").animate({scrollTop:n},1500)})});
$(document).ready(function(){$("#but4").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),n=$(e).offset().top-62;$("body,html").animate({scrollTop:n},1500)})});
 $(document).ready(function(){
        
        $('#buttoncheckbox').on('click', function(){    
            
            var check = true;

            if( 
                $( "#checkboxtextarea" ).val() === '' 
            ){
                check = false;
                alert('Введите текст вашего намерения');
            }
            
            //$("#checkboxconf").prop("checked");
            
            if(check === true){
    
                if($("#checkboxconf").prop("checked") === true){

                    //alert(true);

                    //alert($( "#checkboxtextarea" ).val());

                    //http://joinmart.ru/settexttosession.php?text=tttttttttt

                    $.ajax({
                        url: "/settexttosession.php?text="+$( "#checkboxtextarea" ).val(),
                        success: function(data) {

                            //alert('все  гуд');

                            //indow.open('http://glopart.ru');
                            
                            window.location.href = 'https://glopart.ru/buy/160745';
                        }
                    });
                    
                }else{
                    alert('Примите условия конфиденциальности')
                }
                
            };

        });

		if(screen.width < 1100 && screen.width > 700){
			var meta = document.createElement('meta');
			meta.name = 'viewport';
			meta.content = 'width=1400';
			document.getElementsByTagName('head')[0].appendChild(meta);
		}
		$('#menu').on('click',function(event){$(this).children().toggleClass('is-visible');});

		if(screen.width > 600){
			
$('.book').animated('fadeIn');

$('.sect3 .pre-container').animated('fadeInUp');
$('.sect7 img').animated('fadeInUp');
$('.exl').animated('slideInLeft');
$('.exr').animated('slideInRight');

var waypoint = new Waypoint({
  element: $('#two'),
  handler: function(direction) {
  $('#two .ex').each(function(index){
  	var $this = $(this);
  	 setTimeout(function(){
   	$this.addClass('fadeInUp').css({'opacity':1});
   	if(index == 2) $('#two button').addClass('fadeInUp').css({'opacity': 1}); 
   },500*index);
  });
  }
})  
		}

		$("form").on("submit", function(e){

	var answer = $(this).serialize();
	$.ajax({
		type: "POST",
		cache: false,
		data: answer,
		url: "php/submit.php",
		success: function(data){
		$(this).trigger('reset');
		}
			
	});
	return false;
	
	});
 	  	  
    });