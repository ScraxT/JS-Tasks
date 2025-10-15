let random = Math.random();

function result (random) {return random < 0.5 ? 'heads' : 'tails'};

document.getElementById('flipBtn').addEventListener('click', function() {
    console.log(result(Math.random()));
});