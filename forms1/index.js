function myLoad() {
  let bounce = document.getElementById("welcome").innerHTML;
  console.log(bounce, "bounce bounce");
}

function onDisableSubmitButton(submitButton) {
  submitButton.setAttribute("class", "submit submit-disabled");
}

function setplacHolderError(id) {
  document.getElementById(id).setAttribute("class", "placeholder-error");
}



function onInputChange() {
  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;

  let fnameError = document.getElementById("firstname-error");
  let lnameError = document.getElementById("lastname-error");
  let emailError = document.getElementById("email-error");

  let submitButton = document.getElementById("submitButton");

  console.log({
    fname,
    lname,
    email,
  });

  // if(fname.includes("mallik")){

  //     // document.getElementById("submitButton").setAttribute("disabled",true)
  //     document.getElementById("submitButton").setAttribute("class", "submit")

  // }
  // if(lname.includes("mallik")){
  //    document.getElementById("submitButton").setAttribute("disabled",true)
  // }

  // if(fname.length > 3 || lname.length > 5 ){
  //     alert(fname, lname)
  // }

  if (fname.length < 1) {
    setplacHolderError("firstname-error");
    onDisableSubmitButton(submitButton);

    fnameError.innerText = "Enter greater than 10";

    return;
  } else if (!fname.match(/[0-9]/)) {
    setplacHolderError("firstname-error");
    onDisableSubmitButton(submitButton);

    fnameError.innerText = "Enter a number within range of 1 - 10";

    return;
  } else {
    document
      .getElementById("firstname-error")
      .setAttribute("class", "placeholder-error-hidden");
  }

  if (lname.length < 1) {
    setplacHolderError("lastname-error");
    onDisableSubmitButton(submitButton);
    return;
  } else {
    document
      .getElementById("lastname-error")
      .setAttribute("class", "placeholder-error-hidden");
  }

  if (email.length < 1) {
    setplacHolderError("email-error");
    onDisableSubmitButton(submitButton);
    return;
  } else {
    document
      .getElementById("email-error")
      .setAttribute("class", "placeholder-error-hidden");
  }

  submitButton.setAttribute("class", "submit");
}

// function windowLoad() {
//   document.onload(myLoad());
// }

// window.onload(windowLoad());

// let bounce = document.getElementById("welcome");
// console.log(window  , "bounce bouncess")


