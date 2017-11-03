document.getElementById("close-table").onclick = function() {
    document.getElementById("oncl-close").style.display = "none";
}
;

document.getElementById('create-g').onclick = function() {
    document.getElementById("oncl-close").style.display = "block";
}
;

$(document).ready(function() {
    $('.burger').on('click', function() {
        $('header nav ul').toggleClass('open');
    });
});

function viewportWidth() {
    if (window.innerWidth)
        return window.innerWidth;
    var doc = document
      , html = doc && doc.documentElement
      , body = doc && (doc.body || doc.getElementsByTagName("body")[0])
      , getWidth = function(elm) {
        if (!elm)
            return 0;
        var setOverflow = function(style, value) {
            var oldValue = style.overflow;
            style.overflow = value;
            return oldValue || "";
        }
          , style = elm.style
          , oldValue = setOverflow(style, "hidden")
          , width = elm.clientWidth || 0;
        setOverflow(style, oldValue);
        return width;
    };
    return Math.max(getWidth(html), getWidth(body));
}
