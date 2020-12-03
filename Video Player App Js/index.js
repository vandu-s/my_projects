var mainContainer = document.getElementById("main-container");
var mainHeading = document.createElement("h1");
mainHeading.id = "main-heading";
mainHeading.innerText = "The Video Player";
mainContainer.appendChild(mainHeading);
var playerSection = document.createElement("div");
playerSection.id = "player-section";
mainContainer.appendChild(playerSection);
var playerWrapper = document.createElement("div");
playerWrapper.id = "player-wrapper";
playerSection.appendChild(playerWrapper);
var playlistWrapper = document.createElement("div");
playlistWrapper.id = "playlist-wrapper";
playerSection.appendChild(playlistWrapper);
var videoPlayer = document.createElement("iframe");
videoPlayer.id = "video-player";
videoPlayer.setAttribute('frameborder', "0");
videoPlayer.setAttribute('allowFullScreen', 'true')
videoPlayer.setAttribute('webkitallowfullscreen', "true");
videoPlayer.setAttribute('mozallowfullscreen', "true");
playerWrapper.appendChild(videoPlayer);
var videoDetails = document.createElement("div");
playerWrapper.appendChild(videoDetails);
var videoAction = document.createElement("div");
videoAction.id = "video-actions";
videoDetails.appendChild(videoAction);
var countPara = document.createElement("p");
var spanCount = document.createElement("span")
spanCount.id = "views-count";
countPara.appendChild(spanCount);
countPara.innerText += " views";
videoAction.appendChild(countPara);
var iconWrapper = document.createElement("div");
var heart = document.createElement("i");
heart.className = "far fa-heart";
iconWrapper.appendChild(heart);
var comment = document.createElement("i");
comment.className = "far fa-comment-alt";
iconWrapper.appendChild(comment);
var bookmark = document.createElement("i");
bookmark.className = "far fa-bookmark";
iconWrapper.appendChild(bookmark);
videoAction.appendChild(iconWrapper);
var videoTitle = document.createElement("h3");
videoTitle.id = "video-title";
videoDetails.appendChild(videoTitle);
var videoDescription = document.createElement("p");
videoDescription.id = "video-description";
videoDetails.appendChild(videoDescription);


function createPlayer() {
    videoPlayer.src = "https://player.vimeo.com/video/" + videoPlaySectionData[0].vimeoId;
    videoDetails.id = videoPlaySectionData[0].id;
    countPara.innerHTML = "<span>" + videoPlaySectionData[0].views / 1000 + "k" + "</span>" + " views";
    videoTitle.innerText = videoPlaySectionData[0].title;
    videoDescription.innerText = videoPlaySectionData[0].description;
}



function createPlaylistCard(obj, pos) {
    // <div id="card3" class="playlist-card">
    //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
    //     <h3 class="video-card-title">The Heart of Soba</h3>
    // </div>

    var mainDiv = document.createElement('div');
    mainDiv.id = 'card' + obj.id;
    mainDiv.className = 'playlist-card';

    var thumbnail = document.createElement('img');
    thumbnail.src = obj.thumbnail;
    thumbnail.className = 'thumbnail';

    var title = document.createElement('h3');
    title.className = 'video-card-title';
    title.innerHTML = obj.title;

    mainDiv.appendChild(thumbnail);
    mainDiv.appendChild(title);

    mainDiv.addEventListener("click", function() {
        if (videoDetails.id != pos) {
            videoDetails.id = pos;
            countPara.innerHTML = "<span>" + videoPlaySectionData[pos - 1].views / 1000 + "k" + "</span>" + " views";
            videoPlayer.src = "https://player.vimeo.com/video/" + videoPlaySectionData[pos - 1].vimeoId;
            videoTitle.innerText = videoPlaySectionData[pos - 1].title;
            videoDescription.innerText = videoPlaySectionData[pos - 1].description;
            for (var i = 0; i < playlistData.length; i++) {
                var actUpdate = document.getElementById("card" + playlistData[i].id);
                if (actUpdate.id == "card" + pos) {
                    actUpdate.classList.add("active-card");
                } else {
                    actUpdate.className = "playlist-card";
                }
            }
        }
    })
    return mainDiv;
}

var playlistData = []
var videoPlaySectionData = []

var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', true); //true is async
xhttp.onreadystatechange = function() {
    if (this.readyState === 4) {
        playlistData = JSON.parse(this.responseText);
        console.log(playlistData)
        for (var i = 0; i < playlistData.length; i++) {
            var card = createPlaylistCard(playlistData[i], playlistData[i].id)
            playlistWrapper.appendChild(card);
        }
        var act = document.getElementById("card" + playlistData[0].id);
        act.classList.add("active-card");
    }
}
xhttp.send();

var xhttp2 = new XMLHttpRequest();
xhttp2.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/video', true); //true is async
xhttp2.onreadystatechange = function() {
    if (this.readyState === 4) {
        videoPlaySectionData = JSON.parse(this.responseText);
        createPlayer();
    }
}
xhttp2.send()