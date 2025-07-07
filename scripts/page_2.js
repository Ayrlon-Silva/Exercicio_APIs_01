function get(id) {
  return document.getElementById(id)
}

const chave = "a87f1aa640884d5dbfa231016250607";

get("buscar_clima").addEventListener("click", async () => {
  const cidade = get("cidade").value
  const url = `https://api.weatherapi.com/v1/current.json?key=${chave}&q=${cidade}&lang=pt`

  try {
    const resposta = await fetch(url)
    if (!resposta.ok) throw new Error(`Erro: ${resposta.status}`)
    const json = await resposta.json()

    get("icone_clima").src = "https:" + json.current.condition.icon
    get("icone_clima").alt = json.current.condition.text
    get("cidade_nome").innerText = "Cidade: " + json.location.name
    get("temperatura").innerText = "Temperatura: " + json.current.temp_c + "°C"
    get("condicao").innerText = "Condição: " + json.current.condition.text
    get("erro").innerText = ""
    get("resultado_clima").style.display = "block"

  } catch (e) {
    get("erro").innerText = "Erro ao buscar clima. Verifique a cidade ou a chave."
    get("resultado_clima").style.display = "none"
  }
})