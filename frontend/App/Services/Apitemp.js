let url = 'http://localhost:4000/';



export function makePost(endpoint, body){
  let thisurl = url + endpoint;
  console.log(endpoint);
  console.log(body);
  return fetch(thisurl, {
  	method: 'POST',
  	headers: {
  		Accept: 'application/json',
  		'Content-Type': 'application/json'
  	},
  	body: body,
  })
  .then((response) => { console.log('test'); response.json(); })
    .then((json) => {
      console.log(json);
      return JSON.parse(json);
    })
    .catch((error) => {
    	console.log('hit');
      console.error(error);
    });
}

export function makeGet(endpoint, body){
	let thisurl = url + endpoint;
	return fetch(thisurl, body)
	.then((response) => response.json())
    	.then((json) => {
      		return JSON.parse(json);
    	})
    .catch((error) => {
      console.error(error);
    });
}
