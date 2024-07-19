function onLoadFunction() {
    let functionId = "F-0010";
    const queryString = window.location.search;
    if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        functionId = urlParams.get('function');
    }
    initChatUx(functionId);
}

function initChatUx(functionId) {

    //functionIdのチェック
        //存在しない場合はデフォへ

    if(window.chatux!=null) {
        window.chatux.dispose();
    }
    window.chatux = new ChatUx();

    const opt = {
        bot: {
            wakeupText: 'CLIENT-START-MESSAGE:t66FBb9BAcD45Fg231eAEA0730d7565D9',
            botPhoto: 'OIG4.png',
            widget: {
               sendLabel: '▷',//label for SEND button
               placeHolder: 'Feel free to ask questions.'//default caption for input box
            }
        },
        api: {
            // URL of chat server
            endpoint: 'http://localhost:8080/GenericChatApp/chat',
            // HTTP METHOD
            method: 'POST',
            // DATA TYPE
            dataType: 'json',
            // escapeUserInput true:Escaping HTML tags in user input text when submitting to the server. default is false.
            escapeUserInput: true,

            // 追加
            params: {
                conversationId: Math.floor(Math.random() * 100000000).toString(),
                functionId: functionId
            }

        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        window: {
            title: 'My chat',
            infoUrl: 'https://github.com/riversun/chatux'
        }
    };

    //initialize
    chatux.init(opt);
    chatux.start(true);
}


 
