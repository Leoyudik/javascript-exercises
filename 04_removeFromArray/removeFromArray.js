
const removeFromArray = function(array, ...remove) {
    const newArray = array.filter(num => !remove.includes(num));
    return newArray;
};


module.exports = removeFromArray;


