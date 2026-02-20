import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStudyNote = async (specialtyName: string, topicTitle: string): Promise<string> => {
  try {
    const prompt = `
      You are a world-class senior medical educator specializing in the Nigerian clinical curriculum. 
      Create a high-yield, comprehensive, and professional study note for: "${topicTitle}" within "${specialtyName}".

      Follow this EXACT structure using Markdown:

      # HERO_START
      Title: ${topicTitle}
      Subtitle: ${specialtyName} | Emergency | High Yield
      Definition: [Provide a concise 2-sentence definition]
      Stats: 
      - Peak Incidence: [Value]
      - M:F Ratio: [Value]
      - Mortality: [Value]
      - Perforation Rate: [Value]
      - Critical Threshold: [Value]
      # HERO_END

      ## Aetiology & Pathophysiology
      [Detail causes and a step-by-step pathophysiological cascade]

      ## History
      [Focus on cardinal symptoms, migration of pain, and variants]
      > [INFO] Note on variant positions (e.g., retrocaecal, pelvic).

      ## Physical Examination
      [Detail specific signs like McBurney's, Rovsing's, etc.]

      ## Investigations
      [Laboratory and Imaging]
      | Feature | Description/Points |
      | :--- | :--- |
      | FBC | Leucocytosis with shift to left |
      | CRP | Elevated |
      | USS | Non-compressible appendix >6mm |

      ## Scoring Systems (if applicable, e.g., Alvarado)
      [Include a scoring table if relevant]

      ## Differential Diagnosis
      [Categorize into General, Gynaecological, and Paediatric]

      ## Management
      [Step-by-step: Initial resuscitation -> Definitive surgical or conservative paths]

      ## Complications
      [Early and Late]

      ## Key Points & Clinical Pearls
      [List of 10+ must-know points]
      > [PEARL] A classic surgical aphorism or high-yield clinical tip.

      IMPORTANT: Use bold text for clinical signs and gold standard tests. 
      Tailor everything to the Nigerian context (e.g., endemic diseases, local first-line antibiotics).
      Keep it very professional, organized, and clean.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a professional medical reference creator. Your output is highly structured, using clear headers, tables, and callouts to maximize readability and retention for clinical students.",
      }
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate study note.");
  }
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