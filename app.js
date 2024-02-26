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
			var searchTerm = document.getElementById("search-term").value;
			var engine = document.querySelector('input[name="engine"]:checked').value;
			if (engine === "google") {
				window.open('https://www.google.com/search?q=' + searchTerm, "_blank");
			} else if (engine === "bing") {
				window.open('https://www.bing.com/search?q=' + searchTerm, "_blank");
			} else if (engine === "youtube") {
				window.open('https://www.youtube.com/results?search_query=' + searchTerm, "_blank");
			} else if (engine === "bingvideo") {
				window.open('https://www.bing.com/videos/search?q=' + searchTerm, "_blank");
			} else if (engine === "ecosia") {
				window.open('https://www.ecosia.org/search?method=index&q=' + searchTerm, "_blank");
			} else if (engine === "URL") {
				window.open(searchTerm, "_blank");
			}
		});
