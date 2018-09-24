<?php

/* 
 assign templates routes
*/
$pointTpl = array();
$pointTpl = routing_tpl();
/* 
 default config 
*/
$routing = array(

	//route section
	'config' => array (
		//'subdomain' => "",
		'_404' => $pointTpl['tpl_dir']."404.php",
		'_default' => $pointTpl['tpl_dir']."homepage.php",
	),
	
	//route section
	'list_section' => array (	
		'sections' => array(
			'nothing',
		),
	),
	
	//route page
	'page' => array (
		"sections.php" => '%sections%',
		"article.php" => '%sections%/%%/%%',
	),
	
);

/* replace config redirect if exist */
if (file_exists($pointTpl['tpl_dir']. 'config/redirect.php')){
	require_once($pointTpl['tpl_dir']. 'config/redirect.php');
	if (!empty($pageRedirect)){
		
		$fullUrl = trim( str_replace(BASE_URL,"", $_SERVER['REQUEST_URI']),"/" );
		if ($fullUrl == TPL_ASSIGN_NAME){
			$fullUrl = "";
		}
		$location = ""; 
		foreach($pageRedirect as $target => $destination){
			
			//check if has http://
			if (stripos($destination,"http://") === false){
				$destination = BASE_URL . '/'.$destination;
			}
			
			if ( $target == 'homepage' && empty($fullUrl) ){
				$location = $destination;
				break;
			}elseif ($fullUrl == $target){
				$location = $destination;
				
				break;
			}else{
				//do nothing
			}
			
		}
		if (!empty($location)){
			header("location: $location");
			exit();
		}

	}
}

/* replace config routing if exist */
if (file_exists($pointTpl['tpl_dir']. 'config/urls.php')){
	require_once($pointTpl['tpl_dir']. 'config/urls.php');
}

/* 
 * file routing
*/

$router = new router($routing, $pointTpl);
if (file_exists($router->filePath)){
	//load functions
	if (file_exists($pointTpl['tpl_dir'] . 'functions_conf.php')){
		require_once($pointTpl['tpl_dir'] . 'functions_conf.php');
	}
	//load plugins
	require_once(DR."app/plugins.php");
	//load ads
	require_once(DR."app/ads.php");
	//load file
	require_once($router->filePath);
}else{
	die("missing file: {$router->filePath}");
}


