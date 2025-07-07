function get(id) {
  return document.getElementById(id)
}

get("buscar_idade").addEventListener("click", async () => {
  const nome = get("nome").value.trim()

  if (!nome) {
    get("erro_idade").innerText = "Por favor, digite um nome."
    get("resultado_idade").style.display = "none"
    return;
  }

  const url = `https://api.agify.io?name=${nome}`

  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error("Erro na resposta da API.")

    const json = await response.json()

    get("nome_pessoa").innerText = "Nome: " + json.name;
    get("idade_estimativa").innerText = "Idade Estimada: " + json.age + " anos"
    get("quantidade").innerText = "Base de Dados: " + json.count + " pessoas"

    get("erro_idade").innerText = ""
    get("resultado_idade").style.display = "block"
  } catch (e) {
    get("erro_idade").innerText = "Erro ao buscar idade estimada."
    get("resultado_idade").style.display = "none"
  }
})