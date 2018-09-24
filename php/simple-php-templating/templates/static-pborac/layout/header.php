<?php
	require_once( TPL_DEF . "config/navigation.php"  ); 
?>

<body>
<!-- header -->
<header>
	<div id="header">
	<?php
		/* parallax */
		$config = "{'imageSrc':\"{$navImg}samplebanner1.jpg\"}";
		$content = array (
			'imgsrc' => "{$navImg}samplebanner1.jpg",
			'desc' => "<a href=\"".BASE_URL."\"><img src=\"{$navImg}logo.png\"></a>",
		);
		if ( checkPage($router->filePath, 'article') && isset($article)){
			$config = "{'imageSrc':\"{$article['image_link_parallax']}\"}";
			$content = array (
				'imgsrc' => $article['image_link_parallax'],
				'desc' => article_title_date_author_teaser( array(
					'title' => $article['title'],
					'dateAuthor' => "{$article['datePublished']} - {$article['author']}",
					'teaser' => $article['teaser'],
				) )
			);
		}
		echo parallax(
			$config = $config,
			$content = $content
		);
	?>
	</div>
	
		<div class="pure-container" data-effect="pure-effect-slide">
			    <input type="checkbox" id="pure-toggle-left" class="pure-toggle" data-toggle="left">
			    <label class="pure-toggle-label" for="pure-toggle-left" data-toggle-label="left">
			        <span class="pure-toggle-icon"></span>
			    </label>
			    <div class="topnav">
					<div class="philstar-logo">
						<a href="https://www.philstar.com/"><img src="https://media.philstar.com/images/logo_03.png"></a>
					</div>
					<div class="philstar-logo"><a href="<?php echo BASE_URL ?>">
						<img src="https://media.philstar.com/assets/special-pages/boracay2018/logo-bora.png"></a>
					</div>
				</div>
		    <div class="pure-drawer" data-position="left">
		        <ul>
				<?php foreach ($navlist as $key => $attr) { ?>
					<li>
						<a href="<?php echo $attr['link']; ?>">
						<img class="nav-icon" src="<?php echo $attr['img']; ?>" alt="<?php echo $attr['name']; ?>"> 
						<span><?php echo $attr['name']; ?></span>
						</a>
					</li>
				<?php } ?>
			  	</ul>
		    </div>
		    <div class="pure-pusher-container">
		    	<nav>
		        <div class="pure-pusher">
					<div class="nav-wrapper">
						<ul>
						<?php foreach ($navlist as $key => $attr) { ?>
							<li>
								<a href="<?php echo $attr['link']; ?>">
								<img class="nav-icon" src="<?php echo $attr['img']; ?>" alt="<?php echo $attr['name']; ?>"> 
								<span><?php echo $attr['name']; ?></span>
								</a>
							</li>
						<?php } ?>
					  	</ul>
					</div>
		        </div>
		        </nav>
		    </div>
		    <label class="pure-overlay" for="pure-toggle-left" data-overlay="left"></label>
		</div>
	
</header>
<!-- !header -->

<!-- content -->
<div id="main-content">
	<div class="wrap-container">
