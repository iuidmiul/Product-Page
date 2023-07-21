let lang_examples = document.getElementsByClassName("languages-examples");
let example_image = document.getElementById("example-image");
let tier_1 = document.getElementById("price-t1");
let tier_2 = document.getElementById("price-t2");
let tier_3 = document.getElementById("price-t3");

for (let i = 0; i < lang_examples.length; i++) {
    lang_examples[i].addEventListener("click", () =>{change_but_active(i)});
    change_but_active(0);
}

function change_but_active(but_active) {
    switch (but_active) {
        case 0:
            lang_examples[0].style.backgroundColor = "white";
            lang_examples[0].style.color = "black";
            lang_examples[1].style.backgroundColor = "transparent";
            lang_examples[1].style.color = "white";
            lang_examples[2].style.backgroundColor = "transparent";
            lang_examples[2].style.color = "white";
            example_image.src = "assets/programming_js.png";
            tier_1.textContent = "$ 99.9";
            tier_2.textContent = "$ 119.9";
            tier_3.textContent = "$ 139.9";
            break;
            
        case 1:
            lang_examples[0].style.backgroundColor = "transparent";
            lang_examples[0].style.color = "white";
            lang_examples[1].style.backgroundColor = "white";
            lang_examples[1].style.color = "black";
            lang_examples[2].style.backgroundColor = "transparent";
            lang_examples[2].style.color = "white";
            example_image.src = "assets/programming_c++.png";
            tier_1.textContent = "$ 79.9";
            tier_2.textContent = "$ 89.9";
            tier_3.textContent = "$ 99.9";
            break;
            
        case 2:
            lang_examples[0].style.backgroundColor = "transparent";
            lang_examples[0].style.color = "white";
            lang_examples[1].style.backgroundColor = "transparent";
            lang_examples[1].style.color = "white";
            lang_examples[2].style.backgroundColor = "white";
            lang_examples[2].style.color = "black";
            example_image.src = "assets/programming_java.png";
            tier_1.textContent = "$ 39.9";
            tier_2.textContent = "$ 59.9";
            tier_3.textContent = "$ 89.9";
            break;
    }
}