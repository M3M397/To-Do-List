const inputBox = document.getElementById('taskadd');
const listContain = document.getElementById('list-contain');


function addTask () {
if (inputBox.value === '') {
	alert("Write something to add!")
}else{
	let li = document.createElement("li");
	li.innerHTML = inputBox.value;
	listContain.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();

}

listContain.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
	}
}, false);


function saveData() {
	localStorage.setItem("data",listContain.innerHTML);
}

function showData () {
	listContain.innerHTML = localStorage.getItem("data");
}

showData ();