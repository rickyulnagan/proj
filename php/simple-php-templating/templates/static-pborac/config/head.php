<?php
/* start edit */

//homepage and 404
$head = array(
	'title' => "Boracay Special | Philstar.com",
	'description' => "",
	'image' => "",
	'url' => DOMAIN_NAME."/".cur_url(),
	'keywords' => "philstar, philstar boracay",
);

if ( checkPage($router->filePath, 'article') && isset($article)){
	$head['title'] = $article['title'] . "- Boracay Special | Philstar.com";
	$head['image'] = $article['image_link_share'];
	$head['description'] = $article['teaser'];
	$head['author'] = $article['author'];
	$head['pubdate'] = date('c', strtotime($article['datePublished']) );
	$head['keywords'] = assignKeyword($article['body']). ", philstar, philstar boracay";

}else if( checkPage($router->filePath, 'section') ) {
	$sectionName = get_split_url(1);
	$head['title'] = $articlesinSection[$sectionName]['title'] . " - Boracay Special | Philstar.com";
	//$head['image'] = $article['image_link_share'];
	//$head['description'] = $article['teaser'];
	//$head['author'] = $article['author'];
	//$head['pubdate'] = date('c', strtotime($article['datePublished']) );
	//$head['keywords'] = assignKeyword($article['body']). ", philstar, philstar boracay";
}else if( checkPage($router->filePath, '404') ) {

}else{
	//echo "homepage";
}

/* end edit*/

/* sanitize head array */
foreach ($head as $key => $value) {
	$head[$key] = sanitize_meta( $value );
}