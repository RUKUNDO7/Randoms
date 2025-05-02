// argv
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env.COMPUTERNAME);

//pid - id of the nodejs process
console.log(process.pid);

//cwd() - current working directory
console.log(process.cwd());

//title - title of the process
console.log(process.title);

//memoryUsage() - memory usage of the process
console.log(process.memoryUsage());

//uptime() - uptime of the process in seconds
console.log(process.uptime());

process.on('exit', (code) =>{
    console.log(`About to exit with code: ${code}`);
})
//exit() - exit the process with a code
process.exit(0);

console.log('Hello from after exit'); // This will not be executed