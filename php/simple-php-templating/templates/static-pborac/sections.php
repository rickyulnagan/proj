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
 * Sections of Articles
 * article_list(); 
*/
echo article_list( array(
	'title'=> $articlesinSection[$sectionName]['title'],
	'description'=> $articlesinSection[$sectionName]['description'],
	'list' => $articlesinSection[$sectionName]['list'],
) );

?>

<?php

/* footer */
require_once( TPL_DEF . "layout/footer.php"  );

?>