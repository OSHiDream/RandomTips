<?php
header("Access-Control-Allow-Origin: *");
$data=file('tips.txt');
$tips=array_rand($data);
echo $data[$tips];