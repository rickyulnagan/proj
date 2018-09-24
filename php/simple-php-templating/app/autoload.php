<?php

spl_autoload_register(function ($class) {	
	include APP."class".DS.$class.'.class.php';
});

/* load url routing */
require_once(APP."routing.php");

