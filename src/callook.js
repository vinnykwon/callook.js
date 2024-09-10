class Callook {
	constructor() {
		this.api = "https://callook.info"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getCallSignInfo(callSign) {
		const response = await fetch(
			`${this.api}/${callSign}/json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {Callook}
