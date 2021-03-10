export class YoutubeIFrame {
  player: YT.Player | null = null;
  done = false;

  constructor(element: HTMLElement, height: number, width: number, videoId: string) {
    this.player = this.onYouTubeIframeAPIReady(element, height, width, videoId);
  }

  onYouTubeIframeAPIReady(element: HTMLElement, height: number, width: number, videoId: string) {
    const player = new YT.Player(element, {
      height: height,
      width: width,
      videoId: videoId,
      events: {
        onReady: this.onPlayerReady,
        onStateChange: this.onPlayerStateChange,
      },
    });
    return player;
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    if (event.data == YT.PlayerState.PLAYING && !this.done) {
      setTimeout(this.stopVideo, 6000);
      this.done = true;
    }
  }
  stopVideo() {
    if (this.player) {
      this.player.stopVideo();
    }
  }
}
