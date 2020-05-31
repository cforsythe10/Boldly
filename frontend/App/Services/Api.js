import RNFetchBlob from 'react-native-fetch-blob';
import * as RNFS from 'react-native-fs';

let url = 'http://3.133.225.22:4000/';


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

export function makeGet(endpoint, parameter, body){
  let thisurl = url + endpoint + '?' + parameter + '=${' + encodeURIComponent(body) + '}';
	return fetch(thisurl, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
}

export function uploadFile(endpoint, file, path){
  let thisUrl = url + endpoint;

  var body = new FormData();
  body.append('file', file);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', thisUrl);
  xhr.send(body);
}