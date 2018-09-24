<?php

/*
 * GENERAL FUNCTIONS
 */

function cur_url(){
	list($path) = explode('?', $_SERVER['REQUEST_URI']);
	return trim($path,"/");
}

function cur_split_url(){
	return explode("/", cur_url() );
}

function get_split_url($key){
	$arrayUrl = cur_split_url();
	return isset($arrayUrl[$key]) ? $arrayUrl[$key] : "";
}

function match_url_level($list, $pointer){
	foreach ($list as $value) {
		if ($value == $pointer){
			$pointer = $value;
			break;
		}
	}
	return $pointer;
}

function routing_tpl($rouTpl = array() ){
	$path = array();
	$path['tpl_dir'] = TPL_DEF;
	$path['tpl_url'] = "";
	foreach($rouTpl as $tpl){
		if ( strstr(cur_url(), $tpl['tpl_url']) ){
			$path['tpl_dir'] = TPL.$tpl['tpl_name'].DS;
			$path['tpl_url'] = $tpl['tpl_url'];
			break;
		}
	}
	return $path;
}

function get_utf($str){
	
	$specialChar = array(
		//Quotes
		chr(ord("`")) => "'", 		# ` 
		chr(ord("´")) => "'",		# ´ 
		chr(ord("„")) => ",",		# „ 
		chr(ord("`")) => "'",		# ` 
		chr(ord("´")) => "'",		# ´ 
		chr(ord("“")) => "\"",		# “ 
		chr(ord("”")) => "\"",		# ” 
		chr(ord("´")) => "'",		# ´
		chr(ord("’")) => "'",		# ’
		chr(ord("‘")) => "'",		# ‘
		chr(ord("'")) => "'",		# '
		chr(ord("…")) => "...",		# '
		//unwanted character
		'Š'=>'S', 'š'=>'s', 'Ž'=>'Z', 'ž'=>'z', 'À'=>'A', 'Á'=>'A', 
		'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 
		'È'=>'E', 'É'=>'E', 'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 
		'Î'=>'I', 'Ï'=>'I', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O', 
		'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 'Û'=>'U', 
		'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss', 'à'=>'a', 'á'=>'a',
		'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c',
		'è'=>'e', 'é'=>'e', 'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i',
		'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ò'=>'o', 'ó'=>'o',
		'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u',
		'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b', 'ÿ'=>'y',
		//Bullets, dashes, and trademarks 
		chr(149) => "&#8226;",		# bullet • 
		chr(150) => "&ndash;",		# en dash 
		chr(151) => "&mdash;",		# em dash 
		chr(153) => "&#8482;",		# trademark 
		chr(169) => "&copy;",		# copyright mark 
		chr(174) => "&reg;",		# registration mark 
		chr(209) => "&#209;",		# latin capital letter N with tilde
		chr(241) => "&#241;",		# latin small letter n with tilde
		
	);
	
	// process character
	$charBad = array();
	$charGood = array();
	$ctr = 0;
	foreach($specialChar as $bad => $good){
		$charBad[$ctr] = $bad;
		$charGood[$ctr] = $good;
		$ctr++;
	}
	
	$str = str_replace($charBad,$charGood,$str); 
	$string_broken = utf8_encode($str);
	$teststring_converted = iconv("UTF-8", "UTF-8//IGNORE", $string_broken);
	//$teststring_converted = html_entity_decode($teststring_converted, ENT_QUOTES, 'iso-8859-1');
	return $teststring_converted;
}

function sanitize_meta($s) {
    return str_replace('"', "＂", $s);
}

function getLongTailKeywords($str, $len = 4	, $min = 3){ 
	$keywords = array();
  $common = array('i','a','about','an','and','are','as','at','be','by','com','de','en','for','from','how','in','is','it','la','of','on','or','that','the','this','to','was','what','when','where','who','will','with','und','the','www','much','have','but');
  $str = preg_replace('/[^a-z0-9\s-]+/', '', strtolower(strip_tags($str)));
  $str = preg_split('/\s+-\s+|\s+/', $str, -1, PREG_SPLIT_NO_EMPTY);
  while(0<$len--) for($i=0;$i<count($str)-$len;$i++){ 
    $word = array_slice($str, $i, $len+1);
    if(in_array($word[0], $common)||in_array(end($word), $common)) continue;
    $word = implode(' ', $word);
    if(!isset($keywords[$len][$word])) $keywords[$len][$word] = 0;
    $keywords[$len][$word]++;
  }
  $return = array();
  foreach($keywords as &$keyword){
    $keyword = array_filter($keyword, function($v) use($min){ return !!($v>$min); });
    arsort($keyword);
    $return = array_merge($return, $keyword);
  }
  return $return;
}

function assignKeyword($str){
	$strKw = "";
	$kw = getLongTailKeywords($str);
	if ( count($kw) ){
		foreach ($kw as $key => $value) {
			$strKw .= "$key, ";
		}
		$strKw = trim($strKw,", ");
	}
	return $strKw;
}

function _pre($ar){
	echo "<pre style='display:none'>";
	print_r($ar);
	echo "</pre>";
}