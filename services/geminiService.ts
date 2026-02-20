import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStudyNote = async (specialtyName: string, topicTitle: string): Promise<string> => {
  // To use your own notes, you can provide the content directly here.
  // The structure should follow the Markdown format expected by the application.
  const userGeneratedNote = `
# HERO_START
Title: ${topicTitle}
Subtitle: ${specialtyName} | User Generated Note
Definition: [Your concise 2-sentence definition here]
Stats: 
- Peak Incidence: [Your Value]
- M:F Ratio: [Your Value]
- Mortality: [Your Value]
- Perforation Rate: [Your Value]
- Critical Threshold: [Your Value]
# HERO_END

## Aetiology & Pathophysiology
[Your details on causes and pathophysiology here]

## History
[Your details on history taking here]

## Physical Examination
[Your details on physical examination signs here]

## Investigations
[Your details on lab and imaging investigations here]

## Scoring Systems (if applicable)
[Your scoring system details here]

## Differential Diagnosis
[Your differential diagnosis here]

## Management
[Your management plan here]

## Complications
[Your list of complications here]

## Key Points & Clinical Pearls
[Your list of 10+ key points here]
  `;
  
  return Promise.resolve(userGeneratedNote);
};

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const generateQuiz = async (specialtyName: string, topicTitle: string): Promise<QuizQuestion[]> => {
  try {
    const prompt = `
      Generate 5 high-yield multiple-choice questions (MCQs) for medical students regarding "${topicTitle}" in "${specialtyName}".
      Focus on clinical scenarios, diagnosis, and management relevant to the Nigerian context.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              question: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              answer: { 
                type: Type.STRING,
                description: "The correct option text, must match one of the options exactly."
              },
              explanation: { type: Type.STRING }
            },
            required: ["question", "options", "answer", "explanation"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as QuizQuestion[];
    }
    return [];
  } catch (error) {
    console.error("Gemini Quiz Error:", error);
    throw new Error("Failed to generate quiz.");
  }
};
