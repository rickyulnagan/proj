<!DOCTYPE html>
<html lang="en">
<head>
	<?php require_once(TPL_DEF . "config/head.php"); ?>
	<meta charset="UTF-8">
	<title><?php echo $head['title']; ?></title>

	<meta name="description" content="<?php echo $head['description']; ?>" />
	<meta name="copyright" content="Copyright @ 2018. Philstar. All Right Reserved" />
	<meta name="apple-itunes-app" content="app-id=532930273" />
	<meta property="fb:app_id" content="1775905922621109" />
	
	<meta name="keywords" content="<?php echo $head['keywords']; ?>" />
	<meta property="og:url" content="<?php echo $head['url']; ?>" />
	<meta property="og:site_name" content="philstar.com" />
	<meta property="og:title" content="<?php echo $head['title']; ?>" />
	<meta property="og:description" content="<?php echo $head['description']; ?>" />
	<meta property="og:image" content="<?php echo $head['image']; ?>" />
	<link rel="shortcut icon" href="https://www.philstar.com/images/Home/favicon.ico" type="image/vnd.microsoft.icon" />
	
<?php if ( checkPage($router->filePath, 'article') ){ ?>
	<meta property="og:type" content="article" />
	<meta name="author" content="<?php echo $head['author']; ?>" />
	<meta property="pubdate" content="<?php echo $head['pubdate']; ?>" />
	<meta property="og:pubdate" content="<?php echo $head['pubdate']; ?>" />	
	<meta content="<?php echo $head['title']; ?>" about="<?php echo $head['url']; ?>" property="dc:title" />
	<script type="application/ld+json">
	{
	  "@context": "http://schema.org",
	  "url": "https://www.philstar.com/headlines/2018/07/23/1836089/arroyo-unseats-alvarez-house-speaker",
	  "name": <?php echo $head['title']; ?>,
	  "@type": "NewsArticle",
	  "image": {
	     "@type": "ImageObject",
	     "url": "<?php echo $head['image']; ?>",
	     "width": "800",
	     "height": "533"
	  },
	  "author": {
	     "@type": "Person",
	     "name": "<?php echo $head['pubdate']; ?>"
	  },
	  "datePublished": "2018-07-23T15:50:00+08:00",
	  "description": "<?php echo $head['description']; ?>",
	  "headline": "<?php echo $head['title']; ?>",
	  "mainEntityOfPage": "<?php echo $head['url']; ?>",
	  "publisher": {
	     "@type": "Organization",
	     "name": "The Philippine Star",
	     "logo": {
	        "@type": "ImageObject",
	        "url": "https://media.philstar.com/images/philippine-star-logo.png",
	        "width": "172",
	        "height": "96"
	     }
	  }
	}
	</script>
<?php } ?>
	
	<link rel="shortlink" href="<?php echo $head['url']; ?>" />
	<link rel="canonical" href="<?php echo $head['url']; ?>" />
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Roboto:900" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo CSS."global.css"; ?>">
	<?php parallax_init(); ?>
	<link rel="stylesheet" href="<?php echo CSS."pure-drawer.min.css"; ?>">
	<link rel="stylesheet" href="<?php echo CSS."default-theme.css"; ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
	<?php
		ads_init();
		ads_define("'/1015401/Philstar_All_LeaderboardAd_728x90', [[320, 50], [970, 90], [728, 90], [970, 250]], 'div-gpt-ad-1520393149558-0'");
		ads_end();
	?>
	<?php echo ga('UA-42723673-1'); ?>

</head>