let findTheOldest = function(people) {
    const sortedByAge = people.sort((person1, person2) => {
        if (('yearOfDeath' in person1) === false) {
            person1.yearOfDeath = new Date().getFullYear();
        }
        if (('yearOfDeath' in person2) === false) {
            person2.yearOfDeath = new Date().getFullYear();
        }

        let person1Age = person1.yearOfDeath - person1.yearOfBirth;
        let person2Age = person2.yearOfDeath - person2.yearOfBirth;

        return (person1Age >= person2Age) ? -1 : 1;
    });

    return sortedByAge[0];
}

module.exports = findTheOldest
