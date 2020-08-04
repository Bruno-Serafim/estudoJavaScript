/*==================================
2º exercício
Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário.

<input type="text" name="user">
<button onclick="">Adicionar</button>

Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

<ul>
 <li>repo1</li>
 <li>repo2</li>
 <li>repo3</li>
 <li>repo4</li>
 <li>repo5</li>
</ul>
*/

//Referenciando elementos da DOM
var inputElement = document.querySelector('input[name=user]')
var btnElement = document.querySelector('button')
var listElement = document.querySelector('ul')

//Função chamanda no onclick
function buscarRepos(){
    listElement.innerHTML = ""
    //Pega valor do input e guarda na variável textInput
    var textInput = inputElement.value 
    //Limpa o input  
    inputElement.value = ''
 
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
        console.warn(error)
    })
}






