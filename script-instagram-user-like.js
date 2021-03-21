// SELECIONAR POR CLIENTES, VC DEVE CLICAR NO USUARIO Q QUER CURTIR AS FOTOS E COLAR O SCRIPT NO CONSOLE
function loop() {
    console.log('Script loading…please wait…');
    var Time1 = Math.ceil(Math.random() * 10) + 3;
    var Time2 = Math.ceil(Math.random() * 10) + 3;
    setTimeout(function() {
    if ( document.querySelectorAll('svg[aria-label="Descurtir"]')[0]) {
    console.log('Skipping…');
    } else {
    console.log('Like the post…');
    var btn = document.querySelectorAll('svg[aria-label="Curtir"]');
    btn[0].parentElement.click();
    }
    setTimeout(function() {
    if (document.querySelectorAll('a.coreSpriteRightPaginationArrow').length) {
    console.log('Loading next post…');
    var btn = document.querySelectorAll('a.coreSpriteRightPaginationArrow');
    btn[0].click();
    } else {
    console.log('Reload the page and run the script again.!');
    }
    loop();
    }, Time1 * 1000);
    }, Time2 * 1000);
    }
    loop();