<?php

function ads_init(){
	echo "<script src='https://www.googletagservices.com/tag/js/gpt.js'></script>";
	echo "<script>
	    googletag.cmd.push(function() {

	    var LBmapping = googletag.sizeMapping()
	    .addSize([970, 0], [[970, 90], [728, 90]])
	    .addSize([728, 0], [728, 90])
	    .addSize([0, 0], [320, 50])
	    .build();

	    var MRmapping = googletag.sizeMapping()
	    .addSize([728, 0], [[300, 250], [300,600]])
	    .addSize([0, 0], [300, 250])
	    .build();\n";
}

function ads_define($defineSlot){
	echo "googletag.defineSlot($defineSlot).defineSizeMapping(LBmapping).addService(googletag.pubads());\n";
}

function ads_end(){
	echo "googletag.pubads().collapseEmptyDivs();
    googletag.pubads().enableSingleRequest();
    googletag.enableServices(); });
</script>";
}

function ads_display($comment="",$divId="",$adClass=""){
	echo "<!-- $comment -->
	<section>
	<div id='$divId' class=\"ad $adClass\">
	<script>
	googletag.cmd.push(function() { googletag.display('$divId'); });
	</script>
	</div></section>";
}

?>