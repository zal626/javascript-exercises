const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let a = getAge(oldest["yearOfBirth"],oldest["yearOfDeath"]);
        let b = getAge(current["yearOfBirth"],current["yearOfDeath"]);
        return a > b ? oldest: current;
    });
};

function getAge(birth, death){
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
