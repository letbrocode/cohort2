const reels = [
  {
    username: "alex_dev",
    likeCount: 1240,
    isLiked: false,
    commentCount: 87,
    caption: "Building cool stuff every day 💻🔥",
    video: "./vids/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
    shareCount: 42,
    isFollowed: true,
  },
  {
    username: "travelwithmia",
    likeCount: 5320,
    isLiked: true,
    commentCount: 310,
    caption: "Sunsets in Bali hit different 🌅✨",
    video: "./vids/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    shareCount: 120,
    isFollowed: false,
  },
  {
    username: "foodie_frenzy",
    likeCount: 980,
    isLiked: false,
    commentCount: 64,
    caption: "This ramen bowl changed my life 🍜😍",
    video: "./vids/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa",
    shareCount: 19,
    isFollowed: false,
  },
  {
    username: "gymnexus",
    likeCount: 2130,
    isLiked: true,
    commentCount: 142,
    caption: "Push yourself today 💪",
    video: "./vids/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1599058918144-3b5c6e64da6f",
    shareCount: 55,
    isFollowed: true,
  },
  {
    username: "pets_and_smiles",
    likeCount: 7540,
    isLiked: false,
    commentCount: 489,
    caption: "He finally learned the trick 🐶❤️",
    video: "./vids/video5.mp4",
    userProfile: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
    shareCount: 240,
    isFollowed: false,
  },
  {
    username: "artsy_ella",
    likeCount: 1660,
    isLiked: true,
    commentCount: 93,
    caption: "Watercolor practice 🎨",
    video: "./vids/video1.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 37,
    isFollowed: true,
  },
  {
    username: "carenthusiast",
    likeCount: 4210,
    isLiked: false,
    commentCount: 278,
    caption: "This engine sound tho 🚗🔥",
    video: "./vids/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 112,
    isFollowed: true,
  },
  {
    username: "codingwizard",
    likeCount: 540,
    isLiked: false,
    commentCount: 33,
    caption: "Tried a new JS trick today ⚡",
    video: "./vids/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    shareCount: 14,
    isFollowed: false,
  },
  {
    username: "streetphotog",
    likeCount: 3120,
    isLiked: true,
    commentCount: 205,
    caption: "Capturing moments 📸",
    video: "./vids/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    shareCount: 78,
    isFollowed: false,
  },
  {
    username: "dancewave",
    likeCount: 8710,
    isLiked: true,
    commentCount: 640,
    caption: "New choreo finally out! 💃🔥",
    video: "./vids/video5.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 310,
    isFollowed: true,
  },
];

var allReels = document.querySelector(".all-reels");

function addData() {
  var clutter = "";
  reels.forEach(function (elem, idx) {
    clutter += `<div class="reel">
            <video autoplay loop muted src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userProfile}"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button id="${idx}" class="follow">${
      elem.isFollowed ? "Unfollow" : "Follow"
    }</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div id="${idx}" class="like">
                <h4 class="like-icon icon">${
                  elem.isLiked
                    ? '<i class="love ri-heart-3-fill"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${elem.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon">
                  <i class="ri-more-2-fill"></i>
                </h4>
              </div>
            </div>
          </div>`;
  });

  console.log(clutter);
  allReels.innerHTML = clutter;
}

addData();

allReels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
  }
  if (dets.target.className == "follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
  }

  addData();
});
