const main = document.getElementById("main")
const formulaire = document.getElementById("formulaire")
const nouvelle = document.getElementById("nouvelle")
nouvelle.addEventListener("click",()=>{
    main.style.display="grid"
    main.style.gridTemplateColumns="2fr 1fr"
    formulaire.style.display="block"
    nouvelle.style.display="none"
    cacher.style.display="block"
    
})

const cacher = document.getElementById("cacher")
cacher.addEventListener("click",()=>{
    nouvelle.style.display="flex"
    cacher.style.display="none"
    main.style.gridTemplateColumns="1fr"
    formulaire.style.display="none"
})

// ========================= Ajout dans le tableau ==========================

let tableauStock = []

const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const produit = document.getElementById("produit").value
    const fournisseur = document.getElementById("fournisseur").value
    const quantites = document.getElementById("quantite").value
    const quantite = parseInt(quantites, 10)
    const seuils = document.getElementById("seuil").value
    const seuil = parseInt(seuils, 10)
    const date = document.getElementById("date").value
  
    const entrees = {
        id : Date.now(),
        produit,
        fournisseur,
        quantite,
        seuil,
        date
    }
   
    let statut = undefined
        if (quantite <= seuil) {
            statut = "Alert "
            
        } 
        else{
            statut = "Stock OK"
        }

    tableauStock.push(entrees)
    localStorage.setItem("stock",JSON.stringify(tableauStock))

    const tbody = document.getElementById("tbody")
    const tr = document.createElement('tr');
 
    tr.innerHTML = `
      <td class="cellule-date">${date}</td>
      <td class="cellule-produit">${produit}</td>
      <td class="cellule-quantite">${quantite}</td>
      <td class="cellule-seuil">${seuil}</td>
      <td class="statut" style="color: red;" >${statut}</td>
    `;
        
    tbody.appendChild(tr)
    
})
