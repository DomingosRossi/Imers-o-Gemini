function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campo pesquisa for uma string sem nada com o ponto de ! atalho vazaio
    if (!campoPesquisa) {
        section.innerHTML = "nada foi encontrado!, Digite o nome ou modalidade do Atleta!"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto de dado e constrói o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
        `;
        }
    }

    if (!resultados){
        resultados = "nada foi encontrado!"
    }


    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;
}