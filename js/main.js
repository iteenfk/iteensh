"use strict"

function S() {
    let input = document.getElementById("in"). value;
    if (!input) {
        alert("何も入力されていません。");
        return;
    }

    let li = document.createElement("li");
    let output = document.getElementById("out");
    li.textContent = input;

    output.appendChild(li);

    document.getElementById("in").value = "";
}

function C(){
    const ul = document.getElementById("out");
    while (ul.firstChild != null) {
        ul.removeChild(ul.firstChild)
        console;
    }
}

function P(){
    window.print()
}