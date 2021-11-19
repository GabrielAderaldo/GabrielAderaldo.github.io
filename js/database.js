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

        /*

      

        let exemplo = {
            titulo:'Exemplo',
            nome:'Exemplo',
            tel:'(85) 99696-XXXX',
            insta:'www.google.com',
            face:'www.google.com',
            site:'www.google.com',
            coordenadas:{ lat:-3.7691783232126874, lng: -38.48011135569974, }
        }

        */

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
            titulo:'AMAGER',
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
            "url":"https://causasdobem.com/"
        }
        
        let ufc = {
            "nome":"UFC",
            "url":"https://www.ufc.br/"
        }

        let unifor = {
            "nome":"Unifor",
            "url":"https://www.unifor.br/"
        }

        let unifanor = {
            "nome":"Unifanor",
            "url":"https://www.unifanor.edu.br/unifanor"
        }

        let unicristus = {
            "nome":"Unichristus",
            "url":"https://unichristus.edu.br/"
        }

        let takeda = {
            "nome":"takeda",
            "url":"https://www.takeda.com/pt-br/"
        }

        let bioMarin = {
            "nome":"biomarin",
            "url":"https://www.biomarin.com/"
        }


        let ptc ={
            "nome":"ptc",
            "":"https://www.ptcbio.com/"
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


}