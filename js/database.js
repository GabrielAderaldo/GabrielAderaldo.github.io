class Aux{
    //se algum dia alguém for mexer nisso sendo muito sincero, Faça uma API para isso. Vai facilitar o seu trabalho de manutenção no futuro.
    //Caso queira ajuda de suporte: www.linkedin.com/in/gabrieladeraldo

    //Esse metodo vai retornar todo o objeto que preciso.
    databaseOBJ(){

        let vetorObj = []

       let acdg = {
            titulo:'ACDG',
            nome:'ACDG',
            tel:'3226.4562',
            insta:'https://www.instagram.com/acdgbrasil/?hl=pt-br',
            face:'https://www.facebook.com/ACDGBRASIL/',
            site:'http://acdgbrasil.com/',
            coordenadas:{ lat:-3.804844796524208, lng:-38.53404600286238, }
        }

        

        let exemplo = {
            titulo:'Exemplo',
            nome:'Exemplo',
            tel:'(85) 99696-XXXX',
            insta:'www.google.com',
            face:'www.google.com',
            site:'www.google.com',
            coordenadas:{ lat:-3.7691783232126874, lng: -38.48011135569974, }
        }


        vetorObj.push(acdg)
        vetorObj.push(exemplo)

        return vetorObj

    }


    retornoConteudoPopUp(titulo,nome,tel,insta,face,site){
        return `<div id="content"> 
        <div id="siteNotice"> 
        </div> 
        <h1 id="firstHeading" class="firstHeading">${titulo}</h1>
        <div id="bodyContent">
        <p><b>Nome:</b>${nome}<br>
        <p><b>Telefone:</b>, (85) ${tel} <br>
        <p><b>Instagram:</b>, ${insta} <br>
        <p><b>Facebook:</b>, ${face} <br>
        </p>
        <p><a href="${site}"> Clique aqui para acessar o site </a>
        </p>
        </div>
        </div>`
    }

    
        retornarLocalInicial(){
            let localInicial = {lat:-11.257305192971051, lng:-49.82323129074299}
            return localInicial
        }



}