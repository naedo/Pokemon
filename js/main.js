var evoButton = $('#evo');
var effButton = $('#eff');
var learnButton = $('#learn');
var searchbox = $('#searchbox');

evoButton.click(function () {
    // capture the user chosen option
    var search = $('#searchbox').val();
    
    console.log("You picked " + search);
    window.open('http://bulbapedia.bulbagarden.net/wiki/' + search + '_(Pok%C3%A9mon)#Evolution','_blank');
});

effButton.click(function () {
    // capture the user chosen option
    var search = $('#searchbox').val();
    
    console.log("You picked " + search);
    window.open('http://bulbapedia.bulbagarden.net/wiki/' + search + '_(Pok%C3%A9mon)#Type_effectiveness','_blank');
});

learnButton.click(function () {
    // capture the user chosen option
    var search = $('#searchbox').val();
    var gen = $('#genSelect').val();
    
    console.log("Search: " + search + " | Gen: " + gen);
    window.open('http://bulbapedia.bulbagarden.net/wiki/' + search + '_(Pok%C3%A9mon)/Generation_' + gen + '_learnset#firstHeading','_blank');
});