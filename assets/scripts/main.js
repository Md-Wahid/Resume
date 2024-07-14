// var printBtn = document.getElementById('printBtn');
// var printAltBtn = document.getElementById('printAltBtn');

// var printCont = document.querySelector('.print-content');

// printBtn.addEventListener('click', function(evt) {
//     saveAsPDF();
// });
// // printAltBtn.addEventListener('click', function(evt) {
// //     if(printCont.classList.contains('print-content')) {
// //         printCont.classList.add('print-none');
// //         printCont.classList.remove('print-content');
// //     }
// //     saveAsPDF();
// //     if(printCont.classList.contains('print-none')) {
// //         printCont.classList.add('print-content');
// //         printCont.classList.remove('print-none');
// //     }
// // });

// function saveAsPDF() {
//     if(confirm('Please, select A4 as printing settings for good layout.')) window.print();
// }
let prntDflt = document.getElementById('prntDflt');
let prntL2 = document.getElementById('prntL2');

let printDfltCnt = document.querySelector('.print-content');
let printL2Cnt = document.querySelector('.print-layout2-content');

prntDflt.addEventListener('click', function(evt) {
    // printL2Cnt.classList.add('print-none');
    // printDfltCnt.classList.remove('print-none');
    // saveAsPDF(evt);
    // printDfltCnt.classList.add('print-none');
    // printL2Cnt.classList.remove('print-none');
    saveAsPDF();
});

prntL2.addEventListener('click', function(evt) {
    // printDfltCnt.classList.add('print-none');
    // printL2Cnt.classList.remove('print-none');
    // saveAsPDF(evt);
    // printL2Cnt.classList.add('print-none');
    // printDfltCnt.classList.remove('print-none');
    
    saveAsPDF();
});

function saveAsPDF(evt) {
    if(confirm("Please, select A4 as printing settings for good layout.")) window.print();
}function saveAsPDF() {
    if(confirm("Please, select A4 as printing settings for good layout.")) window.print();
}