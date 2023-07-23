let para = document.querySelector("p");
para.innerHTML = para.innerHTML
.split(" ")
.map((word)=>{
    return word.length>8
    ?`<span style="background-color:yellow">${word}</span>`:word
})
.join(" ");


  let link = document.createElement('a')
  link.href = 'https://fakestoreapi.com/products/1'
  link.innerText = 'FakeSotreApi'

    document.body.appendChild(link)

