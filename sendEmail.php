<?php 

$correo = filter_var($_POST['correo'],FILTER_SANITIZE_EMAIL);
$nombre = filter_var($_POST['nombre'],FILTER_SANITIZE_STRING);
$mensaje =filter_var($_POST['mensaje'],FILTER_SANITIZE_STRING);


//echo $correo . " " . $nombre . " " . $mensaje;
    if (!empty($email) && !empty($nombre) && !empty($texto)) {
        $destinatario = "jose.flores32171@gmail.com";
$asunto = "Envio de correo de prueba con PHP"; 
$cuerpo = '
    <html> 
        <head> 
            <title>Prueba de envio de correo</title> 
        </head>

        <body> 
            <h1>Solicitud de contacto desde correo de prueba !  </h1>
            <p> 
                Contacto:  '.$nombre . ' - ' . $asunto .'  <br>
                Mensaje: '.$mensaje.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $nombre <$correo>\r\n";
mail($destinatario,$asunto,$cuerpo,$headers);

echo "Correo enviado"; 
        
    }

?> 

<a href="index.html">Volver a inicio</a>