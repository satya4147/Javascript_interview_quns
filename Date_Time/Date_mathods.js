
  const dt = new Date();
  console.log(dt)
  console.log(dt.getFullYear())
  console.log(dt.getMonth())
  console.log(dt.getDay())
  console.log(dt.getDate())
  console.log(dt.getHours())
  console.log(dt.getMinutes())
  console.log(dt.getMilliseconds())


  // set Mathod : 
  //date.setFullYear(year,month.day) 

  const dt1 = new Date()
  console.log(dt)
dt1.setFullYear(2021)
console.log(dt1)
  dt1.setMonth(7);
  console.log(dt1)
  dt1.setDate(23)
  console.log(dt1)


  // Date.parse() its return milliseconds :

  const dparse = Date.parse("2020-08-23")
  console.log(dparse);