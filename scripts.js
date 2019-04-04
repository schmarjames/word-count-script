var WordCounter = (function () {
  var searchWord;
  var url;
  var requestMethod = 'GET';

  var makeRequest = function() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        console.log('finished', this.responseXML );

    }

    xhr.open(requestMethod, url);
    xhr.setRequestHeader('content-type', 'text/xml');
    xhr.responseType = 'document';
    xhr.send();

    var promiseObj = new Promise(function(resolve, reject) {

      /*xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
           if (xhr.status === 200){
              console.log("xhr done successfully");
              var resp = xhr.responseText;
              var respJson = JSON.parse(resp);
              resolve(respJson);
           } else {
              reject(xhr.status);
              console.log("xhr failed");
           }
        } else {
           console.log("xhr processing going on");
        }
      }*/
    });

    //return promiseObj;
  };

  var init = function (options) {
    searchWord = options.word;
    url = options.url;

    // create ajax object
    return makeRequest();
  }

  return {
    init: init
  }
})();
