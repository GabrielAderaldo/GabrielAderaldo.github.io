<?php 

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addslashes($_POST['telefone']);
$mensagem = addslashes($_POST['conteudo']);

$to = "suporteti2@fedrann.com.br";
$subject = "Mensagem enviada pelo site: Fedrann";
$body = "Email enviado pela pessoa: ".$nome." Pelo email: ".$email."\n".
        "Conteudo: ".$mensagem."\n";

$header = "From:suporteti@fedrann.com.br"."\r\n".
        "reply-To:".$email."\e\n".
        "X=Mailer:PHP/".phpversion();



        if(mail($to,$subject,$body,$header)){
            echo("Email enviado com sucesso!");
        }else{
            echo("Falha ao enviar o email. Tentar novamente...");
        }

?>