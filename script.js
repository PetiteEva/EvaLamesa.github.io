function init() {
    document.getElementById("flow0").src = "flower1.png";
    document.getElementById("flow1").src = "flower1.png";
    document.getElementById("flow2").src = "flower1.png";
    document.getElementById("flow3").src = "flower1.png";
    document.getElementById("flow4").src = "flower1.png";


    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";

    document.getElementById("empty").innerHTML = "<div><p>Your are great!</p></div>";

    let img = document.createElement("img");
    img.src = "flower2.png";

    document.getElementById("new_element").appendChild(img);

    let spans = document.getElementById('rainbow').children;

    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }


    var changeSrc = (event) => {
        if (event.target.src) {
            let index = event.target.src.search(/flower\d\.png$/);
            switch (event.target.src.slice(index)) {
                case 'flower1.png':
                    event.target.src = 'flower2.png';
                    break;
                case 'flower2.png':
                    event.target.src = 'flower1.png';
                    break;
            }
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);
}

function addItem() {
    let list = document.createElement("li");
    let value = document.getElementById("testform").value;
    list.appendChild(document.createTextNode(value));
    let vari = document.getElementById("itemlist").appendChild(list);
    let check1 = document.getElementById("checkbox1");
    if (check1.checked) {
        vari.style.color = "red";
    }
    let check2 = document.getElementById("checkbox2");
    if (check2.checked) {
        vari.style.textDecoration = "underline";
    }
}

function removeItem() {
    let value=document.getElementById("removeitem").value;
    //let num=document.getElementById("itemlist").childElementCount;
    if (/^[0-9]+$/.test(value)) {
        //if (index <= length && index > 0)
        //{
        let rmItem = document.getElementById("itemlist").getElementsByTagName("li")[value - 1];
        document.getElementById("itemlist").removeChild(rmItem);
        document.getElementById("removeitem").max = (parseInt(document.getElementById('removeitem').getAttribute("max")) - 1);

    }
}