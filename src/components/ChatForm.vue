<script>
import axios from "axios"
export default {
    name: 'ChatForm',
    data() {
        return {
            message : null,
            response: null,
            writing: false,
        }
    },
    methods: {
        sendMessage() {
            if (this.message){
                this.$store.dispatch("messageFromUser", this.message);
                this.$emit("message",this.message)
                this.writing = true;
                axios.post("https://test-technique-inbenta-backend.herokuapp.com/", {'message': this.message}, {withCredentials: true})
                    .then(response => {
                        this.response = response.data;
                        this.$store.dispatch("responseFromBot", this.response);
                    })
                    .catch(error => console.log(error))
                    .finally(()=> this.writing = false);
                this.message="";
            }
        }
    }
}
</script>

<template>
    <div>
        <p v-show="writing"><span>YodaBot is writing...</span>
        <form id="messageForm" @submit.prevent="sendMessage" novalidate="true">
            <p>
               <input type="text" name="message" id="message" v-model="message" required><input type="submit" value="Send!"> 
            </p>
        </form>
    </div>
</template>

<style lang="scss">

</style>