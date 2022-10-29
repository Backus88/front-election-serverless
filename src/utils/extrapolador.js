function extrapolador(item){
    let bolso = 0;
    let lula = 0;
    let total = 0;
    for (const v of item){
        if(v.uf !== 'BR'){
            bolso += (v.bolsonaro/v.votesProportion);
            lula += (v.lula/v.votesProportion);
            total += (v.votesCount/v.votesProportion);
        }
    }
    return({
        bolsonaro: bolso,
        lula: lula,
        votosTotais: total
    });
}