function Chat_bot() {
    window.watsonAssistantChatOptions = {
        integrationID: "22698e0d-9273-4815-aaa7-e41b1d4d9f59", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "fff86d85-1a9e-4e63-b2e5-22495dbd3b6d", // The ID of your service instance.
        onLoad: async (instance) => {
            await instance.render();
        }
    };

    // Função para limpar os dados ao recarregar a página
    window.addEventListener('beforeunload', function () {
        localStorage.clear(); // Limpa os dados salvos no armazenamento local
    });

    setTimeout(function () {
        const t = document.createElement('script');
        t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
    });
}
