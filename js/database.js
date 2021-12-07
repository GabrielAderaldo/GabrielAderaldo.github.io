class Aux{
    //se algum dia alguém for mexer nisso sendo muito sincero, Faça uma API para isso. Vai facilitar o seu trabalho de manutenção no futuro.
    //Caso queira ajuda de suporte: www.linkedin.com/in/gabrieladeraldo

    //Esse metodo vai retornar todo o objeto que preciso.
    databaseOBJ(){

        let vetorObj = []

       let acdg = {
            titulo:'ACDG',
            nome:'ACDG',
            tel:'(85) 3226.4562',
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

        

        let AMAGER = {
            titulo:'AMAGER',
            nome:'Associação Maranhense de doenças genéticas e Rara',
            tel:'(98) 98478-5681',
            insta:'Pagina indisponivel no momento',
            face:'https://www.facebook.com/RaraGenteMaranhense/',
            site:"Não contem Site",
            coordenadas:{ lat:-2.536683856275456, lng:-44.27117621438177, }
        }

        let AMPS = {
            titulo:'Amaps',
            nome:'Associação de Mucopolissacaridoses e Doenças Raras do Rio Grande do Norte',
            tel:'(84) 3082 5979',
            insta:'https://www.instagram.com/ampsrn/',
            face:'https://www.facebook.com/ampsrn.mucopolissacaridoses',
            site:"https://www.ampsrn.com.br/",
            coordenadas:{ lat:-5.814517092314022, lng:-35.203606260730155, }
        }




        vetorObj.push(acdg)
        vetorObj.push(AMAGER)
        vetorObj.push(AMPS)
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
        <p><b>Telefone:</b>, ${tel} <br>
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



    databaseParceiros(){

        let parceiros = []

        let causasDoBem = {
            "nome":"causaDoBem",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912233727088787456/causasDoBem.png"
        }
        
        let ufc = {
            "nome":"Ebrarara",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912235174551494676/febrararas.jpg"
        }

        let unifor = {
            "nome":"Breno Bloise",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912235617751031818/bbl.jpg"
        }

        let unifanor = {
            "nome":"Pint Pharma",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912235937218592779/pf.png"
        }

        let unicristus = {
            "nome":"Unichristus",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912236166613463071/donem.jpg"
        }

        let takeda = {
            "nome":"takeda",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912236406112403476/multicare-consulta-remdios.jpg"
        }

        let bioMarin = {
            "nome":"biomarin",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912236741308592128/ugx.png"
        }
        let ptc ={
            "nome":"ptc",
            "url":"https://cdn.discordapp.com/attachments/912232768656793643/912236958481268746/giogen.png"
        }

        parceiros.push(causasDoBem)
        parceiros.push(ufc)
        parceiros.push(ptc)
        parceiros.push(bioMarin)
        parceiros.push(takeda)
        parceiros.push(unicristus)
        parceiros.push(unifanor)
        parceiros.push(unifor)
    
        return parceiros
    }



    databaseFuncionarios(){
        let funcionarios = []

        let monica = {
            "nome":"Monica Aderaldo",
            "funcao":"Presidente",
            "foto":"https://drive.google.com/uc?export=view&id=1OQwwysD3bDy0cWLNoF6Ihfenykgve6QD",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }

        let rodrigo = {
            "nome":"Rodrigo Araujo",
            "funcao":"Segundo tesolreiro",
            "foto":"https://drive.google.com/uc?export=view&id=1z6GCUfkMa2AdsNIBkLgr-_BuSszbQEQx",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }

        let fabio = {
            "nome":"Fabio Marques",
            "funcao":"Vice presidente",
            "foto":"https://drive.google.com/uc?export=view&id=1NVfPDBhfRbsthJuUvt16q1weW5QpMP-w",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }

        let paulo = {
            "nome":"Paulo Da silva",
            "funcao":"Segundo Secretario",
            "foto":"https://drive.google.com/uc?export=view&id=1ohYs4rXqg0koK9VO6848cHVmekwZ8P7Z",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }

        let levi = {
            "nome":"Levi Vicente Dias",
            "funcao":"Primeiro Tesoureiro",
            "foto":"https://drive.google.com/uc?export=view&id=1mO8oLU_Dv-bVz-NP9Gie2uHQyOXdIQxs",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }

        let dianna  = {
            "nome":"Dianna dos Santos",
            "funcao":"Primeiro Secretaria",
            "foto":"https://drive.google.com/uc?export=view&id=1IZOukAO9MIyiaHLr5XIGOeQ4kAvpxkul",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }

        let marlene  = {
            "nome":"Marlene Vieira",
            "funcao":"Assistente social",
            "foto":"https://drive.google.com/uc?export=view&id=1h_5ZKF60X35ujyUL15cB1ZNS220OTg8O",
            "redesSocias":{
                "fb":"",
                "lk":"",
                "tw":""
            } 
        }


        funcionarios.push(monica)
        funcionarios.push(fabio)
        funcionarios.push(dianna)
        funcionarios.push(paulo)
        funcionarios.push(levi)
        funcionarios.push(rodrigo)
        funcionarios.push(marlene)
        

        return funcionarios
    }


    databaseChamadaPrincipal(){
        //TODO:FAZER QUANDO TIVER SACO
    }


}