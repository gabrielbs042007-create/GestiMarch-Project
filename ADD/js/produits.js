const main = document.getElementById("main");
const formulaire = document.getElementById("formAjoutProd");
const NouveauProd = document.getElementById("Nouveau-produit");
const cacher = document.getElementById("cacher");
NouveauProd.addEventListener("click", () => {
    main.style.display = "grid";
    main.style.gridTemplateColumns = "2fr 1fr";
    formulaire.style.display = "block";
    NouveauProd.style.display = "none";
    cacher.style.display = "block";
})

cacher.addEventListener("click", () => {
    main.style.display = "block";
    formulaire.style.display = "none";
    NouveauProd.style.display = "block";
    cacher.style.display = "none";
})

fetch("/ADD/js/produits.json")
.then(Response => Response.json())
.then(produits => {

    const valTot = document.getElementById("valTotal")
    const nbProduit = document.getElementById("nbProduit")
    const nbCategorie = document.getElementById("nbCategorie")
    
    const nbProd = produits.length
    nbProduit.textContent=`${nbProd}`
    const total = produits.map(prix => prix.PU).toLocaleString()

    let Pu = 0
    for (let i = 0; i <= total.length; i++) {
        Pu = Pu + i
        
    }
    valTot.innerHTML=`${Pu + ' FBu'}`
    
    
    
    

    const tbody = document.getElementById("tbodyProduit")
    produits.forEach(element => {
        const tr = document.createElement("tr")
        tr.innerHTML=`
        <td><input type="checkbox"></td>
        <td>${element.id}</td>
        <td>${element.nom}</td>
        <td class="nombre">${element.PU}</td>
        <td> ${element.categorie}</td>
        <td class="nombre">${element.quantite}</td>
        <td>
            <div class="flex ecart-8">
                <button class="bouton bouton-fantome bouton-petit bouton-carre" aria-label="Supprimer"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
            </div>
        </td>

        `
        tbody.appendChild(tr)
        
    });
})
