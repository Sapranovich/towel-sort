// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newarray = [];
    if (!matrix || matrix.length < 1) return newarray;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) matrix[i].reverse();
    }
    newarray += newarray.concat(matrix);
    return newarray.split(",");
};
