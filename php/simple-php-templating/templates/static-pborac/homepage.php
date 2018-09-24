<?php 

/* list article_list */
require_once( TPL_DEF . "config/listArticlesSection.php" );

/* head */
require_once( TPL_DEF . "layout/head.php"  );

/* header */
require_once( TPL_DEF . "layout/header.php"  );
?>

<?php

/* leaderboard */
ads_display(
	'/1015401/Philstar_All_LeaderboardAd_728x90s', //comment out
	'div-gpt-ad-1520393149558-0', // div id
	'leaderboard' //div class
);

/*
 * Business
 * article_list(); 
*/
echo article_list( array(
	'title'=> $articlesinSection['business']['title'],
	'description'=> $articlesinSection['business']['description'],
	'list' => $articlesinSection['business']['list'],
) );

/* parallax */
echo parallax(
	$config = "{'imageSrc':\"{$navImg}samplebanner2.jpg\"}", 
	$content = array (
		'imgsrc' => "https://media.philstar.com/assets/special-pages/boracay2018/samplebanner2.jpg",
		'desc' => "Hello World",
	)
);


/*
 * Communities
 * article_list(); 
*/
echo article_list( array(
	'title'=> $articlesinSection['communities']['title'],
	'description'=> $articlesinSection['communities']['description'],
	'list' => $articlesinSection['communities']['list'],
) );


/* parallax */
echo parallax(
	$config = "{'imageSrc':\"{$navImg}samplebanner1.jpg\"}", 
	$content = array (
		'imgsrc' => "https://media.philstar.com/assets/special-pages/boracay2018/samplebanner1.jpg",
		'desc' => "Hello World",
	)
);


/*
 * Security
 * article_list(); 
*/

echo article_list( array(
	'title'=> $articlesinSection['security']['title'],
	'description'=> $articlesinSection['security']['description'],
	'list' => $articlesinSection['security']['list'],
) );


/* parallax */
echo parallax(
	$config = "{'imageSrc':\"{$navImg}samplebanner1.jpg\"}", 
	$content = array (
		'imgsrc' => "https://media.philstar.com/assets/special-pages/boracay2018/samplebanner1.jpg",
		'desc' => "Hello World",
	)
);

/*
 * Rehabilitation
 * article_list(); 
*/

echo article_list( array(
	'title'=> $articlesinSection['rehabilitation']['title'],
	'description'=> $articlesinSection['rehabilitation']['description'],
	'list' => $articlesinSection['rehabilitation']['list'],
) );

/* parallax */
echo parallax(
	$config = "{'imageSrc':\"{$navImg}samplebanner1.jpg\"}", 
	$content = array (
		'imgsrc' => "https://media.philstar.com/assets/special-pages/boracay2018/samplebanner1.jpg",
		'desc' => "Hello World",
	)
);

/*
 * More
 * article_list(); 
*/

echo article_list( array(
	'title'=> $articlesinSection['more']['title'],
	'description'=> $articlesinSection['more']['description'],
	'list' => $articlesinSection['more']['list'],
) );


?>

<?php

/* footer */
require_once( TPL_DEF . "layout/footer.php"  );

?>