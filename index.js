function findMatching(drivers, string){
   let filteredDrivers = drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
    return filteredDrivers
}

function fuzzyMatch(drivers, string){
    let filteredDrivers = drivers.filter(driver => {
        return driver.startsWith(string)
    })
    return filteredDrivers
}

function matchName(drivers, string){
   let filteredDrivers = drivers.filter(driver => {
        return driver.name === string
    })
    return filteredDrivers
}