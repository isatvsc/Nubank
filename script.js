function home2TabNavigation() {

    const Nubank = {
        identificador: "nubank",
        titulo: "Nubank",
        paragrafo: "Controle total da sua vida financeira",
        imagem: "images/tabNavigation-1.jpg",
        link: "#nubank",
        textoLink: "Conheça Nubank"
    };

    const Croma = {
        identificador: "croma",
        titulo: "Nubank Croma",
        paragrafo: "A experiência que valoriza sua evolução financeira",
        imagem: "images/tabNavigation-2.jpg",
        link: "#nubank",
        textoLink: "Conheça Nubank Croma"
    };

    const Ultravioleta = {
        identificador: "ultravioleta",
        titulo: "Nubank Ultravioleta",
        paragrafo: "O melhor cartão pra quem ama viajar",
        imagem: "images/tabNavigation-3.jpg",
        link: "#nubank",
        textoLink: "Conheça Nubank Ultravioleta"
    };

    const Empresas = {
        identificador: "empresas",
        titulo: "Nu Empresas",
        paragrafo: "Tudo para gerir seu negócio com facilidade",
        imagem: "images/tabNavigation-4.jpg",
        link: "#nubank",
        textoLink: "Conheça Nu Empresas"
    };

    const conteudos = [
        Nubank,
        Croma,
        Ultravioleta,
        Empresas
    ];

    const tabs = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(tab => {
                tab.classList.remove("active");
            });

            tab.classList.add("active");

            const identificador = tab.dataset.tab;

            const home2Conteudo = conteudos.find(objeto => {
                return objeto.identificador === identificador;
            });

            document.getElementById("home2titulo").innerHTML = home2Conteudo.titulo;
            document.getElementById("home2paragrafo").innerHTML = home2Conteudo.paragrafo;
            document.getElementById("home2imagem").src = home2Conteudo.imagem;
            document.getElementById("home2link").href = home2Conteudo.link;
            document.getElementById("home2link").innerHTML = home2Conteudo.textoLink;


            const home2titulo = document.getElementById("home2titulo");
            const home2paragrafo = document.getElementById("home2paragrafo");
            const home2link = document.getElementById("home2link");

            home2titulo.className = home2Conteudo.identificador;
            home2paragrafo.className = `paragrafo ${home2Conteudo.identificador}`;
            home2link.className = home2Conteudo.identificador;

        });

    });

}

home2TabNavigation();

function home4CardSelector(){

    const Nubank = {
        identificador : "cardNubank",
        titulo : "Cartão Nubank",
        paragrafo : "Sem anuidade, sem tarifas abusivas e o mais completo em crédito.",
        button: "Conheça o Cartão Nubank",
        imagem : "images/cardNubank.png"
    }

    const Croma = {
        identificador : "cardCroma",
        titulo : "Cartão Nubank Croma",
        paragrafo : "Sem anuidade, Cartão Platinum com 0,8% de cashback em todas as compras no crédito e 5% em assinaturas digitais. tarifas abusivas e o mais completo em crédito.",
        button: "Conheça o Cartão Croma",
        imagem : "images/cardCroma.png"
    }

    const Ultravioleta = {
        identificador : "cardUltravioleta",
        titulo : "Cartão Ultravioleta",
        paragrafo : "Cartão Black que gera a partir de 2,2 pontos por dólar gasto ou 1,25% de cashback em cada compra no crédito.",
        button: "Conheça o Cartão Ultravioleta",
        imagem : "images/cardUltravioleta.png"
    }

    const Empresas = {
        identificador : "cardEmpresas",
        titulo : "Cartão Nu Empresas",
        paragrafo : "Sem anuidade, internacional e personalizado para o seu negócio.",
        button: "Conheça o Cartão Nu Empresas",
        imagem : "images/cardEmpresa.png"
    }

    conteudos = [
        Nubank,
        Croma,
        Ultravioleta,
        Empresas
    ]

    
}