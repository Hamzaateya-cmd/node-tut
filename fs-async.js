const { readFile , writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt' , 'utf8',(err, result) =>{
  if(err){
    console.log(err)
    return
  }
  const file1 = result
  readFile('./content/second.txt','utf8',(err,result) =>{
    if(err){
      console.log(err)
      return
    }
    const file2 = result
    writeFile('./content/result-async.txt',`here is the result
    ${file1}, ${file2}`,(err,result) =>{
      if(err){
        console.log(err)
        return
      }
      console.log('done with this task')
    })
  })
})
console.log('starting next task')
