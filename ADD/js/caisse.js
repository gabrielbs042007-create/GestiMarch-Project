document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grille-produits');
  if (!grid) return; 

  const cartEl = document.getElementById('panier');
  const msg = document.getElementById('panier-vide');
  const subtotalEl = document.getElementById('sous-total');
  const totalEl = document.getElementById('total-general');
  const recuInput = document.getElementById('montant-recu');
  const monnaieEl = document.getElementById('monnaie-rendue');
  const clearBtn = document.getElementById('vider-panier');
  let chiffreJour = document.getElementById('chiffre-jour');

  let cart = [];
 
  function format(n){
    return n.toLocaleString('fr-FR') + ' FBu';
  }
  
  function ajoutArticle(){
    cartEl.querySelectorAll('.ligne-panier').forEach(r => r.remove());
    msg.style.display = cart.length ? 'none' : 'block';

    let subtotal = 0;
    cart.forEach((item, idx) => {
      subtotal += item.prix * item.quantite;
      const ligneArt = document.createElement('div');
      ligneArt.className = 'ligne-panier';
      ligneArt .innerHTML = `
        <span style="font-size:20px;">${item.emoji}</span>
        <div style="flex:1; min-width:0;">
          <div class="ligne-panier-nom">${item.nom}</div>
          <div class="ligne-panier-prix">${format(item.prix)} / unité</div>
        </div>
        <div class="controle-quantite">
          <button type="button" data-action="dec" data-index="${idx}" aria-label="Diminuer">−</button>
          <span>${item.quantite}</span>
          <button type="button" data-action="inc" data-index="${idx}" aria-label="Augmenter">+</button>
        </div>
        <span class="ligne-total">${format(item.prix * item.quantite)}</span>
        <button type="button" class="bouton-retirer" data-action="remove" data-index="${idx}" aria-label="Retirer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>`;
      cartEl.appendChild(ligneArt);
    });

    subtotalEl.textContent = format(subtotal);
    totalEl.textContent = format(subtotal);
    prixFinal(subtotal);
    
  }

  function prixFinal(total){
    const recu = parseFloat(recuInput.value) || 0;
    const diff = recu - total;
    monnaieEl.value = format(diff > 0 ? diff : 0);
  }

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.article-caisse');
    if (!btn) return;
    const name = btn.dataset.nom;
    const price = parseFloat(btn.dataset.prix);
    const emoji = btn.dataset.emoji;
    const existing = cart.find(i => i.nom === name);
    if (existing) existing.quantite += 1;
    else cart.push({ nom: name, prix: price, emoji, quantite: 1 });
    ajoutArticle();
  });

  cartEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const idx = parseInt(btn.dataset.index, 10);
    const action = btn.dataset.action;
    if (action === 'inc') cart[idx].quantite += 1;
    if (action === 'dec') { cart[idx].quantite -= 1; if (cart[idx].quantite <= 0) cart.splice(idx, 1); }
    if (action === 'remove') cart.splice(idx, 1);
    ajoutArticle();
  });

  clearBtn?.addEventListener('click', () => { cart = []; ajoutArticle(); });
  recuInput?.addEventListener('input', () => {
    const total = cart.reduce((s, i) => s + i.prix * i.quantite, 0);
    prixFinal(total);
  });

  ajoutArticle();
});

