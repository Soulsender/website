// Script courtesy of http://www.web-source.net - Your Guide to Professional Web Site Design and Development
function makevisible(cur,which){
    strength=(which==0)? 1 : 0.2
    if (cur.style.MozOpacity)
    cur.style.MozOpacity=strength
    else if (cur.filters)
    cur.filters.alpha.opacity=strength*100
    }