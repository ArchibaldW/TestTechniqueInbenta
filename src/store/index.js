import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        messages: [],
    },
    actions: {
        // Method for retrieve messages from localStorage
        getConversation({state}){
            // Use the line below for clearing the conversation
            // localStorage.setItem('conversation', JSON.stringify([])) 
            var conversation = localStorage.getItem('conversation');
            if (conversation){
                state.messages = JSON.parse(conversation)
            }
        },

        // Method for pushing an user message to the messages array and save to localStorage
        messageFromUser({state}, message){
            var userMessage = {body: message, isBot: false, id:state.messages.length}
            state.messages.push(userMessage);
            localStorage.setItem('conversation', JSON.stringify(state.messages))
        },

        // Method for pushing a bot response to the messages array and save to localStorage
        responseFromBot({state}, response){
            var botReponse = {body: response, isBot: true, id:state.messages.length}
            state.messages.push(botReponse);
            localStorage.setItem('conversation', JSON.stringify(state.messages))
        },
    },
})
