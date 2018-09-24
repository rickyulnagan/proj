<?php

//for utf encode and iconv
header("Content-type: text/html; charset=utf-8");

define("DR", __DIR__ . "/");

/* load function */
require_once(DR."app/functions.php");

/* load define */
require_once( DR."app/define.php");

/* load classes */
require_once(APP."autoload.php");

//var_dump($_SERVER['HTTP_HOST']);