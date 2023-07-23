
  // let item = document.querySelectorAll('.item')
  // item.forEach((items)=>{
  //   items.addEventListener("click", ()=>{
  //     console.log('Your clicked : ' + items.innerText)
  //   })
  // })

//(or)
  const app = document.querySelector('.to_do')
  app.addEventListener("click",(e)=>{
    if(e.target && e.target.classList.contains("item")){
      console.log('your clicked : ' + e.target.innerText) 
    }
  })