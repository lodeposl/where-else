const myArgs = process.argv.slice(2);
const fs= require("fs").promises

const pathRouter = `${__dirname}`

let function_stack={}
let pending_files=[myArgs[0]]
let visited_files=[]

while (pending_files.length>0){
	fs.readFile(pending_files[0])
		.then((data)=>{
			file=data.toString();
			console.log(file)
		}).catch((err)=>{
			console.log()
		})
		
	pending_files=pending_files.slice(1);
}
console.log("done")