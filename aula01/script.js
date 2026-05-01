
// Valida os dados e calcula o perimetro
document.querySelector("#botao").addEventListener("click", () =>{

    const formaSelecionada = document.querySelector(".forma:checked").value
    const ladoA = Number(document.querySelector("#ladoA").value)
    const ladoB = Number(document.querySelector("#ladoB").value)
    const res = document.querySelector("#res")

    document.querySelector("#ladoA").classList.remove("input-erro")
    document.querySelector("#ladoB").classList.remove("input-erro")
    res.textContent = ""
    let erro = false

    if (!ladoA || ladoA <= 0){
        document.querySelector("#ladoA").classList.add("input-erro")
        erro = true
        console.log(erro+"1")
    }
    if (formaSelecionada === "retangulo" && (!ladoB || ladoB <= 0)){
        document.querySelector("#ladoB").classList.add("input-erro")
        erro = true
    }
    if (erro) {
        res.textContent = "Preencha os dados corretamente!"
        res.style.color = "red"
        return 
    }

    res.style.color = "var(--corSecundaria)"

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

        document.querySelector("#ladoA").classList.remove("input-erro")
        document.querySelector("#ladoB").classList.remove("input-erro")

        const prevFormula = document.querySelector("#prevFormula")
        const poligono = document.querySelector("#poligono-svg")

        const formulas = {
            'quadrado': 'Perímetro = ladoA x 4',
            'triangulo': 'Perímetro = ladoA x 3',
            'retangulo': 'Perímetro = 2 x (ladoA + ladoB)'
        }

        const imagensPoligono = {
            'quadrado': 'imagens/quadrado.svg',
            'triangulo': 'imagens/triangulo.svg',
            'retangulo': 'imagens/retangulo.svg'
        }
        
        prevFormula.classList.add("escondido")
        poligono.classList.add("esconder-forma")
        
        setTimeout(() => {

            prevFormula.textContent = formulas[input.value]
            prevFormula.classList.remove("escondido")

            poligono.src = " "
            poligono.src = imagensPoligono[input.value]
            poligono.classList.remove("esconder-forma")

        }, 200);
        
    })    
})
