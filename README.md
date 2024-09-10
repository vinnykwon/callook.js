# callook.js
Web-API for [callook.info](https://callook.info/) An API interface for various ham radio callsign lookup

## Example
```JavaScript
async function main() {
	const { Callook } = require("./callook.js")
	const callook = new Callook()
	const callSignInfo = await callook.getCallSignInfo("callSign")
	console.log(callSignInfo)
}

main()
```
