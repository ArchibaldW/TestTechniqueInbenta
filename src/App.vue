<template>
    <div id="app">
        <div id="chat">
            <ul id="messages">
                <li v-for="message in messages" :key="message.id">
            <b v-if="message.isBot">Yoda :</b><b v-else>Me :</b>{{ message.body }}
            </li>
        </ul>
        <ChatForm/>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"
import ChatForm from "./components/ChatForm.vue"

export default {
    name: 'App',
    computed: {
        ...mapState(['messages'])
    },
    components: {
		ChatForm
	},
    created(){
        this.$store.dispatch("getConversation");
    }
}
</script>

<style lang="scss">
</style>
