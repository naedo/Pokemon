var evoButton = $('#evo');
var effButton = $('#eff');

evoButton.click(function () {
    // capture the user chosen option
    var searchbox = $('#searchbox');
    var search = $('#searchbox').val();
    
    console.log("You picked " + search);
    window.open('http://bulbapedia.bulbagarden.net/wiki/' + search + '_(Pok%C3%A9mon)#Evolution','_blank');
});

effButton.click(function () {
    // capture the user chosen option
    var searchbox = $('#searchbox');
    var search = $('#searchbox').val();
    
    console.log("You picked " + search);
    window.open('http://bulbapedia.bulbagarden.net/wiki/' + search + '_(Pok%C3%A9mon)#Type_effectiveness','_blank');
});