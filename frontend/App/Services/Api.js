let url = 'http://10.0.2.2:4000/';



export function makePost(endpoint, body){
  let thisurl = url + endpoint;
  return fetch(thisurl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: body,
  })
}

export function makeGet(endpoint, body){
	let thisurl = url + endpoint;
	return fetch(thisurl, {
    method: 'GET',
    //finish this if needed
  })
}
