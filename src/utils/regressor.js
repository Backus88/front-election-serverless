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
    const bolsoData = history.map((item)=> {
     return item.bolsonaro    
    });
    const lulaData = history.map((item)=>{
        return item.lula
    })
    const votesProportion = history.map((item)=>{
        return item.votesProportion*100
    })

    const bolsoEquation = regressor(votesProportion,bolsoData);
    const lulaEquation = regressor(votesProportion,lulaData);

    const filledData = history.map((item)=>{
        return({
            name: `${item.votesProportion*100}%`,
            number: item.votesProportion,
            lula: item.lula,
            bolso: item.bolsonaro,
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
            bolsoPred: (bolsoEquation.angular*index)+ bolsoEquation.linear,
            amt:2400
        }
        predictData.push(data);
    }
   const sortedData = filledData.sort((a,b)=>{
    return a.number - b.number;
   })
   console.log(sortedData)
   const filteredPredict = predictData.filter((item)=> item.number> filledData[filledData.length -1]?.votesProportion*100)
   filteredPredict[0].lula = filteredPredict[0].lulaPred;
   filteredPredict[0].bolso = filteredPredict[0].bolsoPred;
   return filledData.concat(filteredPredict)
}

