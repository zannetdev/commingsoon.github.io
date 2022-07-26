function shuffle(string) {
    var parts = string.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
}

setInterval(()=>{
    document.title = shuffle('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'); + '- Zannet';
}, 100)
