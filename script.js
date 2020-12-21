function pageLoad() {
/*


 
 -
 -

 js:

*/


let rootE = document.getElementById('root');

let notes = [];

notes.push({
    tag: "div",
    content: `
    figyelj oda a valtozonevekre,nehogy ujradeklarald ugyanazt,egyazon fuggvenyben.
 let i = 0;
 let i  = 10;
    `
});
notes.push({
    tag: "code",
    content: `
    nem eleg ha odarakod a funkciót,hívd is meg.
    -function pageLoad() {
        -window.addEventListener("load", pageLoad); 
 
    `
});
notes.push({
    tag: "console.log",
    content: `
   Az elején mindent consol.log-olj ki,hogy lasd,ha elrontottal valamit.
    `
});

notes.push({
    tag: "id",
    content: `
    Az id erősebb mint a class.
    `
});

notes.push({
    tag: "step",
    content: `
    Js ben,mindig tervezd meg a lépéseket.
    `
});
notes.push({
    tag: "target",
    content: `
    css:-class-t .-al,id-t,#-el celzol meg.
.class {
    color:black;
}
#id {
    color:red;
}
    `
});
notes.push({
    tag: "sass",
    content: `
    ha sassolsz,kapcsold is be a watch sass-t!
    `
});
notes.push({
    tag: "vw",
    content: `
    ne hasznald szelessegre a vw-t,kiveve,ha oldalra is akarod gorgetni az oldalad.
width:100vw;
    `
});
notes.push({
    tag: "class",
    content: `
    -classod lehet sok,de id-d csak 1.<div id="div" class="classik class classmate">
    `
});
notes.push({
    tag: "img",
    content: `
    vannak tagek,amik lezarjak onmagukat.pl.:<img/>
    `
});
notes.push({
    tag:"kapcsolat",
    content:  `
    pontosan celozd meg,hogy melyik js es css-t kell hozzakapcsolnod a html-hez.
 ./style.css
 style.css
    `
});

console.log(notes);
//objektumokbol feldolgoztuk 
for (note of notes) {
    rootE.insertAdjacentHTML("beforeend", `
    <${note.tag}>${note.content}</${note.tag}>
    `);

}

}
window.addEventListener("load", pageLoad);
