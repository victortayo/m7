
// Mocks for Gemini API

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const generateStudyNote = async (specialty: string, topic: string): Promise<string> => {
  console.log(`Generating study note for ${topic} in ${specialty}`);
  // In a real app, this would be a call to the Gemini API
  // For now, we'll return a mock response based on the topic
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (topic.toLowerCase().includes('appendicitis')) {
    return appendicitisContent;
  }
  if (topic.toLowerCase().includes('intestinal obstruction')) {
    return intestinalObstructionContent;
  }
  
  return defaultContent;
};

const appendicitisContent = `
# HERO_START
Title: Acute Appendicitis
Subtitle: Surgery | General Surgery
# HERO_END

## What You Need to Learn

*   Recognise the classic presentation of acute appendicitis.
*   Understand the pathophysiology and aetiology.
*   Know the key investigations and scoring systems.
*   Outline the management of uncomplicated and complicated appendicitis.

## Definition

Acute appendicitis is acute inflammation of the vermiform appendix, most likely due to obstruction of the lumen of the appendix.

## Epidemiology

*   **Incidence**: ~1 in 1000 people per year.
*   **Lifetime Risk**: 8.6% for males, 6.7% for females.
*   **Age**: Peak incidence in adolescents and young adults (10-19 years).

## Aetiology & Pathophysiology

**AETIOLOGY**

*   Lymphoid hyperplasia (60%) - associated with viral infections (measles, mononucleosis), Crohn\'s disease
*   Faecolith/appendicolith (35%)
*   Fibrotic strictures of the appendix - from previous episodes of inflammation
*   Foreign bodies - fruit seeds, pins, worms (parasites)
*   Tumours - carcinoid tumours, caecal carcinoma

**PATHOPHYSIOLOGY**

Obstruction of appendiceal lumen → bacterial overgrowth → increased intraluminal pressure → venous congestion → ischaemia → necrosis → perforation

## History

**I. HISTORY**

**Presenting Complaint**

*   Abdominal pain

**History of Presenting Complaint**

Onset and progression of pain:

*   Classically, pain starts in the periumbilical region (visceral, dull, poorly localised).
*   Over 12-24 hours, it migrates to the right iliac fossa (RIF) and becomes sharp, constant, and well-localised (somatic pain due to parietal peritoneum irritation).

Associated symptoms:

*   **Anorexia** (loss of appetite) - very common.
*   Nausea and vomiting - usually after the onset of pain.
*   Low-grade fever.
*   Constipation or diarrhoea.

[PEARL] The "hamburger sign" refers to asking a patient with suspected appendicitis if they would like to eat their favourite food (e.g., a hamburger). If they say yes, it makes the diagnosis of appendicitis less likely as anorexia is a key feature.

## Examination

**I. EXAMINATION**

**General Examination**

*   Patient may be lying still in bed, reluctant to move.
*   Low-grade fever (~38°C).
*   Tachycardia.
*   Signs of dehydration (dry mucous membranes, reduced skin turgor).

**Abdominal Examination**

*   **Inspection**: May see reduced abdominal movement on respiration.
*   **Palpation**:
    *   Tenderness over McBurney's point (two-thirds of the way from the umbilicus to the anterior superior iliac spine).
    *   Rebound tenderness and guarding suggest peritoneal irritation.
*   **Special Signs**:
    *   **Rovsing's sign**: Pain in the RIF on palpation of the left iliac fossa (LIF).
    *   **Psoas sign**: Pain on extension of the right hip (suggests retrocaecal appendix).
    *   **Obturator sign**: Pain on internal rotation of the flexed right hip (suggests pelvic appendix).

[WARN] A perforated appendix can lead to generalised peritonitis, with a rigid, board-like abdomen. This is a surgical emergency.

## Investigations

**I. INVESTIGATIONS**

**Bedside**

*   Urine dipstick - to rule out urinary tract infection (UTI). May see sterile pyuria if the inflamed appendix is irritating the ureter.
*   Pregnancy test (in all females of childbearing age) - to rule out ectopic pregnancy.

**Bloods**

*   **FBC**: Raised white cell count (WCC), mainly neutrophils.
*   **CRP**: Raised inflammatory marker.
*   **U&Es**: To assess for dehydration.

**Imaging**

*   **Ultrasound (US)**: Useful in children and pregnant women to avoid radiation. May show a thickened, non-compressible appendix (>6mm diameter).
*   **CT scan**: The gold standard for diagnosis, especially in adults. High sensitivity and specificity. Shows a dilated appendix, wall thickening, and surrounding fat stranding.

**Scoring Systems**

*   **Alvarado score**: A clinical scoring system to risk-stratify patients.
    *   **M**igraton of pain (1)
    *   **A**norexia (1)
    *   **N**ausea/Vomiting (1)
    *   **T**enderness in RIF (2)
    *   **R**ebound tenderness (1)
    *   **E**levated temperature (1)
    *   **L**eukocytosis (2)
    *   **S**hift to the left (1)
*   Score 1-4: Appendicitis unlikely.
*   Score 5-6: Possible appendicitis, consider imaging.
*   Score 7-10: Likely appendicitis, consider surgical consultation.

## Differential Diagnosis

*   **Gynaecological**: Ectopic pregnancy, ovarian cyst rupture/torsion, pelvic inflammatory disease.
*   **Urological**: UTI, renal colic.
*   **Gastrointestinal**: Mesenteric adenitis, gastroenteritis, Meckel's diverticulitis, Crohn's disease exacerbation.

## Management

**I. MANAGEMENT**

**Conservative**

*   IV fluids.
*   Analgesia.
*   IV antibiotics (e.g., co-amoxiclav).
*   "Active observation" - regular clinical assessment.
*   May be appropriate for uncomplicated appendicitis or where surgery is high-risk.

**Surgical**

*   **Laparoscopic appendicectomy**: The standard of care.
    *   Benefits: Less pain, smaller scar, faster recovery.
*   **Open appendicectomy**: Via a gridiron (Lanz) incision in the RIF.
    *   May be required for complex cases or if laparoscopy is unavailable.

**Post-operative**

*   Continue IV antibiotics if perforated.
*   Monitor for complications.

## Complications

*   **Perforation**: Leads to peritonitis.
*   **Appendix mass**: An omental phlegmon that forms around a perforated appendix.
*   **Appendix abscess**: A collection of pus in the RIF.
*   **Surgical site infection (SSI)**.
*   **Adhesive small bowel obstruction**.

## Practice Essay Questions

1.  A 22-year-old male presents with a 24-hour history of abdominal pain, which started in the periumbilical region and has now moved to the right iliac fossa. Discuss the differential diagnosis and outline your management plan.
2.  Describe the pathophysiology of acute appendicitis and explain how this relates to the clinical features of the condition.
3.  Discuss the role of scoring systems and imaging in the diagnosis of acute appendicitis.
`;

const intestinalObstructionContent = `
# HERO_START
Title: Intestinal Obstruction
Subtitle: Surgery | General Surgery
# HERO_END

## What You Need to Learn

*   Identify the cardinal features of intestinal obstruction.
*   Distinguish between small bowel and large bowel obstruction.
*   Know the common causes.
*   Outline the initial management principles.

## Definition

Intestinal obstruction is the failure of passage of intestinal contents. It can be mechanical (a physical blockage) or functional (paralytic ileus).

## Classification

**By Location:**
*   **Small Bowel Obstruction (SBO)**
*   **Large Bowel Obstruction (LBO)**

**By Severity:**
*   **Partial vs. Complete**
*   **Simple vs. Strangulated** (compromised blood supply)

## Aetiology

**SMALL BOWEL OBSTRUCTION**
*   **Adhesions** (60%) - from previous surgery.
*   **Hernias** (20%) - inguinal, femoral, incisional.
*   **Tumours** (5%) - malignant (e.g., small bowel lymphoma) or benign.

**LARGE BOWEL OBSTRUCTION**
*   **Colorectal cancer** (60%).
*   **Volvulus** (15%) - sigmoid, caecal.
*   **Diverticular disease** (10%) - causing strictures.

[NOTE] In the developing world, hernias are a more common cause of SBO.

## History

**CARDINAL FEATURES**
1.  **Abdominal pain**: Colicky, cramping. Becomes constant if strangulation occurs.
2.  **Vomiting**: The earlier the vomiting in relation to the pain, the more proximal the obstruction. Faeculent vomiting (smells like faeces) is a late sign of distal obstruction.
3.  **Abdominal distension**: More pronounced in LBO.
4.  **Absolute constipation**: No flatus or faeces passed.

## Examination

*   **General**: Dehydration, tachycardia.
*   **Abdominal Inspection**: Distension, visible peristalsis, old surgical scars.
*   **Abdominal Palpation**: Generalised tenderness. Localised tenderness may suggest strangulation.
*   **Abdominal Percussion**: Tympanitic (drum-like) sound.
*   **Abdominal Auscultation**: "Tinkling" bowel sounds early on, becoming silent later.
*   **Digital Rectal Exam (DRE)**: Empty rectum. May reveal a rectal tumour.

[DANGER] The presence of fever, tachycardia, and localised tenderness should raise suspicion of strangulation, which is a surgical emergency.

## Investigations

*   **Bloods**: FBC, U&Es, Group & Save. Raised WCC and lactate may indicate strangulation/ischaemia.
*   **Abdominal X-ray (AXR)**:
    *   **SBO**: Dilated small bowel loops (>3cm), central location, valvulae conniventes visible.
    *   **LBO**: Dilated large bowel loops (>6cm), peripheral location, haustra visible.
*   **CT Scan**: The investigation of choice. Can identify the location and cause of obstruction, and detect complications like perforation or ischaemia.

## Management

**"DRIP AND SUCK"**
1.  **IV Fluids ("Drip")**: Resuscitate with IV fluids to correct dehydration and electrolyte imbalance.
2.  **Naso-gastric (NG) Tube ("Suck")**: Decompress the stomach and bowel to relieve vomiting and distension.
3.  **Catheterise**: To monitor urine output.
4.  **Analgesia**: For pain relief.

**Further Management**
*   **Conservative**: Many cases of adhesive SBO can be managed conservatively.
*   **Surgical**:
    *   Emergency laparotomy is required for signs of strangulation or if conservative management fails.
    *   The procedure depends on the cause (e.g., adhesiolysis, hernia repair, tumour resection).

`;

const defaultContent = `
# HERO_START
Title: Topic Not Found
Subtitle: Please check back later.
# HERO_END

## Content is not available for this topic yet.

We are working hard to expand our content library. Please check back soon!
`;


export const generateQuiz = async (specialty: string, topic: string, count: number): Promise<QuizQuestion[]> => {
  console.log(`Generating quiz for ${topic} in ${specialty}`);
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // This is a mock. In a real app, you'd generate questions based on the topic.
  const quiz: QuizQuestion[] = [
    {
      "question": "A 22-year-old male presents with a 12-hour history of abdominal pain that started around his umbilicus and has now moved to the right iliac fossa. What is the most likely diagnosis?",
      "options": [
        "Diverticulitis",
        "Acute Appendicitis",
        "Gastroenteritis",
        "Renal Colic"
      ],
      "answer": "Acute Appendicitis",
      "explanation": "This classic migration of pain from periumbilical to the right iliac fossa is a hallmark feature of acute appendicitis, caused by the initial visceral and subsequent somatic peritoneal irritation."
    },
    {
      "question": "What is Rovsing's sign?",
      "options": [
        "Pain in the RIF on extension of the right hip",
        "Pain in the RIF on palpation of the LIF",
        "Pain on internal rotation of the flexed right hip",
        "Tenderness at two-thirds of the way from the umbilicus to the ASIS"
      ],
      "answer": "Pain in the RIF on palpation of the LIF",
      "explanation": "Rovsing's sign suggests peritoneal irritation. Palpating the left iliac fossa stretches the peritoneum, causing pain at the site of inflammation in the right iliac fossa."
    },
    {
      "question": "Which component is NOT part of the Alvarado score?",
      "options": [
        "Migration of pain",
        "Anorexia",
        "Rebound tenderness",
        "C-Reactive Protein level"
      ],
      "answer": "C-Reactive Protein level",
      "explanation": "The Alvarado score (MANTRELS) uses clinical and basic laboratory findings. It includes Leukocytosis (raised white cells) but not CRP, which is a separate inflammatory marker."
    },
    {
      "question": "What is the primary cause of acute appendicitis?",
      "options": [
        "Bacterial infection",
        "Viral infection",
        "Luminal obstruction",
        "Abdominal trauma"
      ],
      "answer": "Luminal obstruction",
      "explanation": "The pathophysiology of appendicitis begins with obstruction of the narrow appendiceal lumen, most commonly by lymphoid hyperplasia or a faecolith. This leads to a cascade of inflammation."
    },
    {
        "question": "Which imaging modality is most commonly used as the 'gold standard' for diagnosing appendicitis in non-pregnant adults?",
        "options": [
          "Abdominal X-ray",
          "Ultrasound",
          "CT Scan",
          "MRI"
        ],
        "answer": "CT Scan",
        "explanation": "CT scanning has the highest sensitivity and specificity for diagnosing acute appendicitis in adults. It is excellent at identifying the inflamed appendix and alternative causes of abdominal pain."
    },
    {
        "question": "A patient with suspected appendicitis feels pain when the examiner extends the patient's right hip. What is this sign called?",
        "options": [
            "Psoas sign",
            "Obturator sign",
            "Rovsing's sign",
            "Murphy's sign"
        ],
        "answer": "Psoas sign",
        "explanation": "The Psoas sign is elicited by extending the patient's hip or asking them to flex the hip against resistance. Pain suggests the inflamed appendix is in a retrocaecal position, irritating the psoas muscle."
    },
    {
        "question": "What is the most common cause of appendiceal obstruction in children?",
        "options": [
            "Faecolith",
            "Lymphoid hyperplasia",
            "Foreign body",
            "Tumour"
        ],
        "answer": "Lymphoid hyperplasia",
        "explanation": "Lymphoid hyperplasia, often following a viral illness, is the most common cause of luminal obstruction in children and young adults, leading to appendicitis."
    },
    {
        "question": "Which of the following is considered a complication of a perforated appendix?",
        "options": [
            "Mesenteric adenitis",
            "Appendix mass",
            "Meckel's diverticulitis",
            "Intussusception"
        ],
        "answer": "Appendix mass",
        "explanation": "An appendix mass (or phlegmon) is a complication where the omentum and surrounding bowel adhere to the inflamed, often perforated, appendix in an attempt to wall off the infection."
    },
    {
        "question": "In the Alvarado score for appendicitis, how many points are given for tenderness in the right iliac fossa?",
        "options": [
            "1 point",
            "2 points",
            "3 points",
            "0 points"
        ],
        "answer": "2 points",
        "explanation": "Right iliac fossa tenderness is a key sign in appendicitis and is weighted with 2 points in the Alvarado scoring system, the most of any single component."
    },
    {
        "question": "A female patient of childbearing age presents with RIF pain. Which investigation is crucial to perform early?",
        "options": [
            "CT scan",
            "Urine dipstick",
            "Pregnancy test",
            "Abdominal X-ray"
        ],
        "answer": "Pregnancy test",
        "explanation": "It is essential to rule out an ectopic pregnancy, which can present with similar symptoms to appendicitis and is a life-threatening emergency. A pregnancy test is a mandatory first step."
    }
  ];
  
  // Return a random selection of questions
  return quiz.sort(() => 0.5 - Math.random()).slice(0, count);
};
