// Liste 5 objetos nativos
String;
Object;
Number;
Array;
Function;

// Liste 5 objetos do browser
Window;
history;
Document;
HTMLCollection;
NodeList;

// Liste 2 métodos, propriedades ou objetos
// presentes no chrome que não existem no firefox

if (document.webkitVisibilityState !== "undedined") {
    console.log("Existe");
} else {
    console.log("Não existe");
}

if (document.webkitHidden !== "undedined") {
    console.log("Existe");
} else {
    console.log("Não existe");
}

