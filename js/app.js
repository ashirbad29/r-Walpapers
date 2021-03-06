//initializing Materialize css component
document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems);
});

//Initializing the Walpapers class
const walpapers = new Walpapers();

//caching the dom
const walpaper_section = document.querySelector('.walpapers');

//The Get request
walpapers.getWalpapers().then(Response => {
	show(Response);
});

/*
 * function to pusblish the Walpaper
 */
function show(response) {
	let output = '';

	response.forEach(walpaper => {
		// * Avoiding Any unnecessary posts without image
		if (walpaper.data.thumbnail === 'self') {
			return;
		}

		// * checking if the link is from reddit...
		// * Sometimes the links are from other sites which can cause problems
		if (walpaper.data.url.includes('i.redd.it')) {
			output += `
			<div class="img-container col s12 m12 l6">
				<img src="${walpaper.data.url}" alt="" class="image responsive-img hoverable">
				<a class="waves-effect waves-light btn btn-small" href="https://www.reddit.com${walpaper.data.permalink}" target="_blank">go to post</a>
				<a class="btn waves-effect btn-small" href="${walpaper.data.url}" download><i class="material-icons small">file_download</i></a>
			</div>
			`;
			//* OverWriting the HTML whenever a new walpaper loades
			walpaper_section.innerHTML = output;
		}
	});
}
