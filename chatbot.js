function synchronize() {

    var jsonData = {
        "add": {
            "qnaList":[
                {"source": "Custom"},
                {"answer": "Hello"},
                {"questions": ["Hi", "Hello"]}
            ],
        },
        "delete": {
            "sources": ["Custom"]
        },
        "update": {}
    }   

    var request = new XMLHttpRequest();    
    var parameters = {        
        "body": jsonData
    }
    request.open("POST", "https://qnawcfaq.azurewebsites.net/qnamaker/knowledgebases/{kbId}}/generateAnswer", true);                    
    request.setRequestHeader("Authorization", "EndpointKey {key}}");
    request.setRequestHeader("Content-type", "application/json");                    
    request.onreadystatechange = function () { //Call a function when the state changes.
        if (request.readyState == 4 && request.status == 200) {
            alert(request.responseText);
        }
    }

    request.send(JSON.stringify(parameters));
}