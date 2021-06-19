function myFunc(){
    document.getElementById("preloader").hidden=true;
    document.getElementById("preloader").style.display="none";
    console.log("loaded");
}
 
setInterval(() => {
    fetch("https://api.covid19api.com/summary")
    .then((response)=>{
        return response.json();
    })
    .then((data)=> {
          myFunc();
        document.getElementById("total").innerHTML=data.Global.TotalConfirmed;
        document.getElementById("recovered").innerHTML=data.Global.TotalRecovered;
        document.getElementById("death").innerHTML=data.Global.TotalDeaths;
        document.getElementById("todaycases").innerHTML=data.Global.NewConfirmed;
        document.getElementById("todaydeaths").innerHTML=data.Global.NewDeaths;
        document.getElementById("todayrec").innerHTML=data.Global.NewRecovered;
        document.getElementById("time").innerHTML=data.Date;
    })
}, 6000);    
