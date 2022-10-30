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

    const data = [
        {
            name: '0%',
            lula: 51,
            bolso: 49,
            lulaPred: null,
            bolsoPred:null,
            amt: 2400,
        },

        {
            name: '10%',
            lula: 51,
            bolso: 49,
            lulaPred: null,
            bolsoPred:null,
            amt: 2400,
        },
        {
            name: '20%',
            lula: 51,
            bolso: 49,
            lulaPred: null,
            bolsoPred:null,
            amt: 2400,
        },
        {
            name: '30%',
            lula: 45,
            bolso: 55,
            lulaPred: null,
            bolsoPred:null,
            amt: 2210,
        },
        {
            name: '40%',
            lula: 48,
            bolso: 52,
            lulaPred: 48,
            bolsoPred:52,
            amt: 2290,
        },
        {
            name: '50%',
            lula: null,
            bolso: null,
            lulaPred: 49,
            bolsoPred: 51,
            amt: 2290,
        },
        {
            name: '60%',
            lula: null,
            bolso: null,
            lulaPred: 48.5,
            bolsoPred: 51.5,
            amt: 2290,
        },
        {
          name: '70%',
          lula: null,
          bolso: null,
          lulaPred: 48.5,
          bolsoPred: 51.5,
          amt: 2290,
      },
        {
          name: '80%',
          lula: null,
          bolso: null,
          lulaPred: 48.5,
          bolsoPred: 51.5,
          amt: 2290,
        },
        {
          name: '90%',
          lula: null,
          bolso: null,
          lulaPred: 48.5,
          bolsoPred: 51.5,
          amt: 2290,
        },
        {
          name: '100%',
          lula: null,
          bolso: null,
          lulaPred: 48.5,
          bolsoPred: 51.5,
          amt: 2290,
        }
    ];
}

