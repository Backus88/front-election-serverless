export default function extrapolador(partials){
    let bolso = 0;
    let lula = 0;
    let total = 0;
    for (const [key, value] of  Object.entries(partials.byUf)){
        if(key !== 'BR'){
            if(value.current.bolsonaro&&value.current.lula){
                bolso += Math.round(((value.current.bolsonaro*value.current.votesCount)/value.current.votesProportion)*10)/10;
                lula += Math.round(((value.current.lula*value.current.votesCount)/value.current.votesProportion)*10)/10;
                total += value.current.votesCount;
            }
        }
    }
    const percentLula = (Math.floor(((lula*100)/(lula+bolso))*100)/100).toFixed(4); 
    const percentBolso= (Math.floor(((bolso*100)/(lula+bolso))*100)/100).toFixed(4); 
    return({
        lulaPercent:percentLula,
        bolsonaroPercent:percentBolso,
        total:total
    });
    
}