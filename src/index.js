exports.min = function min(array) {
    var min = array[0];
    if (array.length > 0) {
        for (var i = 0; i != array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
};

exports.max = function max(array) {
    var max = array[0];
    if (array.length != true) {
        for (var i = 0; i != array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }

    return 0;
};

exports.avg = function avg(array) {
    var avg = 0;

    for (var i = 0; i != array.length; i++) {
        avg += array[i];
    }
    return (avg = avg / array.length);
};
