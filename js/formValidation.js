//Wait for the DOM to be ready
$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contactUs']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: {
        required: "Please enter your email",
        match: "Please enter a valid email address",
      },
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      // form.submit();

      var name = $("#name").val();
      var email = $("#email").val();
      var address = $("#address").val();

      // Alert for DEMO

      // alert("First Name:"+fName+", Last Name:"+lName+",Email:"+email+", Mob_Num:"+mobNum);

      // comment out AJAX for DEMO only

      $.ajax({
        url: "config/process.php",
        type: "POST",
        dataType: "json",
        data: {
          Name: name,
          Email: email,
          Address: address,
        },
        //type: should be same in server code, otherwise code will not run
        ContentType: "application/json",
        success: function (response) {
          alert(response);
        },
        error: function (err) {
          console.log(JSON.stringify(err));
        },
      });
      return false;
    },
  });
});
