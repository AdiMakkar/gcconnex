<?php
/**
 * View individual wire post
 */
$guid = get_input('guid');

elgg_entity_gatekeeper($guid, 'object', 'thewire');

$post = get_entity($guid);

$owner = $post->getOwnerEntity();
if (!$owner) {
	forward();
}

$title = elgg_echo('thewire:by', array($owner->name));

elgg_push_breadcrumb(elgg_echo('thewire'), 'thewire/all');
elgg_push_breadcrumb($owner->name, 'thewire/owner/' . $owner->username);
elgg_push_breadcrumb($title);

$content = elgg_view_entity($post);

$body = elgg_view_layout('content', array(
	'filter' => false,
	'content' => '<div class="elgg-list-group">'.$content.'</div>',
	'title' => $title,
));

echo elgg_view_page($title, $body);
