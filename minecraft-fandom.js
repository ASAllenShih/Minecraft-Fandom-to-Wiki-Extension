(function() {
    var url = location.href;
    var newURL = url.replace('minecraft.fandom.com', 'minecraft.wiki');
    var languageMatch = newURL.match(/https:\/\/minecraft\.wiki\/([a-zA-Z-]+)\/wiki\//);
    if (languageMatch) {
        var language = languageMatch[1];
        newURL = newURL.replace(`https://minecraft.wiki/${language}/`, `https://${language}.minecraft.wiki/`);
    }
    newURL = newURL.replace('/wiki/', '/w/');
    location.replace(newURL);
})();