/*
  console.log(Date.now()) // its return milliseconds : 

  const dt = new Date();
  console.log(dt.getTime())
  console.log(dt.getHours())
  console.log(dt.getMinutes())
  console.log(dt.getSeconds())
  console.log(dt.getMilliseconds())


  const dt1 = new Date();
  console.log(dt1)
  dt1.setTime(0)
  console.log(dt1)*/

  
  // calculate the date difference in days : 
  
  let dt2 = new Date(2020,7,25)
  let dt3 = new Date(2020,7,23)
  let n = dt2.getTime() - dt3.getTime();
  n = (n/1000)/3600;
  console.log(`hours : ${n}`)
  
  