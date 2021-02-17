const removeFromArray = function(arr, ...numsToRemove) {
    for (let i = 0; i < numsToRemove.length; i++) {
        if (arr.indexOf(numsToRemove[i]) < 0) continue;
        arr.splice(arr.indexOf(numsToRemove[i]), 1);
    }

    return arr;
}

module.exports = removeFromArray
