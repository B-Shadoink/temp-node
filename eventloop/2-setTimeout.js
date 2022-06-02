//started oparating system process
console.log('first')
setTimeout(()=>{
    console.log('second')
}, 0)  //setTimeout is async so it gets offloaded and get put at the end of the list
console.log('third')
// completed and exited operating system process