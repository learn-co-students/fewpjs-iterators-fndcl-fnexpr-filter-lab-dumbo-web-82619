// Code your solution here
function findMatching(drivers, string){


let dr = drivers.filter(d =>{return d.toLowerCase() === string.toLowerCase()})
return dr
}


function fuzzyMatch(drivers, string){
    let dr = drivers.filter(d =>{return d.charAt(0)    === string.charAt(0) })

return dr
}

function matchName(drivers, string){

let dr = drivers.filter(d =>{return d.name    === string})

return dr
}