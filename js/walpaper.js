//Thia class will be fetching data from reddit
class Walpapers {
	constructor() {
		this.url = 'https://www.reddit.com/r/wallpapers.json';
	}

	async getWalpapers() {
		const Response = await fetch('https://www.reddit.com/r/wallpapers.json');
		const data = await Response.json();
		return data.data.children; //it returns an array
	}
}
