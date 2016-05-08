<?php
class Counter{
	public $file = "../json/counter.json";

	function setData(){
		if(isset($_POST['counts'])){
			$data = $_POST['counts'];
			$data = json_encode($data);
			file_put_contents($this->file, $data);
		}
	}
}

$obj = new Counter();
$obj->setData();
?>
