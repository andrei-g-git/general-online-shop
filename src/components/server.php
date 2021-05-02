
<?php

    if(isset($_GET["server"])){
        $connection = new mysqli(
            "localhost",
            "root",
            "",
            "myDatabase"    
        );
        //var_dump($connection);
        $sql = "SELECT * FROM products";
        $result = mysqli_query($connection, $sql);

        //mysqli_fetch_assoc($result)
        //var_dump($result);
        echo json_encode($result);
    }

?>