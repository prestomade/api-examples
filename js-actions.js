/**
 * These actions fire in the front-end of the site
 * so you can more easily hook into players on the page
 *
 * Actions are the form presto.player{Action}
 * Actions always return a plyr.io object.
 *
 * To learn more about plyr.io object, visit https://github.com/sampotts/plyr
 */

/**
 * Here's a list of events
 *
 * presto.playerReady
 * presto.playerPlaying
 * presto.playerPlay
 * presto.playerTimeUpdate
 * presto.playerEnded
 * presto.playerSeeked
 * presto.playerEnterFullScreen
 * presto.playerExitFullScreen
 * presto.playerHidden
 * presto.playerVisible
 */

/**
 * Triggered when the instance is ready for API calls.
 */
wp.hooks.addAction("presto.playerReady", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});

/**
 * Sent when the media begins to play
 * (either for the first time, after having been paused, or after ending and then restarting).
 */
wp.hooks.addAction("presto.playerPlaying", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});

/**
 * Sent when playback of the media starts after having been paused;
 * that is, when playback is resumed after a prior pause event.
 */
wp.hooks.addAction("presto.playerPlay", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});


/**
 * Sent when the media pauses
 * (either for the first time, after having been paused, or after ending and then restarting).
 */
wp.hooks.addAction("presto.playerPause", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});


/**
 * The time indicated by the element's currentTime attribute has changed.
 */
wp.hooks.addAction(
  "presto.playerTimeUpdate",
  "my-plugin-namespace",
  (player) => {
    // get the current time
    console.log("current time is" + player.currentTime);
  }
);

/**
 * Sent when playback completes. Note: This does not fire if autoplay is true.
 */
wp.hooks.addAction("presto.playerEnded", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});

/**
 * Sent when a seek operation completes.
 */
wp.hooks.addAction("presto.playerSeeked", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});

/**
 * Sent when the player enters fullscreen mode
 * (either the proper fullscreen or full-window fallback for older browsers).
 */
wp.hooks.addAction(
  "presto.playerEnterFullScreen",
  "my-plugin-namespace",
  (player) => {
    // this returns a plyr.io player object
    console.log({ player });
  }
);

/**
 * Sent when the player exits fullscreen mode
 */
wp.hooks.addAction(
  "presto.playerExitFullScreen",
  "my-plugin-namespace",
  (player) => {
    // this returns a plyr.io player object
    console.log({ player });
  }
);

/**
 * Sent when the the tab is closed or loses focus while a videos is playing
 */
wp.hooks.addAction("presto.playerHidden", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});

/**
 * Sent when the the tab is refocused. This can only occur if the player was hidden.
 */
wp.hooks.addAction("presto.playerVisible", "my-plugin-namespace", (player) => {
  // this returns a plyr.io player object
  console.log({ player });
});
