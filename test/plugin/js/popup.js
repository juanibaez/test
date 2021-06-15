
$(document).ready(function() {
    $( "#registered" ).hide();
    $( "#connection_issue" ).hide();


    if (typeof $.cookie('sessionId') === 'undefined'){
      $("#account-information").hide();
      $("#create-account").show();
    } else {
      //checkEmailAddress($.cookie('sessionId'));
      //$.removeCookie("email");
    }

    $("#btn-register").click(function () {
        var formChecked = $(".customer-register-form").valid();

        if (formChecked) {
          var email = $('#txt_new_email').val();
          var jsonObject = {
              apiUrlEndpoint: '/consumer/account/create',
              fName: $('#txt_new_fname').val(),
              lName: $('#txt_new_lname').val(),
              email: email,
              phone: $('#txt_new_phone').val(),
              product: '2'
          }
          
          apiObject.postAPI(jsonObject).done(function(result){
              if (JSON.stringify(result.status) == 200) {
                  var sessionId = result.data;
                  alert(sessionId);
                  $( ".register" ).hide();
                  $( "#registered" ).show();
                  $.cookie("sessionId", sessionId);
                  alert($.cookie('sessionId'));
              } else {
                  $("#alert-signin-error").show();
                  $('#signin-message').text(result.message);
              }
          });
        }
    });
});

function checkEmailAddress(email) {
  var jsonObject = {
      apiUrlEndpoint: '/app/pluggin/video/user/email/check',
      email: email
  }
  
  apiObject.getAPI(jsonObject).done(function(result){
    alert(JSON.stringify(result.status));
      if (JSON.stringify(result.status) == 200) {
        $("#create-account").hide();
        $("#account-information").show();
      } else {
        $("#account-information").hide();
        $("#create-account").show();
      }
  });
}


