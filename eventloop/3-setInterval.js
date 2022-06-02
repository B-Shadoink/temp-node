setInterval(()=>{
    console.log('hello world')
}, 2000) // this gets offloaded because its async so it runs last

console.log(`i will run first`) //this runs first
// process stays alive unless you kill it or unexpected error happens
