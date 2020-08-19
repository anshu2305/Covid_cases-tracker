setInterval( () => {
    fetch("https://corona.lmao.ninja/v2/countries/India")
        .then((response)=>{
        return response.json();
        })
        .then((data)=> {
        document.getElementById("flag").src=data.countryInfo.flag;
        document.getElementById("country").innerHTML=data.country.toLocaleString();
        document.getElementById("total").innerHTML=data.cases.toLocaleString();
        document.getElementById("active").innerHTML=data.active.toLocaleString();
        document.getElementById("recovered").innerHTML=data.recovered.toLocaleString();
        document.getElementById("death").innerHTML=data.deaths.toLocaleString();
        document.getElementById("tests").innerHTML=data.tests.toLocaleString();
        document.getElementById("criti").innerHTML=data.critical.toLocaleString();

        document.getElementById("casespm").innerHTML=data.casesPerOneMillion;
        document.getElementById("deathspm").innerHTML=data.deathsPerOneMillion;
        document.getElementById("recpm").innerHTML=data.recoveredPerOneMillion;
        document.getElementById("testspm").innerHTML=data.testsPerOneMillion;
        document.getElementById("critipm").innerHTML=data.criticalPerOneMillion;
        document.getElementById("activepm").innerHTML=data.activePerOneMillion;
        })

        fetch("	https://api.covid19india.org/data.json")
        .then((response)=>{
        return response.json();
        })
        .then((data)=>{
        //console.log(data);

        document.getElementById("todaycases").innerHTML=data.statewise[0].deltaconfirmed;
        document.getElementById("todaydeaths").innerHTML=data.statewise[0].deltadeaths;
        document.getElementById("todayrec").innerHTML=data.statewise[0].deltarecovered;
        document.getElementById("time").innerHTML=data.statewise[0].lastupdatedtime;

        var num=[];
        //var newarr=[];

        document.getElementById("state-namet1").innerHTML=data.statewise[1].state;
        document.getElementById("dtotalt1").innerHTML=data.statewise[1].deltaconfirmed;
        num[1]=document.getElementById("Totalt1").innerHTML=data.statewise[1].confirmed;
        //newarr[1]=parseInt("num[1]");   
        document.getElementById("Activet1").innerHTML=data.statewise[1].active;
        document.getElementById("drect1").innerHTML=data.statewise[1].deltarecovered;
        document.getElementById("Recoveredt1").innerHTML=data.statewise[1].recovered;
        document.getElementById("ddead1").innerHTML=data.statewise[1].deltadeaths;
        document.getElementById("Deceasedt1").innerHTML=data.statewise[1].deaths;


        //console.log(typeof newarr[1]);

        document.getElementById("state-namet2").innerHTML=data.statewise[2].state;
        document.getElementById("dtotalt2").innerHTML=data.statewise[2].deltaconfirmed;
        num[2]=document.getElementById("Totalt2").innerHTML=data.statewise[2].confirmed;
        //newarr[2]=parseInt("num[2]"); 
        document.getElementById("Activet2").innerHTML=data.statewise[2].active;
        document.getElementById("drect2").innerHTML=data.statewise[2].deltarecovered;
        document.getElementById("Recoveredt2").innerHTML=data.statewise[2].recovered;
        document.getElementById("ddead2").innerHTML=data.statewise[2].deltadeaths;
        document.getElementById("Deceasedt2").innerHTML=data.statewise[2].deaths;

        document.getElementById("state-namet3").innerHTML=data.statewise[3].state;
        document.getElementById("dtotalt3").innerHTML=data.statewise[3].deltaconfirmed;
        num[3]=document.getElementById("Totalt3").innerHTML=data.statewise[3].confirmed;
        //newarr[3]=parseInt("num[3]"); 
        document.getElementById("Activet3").innerHTML=data.statewise[3].active;
        document.getElementById("drect3").innerHTML=data.statewise[3].deltarecovered;
        document.getElementById("Recoveredt3").innerHTML=data.statewise[3].recovered;
        document.getElementById("ddead3").innerHTML=data.statewise[3].deltadeaths;
        document.getElementById("Deceasedt3").innerHTML=data.statewise[3].deaths;

        document.getElementById("state-namet4").innerHTML=data.statewise[4].state;
        document.getElementById("dtotalt4").innerHTML=data.statewise[4].deltaconfirmed;
        num[4]=document.getElementById("Totalt4").innerHTML=data.statewise[4].confirmed;
        //newarr[4]=parseInt("num[4]"); 
        document.getElementById("Activet4").innerHTML=data.statewise[4].active;
        document.getElementById("drect4").innerHTML=data.statewise[4].deltarecovered;
        document.getElementById("Recoveredt4").innerHTML=data.statewise[4].recovered;
        document.getElementById("ddead4").innerHTML=data.statewise[4].deltadeaths;
        document.getElementById("Deceasedt4").innerHTML=data.statewise[4].deaths;

        document.getElementById("state-namet5").innerHTML=data.statewise[5].state;
        document.getElementById("dtotalt5").innerHTML=data.statewise[5].deltaconfirmed;
        num[5]=document.getElementById("Totalt5").innerHTML=data.statewise[5].confirmed;
        document.getElementById("Activet5").innerHTML=data.statewise[5].active;
        document.getElementById("drect5").innerHTML=data.statewise[5].deltarecovered;
        document.getElementById("Recoveredt5").innerHTML=data.statewise[5].recovered;
        document.getElementById("ddead5").innerHTML=data.statewise[5].deltadeaths;
        document.getElementById("Deceasedt5").innerHTML=data.statewise[5].deaths;

        document.getElementById("state-namet6").innerHTML=data.statewise[6].state;
        document.getElementById("dtotalt6").innerHTML=data.statewise[6].deltaconfirmed;
        num[6]=document.getElementById("Totalt6").innerHTML=data.statewise[6].confirmed;
        document.getElementById("Activet6").innerHTML=data.statewise[6].active;
        document.getElementById("drect6").innerHTML=data.statewise[6].deltarecovered;
        document.getElementById("Recoveredt6").innerHTML=data.statewise[6].recovered;
        document.getElementById("ddead6").innerHTML=data.statewise[6].deltadeaths;
        document.getElementById("Deceasedt6").innerHTML=data.statewise[6].deaths;

        document.getElementById("state-namet7").innerHTML=data.statewise[7].state;
        document.getElementById("dtotalt7").innerHTML=data.statewise[7].deltaconfirmed;
        num[7]=document.getElementById("Totalt7").innerHTML=data.statewise[7].confirmed;
        document.getElementById("Activet7").innerHTML=data.statewise[7].active;
        document.getElementById("drect7").innerHTML=data.statewise[7].deltarecovered;
        document.getElementById("Recoveredt7").innerHTML=data.statewise[7].recovered;
        document.getElementById("ddead7").innerHTML=data.statewise[7].deltadeaths;
        document.getElementById("Deceasedt7").innerHTML=data.statewise[7].deaths;

        document.getElementById("state-namet8").innerHTML=data.statewise[8].state;
        document.getElementById("dtotalt8").innerHTML=data.statewise[8].deltaconfirmed;
        num[8]=document.getElementById("Totalt8").innerHTML=data.statewise[8].confirmed;
        document.getElementById("Activet8").innerHTML=data.statewise[8].active;
        document.getElementById("drect8").innerHTML=data.statewise[8].deltarecovered;
        document.getElementById("Recoveredt8").innerHTML=data.statewise[8].recovered;
        document.getElementById("ddead8").innerHTML=data.statewise[8].deltadeaths;
        document.getElementById("Deceasedt8").innerHTML=data.statewise[8].deaths;

        document.getElementById("state-namet9").innerHTML=data.statewise[9].state;
        document.getElementById("dtotalt9").innerHTML=data.statewise[9].deltaconfirmed;
        num[9]=document.getElementById("Totalt9").innerHTML=data.statewise[9].confirmed;
        document.getElementById("Activet9").innerHTML=data.statewise[9].active;
        document.getElementById("drect9").innerHTML=data.statewise[9].deltarecovered;
        document.getElementById("Recoveredt9").innerHTML=data.statewise[9].recovered;
        document.getElementById("ddead9").innerHTML=data.statewise[9].deltadeaths;
        document.getElementById("Deceasedt9").innerHTML=data.statewise[9].deaths;

        document.getElementById("state-namet10").innerHTML=data.statewise[10].state;
        document.getElementById("dtotalt10").innerHTML=data.statewise[10].deltaconfirmed;
        num[10]=document.getElementById("Totalt10").innerHTML=data.statewise[10].confirmed;
        document.getElementById("Activet10").innerHTML=data.statewise[10].active;
        document.getElementById("drect10").innerHTML=data.statewise[10].deltarecovered;
        document.getElementById("Recoveredt10").innerHTML=data.statewise[10].recovered;
        document.getElementById("ddead10").innerHTML=data.statewise[10].deltadeaths;
        document.getElementById("Deceasedt10").innerHTML=data.statewise[10].deaths;

        document.getElementById("state-namet11").innerHTML=data.statewise[11].state;
        document.getElementById("dtotalt11").innerHTML=data.statewise[11].deltaconfirmed;
        num[11]=document.getElementById("Totalt11").innerHTML=data.statewise[11].confirmed;
        document.getElementById("Activet11").innerHTML=data.statewise[11].active;
        document.getElementById("drect11").innerHTML=data.statewise[11].deltarecovered;
        document.getElementById("Recoveredt11").innerHTML=data.statewise[11].recovered;
        document.getElementById("ddead11").innerHTML=data.statewise[11].deltadeaths;
        document.getElementById("Deceasedt11").innerHTML=data.statewise[11].deaths;

        document.getElementById("state-namet12").innerHTML=data.statewise[12].state;
        document.getElementById("dtotalt12").innerHTML=data.statewise[12].deltaconfirmed;
        num[12]=document.getElementById("Totalt12").innerHTML=data.statewise[12].confirmed;
        document.getElementById("Activet12").innerHTML=data.statewise[12].active;
        document.getElementById("drect12").innerHTML=data.statewise[12].deltarecovered;
        document.getElementById("Recoveredt12").innerHTML=data.statewise[12].recovered;
        document.getElementById("ddead12").innerHTML=data.statewise[12].deltadeaths;
        document.getElementById("Deceasedt12").innerHTML=data.statewise[12].deaths;

        document.getElementById("state-namet13").innerHTML=data.statewise[13].state;
        document.getElementById("dtotalt13").innerHTML=data.statewise[13].deltaconfirmed;
        document.getElementById("Totalt13").innerHTML=data.statewise[13].confirmed;
        document.getElementById("Activet13").innerHTML=data.statewise[13].active;
        document.getElementById("drect13").innerHTML=data.statewise[13].deltarecovered;
        document.getElementById("Recoveredt13").innerHTML=data.statewise[13].recovered;
        document.getElementById("ddead13").innerHTML=data.statewise[13].deltadeaths;
        document.getElementById("Deceasedt13").innerHTML=data.statewise[13].deaths;

        document.getElementById("state-namet14").innerHTML=data.statewise[14].state;
        document.getElementById("dtotalt14").innerHTML=data.statewise[14].deltaconfirmed;
        document.getElementById("Totalt14").innerHTML=data.statewise[14].confirmed;
        document.getElementById("Activet14").innerHTML=data.statewise[14].active;
        document.getElementById("drect14").innerHTML=data.statewise[14].deltarecovered;
        document.getElementById("Recoveredt14").innerHTML=data.statewise[14].recovered;
        document.getElementById("ddead14").innerHTML=data.statewise[14].deltadeaths;
        document.getElementById("Deceasedt14").innerHTML=data.statewise[14].deaths;

        document.getElementById("state-namet15").innerHTML=data.statewise[15].state;
        document.getElementById("dtotalt15").innerHTML=data.statewise[15].deltaconfirmed;
        document.getElementById("Totalt15").innerHTML=data.statewise[15].confirmed;
        document.getElementById("Activet15").innerHTML=data.statewise[15].active;
        document.getElementById("drect15").innerHTML=data.statewise[15].deltarecovered;
        document.getElementById("Recoveredt15").innerHTML=data.statewise[15].recovered;
        document.getElementById("ddead15").innerHTML=data.statewise[15].deltadeaths;
        document.getElementById("Deceasedt15").innerHTML=data.statewise[15].deaths;

        document.getElementById("state-namet16").innerHTML=data.statewise[16].state;
        document.getElementById("dtotalt16").innerHTML=data.statewise[16].deltaconfirmed;
        document.getElementById("Totalt16").innerHTML=data.statewise[16].confirmed;
        document.getElementById("Activet16").innerHTML=data.statewise[16].active;
        document.getElementById("drect16").innerHTML=data.statewise[16].deltarecovered;
        document.getElementById("Recoveredt16").innerHTML=data.statewise[16].recovered;
        document.getElementById("ddead16").innerHTML=data.statewise[16].deltadeaths;
        document.getElementById("Deceasedt16").innerHTML=data.statewise[16].deaths;

        document.getElementById("state-namet17").innerHTML=data.statewise[17].state;
        document.getElementById("dtotalt17").innerHTML=data.statewise[17].deltaconfirmed;
        document.getElementById("Totalt17").innerHTML=data.statewise[17].confirmed;
        document.getElementById("Activet17").innerHTML=data.statewise[17].active;
        document.getElementById("drect17").innerHTML=data.statewise[17].deltarecovered;
        document.getElementById("Recoveredt17").innerHTML=data.statewise[17].recovered;
        document.getElementById("ddead17").innerHTML=data.statewise[17].deltadeaths;
        document.getElementById("Deceasedt17").innerHTML=data.statewise[17].deaths;

        document.getElementById("state-namet18").innerHTML=data.statewise[18].state;
        document.getElementById("dtotalt18").innerHTML=data.statewise[18].deltaconfirmed;
        document.getElementById("Totalt18").innerHTML=data.statewise[18].confirmed;
        document.getElementById("Activet18").innerHTML=data.statewise[18].active;
        document.getElementById("drect18").innerHTML=data.statewise[18].deltarecovered;
        document.getElementById("Recoveredt18").innerHTML=data.statewise[18].recovered;
        document.getElementById("ddead18").innerHTML=data.statewise[18].deltadeaths;
        document.getElementById("Deceasedt18").innerHTML=data.statewise[18].deaths;

        document.getElementById("state-namet19").innerHTML=data.statewise[19].state;
        document.getElementById("dtotalt19").innerHTML=data.statewise[19].deltaconfirmed;
        document.getElementById("Totalt19").innerHTML=data.statewise[19].confirmed;
        document.getElementById("Activet19").innerHTML=data.statewise[19].active;
        document.getElementById("drect19").innerHTML=data.statewise[19].deltarecovered;
        document.getElementById("Recoveredt19").innerHTML=data.statewise[19].recovered;
        document.getElementById("ddead19").innerHTML=data.statewise[19].deltadeaths;
        document.getElementById("Deceasedt19").innerHTML=data.statewise[19].deaths;

        document.getElementById("state-namet20").innerHTML=data.statewise[20].state;
        document.getElementById("dtotalt20").innerHTML=data.statewise[20].deltaconfirmed;
        document.getElementById("Totalt20").innerHTML=data.statewise[20].confirmed;
        document.getElementById("Activet20").innerHTML=data.statewise[20].active;
        document.getElementById("drect20").innerHTML=data.statewise[20].deltarecovered;
        document.getElementById("Recoveredt20").innerHTML=data.statewise[20].recovered;
        document.getElementById("ddead20").innerHTML=data.statewise[20].deltadeaths;
        document.getElementById("Deceasedt20").innerHTML=data.statewise[20].deaths;

        document.getElementById("state-namet21").innerHTML=data.statewise[21].state;
        document.getElementById("dtotalt21").innerHTML=data.statewise[21].deltaconfirmed;
        document.getElementById("Totalt21").innerHTML=data.statewise[21].confirmed;
        document.getElementById("Activet21").innerHTML=data.statewise[21].active;
        document.getElementById("drect21").innerHTML=data.statewise[21].deltarecovered;
        document.getElementById("Recoveredt21").innerHTML=data.statewise[21].recovered;
        document.getElementById("ddead21").innerHTML=data.statewise[21].deltadeaths;
        document.getElementById("Deceasedt21").innerHTML=data.statewise[21].deaths;

        document.getElementById("state-namet22").innerHTML=data.statewise[22].state;
        document.getElementById("dtotalt22").innerHTML=data.statewise[22].deltaconfirmed;
        document.getElementById("Totalt22").innerHTML=data.statewise[22].confirmed;
        document.getElementById("Activet22").innerHTML=data.statewise[22].active;
        document.getElementById("drect22").innerHTML=data.statewise[22].deltarecovered;
        document.getElementById("Recoveredt22").innerHTML=data.statewise[22].recovered;
        document.getElementById("ddead22").innerHTML=data.statewise[22].deltadeaths;
        document.getElementById("Deceasedt22").innerHTML=data.statewise[22].deaths;

        document.getElementById("state-namet23").innerHTML=data.statewise[23].state;
        document.getElementById("dtotalt23").innerHTML=data.statewise[23].deltaconfirmed;
        document.getElementById("Totalt23").innerHTML=data.statewise[23].confirmed;
        document.getElementById("Activet23").innerHTML=data.statewise[23].active;
        document.getElementById("drect23").innerHTML=data.statewise[23].deltarecovered;
        document.getElementById("Recoveredt23").innerHTML=data.statewise[23].recovered;
        document.getElementById("ddead23").innerHTML=data.statewise[23].deltadeaths;
        document.getElementById("Deceasedt23").innerHTML=data.statewise[23].deaths;

        document.getElementById("state-namet24").innerHTML=data.statewise[24].state;
        document.getElementById("dtotalt24").innerHTML=data.statewise[24].deltaconfirmed;
        document.getElementById("Totalt24").innerHTML=data.statewise[24].confirmed;
        document.getElementById("Activet24").innerHTML=data.statewise[24].active;
        document.getElementById("drect24").innerHTML=data.statewise[24].deltarecovered;
        document.getElementById("Recoveredt24").innerHTML=data.statewise[24].recovered;
        document.getElementById("ddead24").innerHTML=data.statewise[24].deltadeaths;
        document.getElementById("Deceasedt24").innerHTML=data.statewise[24].deaths;

        document.getElementById("state-namet25").innerHTML=data.statewise[25].state;
        document.getElementById("dtotalt25").innerHTML=data.statewise[25].deltaconfirmed;
        document.getElementById("Totalt25").innerHTML=data.statewise[25].confirmed;
        document.getElementById("Activet25").innerHTML=data.statewise[25].active;
        document.getElementById("drect25").innerHTML=data.statewise[25].deltarecovered;
        document.getElementById("Recoveredt25").innerHTML=data.statewise[25].recovered;
        document.getElementById("ddead25").innerHTML=data.statewise[25].deltadeaths;
        document.getElementById("Deceasedt25").innerHTML=data.statewise[25].deaths;

        document.getElementById("state-namet26").innerHTML=data.statewise[26].state;
        document.getElementById("dtotalt26").innerHTML=data.statewise[26].deltaconfirmed;
        document.getElementById("Totalt26").innerHTML=data.statewise[26].confirmed;
        document.getElementById("Activet26").innerHTML=data.statewise[26].active;
        document.getElementById("drect26").innerHTML=data.statewise[26].deltarecovered;
        document.getElementById("Recoveredt26").innerHTML=data.statewise[26].recovered;
        document.getElementById("ddead26").innerHTML=data.statewise[26].deltadeaths;
        document.getElementById("Deceasedt26").innerHTML=data.statewise[26].deaths;

        document.getElementById("state-namet27").innerHTML=data.statewise[27].state;
        document.getElementById("dtotalt27").innerHTML=data.statewise[27].deltaconfirmed;
        document.getElementById("Totalt27").innerHTML=data.statewise[27].confirmed;
        document.getElementById("Activet27").innerHTML=data.statewise[27].active;
        document.getElementById("drect27").innerHTML=data.statewise[27].deltarecovered;
        document.getElementById("Recoveredt27").innerHTML=data.statewise[27].recovered;
        document.getElementById("ddead27").innerHTML=data.statewise[27].deltadeaths;
        document.getElementById("Deceasedt27").innerHTML=data.statewise[27].deaths;

        document.getElementById("state-namet28").innerHTML=data.statewise[28].state;
        document.getElementById("dtotalt28").innerHTML=data.statewise[28].deltaconfirmed;
        document.getElementById("Totalt28").innerHTML=data.statewise[28].confirmed;
        document.getElementById("Activet28").innerHTML=data.statewise[28].active;
        document.getElementById("drect28").innerHTML=data.statewise[28].deltarecovered;
        document.getElementById("Recoveredt28").innerHTML=data.statewise[28].recovered;
        document.getElementById("ddead28").innerHTML=data.statewise[28].deltadeaths;
        document.getElementById("Deceasedt28").innerHTML=data.statewise[28].deaths;

        document.getElementById("state-namet29").innerHTML=data.statewise[29].state;
        document.getElementById("dtotalt29").innerHTML=data.statewise[29].deltaconfirmed;
        document.getElementById("Totalt29").innerHTML=data.statewise[29].confirmed;
        document.getElementById("Activet29").innerHTML=data.statewise[29].active;
        document.getElementById("drect29").innerHTML=data.statewise[29].deltarecovered;
        document.getElementById("Recoveredt29").innerHTML=data.statewise[29].recovered;
        document.getElementById("ddead29").innerHTML=data.statewise[29].deltadeaths;
        document.getElementById("Deceasedt29").innerHTML=data.statewise[29].deaths;

        document.getElementById("state-namet30").innerHTML=data.statewise[30].state;
        document.getElementById("dtotalt30").innerHTML=data.statewise[30].deltaconfirmed;
        document.getElementById("Totalt30").innerHTML=data.statewise[30].confirmed;
        document.getElementById("Activet30").innerHTML=data.statewise[30].active;
        document.getElementById("drect30").innerHTML=data.statewise[30].deltarecovered;
        document.getElementById("Recoveredt30").innerHTML=data.statewise[30].recovered;
        document.getElementById("ddead30").innerHTML=data.statewise[30].deltadeaths;
        document.getElementById("Deceasedt30").innerHTML=data.statewise[30].deaths;

        document.getElementById("state-namet31").innerHTML=data.statewise[31].state;
        document.getElementById("dtotalt31").innerHTML=data.statewise[31].deltaconfirmed;
        document.getElementById("Totalt31").innerHTML=data.statewise[31].confirmed;
        document.getElementById("Activet31").innerHTML=data.statewise[31].active;
        document.getElementById("drect31").innerHTML=data.statewise[31].deltarecovered;
        document.getElementById("Recoveredt31").innerHTML=data.statewise[31].recovered;
        document.getElementById("ddead31").innerHTML=data.statewise[31].deltadeaths;
        document.getElementById("Deceasedt31").innerHTML=data.statewise[31].deaths;

        document.getElementById("state-namet32").innerHTML=data.statewise[32].state;
        document.getElementById("dtotalt32").innerHTML=data.statewise[32].deltaconfirmed;
        document.getElementById("Totalt32").innerHTML=data.statewise[32].confirmed;
        document.getElementById("Activet32").innerHTML=data.statewise[32].active;
        document.getElementById("drect32").innerHTML=data.statewise[32].deltarecovered;
        document.getElementById("Recoveredt32").innerHTML=data.statewise[32].recovered;
        document.getElementById("ddead32").innerHTML=data.statewise[32].deltadeaths;
        document.getElementById("Deceasedt32").innerHTML=data.statewise[32].deaths;

        document.getElementById("state-namet33").innerHTML=data.statewise[33].state;
        document.getElementById("dtotalt33").innerHTML=data.statewise[33].deltaconfirmed;
        document.getElementById("Totalt33").innerHTML=data.statewise[33].confirmed;
        document.getElementById("Activet33").innerHTML=data.statewise[33].active;
        document.getElementById("drect33").innerHTML=data.statewise[33].deltarecovered;
        document.getElementById("Recoveredt33").innerHTML=data.statewise[33].recovered;
        document.getElementById("ddead33").innerHTML=data.statewise[33].deltadeaths;
        document.getElementById("Deceasedt33").innerHTML=data.statewise[33].deaths;

        document.getElementById("state-namet34").innerHTML=data.statewise[34].state;
        document.getElementById("dtotalt34").innerHTML=data.statewise[34].deltaconfirmed;
        document.getElementById("Totalt34").innerHTML=data.statewise[34].confirmed;
        document.getElementById("Activet34").innerHTML=data.statewise[34].active;
        document.getElementById("drect34").innerHTML=data.statewise[34].deltarecovered;
        document.getElementById("Recoveredt34").innerHTML=data.statewise[34].recovered;
        document.getElementById("ddead34").innerHTML=data.statewise[34].deltadeaths;
        document.getElementById("Deceasedt34").innerHTML=data.statewise[34].deaths;

        document.getElementById("state-namet35").innerHTML=data.statewise[35].state;
        document.getElementById("dtotalt35").innerHTML=data.statewise[35].deltaconfirmed;
        document.getElementById("Totalt35").innerHTML=data.statewise[35].confirmed;
        document.getElementById("Activet35").innerHTML=data.statewise[35].active;
        document.getElementById("drect35").innerHTML=data.statewise[35].deltarecovered;
        document.getElementById("Recoveredt35").innerHTML=data.statewise[35].recovered;
        document.getElementById("ddead35").innerHTML=data.statewise[35].deltadeaths;
        document.getElementById("Deceasedt35").innerHTML=data.statewise[35].deaths;

        document.getElementById("state-namet36").innerHTML=data.statewise[36].state;
        document.getElementById("dtotalt36").innerHTML=data.statewise[36].deltaconfirmed;
        document.getElementById("Totalt36").innerHTML=data.statewise[36].confirmed;
        document.getElementById("Activet36").innerHTML=data.statewise[36].active;
        document.getElementById("drect36").innerHTML=data.statewise[36].deltarecovered;
        document.getElementById("Recoveredt36").innerHTML=data.statewise[36].recovered;
        document.getElementById("ddead36").innerHTML=data.statewise[36].deltadeaths;
        document.getElementById("Deceasedt36").innerHTML=data.statewise[36].deaths;

        document.getElementById("state-namet37").innerHTML=data.statewise[37].state;
        document.getElementById("dtotalt37").innerHTML=data.statewise[37].deltaconfirmed;
        document.getElementById("Totalt37").innerHTML=data.statewise[37].confirmed;
        document.getElementById("Activet37").innerHTML=data.statewise[37].active;
        document.getElementById("drect37").innerHTML=data.statewise[37].deltarecovered;
        document.getElementById("Recoveredt37").innerHTML=data.statewise[37].recovered;
        document.getElementById("ddead37").innerHTML=data.statewise[37].deltadeaths;
        document.getElementById("Deceasedt37").innerHTML=data.statewise[37].deaths;
            
        for (let i = 1; i < num.length; i++) {
            num [i]=parseInt('num[i]');
        }

        console.log(typeof num[2]);
       })  
},60000);
/*
    


fetch(" https://api.apify.com/v2/key-value-stores/SmuuI0oebnTWjRTUh/records/LATEST?disableRedirect=true")
.then ((response) => {
    return response.json();
})
.then((data)=>{
    console.log(data);
})
*/
