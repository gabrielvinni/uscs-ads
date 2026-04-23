
// Calcula o perimetro
document.querySelector("#botao").addEventListener("click", () =>{

    const formaSelecionada = document.querySelector(".forma:checked").value
    const ladoA = Number(document.querySelector("#ladoA").value)
    const ladoB = Number(document.querySelector("#ladoB").value)
    const res = document.querySelector("#res")

    let perimetro = formaSelecionada === 'quadrado' ? 4*ladoA : formaSelecionada === 'triangulo' ? 3*ladoA : formaSelecionada === 'retangulo' ? 2*(ladoA+ladoB) : 0

    res.innerHTML = `O perímetro é de: ${perimetro}cm`
    
})
