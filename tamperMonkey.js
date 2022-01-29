// ==UserScript==
// @name         Test
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://icampus.3villagecsd.k12.ny.us/campus/*
// @run-at       document-idle
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ny.us
// @grant        none
// ==/UserScript==

var myInterval = setInterval(myFunction, 10);

function myFunction() {
    var iFrame = document.getElementById('main-workspace');

    if(iFrame) {
        var tableRows = iFrame.contentWindow.document.getElementsByClassName('table__row');
        for (const tableRow of tableRows) {
            if (tableRow.textContent == "0808Thursday 01/20/2022UnexcusedUnexcused") {
                tableRow.remove();
            }
            if (tableRow.textContent == '0808Multivariable Calculus and LinUnexcusedAbsentUnexcused') {
                tableRow.remove();
            }
        }

        var tableCells = iFrame.contentWindow.document.getElementsByClassName('table__cell');
        for (const tableCell of tableCells) {
            if (tableCell.innerText == '2') {
                tableCell.innerText = 1;
            }
            if (tableCell.innerHTML == '5') {
                tableCell.innerHTML = 4;
            }
            if (tableCell.innerText == '26') {
                tableCell.innerHTML = "<b _ngcontent-abg-c667=\"\">25</b>";
            }
        }
    }
}
