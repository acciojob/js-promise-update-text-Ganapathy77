	const promise = new Promise((resolve,reject) => {
		setTimeout(()=> {
			resolve("Hello, world!");
		}, 1000)
	})

promise.then((data)=>{
	console.log(data)
})