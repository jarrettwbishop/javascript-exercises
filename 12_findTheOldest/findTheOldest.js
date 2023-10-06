const calculateAge = function(birth, death) {
    const date = new Date()

    if (death) {
        return death - birth;
    }

    return date.getFullYear() - birth;
}

const findTheOldest = function(people) {
    let oldest = people[0];

    people.forEach((person) => {
        if (calculateAge(person.yearOfBirth, person.yearOfDeath) > calculateAge(oldest.yearOfBirth, oldest.yearOfDeath)) {
            oldest = person;
        }
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
