const sidebar = `
<aside id="barre-laterale" class="barre-laterale">
    <div class="marque">
      <div class="marque-symbole">
        <img src="/ADD/img/logoNB.png" alt="">
      </div>
      <div>
        <div class="marque-nom">GestiMarché</div>
        <div class="marque-slogan">Gestion supermarché</div>
      </div>
    </div>

    <div>
      <div class="etiquette-groupe-nav">Aperçu</div>
      <nav class="navigation">
        <a href="/pages/dashboard.html" class="">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
          Tableau de bord
        </a>
      </nav>
    </div>

    <div>
      <div class="etiquette-groupe-nav">Opérations</div>
      <nav class="navigation">
        <a href="/pages/caisse.html" class="" data-permission="caisse">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.6 12.5a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"/></svg>
          Caisse
        </a>
        <a href="/pages/produits.html" class="" data-permission="produits">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>
          Produits
        </a>
        <a href="/pages/stock.html" class="" data-permission="stock">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 12 10 5 10-5"/><path d="m2 7 10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/></svg>
          Stock
        </a>
      </nav>
    </div>

    <div>
      <div class="etiquette-groupe-nav">Partenaires</div>
      <nav class="navigation">
        <p href="/pages/clients.html" class="clients-Lien" data-permission="clients">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          Clients
        </p>
        <a href="/pages/fournisseurs.html" class="" data-permission="rournisseurs">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8Z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          Fournisseurs
        </a>
      </nav>
    </div>

    <div>
      <div class="etiquette-groupe-nav">Analyse</div>
      <nav class="navigation">
        <a href="/pages/rapports.html" class="" data-permission="rapports">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="13" y="8" width="3" height="10"/><rect x="19" y="5" width="3" height="13"/></svg>
          Rapports
        </a>
      </nav>
    </div>

    <div class="pied-barre-laterale">
      <a href="/index.html" class="navigation" style="margin-top:10px;">
        <span style="display:flex;align-items:center;gap:11px;padding:9px 12px;border-radius:6px;color:#CFE4D7;font-size:13.5px;font-weight:500;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Déconnexion
        </span>
      </a>
    </div>
  </aside>
`;

document.getElementById("sidebar").innerHTML = sidebar;

const application = document.getElementById("appli")

const fermerBtn = document.getElementById("fermer");
const barreLat = document.getElementById("barre-laterale");
fermerBtn.addEventListener("click", () => {
  barreLat.classList.toggle("cache");
  if (barreLat.classList.contains("cache")) {
    fermerBtn.textContent = "▶";
    application.style.display = "grid";
    application.style.gridTemplateColumns = "1fr";
  }else {
    fermerBtn.textContent = "◀";
    application.style.display = "grid";
    application.style.gridTemplateColumns = "250px 1fr";
  }
});


// ==================== BARRE DE NAVIGATION Pour  MOBILE =========================
const barreInf = document.getElementById("barreInf")
barreInf.innerHTML=`
        <a href="/pages/dashboard.html" style="color:red;" class="" >
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
        </a>
        <a href="/pages/caisse.html" class="" data-permission="caisse">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.6 12.5a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"/></svg>
        </a>
        <a href="/pages/produits.html" class="" data-permission="produits">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>
        </a>
        <a href="/pages/stock.html" class="clients-Lien " data-permission="stock">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m2 12 10 5 10-5"/><path d="m2 7 10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/></svg>
        </a>
        <p href="/pages/clients.html" class="" data-permission="clients">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </p>
        <a href="/pages/fournisseurs.html" class="" data-permission="fournisseurs">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8Z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </a>
        <a href="/pages/rapports.html" class="" data-permission="rapports">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="13" y="8" width="3" height="10"/><rect x="19" y="5" width="3" height="13"/></svg>
        </a>

`