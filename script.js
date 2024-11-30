document.onkeydown = (e) => {
  if (e.key.length === 1) {
    e.preventDefault();
    document.getElementById("prompt").textContent += e.key;
  }
  if (e.key === "Backspace" && document.getElementById("prompt").textContent.length > 15) {
    e.preventDefault();
    document.getElementById("prompt").textContent = document.getElementById("prompt").textContent.slice(0, -1);
  }
  if (e.key === "Enter") {
    // AAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
    e.preventDefault();
    let prompt = document.createElement("span")
    let cursor = document.createElement("div")
    document.getElementById("prompt").appendChild(document.createElement("br"));
    document.getElementById("cursor").remove();
    cursor.id = "cursor";
    prompt.textContent = document.getElementById("prompt").textContent.slice(0, 15);
    document.getElementById("prompt").id = "";
    prompt.id = "prompt";
    document.querySelector("body").appendChild(prompt);
    document.querySelector("body").appendChild(cursor);
  }
}
