<?php 

/* @usage: class router */
/* $custom_placeholder = array (
		"sections" => array ("article", "feature", ),
	);

$custom_page = array(
	"register.php" => "promo/guardians-of-the-galaxy/register",
	"article1.php" => "%sections%/okay/%%/%%/%%",
	"section.php" => "%sections%",
	"article.php" => "%sections%/%%/%%/%%/%%",
); */


class router {
	
	private $page_404 = "",
			$page_default = "",
			$subdomain = "",
			$pointTpl = array(), 
			$routing_page = array(), 
			$routing_list_section = array();

	public	$filePath = "",
			$fileName = "";
	
	function __construct($routing, $pointTpl){
		
		$this->routing_page = $routing['page'];
		$this->pointTpl = $pointTpl;
		$this->routing_list_section = $routing['list_section'];
		$this->page_404 = $routing['config']['_404'];
		$this->page_default = $routing['config']['_default'];
		if (isset($routing['config']['subdomain']) && !empty($routing['config']['subdomain']) ){
			$this->subdomain = $routing['config']['subdomain'];	
		}
		$this->read_url_routing();
		
	}
	
	function read_url_routing(){
		$URLS = cur_split_url();
		if ( !empty($this->subdomain) ){
			$URLS[0] = str_replace($subDomain,"",$URLS[0]);
		}
		
		$url_level_target = $URLS;
		//count the url level
		$total_level_path = count($URLS);
		
		$path_file = $this->page_404;
		//loop number of url level
		if (!empty($url_level_target[0])) {
			
			foreach ($this->routing_page as $routing_page_pathfile => $routing_page_url) {				
				$flag = true;
				$routing_page_url_array = explode('/', trim($this->pointTpl['tpl_url']."/".M_URL.$routing_page_url, "/") );
				$total_routing_page_url = count($routing_page_url_array);

				//count if total_routing_page_url is equal to total_level_path
				if ($total_routing_page_url == $total_level_path){
					$level_cnt = 0;
					//extract array of url in routing_page_url_array
					foreach ($routing_page_url_array as $url_level) {

						//execute if flag is equal to true
						if ($flag == true) {
						
							//compare target url to each custom page url
							if ($url_level == $url_level_target[$level_cnt]){
								$flag = true;
							}elseif (strpos($url_level, "%") !== false ) {
								$url_level_trim = str_replace("%", "",$url_level);
								
								//extact array of custom_placeholder  
								foreach($this->routing_list_section as $placeholder_name => $placeholder_url){
									//check if placeholder is not empty
									if ($url_level_trim == $placeholder_name) {
										if (array_search($url_level_target[$level_cnt], $placeholder_url) !== false){
											$flag = true;
										}else {
											$flag = false;
											break;
										}
									}
								}
							} else {
								$flag = false;
								break;
							}
							$level_cnt++;
							
						}
					}
					
					if ($flag == true) {
						$path_file = $this->pointTpl['tpl_dir'].$routing_page_pathfile;
						break;
					}
					
				}
				
			}
			
		}else{
			$path_file = $this->page_default;
		}
		
		$this->filePath = $path_file;
		
	}

}
