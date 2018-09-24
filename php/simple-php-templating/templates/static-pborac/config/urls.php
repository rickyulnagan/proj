<?php 

/* 
 * config url routing
*/

//route section
$routing['list_section'] = array (
	'sections' => array(
		'business',
		'communities',
		'security',
		'rehabilitation',
		'more',
	),
);

//route page
$routing['page'] = array (
	"homepage.php" => '',
	"sections.php" => '%sections%',
	"article.php" => '%sections%/%%',
);

?>
