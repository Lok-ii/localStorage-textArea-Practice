let textArea = document.querySelector("#myTextArea");

textArea.value = localStorage.getItem("text");
textArea.addEventListener("input", ()=>{
    console.log(textArea.value);
    localStorage.setItem("text", textArea.value);
});