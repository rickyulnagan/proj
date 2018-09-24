<?php

$page = "";
$ifcontent =  TPL_DEF.'contents/'.get_split_url(2).".php";

if ( file_exists($ifcontent) ){
	require_once($ifcontent);
	$page = article_render( $article['body'] );
}

if (empty($page)) require_once( TPL_DEF."404.php" );
/* head */
require_once( TPL_DEF . "layout/head.php"  );

/* header */
require_once( TPL_DEF . "layout/header.php"  );

/* content */
echo $page;

/* footer */
require_once( TPL_DEF . "layout/footer.php"  );

?>