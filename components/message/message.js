const language = require('@google-cloud/language');

const projectId = 'Your-project-id'
const keyFilename = 'Path-of-your-key-file.json'

const client = new language.LanguageServiceClient({ projectId, keyFilename });

async function analyze() {

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({document: document});
  const sentiment = result.documentSentiment;

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
}

// The text to analyze 
const text = 'Hello, world. I feel very happy because this works!';
analyze(text);