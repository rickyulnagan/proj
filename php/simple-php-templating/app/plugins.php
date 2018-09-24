<?php 

/*
 *  # Parallax
 *  # Article List
 *  # Google Analytics
 */

/*
 * Parallax
 */

function parallax_init(){
	echo '<style>
		.jarallax {
		    position: relative;
		    z-index: 0;
		}
		.jarallax > .jarallax-img {
		    position: absolute;
		    object-fit: cover;
		    /* support for plugin https://github.com/bfred-it/object-fit-images */
		    font-family: \'object-fit: cover;\';
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		    z-index: -1;
		}
	</style>';
	echo '<link rel="stylesheet" href="'.CSS.'jarallax.css">';
	//echo '<script type="text/javascript" src="'.JS.'parallax.min.js'.'"></script>';
	echo '<script type="text/javascript" src="'.JS.'jarallax.min.js'.'"></script>';
	echo '<script type="text/javascript" src="'.JS.'jarallax-video.min.js'.'"></script>';
	echo '<script type="text/javascript" src="'.JS.'jarallax-element.min.js'.'"></script>';
}

function parallax( $config="", $content=array() ){
	$jBackground = "";
	$isVid = false;
	if ( strstr($content['imgsrc'], ".mp4") ){
		$isVid = true;
	}
	if ( isset($content['imgsrc']) && $isVid == false) {
		$jBackground = '<img class="jarallax-img"';
		$jBackground .= 'src="'.$content['imgsrc'].'"';
		$jBackground .= '>';
	}

	$jBackgroundVid = "";
	if ($isVid){
		$jBackgroundVid = 'data-jarallax-video="mp4:'.$content['imgsrc'].'"';
	}

	if ( empty($content['desc']) ){
		$content['desc'] = "<p>content here</p>";
	}

	$htmlStr = '<section>';
	$htmlStr .= '<div data-jarallax data-speed="0.2" class="jarallax" '.$jBackgroundVid.'>
		    '.$jBackground.'
		    <div class="container">
				<div class="wrap-center">
					'.$content['desc'].'
				</div>
			</div>
		</div>';
	$htmlStr .= '<script>
		jarallax(document.querySelectorAll(\'.jarallax\'), {
		    speed: 0.2
		});
	</script>';
	$htmlStr .= '</section>';

	return $htmlStr;
}

/*
 * Article List 
 */

function article_list($config){

	$htmlList ='<section class="page-container">';
	$htmlList .='<div id="article-list"><div class="article-list-container">';
	 // title 
	if ( isset($config['title']) ){
		$htmlList .='<div class="list-title"><h1>'.$config['title'].'</h1></div>';
	}
	 // description 
	if ( isset($config['description']) ){
		$htmlList .='<div class="list-decription"><p>'.$config['description'].'</p></div>';
	}
	 // list 
	if ( isset($config['list']) ){
	$htmlList .='<div class="list"> <ul>';
		foreach($config['list'] as $list ){
			// url
			if (!isset($list['url'])){
			$list['url'] = "";
			}
			$htmlList .='<li><div class="list1">';
			 // image link 
			if (isset($list['image_link'])){
			$htmlList .=' <div class="img-wrap"><img src="'.$list['image_link'].'" alt=""></div>';
			}
			 // title 
			if (isset($list['title'])){
			$htmlList .=' <div class="list-title"><h3>'.$list['title'].'</h3></div>';
			}
			 // teaser
			if (isset($list['teaser'])){
			$htmlList .='<div class="list-title">
				<p>'.$list['teaser'].'</p>
				<div class="readmore"> <a href="'.$list['url'].'">READ MORE</a></div>
				</div>';
			}

			$htmlList .="</div></li>";

		}
	$htmlList .='</ul></div>';
	}
	$htmlList .='</div></div>';

	$htmlList .='</section>';

	return $htmlList;
}

/*
 * Google Analytics 
 */

function ga($id){
	return '<script type="text/javascript">
	(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');
	ga(\'create\', \''.$id.'\', \'auto\');
	ga(\'send\', \'pageview\');
	</script>
	';
}

/*
 * article format 
 */

function checkPage($path, $page) {
	return strstr($path, $page) ? true : false;
}

function videobox($url, $caption=""){
	$html = '<div class="video-wrapper"><div class="video-container">';
	$html .= '<iframe allow="autoplay" allowfullscreen="" frameborder="0" height="380" scrolling="no" src="'.$url.'" width="600"></iframe>';
	$html .= '</div>';
	if (!empty($caption)){
	$html .= '<div class="caption">'.$caption.'</div>';
	}
	return $html .= '</div>';
}

function photocaption($imgsrc="",$caption=""){
	$html = '<div class="photo-wrap">';
	$html .= '<img src="'.$imgsrc.'">';
	if (!empty($caption)){
	$html .= '<div class="caption"><p>'.$caption.'</p></div>';
	}
	return $html .= '</div>';
}


function article_render( $content ) {
	$html = '<article class="page-container">';
	$html .= get_utf( $content );
	$html .= '</article>';
	return $html;
}

function article_title_date_author_teaser($content=array()){
	$html = "<div class=\"article-head\">";
	if (isset($content['title'])){
		$html .= '<div class="article-title"><h1>'.$content['title'].'</h1></div>';
	}
	if (isset($content['dateAuthor'])){
		$html .= '<div class="article-date-author"><h5>'.$content['dateAuthor'].'</h5></div>';
	}
	if (isset($content['teaser'])){
		$html .= '<div class="article-teaser"><p>'.$content['teaser'].'</p></div>';
	}
	$html .= "</div>";
	return $html;
}


/*
 * section format
*/

function listSections($article){
	$data = array();
	$file = TPL_DEF."contents/{$article}.php";
	if ( file_exists($file) ){
		include($file);
		if (isset($article)){
			$data['title'] = $article['title'];
			$data['image_link'] = $article['image_link_share'];
			$data['teaser'] = $article['teaser'];
			$data['url'] = BASE_URL."/{$article['section']}/".$article['url'];
		}
	}
	return $data;
}