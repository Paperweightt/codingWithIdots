import { system } from "@minecraft/server"
const delay = 5

// runs repeatedly
system.runInterval(()=>{

},delay)


// run once after a delay
system.runTimeout(()=>{

},delay)

system.run(()=>{

})

//system.currentTick: int | returns current world tick 

//clearRun(runId: number): void

