<?php

/**
 * Do something on video progress
 *
 * @param integer $id        Video ID. This is not a video hub id, 
 *                           but a video id that's created when someone adds a video anywhere.
 * @param integer $percent   Progress percentage. A number between 0 and 100. Only in multiples of 10.
 * 
 * @return void
 */
function custom_do_something_with_progress($id, $percent)
{
    // you can get video data with the ID using our video model.
    $video = new \PrestoPlayer\Models\Video($id);

    // get the title, src and more. @see schema method in \PrestoPlayer\Models\Video
    $title = $video->title;
    $src = $video->src;

    // maybe do your own custom action
    do_action('my_action', $video, $percent);
}
add_action('presto_player_progress', 'custom_do_something_with_progress', 10, 2);
