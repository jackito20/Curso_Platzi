function  MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins();
}

MediaPlayer.prototype.play = function() {
    if(this.media.paused){
        this.media.play();
    } else {
        this.media.pause()
    }
    // o podemos usar lo siguiente:
    // this.media.paused ? this.media.play() : this.media.pause()
};

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(element => {
      element.run(this)
    });
  }

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function () {
    if(this.media.muted){
        this.unmute()
    }else{
        this.mute()
    }
    
}

export default MediaPlayer;