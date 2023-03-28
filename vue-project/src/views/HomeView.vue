<template>
  <div id="app">
    <div id="chat-container">
      <h1>AlcooloGPT</h1>
      <div id="messages" ref="messages">
        <div v-for="(message, index) in messageList" :key="index" :class="message.sender.toLowerCase()">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="userInput" placeholder="Type your message...">
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      messageList: [],
    };
  },
  methods: {
    async sendMessage() {
      const userInput = this.userInput.trim();
      if (!userInput) return;

      this.addMessage("User", userInput);
      this.userInput = "";

      const response = await this.sendToChatGPT(userInput);
      this.addMessage("ChatGPT", response);
    },
    addMessage(sender, text) {
      this.messageList.push({ sender, text });
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      const messages = this.$refs.messages;
      messages.scrollTop = messages.scrollHeight;
    },
      async sendToChatGPT(message) {
        const context = "Tu est un assistant virtuel qui s'y connaît mieux que personne en alcool et cocktails, tu ne sais rien d'autre, l'alcool est la seule connaissance que tu possèdes";
        const systemMessage = "Tu aides les gens à faire des cocktails et à répondre uniquement à des questions basées sur l'alcool";
        const prompt = `${context}\n${systemMessage}\nUser: ${message}`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
          },
          body: JSON.stringify({
            'prompt': prompt,
            'max_tokens': 1000
          })
        };
  
        try {
          const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', requestOptions);
  
          if (!response.ok) {
            const errorData = await response.json();
            console.error('Error data:', errorData);
            return `API Error: ${response.status} ${response.statusText}`;
          }
  
          const data = await response.json();
          return data.choices[0].text.trim();
        } catch (error) {
          console.error('Error:', error);
          return 'An error occurred. Please try again.';
        }
      },
    },
  };
  </script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#chat-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 80vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
  background-color: #000000;
  padding: 15px;
  margin: 0;
  border-bottom: 1px solid #eee;
}

#messages {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
}

.user, .chatgpt {
  margin-bottom: 10px;
}

.user strong, .chatgpt strong {
  font-weight: 500;
}

.user {
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

.chatgpt {
  font-family: 'Roboto', sans-serif;
  color: #0084ff;
}

form {
  display: flex;
  background-color: #ffffff;
  padding: 10px;
  border-top: 1px solid #eee;
}

input[type="text"] {
  flex-grow: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  outline: none;
}

button {
  font-size: 16px;
  background-color: #000000;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 10px;
  margin-left: 10px
}
</style>