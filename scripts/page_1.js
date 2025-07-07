function getById(id){
    return document.getElementById(id);
}

let botaoPesquisarTitulo = getById('btn_buscar_filme');

botaoPesquisarTitulo.addEventListener('click', mostrar_filme);

async function mostrar_filme() {
    let url = "https://www.omdbapi.com/?t=";
    let apykey = '6e4ea43a';


    try{
        let nome_titulo = getById("nome_filme").value;

        url = `${url}${nome_titulo}&apikey=${apykey}`;

        let response = await fetch(url);

        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }

        let json = await response.json();

        getById("foto_filme").src = json.Poster;
        getById("foto_filme").alt = json.Title +' Poster';
        getById("titulo_filme").innerText = 'Titulo: ' + json.Title;
        getById("ano_filme").innerText = 'Ano de lançamento: ' + json.Year;
        getById("duracao_filme").innerText = 'Duração: ' + json.Runtime;
        getById('erro_filme').innerText = "";
        getById('filme_pesquisado').style.display = 'block'

    }catch(e) {
        getById('erro_filme').innerText = 'Erro ao pesquisar Filme';
        console.log(e.message);
    }
}