<?php
$from = 'elmer@makemeelvis.com';
$subject = $_POST['subject'];
$text = $_POST['elvismail'];
//We know both $subject and $text ar blank;
if (empty($subject) || empty($text)){
	if (empty($subject)) {
		echo 'You forgot the email subject';
	} else {
		if (empty($text)) {
			echo 'You forgot the email text';
		} else {
			$dbc = mysqli_connect ('localhost', 'elmer', 'theking', 'elvis_store') 
			 		or die('Error connecting to MySQL server.')
			$email = $_POST['email'];
			$query = "DELETE FROM email_list WHERE email = $email";
			$result = mysqli_query($dbc, $query)
					or die('Error on deleting the email address');
			while ($row = mysqli_fetch_array($result)) {
				$to = $row ['email'];
			}
			mysqli_close($dbc);
		}
	}
}

?>