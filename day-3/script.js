function jogoEscolhas() {
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End? (Digite 'Front-End' ou 'Back-End')");
    let tecnologia;
    
    if (area.toLowerCase() === "front-end") {
        tecnologia = prompt("Você quer aprender React ou Vue?");
    } else if (area.toLowerCase() === "back-end") {
        tecnologia = prompt("Você quer aprender C# ou Java?");
    } else {
        alert("Escolha inválida. Reinicie o jogo.");
        return;
    }
    
    let caminho = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack? (Digite 'especializar' ou 'fullstack')");
    
    if (caminho.toLowerCase() === "especializar") {
        alert(`Ótima escolha! Continue se aprofundando em ${tecnologia} para se tornar um especialista em ${area}.`);
    } else if (caminho.toLowerCase() === "fullstack") {
        alert("Incrível! Aprender tanto Front-End quanto Back-End abrirá muitas oportunidades para você!");
    } else {
        alert("Escolha inválida. Reinicie o jogo.");
        return;
    }
    
    let tecnologiasExtras = [];
    let continuar = true;
    
    while (continuar) {
        let novaTech = prompt("Quais outras tecnologias você gostaria de aprender?");
        tecnologiasExtras.push(novaTech);
        continuar = confirm("Tem mais alguma tecnologia que você gostaria de aprender?");
    }
    
    alert("Ótimas escolhas! Aqui está sua lista de aprendizado: " + tecnologiasExtras.join(", "));
}

jogoEscolhas();