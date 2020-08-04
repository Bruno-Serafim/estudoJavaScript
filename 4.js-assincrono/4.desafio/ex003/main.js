/*==================================
3º exercício
A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
da lista apenas enquanto a requisição estiver acontecendo:
<li>Carregando...</li>

Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.
*/

//Referenciando elementos da DOM
var divElement = document.querySelector('div#app div#msg')
var inputElement = document.querySelector('input[name=user]')
var btnElement = document.querySelector('button')
var listElement = document.querySelector('ul')


//Função chamanda no onclick
function buscarRepos(){
    listElement.innerHTML = ""
    divElement.innerHTML = ""
    //Pega valor do input e guarda na variável textInput
    var textInput = inputElement.value 
    //Limpa o input  
    inputElement.value = ''

    //Colocando titulo
    var msg = document.createElement('p')
    var textoMsg = document.createTextNode(`Repositórios de ${textInput}`)
    msg.appendChild(textoMsg)
    divElement.appendChild(msg)
 
    //Biblioteca axios para buscar a API
    axios.get(`https://api.github.com/users/${textInput}/repos`)
    .then(function(response){
        //For para varrer todos os repositórios da API (vetor)
        for(const index in response.data){
            const repositorio = response.data[index]
            //Montandando link para cada repositório 
            var linkGerado = 'https://github.com/' + repositorio.full_name
            
            //Criando item na lista
            var item = document.createElement('li')
            //Lista recebe item
            listElement.appendChild(item)

            //Criando criando elemento link
            var link = document.createElement('a')
            link.setAttribute('href' , linkGerado)
            link.setAttribute('target', '_blank')
            var textoLink = document.createTextNode(`Repositório${(Number(index))+1}`)
            link.appendChild(textoLink)

            item.appendChild(link)           
        }
    })
    .catch(function(error){
        //console.log(error.response.status)
        if(error.response.status === 404){
            divElement.innerHTML = ""
            var msg = document.createElement('p')
            var textoMsg = document.createTextNode('Usuário não existe')
            msg.appendChild(textoMsg)
            divElement.appendChild(msg)
            //console.log('Usuário não existe')
        }else{
            console.warn(error)
        }      
    })
}
