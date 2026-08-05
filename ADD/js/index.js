  // CONNEXION
let email = document.getElementById("identifiant")
let password = document.getElementById("mot-de-passe")
const aside = document.getElementById("barreLat")
const caisse = document.getElementById("caisse")
const gestion = document.getElementById("gestion")
const admin = document.getElementById("admin")
 
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
 
        fetch("ADD/js/users.json")
        .then(Response => Response.json())
        .then(users => {
          const roles = document.getElementsByName("role")
            for (const role of roles) {
              if (role.checked) {
                role.value

                // connexion admin
                if (role.value ==="admin" && email.value === users.Administrateur.email &&  password.value === users.Administrateur.password ) {
                  setTimeout(() => {
                    // alert("Connexion Reussi ✅")
                    window.location.href = 'pages/dashboard.html'
                  }, 2000);
                  aside.style.backgroundColor="red"
                  console.log("Connexion Reussi @Admin");
                }
                
                // connexion stock
                else if (role.value ==="stock" && email.value === users.Gestionnaire.email &&  password.value === users.Gestionnaire.password ) {
                  setTimeout(() => {
                    // alert("Connexion Reussi ✅")
                    window.location.href = 'pages/dashboard.html'
                  }, 2000);
                  aside.style.backgroundColor="yellow"
                  console.log("Connexion Reussi @Gestionnaire");
                } 

                // connexion caissier
                else if (role.value ==="caissier" && email.value === users.Caissier.email &&  password.value === users.Caissier.password ) {
                  setTimeout(() => {
                    // alert("Connexion Reussi ✅")
                    window.location.href = 'pages/dashboard.html'
                  }, 2000);
                  aside.style.backgroundColor="blue"
                  console.log("Connexion Reussi @Caissier");
                }

                else{
                  alert("Adresse Mail ou mot de passe incorrect ❌")
                  console.log("Adresse Mail ou mot de passe incorrect "); 
                }
            }
          }
        })
    });
  }

  // ======================= THEME ===========================

  const btn = document.getElementById("themeBtn");
  const theme = localStorage.getItem("theme");

    if (theme) {
        document.body.className = theme;
    }

    // Changer le thème
    btn.addEventListener("click", () => {

        if (document.body.classList.contains("light")) {
            document.body.classList.replace("light", "dark");
            btn.textContent = "☀️";
            btn.style.backgroundColor="white"
        } else {
            document.body.classList.replace("dark", "light");
            btn.textContent = "🌙";
            btn.style.backgroundColor="gray"
        }

        localStorage.setItem("theme", document.body.className);

    });

