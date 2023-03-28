<template>
  <div id="app">
    <div id="chat-container">
      <h1>AlcooloGPT</h1>
      <div id="messages" ref="messages">
        <div v-for="(message, index) in messageList" :key="index" :class="message.sender.toLowerCase()">
          <strong>{{ message.sender }}:</strong> {{ message.text }}
        </div>
      </div>
      <div id="preset-questions" class="p-4">
        <button
          v-for="(question, index) in randomQuestions"
          :key="index"
          @click="insertPresetQuestion(question)"
          class="bg-gray-200 text-black py-2 px-4 mr-2 mb-2 rounded-md"
        >
          {{ question }}
        </button>
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
      allQuestions: [
      "Quel est le meilleur cocktail ?",
      "Comment préparer un mojito ?",
      "Quelle est la différence entre whisky et bourbon ?",
      "Quel est le meilleur verre pour servir un martini ?",
      "Comment faire un cocktail sans alcool ?",
      "Quelle est la meilleure marque de vodka ?",
      "Comment préparer un margarita ?",
      "Qu'est-ce qu'un cocktail old fashioned ?",
      "Quelle est la différence entre gin et vodka ?",
      "Qu'est-ce qu'un cocktail Long Island Iced Tea ?",
      "Quels sont les ingrédients d'un Bloody Mary ?",
      "Comment préparer un cosmopolitain ?",
      "Qu'est-ce qu'un cocktail sour ?",
      "Quelle est la différence entre rhum blanc et rhum ambré ?",
      "Comment préparer un gin tonic ?",
      "Quelle est la meilleure marque de tequila ?",
      "Qu'est-ce qu'un cocktail spritz ?",
      "Comment préparer un Negroni ?",
      "Quelle est la différence entre champagne et prosecco ?",
      "Comment préparer un Irish Coffee ?",
      "Qu'est-ce qu'un cocktail Mimosa ?",
      "Quelle est la meilleure marque de rhum ?",
      "Comment préparer un Pina Colada ?",
      "Qu'est-ce qu'un cocktail Manhattan ?",
      "Quelle est la différence entre Cointreau et Grand Marnier ?",
      "Comment préparer un espresso martini ?",
      "Qu'est-ce qu'un cocktail Moscow Mule ?",
      "Quelle est la meilleure marque de gin ?",
      "Comment préparer un Caipirinha ?",
      "Qu'est-ce qu'un cocktail Mai Tai ?",
      "Quelle est la différence entre cognac et armagnac ?",
      "Comment préparer un White Russian ?",
      "Qu'est-ce qu'un cocktail Sazerac ?",
      "Quelle est la meilleure marque de whisky ?",
      "Comment préparer un Aperol Spritz ?",
      "Qu'est-ce qu'un cocktail Tom Collins ?",
      "Quelle est la différence entre vermouth sec et vermouth rouge ?",
      "Comment préparer un Dark 'N' Stormy ?",
      "Qu'est-ce qu'un cocktail French 75 ?",
      "Quelle est la meilleure marque de champagne ?",
      "Comment préparer un Sex on the Beach ?",
      "Qu'est-ce qu'un cocktail Daiquiri ?",
      "Quelle est la différence entre mezcal et tequila ?",
      "Comment préparer un Paloma ?",
      "Qu'est-ce qu'un cocktail Sidecar ?",
      "Quelle est la meilleure marque de cognac ?",
      "Comment préparer un Vieux Carré ?",
      "Qu'est-ce qu'un cocktail Whiskey Sour ?",
      "Quelle est la différence entre lager et ale ?",
      "Comment préparer un Cuba Libre ?",
      "Qu'est-ce qu'un cocktail Pisco Sour ?",
      "Quelle est la meilleure marque de bière ?",
      "Comment préparer un Mojito Royal ?",
      "Qu'est-ce qu'un cocktail Tequila Sunrise ?",
      "Quelle est la différence entre vin rouge et vin blanc ?",
      "Comment préparer un Kir Royal ?",
      "Qu'est-ce qu'un cocktail Bellini ?",
      ],
      randomQuestions: [],
    };
  },
  methods: {
    scrollToBottom() {
      const messages = this.$refs.messages;
      messages.scrollTop = messages.scrollHeight;
    },
    addMessage(sender, text) {
    this.messageList.push({ sender, text });
    this.$nextTick(() => {
      this.scrollToBottom();
    });
  },
      async sendToChatGPT(message) {
        const context = "Tu est un assistant virtuel qui s'y connaît mieux que personne en alcool et cocktails, tu ne sais rien d'autre, l'alcool est la seule connaissance que tu possèdes.";
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
    insertPresetQuestion(question) {
      this.userInput = question;
    },
    generateRandomQuestions() {
      const questionCount = 2;
      this.randomQuestions = [];
      const shuffledQuestions = this.allQuestions.sort(() => Math.random() - 0.5);

      for (let i = 0; i < questionCount && i < shuffledQuestions.length; i++) {
        this.randomQuestions.push(shuffledQuestions[i]);
      }
    },
    async sendMessage() {
      const userInput = this.userInput.trim();
      if (!userInput) return;

      this.addMessage("User ", userInput);
      this.userInput = "";

      const response = await this.sendToChatGPT(userInput);
      this.addMessage("ChatGPT ", response);

      this.generateRandomQuestions();
    },
  },
  mounted() {
    this.generateRandomQuestions();
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
  margin-bottom: 20px;
}

.user strong, .chatgpt strong {
  font-weight: 600;
}

.user {
  font-family: 'Roboto', sans-serif;
  color: #000000;
}

.chatgpt {
  font-family: 'Roboto', sans-serif;;
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

