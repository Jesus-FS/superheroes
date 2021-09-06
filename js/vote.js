var like = 50;
var disLike = 50;
var barLike = document.getElementById("barLike");
var barDislike = document.getElementById("barDislike");
var ls = localStorage;
var htmlStateLikeLs;
var htmlStateDIsLikeLs;
updateScore();
renderVoteBar();

function updateScore() {
  if (ls.getItem("htmlLike") == null && ls.getItem("htmldisLike") == null )  {
    ls.setItem("htmlLike", like);
    ls.setItem("htmldisLike", disLike);
    console.log("like est vacio")
  }
  
  htmlStateLikeLs = ls.getItem("htmlLike");
  document.getElementById("like").innerHTML = htmlStateLikeLs;

  htmlStateDIsLikeLs = ls.getItem("htmldisLike");
  document.getElementById("dislike").innerHTML = htmlStateDIsLikeLs;
}

function vote(action) {
  if (action == "like") {
    htmlStateLikeLs++;
    htmlStateDIsLikeLs--;
  } else {
    htmlStateLikeLs--;
    htmlStateDIsLikeLs++;
  }
  ls.setItem("htmlLike", htmlStateLikeLs);
  ls.setItem("htmldisLike", htmlStateDIsLikeLs);
  console.log (htmlStateLikeLs);
  console.log (htmlStateDIsLikeLs);
  updateScore();
  renderVoteBar();
  voteAgain(action);
}

function renderVoteBar() {
  statusBarlike = ls.getItem("htmlLike");
  statusBarDislike = ls.getItem("htmldisLike");
  let likeProgress = statusBarlike.toString() + "%";
  let disLikeProgress = statusBarDislike.toString() + "%";
  barLike.style.width = likeProgress;
  barDislike.style.width = disLikeProgress;
}

function voteAgain(action) {
  if (action == "like") {
    voteContainer.style.display = "none";
    voteFrame.style.display = "none";
    Cvote.style.display = "flex";
    changeBG.style.background = "#00ada4";
    up.style.display = "flex";
    down.style.display = "none";
  } else {
    voteContainer.style.display = "none";
    voteFrame.style.display = "none";
    Cvote.style.display = "flex";
    changeBG.style.background = "#ffa300";
    up.style.display = "none";
    down.style.display = "flex";
  }
}

function back() {
  voteContainer.style.display = "block";
  voteFrame.style.display = "flex";
  Cvote.style.display = "none";
}