import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  const idea = req.body.idea || "";
  if (idea.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid idea",
      },
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt("problem", idea),
      temperature: 0.6,
      max_tokens: 2700,
      top_p: 1,
      frequency_penalty: 0.8,
      presence_penalty: 0,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "An error occurred during your request.",
        },
      });
    }
  }
}

function generatePrompt(field, idea) {
  return `Generate the lean canvas for the following idea: ${idea}\n Give me the response in  the following JSON format:${JSON.stringify(
    LEAN_CANVAS_OBJECT
  )}`;
}

export const LEAN_CANVAS_OBJECT = {
  name: "Project Name",
  customerSegments: ["Customer segment 1", "Customer segment 2"],
  customerPains: ["Pain point 1", "Pain point 2", "Pain point 3"],
  uniqueValueProposition: "Unique value proposition",
  keyMetrics: ["metric 1", "metric 2", "metric n"],
  existingAlternatives: ["alternative 1", "alternative 2", "alternative n"],
  channels: ["Channel 1", "Channel 2"],
  unfairAdvantages: ["Unfair advantage 1", "Unfair advantage 2"],
  costStructure: ["cost 1", "cost 2"],
  revenueStreams: ["Revenue stream 1", "Revenue stream 2"],
};
export const LEAN_CANVAS_COLORS = {
  name: "#4d4d4d",
  customerSegments: "#f7e2d2",
  customerPains: "#c5e7f9",
  uniqueValueProposition: "#e5cef4",
  keyMetrics: "#dce4f9",
  existingAlternatives: "#c5e7f9",
  channels: "#f7d8d5",
  unfairAdvantages: "#f9e1ee",
  costStructure: "#f8f0d1",
  revenueStreams: "#f9f7d2",
};
