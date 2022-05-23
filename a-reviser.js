var reviser = [
    "flex (Ex : display:flex ; flex-direction;"
    ,
    "Media query (Ex : @media screen and (max-width:1000px)"
    ,
    "Figure (Ex: <figcaption>legende sous la photo</figcaption>)"
    ,
    "Iframe (<iframe src='lien de google map'></iframe>)"
    ,
    "Police d'écriture LOCAL (Ex: @font-face {font-family: \"Nom de la font\"; src: url(\"Endroit ou se trouve votre font\");})"
    ,
    "Position (Ex: position: absolute; position: relative;) ect.."
    ,
    "Css \"barré le text\" (balise <s>Text barré</s>)"
    ,
    "Background de fond (Ex: background-image: url(../image/nomDeImage);) ect.. "
    ,
    " Arrondir des images (Ex: border-radius: 25px; ou border-radius: 0px 10px 0px 10px)"
    ,
    "Ajouter des commentaires a votre code (Ex:   *// Arrondir les bord //* ==>  border-radius: 25px;)"
    ,
    "Vérifier votre code ( https://validator.w3.org ) "
    ,
    "Image en SVG (Ouvrir son svg sur VsCode, Copier le code et inseré dans votre page html)"
    ,
    "Float (float: left; float: right; float: none;) ect.."
    ,
    "Fomulaire (Ex: <form> <label for=\"E-mail\">@ E-mail *</label> </form> ) ect..) // (Ex = formaulaire pour E-mail) //"
    ,
    "KeyFrame (Ex: @keyframes Nom { from { margin-left: 100%; width: 300%;}  to { margin-left: 0%; width: 100%; }} ) ect.. "
]

var pro = prompt("entres un numero entre 1 et 15 ou directement ce que tu veux reviser");
proNum = Number(pro)
proNum--;
if (proNum <= 14 && proNum >= 0) {
    document.write(reviser[proNum] + " regarder dans le code pour plus amples information");
}

if ((pro === "flex") || (pro === "Flex") || (pro === "FLEX")) {
    document.write(reviser[0] + " regarder dans le code pour plus amples information");
}
if ((pro === "Media query") || (pro === "media query") || (pro === "MEDIA QUERY")) {
    document.write(reviser[1] + " regarder dans le code pour plus amples information");
}
if ((pro === "figcaption") ||(pro === "Figcaption") ||(pro === "FIGCAPTION") ||(pro === "Figure") || (pro === "figure") || (pro === "FIGURE")) {
    document.write(reviser[2] + " regarder dans le code pour plus amples information");
}
if ((pro === "Iframe") || (pro === "IFRAME") || (pro === "iframe")) {
    document.write(reviser[3] + " regarder dans le code pour plus amples information");
}
if ((pro === "Font face") || (pro === "font face") || (pro === "FONT FACE")) {
    document.write(reviser[4] + " regarder dans le code pour plus amples information");
}
if ((pro === "Position") || (pro === "position") || (pro === "POSITION")) {
    document.write(reviser[5] + " regarder dans le code pour plus amples information");
}
if ((pro === "Texte barré") || (pro === "texte barré") || (pro === "TEXTE BARRE")) {
    document.write(reviser[6] + " regarder dans le code pour plus amples information");
}
if ((pro === "Background-image") || (pro === "background-image") || (pro === "BACKGROUND-IMAGE")) {
    document.write(reviser[7] + " regarder dans le code pour plus amples information");
}
if ((pro === "Border-radius") || (pro === "border-radius") || (pro === "BORDER-RADIUS")) {
    document.write(reviser[8] + " regarder dans le code pour plus amples information");
}
if ((pro === "Commentaire") || (pro === "COMMENTAIRE") || (pro === "commentaire")) {
    document.write(reviser[9] + " regarder dans le code pour plus amples information");
}
if ((pro === "Vérifier") || (pro === "vérifier") || (pro === "VERIFIER")) {
    document.write(reviser[10] + " regarder dans le code pour plus amples information");
}
if ((pro === "SVG") || (pro === "svg")) {
    document.write(reviser[11] + " regarder dans le code pour plus amples information");
}
if ((pro === "Float") || (pro === "float") || (pro === "FLOAT")) {
    document.write(reviser[12] + " regarder dans le code pour plus amples information");
}
if ((pro === "Fomulaire") || (pro === "fomulaire") || (pro === "FORMULAIRE")) {
    document.write(reviser[13] + " regarder dans le code pour plus amples information");
}
if ((pro === "Keyframe") || (pro === "keyframe") || (pro === "KEYFRAME")) {
    document.write(reviser[14] + " regarder dans le code pour plus amples information");
}

