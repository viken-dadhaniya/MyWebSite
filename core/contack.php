<?php 
include "db.php";

if(isset($_POST)){

	$name = $_POST['name'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$countryCode = $_POST['countryCode'];
	$comment = $_POST['comment'];

	$sql="INSERT INTO contact_master(cm_name, cm_email, cm_phone, com_id, cm_discription) VALUES ('$name', '$email', '$mobile', '$countryCode', '$comment')";

	if(mysqli_query($connection,$sql)){
	    $response_array['status'] = 'success'; 
	}else {
	    $response_array['status'] = 'error';  
	}

	echo json_encode($response_array);
}

?>