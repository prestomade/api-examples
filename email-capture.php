<?php

/**
 * Do something with email capture.
 *
 * @param array $data User submission data. This has already been validated
 * @param \PrestoPlayer\Models\Preset $preset Preset used for the email collection
 * @param \WP_Post $email_post  The pp_email_submission post type used to store the email capture data.
 * @param boolean $created True if the email submission was created. False if it was updated
 * 
 * @return void
 */
function custom_do_something_with_email($data, $preset, $email_post, $created)
{
    $email = $data['email'];

    if ($created) {
        custom_add_person_to_list($email); // add a person to a list, or perform some other action
    } else {
        custom_update_person_on_list($email); // add a person to a list, or perform some other action
    }
}

add_action('presto_player/pro/forms/save', 'custom_do_something_with_email', 10, 4);

/**
 * Validate email submission
 * 
 * This lets you validate someones email input and possibly return an error
 * if something is not valid. 
 * 
 * You can get a users input through the global $_POST array.
 *
 * @param array $errors
 * @return array
 */
function custom_validate_email_input($errors)
{
    if (!my_custom_validation_function($_POST['email'])) {
        $errors[] = __('This email address is blacklisted.', 'textdomain');
    }

    return $errors;
}
add_filter('presto_player/pro/forms/validation', 'custom_validate_email_input');
