console.log("WAIT!!!!");
console.log("This is copyright Palayogo HTML for Cipriyo!!!!");
console.log("WAIT!!!!");
console.log("This is copyright Palayogo HTML for Cipriyo!!!!");
console.log("WAIT!!!!");
console.log("This is copyright Palayogo HTML for Cipriyo!!!!");
console.log("WAIT!!!!");
console.log("This is copyright Palayogo HTML for Cipriyo!!!!");
document.getElementById("search-form").addEventListener("submit", function(event) {
			event.preventDefault();
			var engine = document.querySelector('input[name="engine"]:checked').value;
			if (engine === "fr") {
				window.location.href = "https://cipriyo.github.io/Multi-Search-Engine/index-fr"
			} else if (engine === "en") {
				window.location.href = "https://cipriyo.github.io/Multi-Search-Engine/index-en"
			}
		});
