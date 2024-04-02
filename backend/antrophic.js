import Anthropic from '@anthropic-ai/sdk';

const api_key = process.env.ANTHROPIC_KEY
const anthropic = new Anthropic({
    apiKey: api_key, // defaults to process.env["ANTHROPIC_API_KEY"]
  });

function getfirstprompt(destination, interest, budget){
    return `I am planning a trip to ${destination} and have a budget of rupees ${budget} and I am interested in ${interest}. Create a detail travel itinerari including transportation and dinning options that maximize my experience within budget and aligns with my interest. Provide day by day plan including any special consideration or preferences`
}
const firstPromt= getfirstprompt("banglore", "fort", "5000")
 async function createMessage(userinput){
    console.log(1)
    const response = await anthropic.messages.create({
        model: 'claude-2.1',
        max_tokens: 1024,
        messages: [
          {"role": "user", "content": userinput}
        ]
      });
      console.log(123)
      console.log("create message response ", response);
 }


var msg =await createMessage(firstPromt);