/*fetch("https://api.covid19data.cloud/openapi.json")*/
fetch("https://api.covid19api.com/summary")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    document.getElementById("total").innerHTML=data.Global.TotalConfirmed.toLocaleString();
    document.getElementById("recovered").innerHTML=data.Global.TotalRecovered.toLocaleString();
    document.getElementById("death").innerHTML=data.Global.TotalDeaths.toLocaleString();
    document.getElementById("todaycases").innerHTML=data.Global.NewConfirmed;
    document.getElementById("todaydeaths").innerHTML=data.Global.NewDeaths;
    document.getElementById("todayrec").innerHTML=data.Global.NewRecovered;
    document.getElementById("time").innerHTML=data.Date;
})
