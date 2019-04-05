function synchronize() {
    var jsonData = {
        qnaList: [
          {
            id: 0,
            answer: 'Hello',
            source: 'Custom Editorial',
            questions: [
              'Hi','Hello'
            ],
            metadata: [
              {
                name: 'category',
                value: 'api'
              }
            ]
          }
        ]
    }
      
    var request = new XMLHttpRequest();    

    request.open("PATCH", "https://westus.api.cognitive.microsoft.com/qnamaker/v4.0/knowledgebases/{kbId}", true);                    
    request.setRequestHeader("Ocp-Apim-Subscription-Key", "{key}");
    request.setRequestHeader("Content-type", "application/json");                    
    request.onreadystatechange = function () { 
        //Call a function when the state changes.
        if (request.readyState == 4) {
            alert(request.responseText);
        }
    }

    request.send(JSON.stringify(jsonData));
}