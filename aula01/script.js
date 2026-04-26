
// Calcula o perimetro
document.querySelector("#botao").addEventListener("click", () =>{

    const formaSelecionada = document.querySelector(".forma:checked").value
    const ladoA = Number(document.querySelector("#ladoA").value)
    const ladoB = Number(document.querySelector("#ladoB").value)
    const res = document.querySelector("#res")

    let perimetro

    if (formaSelecionada == "quadrado"){perimetro = ladoA*4}
    if (formaSelecionada == "triangulo"){perimetro = ladoA*3}
    if (formaSelecionada == "retangulo"){perimetro = 2*(ladoA+ladoB)}

    document.querySelector("#ladoA").value = ""
    document.querySelector("#ladoB").value = ""
    
    res.innerHTML = `O perímetro é de: ${perimetro}cm`
    
})

// Troca a formula do perimetro e altera o formato do poligo de visualização
document.querySelectorAll('input.forma').forEach(input => {input.addEventListener("change", () =>{

        const prevFormula = document.querySelector("#prevFormula")
        const formulas = {
            'quadrado': 'Perímetro = lado A x 4',
            'triangulo': 'Perímetro = lado A x 3',
            'retangulo': 'Perímetro = 2 x (lado A + lado B)'
        }
        
        prevFormula.classList.add("escondido")
        
        setTimeout(() => {
            prevFormula.textContent = formulas[input.value]
            prevFormula.classList.remove("escondido")
        }, 300);
        
    })    
})
