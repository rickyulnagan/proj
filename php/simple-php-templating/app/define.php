<?php

/*edit here*/

include('templates/tpl-config.php');
/*end edit here*/

/* set http or  https */
$HTTPS = $_SERVER['SERVER_ADDR'] == "127.0.0.1" ? "://" : "s://";
$HTTPS = "http" . $HTTPS;
$HTTP_HOST = $_SERVER['HTTP_HOST'];

define('DS', DIRECTORY_SEPARATOR);
define('DOMAIN_NAME', $HTTPS . $HTTP_HOST);
define("APP", DR ."app" . DS);
define("TPL", DR ."templates".DS);
define("CACHE", DR ."cache".DS);


define("TPL_ASSIGN_NAME", match_url_level ($arrayTplNameByUrl, get_split_url(0) ) );
define("M_URL", TPL_ASSIGN_NAME."/");
define("BASE_URL", DOMAIN_NAME."/".TPL_ASSIGN_NAME);
define("IMG", "https://media.philstar.com/assets/".TPL_ASSIGN_NAME);
define("CSS", $HTTPS . $HTTP_HOST."/css/specialpages/");
define("JS", $HTTPS . $HTTP_HOST."/js/specialpages/");

define("TPL_DEF", TPL . TPL_ASSIGN_NAME . DS);