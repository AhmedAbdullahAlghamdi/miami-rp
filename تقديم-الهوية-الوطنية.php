<?php
header("Access-Control-Allow-Origin: https://discord.com/");

?>

<script>
    <?php require_once("main.js");?>
</script>

<!DOCTYPE html>
<html lang="en">
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" >
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تقديم الهوية الوطنية | ميامي سيتي</title>
    <script src="main.js"></script>
</head>
<body class="container mt-5">

            <div class="mb-3">
        <label for="emailInput" class="form-label">Enter your email address</label>
        <input type="email" class="form-control" id="emailInput">
      </div>
      
      <div class="mb-3">
        <label for="messageInput" class="form-label">Enter your psn id</label>
        <input type="text" class="form-control" id="psnidInput" rows="3">
      </div>
        <button onclick="send()" id="SendMessage">SendMessage</button>
        <h3 id="MessageSent" style="opacity: 0;">Message sent!</h3>
        <h3 id="MessageFailed" style="opacity: 0;">Message failed!</h3>
    </div>
</body>
</html>