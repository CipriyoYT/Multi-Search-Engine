log("888       888          d8b 888    
888   o   888          Y8P 888    
888  d8b  888              888    
888 d888b 888  8888b.  888 888888 
888d88888b888     "88b 888 888    
88888P Y88888 .d888888 888 888    
8888P   Y8888 888  888 888 Y88b.  
888P     Y888 "Y888888 888  "Y888    ")

log("88888888888 888      d8b              d8b                  
    888     888      Y8P              Y8P                  
    888     888                                            
    888     88888b.  888 .d8888b      888 .d8888b      d8b 
    888     888 "88b 888 88K          888 88K          Y8P 
    888     888  888 888 "Y8888b.     888 "Y8888b.         
    888     888  888 888      X88     888      X88     d8b 
    888     888  888 888  88888P'     888  88888P'     Y8P 
                                                           
                                                           
                                                                ")
								
log(" .d8888b.                                     d8b          888      888        8888888b.           888                                                  888    888 88888888888 888b     d888 888           .d888                       .d8888b.  d8b                  d8b                   
d88P  Y88b                                    Y8P          888      888        888   Y88b          888                                                  888    888     888     8888b   d8888 888          d88P"                       d88P  Y88b Y8P                  Y8P                   
888    888                                                 888      888        888    888          888                                                  888    888     888     88888b.d88888 888          888                         888    888                                            
888         .d88b.  88888b.  888  888 888d888 888  .d88b.  88888b.  888888     888   d88P  8888b.  888  8888b.  888  888  .d88b.   .d88b.   .d88b.      8888888888     888     888Y88888P888 888          888888  .d88b.  888d888     888        888 88888b.  888d888 888 888  888  .d88b.  
888        d88""88b 888 "88b 888  888 888P"   888 d88P"88b 888 "88b 888        8888888P"      "88b 888     "88b 888  888 d88""88b d88P"88b d88""88b     888    888     888     888 Y888P 888 888          888    d88""88b 888P"       888        888 888 "88b 888P"   888 888  888 d88""88b 
888    888 888  888 888  888 888  888 888     888 888  888 888  888 888        888        .d888888 888 .d888888 888  888 888  888 888  888 888  888     888    888     888     888  Y8P  888 888          888    888  888 888         888    888 888 888  888 888     888 888  888 888  888 
Y88b  d88P Y88..88P 888 d88P Y88b 888 888     888 Y88b 888 888  888 Y88b.      888        888  888 888 888  888 Y88b 888 Y88..88P Y88b 888 Y88..88P     888    888     888     888   "   888 888          888    Y88..88P 888         Y88b  d88P 888 888 d88P 888     888 Y88b 888 Y88..88P 
 "Y8888P"   "Y88P"  88888P"   "Y88888 888     888  "Y88888 888  888  "Y888     888        "Y888888 888 "Y888888  "Y88888  "Y88P"   "Y88888  "Y88P"      888    888     888     888       888 88888888     888     "Y88P"  888          "Y8888P"  888 88888P"  888     888  "Y88888  "Y88P"  
                    888           888                  888                                                           888               888                                                                                                           888                       888          
                    888      Y8b d88P             Y8b d88P                                                      Y8b d88P          Y8b d88P                                                                                                           888                  Y8b d88P          
                    888       "Y88P"               "Y88P"                                                        "Y88P"            "Y88P"                                                                                                            888                   "Y88P"               ")
                                  
                                  
                                  
document.getElementById("search-form").addEventListener("submit", function(event) {
			event.preventDefault();
			var searchTerm = document.getElementById("search-term").value;
			var engine = document.querySelector('input[name="engine"]:checked').value;
			if (engine === "google") {
				window.open('https://www.google.com/search?q=' + searchTerm, "_blank");
				location.reload();
			} else if (engine === "bing") {
				window.open('https://www.bing.com/search?q=' + searchTerm, "_blank");
				location.reload();
			} else if (engine === "youtube") {
				window.open('https://www.youtube.com/results?search_query=' + searchTerm, "_blank");
				location.reload();
			} else if (engine === "bingvideo") {
				window.open('https://www.bing.com/videos/search?q=' + searchTerm, "_blank");
				location.reload();
			} else if (engine === "ecosia") {
				window.open('https://www.ecosia.org/search?method=index&q=' + searchTerm, "_blank");
				location.reload();
			} else if (engine === "URL") {
				window.open(searchTerm, "_blank");
				location.reload();
			}
		});
