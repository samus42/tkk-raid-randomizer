function queryAll(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
}
function shuffleArray(origArray) {
    var array = origArray.slice();
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function assign(members, areaId) {
    var shuffled = shuffleArray(members);
    var spans = queryAll("#" + areaId + " span");
    for (i = 0; i < shuffled.length; i++) {
        spans[i].innerHTML = shuffled[i];
    }
}
function validate(members) {
    return members.filter(function(val){ return val.trim().length > 0; }).length === 6;
}
function generate() {
    var members = queryAll("#members input").map(function (val) { return val.value; });

    if (!validate(members)) {
        alert("You don't have enough people.  Go make some friends!");
        return;
    }

    assign(members, "portal");
    assign(members, "relay");
    assign(members, "warpriest");
    assign(members, "golgoroth");
    assign(members, "daughters");
    assign(members, "oryx");
}