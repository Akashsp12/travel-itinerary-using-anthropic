const Anthropic = require("@anthropic-ai/sdk");


const api_key = process.env.ANTHROPIC_KEY;
const anthropic = new Anthropic({
  apiKey: api_key, 
});

async function createMessage(userinput) {
  const response = await anthropic.messages.create({
    model: "claude-2.1",
    max_tokens: 1024,
    messages: [{ role: "user", content: userinput }],
  });

  return response;
}

module.exports = createMessage;
