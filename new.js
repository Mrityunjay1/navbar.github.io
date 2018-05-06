$(document).ready(() => {


    $(".you").click(() => {

        	alert("you have clicked");
        })
      })
$(document).ready(() => {


    $("#grad1").mouseenter(() => {

        	$(".youu").css("background-color", "yellow");
        })
})
$(document).ready(() => {
    $("#grad1").click(() => {

        	$(".youuu").fadeOut("slow");
        })
})
$(document).ready(() => {
    $("#grad1, #panel").click(()=>{

        $("#test").slideDown("slow");
    })

      })
   
    
    