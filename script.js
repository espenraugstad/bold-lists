const listStyleType = document.getElementById("listStyleType");
const input = document.getElementById("input");
const bolden = document.getElementById("bolden");
const res = document.getElementById("res");
const output = document.getElementById("output");

bolden.addEventListener("click", handleBolden);

function handleBolden(){
    let listContent = input.value;
    let list = listContent.split("\n");
    let ol = styleHtml(list);
    res.innerHTML = "";
    res.appendChild(ol);
    output.innerText = ol.outerHTML;
    output.classList.remove("hidden");
}

function styleHtml(list){
    let ol = document.createElement("ol");
    ol.style.fontWeight = "bold";
    ol.style.listStyleType = listStyleType.value;
    for(let item of list){
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.style.fontWeight = "normal";
        span.innerText = item;
        li.appendChild(span);
        ol.appendChild(li);
    }
    return ol;
}