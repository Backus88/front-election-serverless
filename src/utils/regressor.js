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

    const filledData = history.map((item,index)=>{
        if(index === history.length-1){
            return({
                name: `${item.votesProportion*100}%`,
                number: item.votesProportion,
                lula: item.lula,
                bolso: item.bolsonaro,
                lulaPred: item.lula,
                bolsoPred: item.bolsonaro,
                amt:2400
            })
        }
        return({
            name: `${item.votesProportion*100}%`,
            number: item.votesProportion,
            lula: item.lula,
            bolso: item.bolsonaro,
            lulaPred: null,
            bolsoPred: null,
            amt:2400
        })
    })

    const predictData = [];

    for (let index = 0; index <= 100; index+=5) {
        const data = {
            name: `${index}%`,
            number: index/100,
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
   const filteredPredict = predictData.filter((item)=> item.number>= sortedData[sortedData.length -1]?.number);
   filteredPredict[0].lula = filteredPredict[0]?.lulaPred;
   filteredPredict[0].bolso = filteredPredict[0]?.bolsoPred;
   const end = filledData.concat(filteredPredict);
   return end
}

