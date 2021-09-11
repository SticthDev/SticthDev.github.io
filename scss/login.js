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
    location = "developer1.html";
  } else if (UserName == "reihanrez" && UserPassword == "fika") {
    location = "page274.html";
  } else if (UserName == "benoathabisma260205" && UserPassword == "karina") {
    var cookies = prompt("Masi suka karina ga ?");
    if (cookies == "ya" || "masih") {
      location = "page107.html";
    } else if (cookies == "ga" || "tidak") {
      alert("Ah yang bener lu wkwkw");
    }
  } else if (UserName == "_puterawijaya_" && UserPassword == "kayla") {
    var cookies = prompt("Buah kuning apa yang pisang ?");
    if (cookies == "pisang") {
      location = "page201.html";
    } else {
      alert("Worng Answer");
    }
  } else if (UserName == "nevinfulvian" && UserPassword == "tiwi") {
    location = "page750.html";
  } else {
    alert("Check Your Password and Username Again.");
  }
  this.location.href = location;
}
