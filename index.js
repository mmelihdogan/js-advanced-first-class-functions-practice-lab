// Code your solution in this file!

function logDriverNames(drivers) {
    drivers.forEach(element => {
        console.log(element.name); 
    });
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(element => {
        if (element.hometown === location) {
            console.log(element.name);
        }
    })
}

function driversByRevenue(drivers) {
    return drivers.slice(0).sort((current, next) => current.revenue - next.revenue);
}

function driversByName(drivers) {
    return drivers.slice(0).sort((a, b) => a.name.localeCompare(b.name));
}

function totalRevenue(drivers) {
    // return drivers.reduce((memo, element) => memo + element.revenue, 0);
    return drivers.reduce(function(total,element){let rev = element.revenue; return total+=rev},0);
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}