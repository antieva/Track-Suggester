$(document).ready(function(){
  $("form.survay").submit(function(event){
    //event.preventDefault();

    var userName = $("input#name").val();
    var userPriorities = $("input:radio[name=development]:checked").val();
    var userEnjoy = $("select#enjoy").val();
    var userDescribes = $("select#describe").val();
    var userGoal = $("select#goal").val();

    if (!userName){
      alert("Please enter your name!");
      return;
    };

    if (userEnjoy === '5' && userDescribes === '4' || userPriorities === '5'){
      $(".output").hide();
      $(".addressing").text(userName);
      $("#notYours").show();
    } else if (userPriorities === '1' || userPriorities === '4') {
        if (userEnjoy === '1' || userEnjoy === '2'){
          $(".output").hide();
          $(".addressing").text(userName);
          $("#cssReact").show();
        } else {
          $(".output").hide();
          $(".addressing").text(userName);
          $("#rubyRails").show();
        }
    } else if(userPriorities === '2' || userPriorities === '3'){
        if (userGoal === '2'){
          $(".output").hide();
          $(".addressing").text(userName);
          $("#c-NET").show();
        } else {
          $(".output").hide();
          $(".addressing").text(userName);
          $("#rubyRails").show();
        }
    } else if (userPriorities === '6') {
        if (userEnjoy === '5' && userDescribes === '4') {
          $(".output").hide();
          $(".addressing").text(userName);
          $("#notYours").show();
        } else {
          $(".output").hide();
          $(".addressing").text(userName);
          $("#cssReact").show();
        }
    };

    event.preventDefault();
  });
});
