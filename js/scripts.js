$(document).ready(function(){
  $("form.survay").submit(function(event){
    //event.preventDefault();

    var userName = $("input#name").val();
    var userPriorities = $("input:radio[name=development]:checked").val();
    var userEnjoy = $("select#enjoy").val();
    var userDescribes = $("select#describe").val();
    var userSpareTime = $("select#spareTime").val();

    if (!userName){
      alert("Please enter your name!");
      return;
    };

    if (userEnjoy === '5' && userDescribes === '4' || userPriorities === '5'){
      $(".output").hide();
      $(".addressing").text(userName);
      $("#notYours").show();
    } else if (userPriorities === '1' || userPriorities === '4' || userPriorities === '6' && userEnjoy === '1' || userEnjoy === '2'){
      $(".output").hide();
      $(".addressing").text(userName);
      $("#cssReact").show();
    } else if(userPriorities === '3' && userEnjoy === '3' || usergoal === '2'){
      $(".output").hide();
      $(".addressing").text(userName);
      $("#c-NET").show();
    } else if (userPriorities === '2' && userEnjoy === '3' || userEnjoy === '4' || usergoal === '3') {
      $(".output").hide();
      $(".addressing").text(userName);
      $("#rubyRails").show();
    } else if (userPriorities === '6' && userEnjoy === '3' || userEnjoy === '4' || usergoal === '4') {
      $(".output").hide();
      $(".addressing").text(userName);
      $("#javaAndroid").show();
    };

    event.preventDefault();
  });
});
