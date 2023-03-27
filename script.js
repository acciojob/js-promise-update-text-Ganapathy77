//your JS code here. If required.
function test() {
	const promise = new Promise((resolve,reject) => {
		setTimeOut(()=> {
			resolve("Hello, world!");
		}, 1000)
	})
}

test().then((data)=>{
	console.log(data)
})
