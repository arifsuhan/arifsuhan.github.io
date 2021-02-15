//font_path = []

let font_path = new FontFace('hello', 'url(lib/font/Saraswatii.ttf)');
let banglaText = document.getElementById("banglaText");

//font_path.load().then(function(loadedFont)
//{
//    document.fonts.add(loadedFont);
//    console.log("font loaded successfully");
//    
//    banglaText.style.fontFamily = "hello";
//}).catch(function(error) {
//    // error occurred
//    console.log("Error while font loading!");
//});

//console.log("hello 2020");
banglaText.style.fontFamily = "chandrabatiOMJ";


//var newStyle = document.createElement('style');
//var yourFontName = "Miama";
//var yourFontURL = "lib/font/hello.ttf";
//
//newStyle.appendChild(document.createTextNode("\
//@font-face {\
//    font-family: " + yourFontName + ";\
//    src: url('" + yourFontURL + "');\
//}\
//"));
//
//document.head.appendChild(newStyle);
//let banglaText = document.getElementById("banglaText");
//banglaText.style.fontFamily = "Miama";