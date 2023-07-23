

let saparate = document.querySelector('p')
saparate.innerHTML = 
saparate.innerHTML.split(/\.[^.|<]/).join('<p></p>') + '</p>'