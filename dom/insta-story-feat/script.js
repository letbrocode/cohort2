var arr = [
  {
    dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1631480037629-cb0a63d08417?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1566827833194-2e4b5626bd1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2NlbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9iamVjdHN8ZW58MHx8MHx8fDA%3D",
  },
];

var stories = document.querySelector("#stories");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
          <img
           id ="${idx}" src="${elem.dp}"
            alt=""
          />
        </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
  var value = arr[dets.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector(
    "#full-screen"
  ).style.backgroundImage = `url(${value})`;

  setTimeout(function () {
    document.querySelector("#full-screen").style.display = "none";
  }, 1000);
});
