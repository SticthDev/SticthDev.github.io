function GetUserData() {
  window.status = "log in to user account";

  var UserPassword;
  var UserName;
  UserPassword = document.UserInput.UserPassword.value;
  UserName = document.UserInput.UserName.value;

  var location = "";
  if (UserPassword == "" || UserName == "") {
    alert("You must fill the data to login to your account.");
    window.status = "User doesnt input anything";
  } else if (UserName == "nauftams" && UserPassword == "velicitia") {
    var cookies = prompt("Insert second code");
    if (cookies == "e750") {
      location = "developer1.html";
    } else {
      alert("You input the wrong code");
    }
  } else if (UserName == "reihanrez" && UserPassword == "fika") {
    location = "developer1.html";
  } else if (UserName == "benoathabisma260205" && UserPassword == "karina") {
    var cookies = prompt("Masi suka karina ga ?");
    if (cookies == "ya" || "masih") {
      location = "developer1.html";
    } else if (cookies == "ga" || "tidak") {
      alert("Ah yang bener lu wkwkw");
    }
  } else if (UserName == "_puterawijaya_" && UserPassword == "kayla") {
    var cookies = prompt("Buah kuning apa yang pisang ?");
    if (cookies == "pisang") {
      location = "developer1.html";
    } else {
      alert("Worng Answer");
    }
  } else if (UserName == "nevinfulvian" && UserPassword == "tiwi") {
    location = "developer1.html";
  } else {
    alert("Check Your Password and Username Again.");
  }
  this.location.href = location;
}
