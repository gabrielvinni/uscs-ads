
// Calcula o perimetro
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
        const visuForma = document.querySelector("#visuForma")

        const formulas = {
            'quadrado': 'Perímetro = lado A x 4',
            'triangulo': 'Perímetro = lado A x 3',
            'retangulo': 'Perímetro = 2 x (lado A + lado B)'
        }

        const classesAnimacao = {
            'quadrado': 'forma-quadrado',
            'triangulo': 'forma-triangulo',
            'retangulo': 'forma-retangulo'
        }
        
        prevFormula.classList.add("escondido")
        
        setTimeout(() => {
            prevFormula.textContent = formulas[input.value]
            prevFormula.classList.remove("escondido")
        }, 200);

        visuForma.classList.remove('forma-quadrado', 'forma-triangulo', 'forma-retangulo');
        visuForma.classList.add(classesAnimacao[input.value])
        
    })    
})
