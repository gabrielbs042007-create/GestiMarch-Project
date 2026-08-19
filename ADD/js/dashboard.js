// console.log("hello");
fetch("/ADD/js/produits.json")
.then(Response => Response.json())
.then(produits => {
    
    
    
    // =================    LES GRAPHIQUES    =================
    // Graphique des ventes par mois
    const ventesSemaine = [15,25,40,32,58,50,72];
    const chartSemaine =
    echarts.init(document.getElementById("venteSemaine"));
    
    const optionSemaine={
        title:{
        text:'Évolution des ventes',
        subtext: "7 derniers jours",
        textStyle:{
            fontSize: 20,
            color: "black",
            fontWeight: "bold"
        }
    },

    tooltip:{
        trigger:'axis'
    },

    xAxis:{
        type:'category',
        data:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi']
    },
    
    yAxis:{
        type:'value'
    },
    
    series:[{
        data:ventesSemaine,
        type:'line',
        smooth:true,
        areaStyle:{},
        lineStyle:{
            width:6
        }
    }]

};

chartSemaine.setOption(optionSemaine);

// Graphique des ventes par Catégories
const categories = 

[
    { 
        name:'Epicerie',
        value:produits.filter(produit => produit.categorie === 'Epicerie').length
    },

    {
        name:'Boissons',
        value:produits.filter(produit => produit.categorie === 'Boissons').length
    },
    
    {
        name:'Frais',
        value:produits.filter(produit => produit.categorie === 'Frais').length
    },
    
    {
        name:'Hygiène',
        value:produits.filter(produit => produit.categorie === 'Hygiène').length
    }
    
];

const chartCategorie = echarts.init(document.getElementById("venteCategorie"));

const optionCategorie={
    title:{
        text:'Ventes par catégorie',
        textStyle:{
            fontSize: 20,
            color: "black",
            fontWeight: "bold"
        }
        
    },

    tooltip:{
        trigger:'item'
    },
    
    legend:{
        orient:'vertical',
        right:10,
        top:'center'
    },
    
    series:[{
        type:'pie',
        radius:['55%','75%'],
        data:categories
    }]
    
};

chartCategorie.setOption(optionCategorie);
})