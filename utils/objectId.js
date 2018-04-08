// Adds object IDs to all JS objects. Not recommended for production code, super useful when debugging.
// See https://stackoverflow.com/questions/2020670/javascript-object-id

(function() {
    var id = 0;

    function generateId() { return id++; };

    Object.prototype.id = function() {
        var newId = generateId();

        this.id = function() { return newId; };

        return newId;
    };
})();
