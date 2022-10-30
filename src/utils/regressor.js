function regressor(x,y){

    function produto(x, y) {
        const ret = [];
        for ( let i = 0 ; i < x.length ; i++ )
            ret.push(x[i] * y[i]);
        return ret;
    }
    
    function quadrados(x) {
        const ret = [];
        for ( let i = 0 ; i < x.length ; i++ )
            ret.push(x[i] * x[i]);
        return ret;
    }
    
    function somatorio(x) {
        let ret = 0;
        for ( let i = 0 ; i < x.length ; i++ )
            ret += x[i];
        return ret;
    }
    
    function media(x) { return somatorio(x) / x.length; }
    
    let m = somatorio(produto(x,y)) - somatorio(x) * somatorio(y) / x.length;
    m /= somatorio(quadrados(x)) - somatorio(x)*somatorio(x) / x.length;
    
    let b = media(y) - m * media(x);
    return ({
        angular: m,
        linear: b
    })
}

export function dataCreation(history){
    bolsoData = history.map((item)=> {
     return item.bolsonaro    
    });
    lulaData = history.map((item)=>{
        return item.lula
    })
    votesProportion = history.map((item)=>{
        return item.votesProportion*100
    })

    bolsoEquation = regressor(bolsoData, votesProportion);
    lulaEquation = regressor(lulaData, votesProportion);

    const filledData = history.map((item)=>{
        return({
            name: `${item.votesProportion*100}%`,
            lula: item.lula,
            bolso: item.bolso,
            lulaPred: null,
            bolsoPre: null,
            amt:2400
        })
    })

    const predictData = [];

    for (let index = 0; index < 100; index+=5) {
        const data = {
            name: `${index}%`,
            number: index,
            lula: null,
            bolso: null,
            lulaPred: (lulaEquation.angular*index) + lulaEquation.linear,
            bolsoPre: (bolsoEquation.angular*index)+ bolsoEquation.linear,
            amt:2400
        }
        predictData.push(data);
    }

   const filteredPredict = predictData.filter((item)=> item.number> history[history.length -1].votesProportion*100)
   return filledData.concat(filteredPredict)
}

