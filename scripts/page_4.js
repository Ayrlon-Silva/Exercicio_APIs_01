function getById(id){
    return document.getElementById(id);
}

let botaoMostrarImagem = getById('btn_mostrar_imagem');

botaoMostrarImagem.addEventListener('click', Mostrar_imagem_aleatoria);


async function Mostrar_imagem_aleatoria() {
    let url = 'https://randomfox.ca/floof'

    try{

        let response = await fetch(url);


        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }

        let json = await response.json();

        getById('foto_raposa').src = json.image;
        getById('foto_raposa').alt= 'imagem de raposa';

    }catch(e) {
        getById('erro_foto').innerText = 'Erro ao buscar imagem';
        console.log(e.message);
    }
}