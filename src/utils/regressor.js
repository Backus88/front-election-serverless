export function regressor(partials){

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

