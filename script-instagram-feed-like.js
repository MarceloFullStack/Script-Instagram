function loopFeedGeral(value) {
    var i = value
    console.log('Carregando script...');
    var Time1 = Math.ceil(Math.random() * 10) + 3;
    setTimeout(function() {
    if ( i < 20 ) {
    console.log('curtir');
    var btn = document.querySelectorAll('svg[aria-label="Curtir"]');
    btn[i].parentElement.click();
    i++
    loopFeedGeral(i);
    console.log(i);
    }
    loopFeedGeral(i);
    i++
    console.log("curtiu " + i + "posts");
    }, Time1 * 1000);
    }
loopFeedGeral(0)