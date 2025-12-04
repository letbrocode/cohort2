var btn = document.querySelector("#add");
var friendStatus = document.querySelector("h5");
var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    friendStatus.innerHTML = "Friend";
    friendStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    friendStatus.innerHTML = "Stranger";
    friendStatus.style.color = "red";

    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});
