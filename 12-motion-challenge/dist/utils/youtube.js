var YoutubeIFrame = /** @class */ (function () {
    function YoutubeIFrame(element, height, width, videoId) {
        this.player = null;
        this.done = false;
        this.player = this.onYouTubeIframeAPIReady(element, height, width, videoId);
    }
    YoutubeIFrame.prototype.onYouTubeIframeAPIReady = function (element, height, width, videoId) {
        var player = new YT.Player(element, {
            height: height,
            width: width,
            videoId: videoId,
            events: {
                onReady: this.onPlayerReady,
                onStateChange: this.onPlayerStateChange,
            },
        });
        return player;
    };
    YoutubeIFrame.prototype.onPlayerReady = function (event) {
        event.target.playVideo();
    };
    YoutubeIFrame.prototype.onPlayerStateChange = function (event) {
        if (event.data == YT.PlayerState.PLAYING && !this.done) {
            setTimeout(this.stopVideo, 6000);
            this.done = true;
        }
    };
    YoutubeIFrame.prototype.stopVideo = function () {
        if (this.player) {
            this.player.stopVideo();
        }
    };
    return YoutubeIFrame;
}());
export { YoutubeIFrame };
