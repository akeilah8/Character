$(".wow").click(function() {
    var question1 =$(".string-question").val();
    var question2=Number($(".number-question").val());

    if(question1 === "aggressive"){ 
$(".begin").hide();
  $(".wow").hide();      
    $(".dpimage").show();
     $(".main").text("Your Charcter is Deadpool");  }
      if(question2 === 7,8){ 
$(".begin").hide();
  $(".wow").hide();      
    $(".dpimage").show();
         $(".main").text("Your Charcter is Deadpool"); }  
        else if(question1 === "calm"){
            $(".begin").hide();
   			$(".wow").hide(); 
           $(".dpimage").hide();
    		$(".cable").show();
     $(".main").text("Your Charcter is Cable");  }
        
    
});