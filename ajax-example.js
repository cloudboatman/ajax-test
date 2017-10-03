function runAjaxReq() {
  var httpReq = new XMLHttpRequest(); // Create new XMLHttpRequest()

  if (!httpReq) {
    console.log('Failed to create an XMLHttp instance');
    return false;
  }

  httpReq.onreadystatechange = logResults; //Each time the ready state changes run logResults
  httpReq.open('GET', 'test.json'); //Create the call - Method, URL, async call set to true
  httpReq.send(); //Send the call

  function logResults() {
    if (httpReq.readyState === XMLHttpRequest.DONE) { // When/if the readyState is DONE then begin
      if (httpReq.status === 200) { // If it is a successfull call continue
        var data = JSON.parse(httpReq.responseText);
        for (i = 0; i < data.length; i++) {
          if (data[i]["_id"] === 1) {
            console.log(data[i]);
          }
        }
      } else {
        consle.log('ERROR');
      }
    }
  }
}

document.getElementById('test-ajax').addEventListener('click', runAjaxReq);
