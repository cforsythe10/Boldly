import RNFetchBlob from 'react-native-fetch-blob';
import * as RNFS from 'react-native-fs';

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

export function uploadFile(endpoint, file, path){
  let thisUrl = url + endpoint;

  var body = new FormData();
  body.append('file', file);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', thisUrl);
  xhr.send(body);

/*
  const data = new FormData();

  data.append('file', {
    name: file.fileName,
    type: file.type,
    uri:
      Platform.OS === 'android' ? file.uri : file.uri.replace('file://', ''),
  });

  console.log(data);

  Object.keys(data).forEach(key => {
    data.append(key, data[key]);
  });

  console.log(data);

  return fetch(thisUrl, {
    method:'POST',
    headers: {
      'Content-Type': 'multipart/formdata'
    },
    body: data,
  })
    .then(response => response.json())
    .then(response => {
      console.log('success', response);
    })
    .catch(error => {
      console.log('error: ', error);
    })*/
}