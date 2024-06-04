export default function getListStudentIds(a){
    let array = new Array ;
    if(typeof(a) == "object") {
    a.map(nu => array.push(nu["id"]) )
        return array ;
    }
    else {
        return array ;
    }
}
