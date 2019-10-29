

function getConvertFromApi(url){
    var prmAns = axios.get(url)

    var prm1 = prmAns.then(res => {
        return res.data;
    })
    return prm1;
}