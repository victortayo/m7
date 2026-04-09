
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

export const appendicitisSummary = `
## KEY POINTS — ACUTE APPENDICITIS

*   **Definition**: Inflammation of the vermiform appendix. A surgical emergency.
*   **Peak incidence**: 2nd-3rd decade of life.
*   **Classic presentation**: Migratory pain (periumbilical → RIF), anorexia, nausea/vomiting, low-grade fever.
*   **Examination**: Tenderness at McBurney's point, guarding, rebound, Rovsing's sign.
*   **Key signs by position**: Psoas sign → retrocaecal; Obturator sign → pelvic; Dunphy's sign → retrocaecal.
*   **Investigations**: FBC (leucocytosis), urinalysis, USS (first-line imaging), CT if equivocal.
*   **Alvarado score**: 7-10 = likely appendicitis; 5-6 = equivocal; <5 = unlikely.
*   **Definitive treatment**: Appendicectomy (open or laparoscopic).
*   **Appendiceal mass**: Manage conservatively with Ochsner-Sherren regimen; interval appendicectomy at 6-8 weeks.
*   **Perforation complications**: Peritonitis, abscess, portal pyaemia — requires urgent surgery.
*   **Always send appendix for histology post-operatively**.
`;

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

## Relevant Anatomy and Basic Science

The vermiform appendix is a blind-ended, finger-like projection arising from the posteromedial wall of the caecum, approximately 2 cm below the ileocaecal valve. Key anatomical facts of clinical relevance include:

* Length: typically 6-9 cm, though highly variable.
* Position: the base is constant, but the tip may be retrocaecal (most common), pelvic, pre-ileal, post-ileal, or paracolic, which explains the wide variation in clinical presentation.
* The appendix has its own mesentery (mesoappendix) carrying the appendicular artery, a branch of the ileocolic artery.
* It contains lymphoid tissue and is innervated by visceral afferents (T10), explaining the initial periumbilical pain of appendicitis.

![Figure 1: Anatomy of the Vermiform Appendix and Caecum. Illustration showing the relationship of the vermiform appendix to the caecum, terminal ileum, and mesoappendix, including the appendicular artery (Gray's Anatomy plate, public domain). The appendix arises from the posteromedial caecal wall at the convergence of the taeniae coli. License: Public Domain (Henry Vandyke Carter, Gray's Anatomy, 1918) | Source: Wikimedia Commons — https://commons.wikimedia.org/wiki/File:Gray1043.png](https://upload.wikimedia.org/wikipedia/commons/5/5c/Gray1043.png)

## Definition

Acute appendicitis is defined as acute inflammation of the vermiform appendix. It is the most common surgical emergency worldwide, requiring urgent assessment and timely intervention to prevent potentially life-threatening complications.

## Epidemiology

*   Acute appendicitis is the most common cause of an acute surgical abdomen.
*   Lifetime risk: approximately 7-8% in the general population.
*   Most common in the 2nd and 3rd decades of life, though it can occur at any age.
*   Slightly more common in males than females (M:F ratio approximately 1.4:1).
*   Less common in populations with high dietary fibre intake.
*   In children and the elderly, presentation is often atypical, leading to delayed diagnosis and higher rates of perforation.

## Aetiology and Risk Factors

The primary pathological event in most cases of acute appendicitis is luminal obstruction of the appendix, which leads to increased intraluminal pressure, bacterial overgrowth, ischaemia, and ultimately inflammation.

**Causes of Luminal Obstruction**

*   **Faecolith (hardened faecal matter)** — the most common cause.
*   **Lymphoid hyperplasia** — common in children and young adults, often following viral infection.
*   **Foreign bodies**.
*   **Parasites** (e.g., Enterobius vermicularis, Ascaris).
*   **Tumours** (e.g., carcinoid, adenocarcinoma) — more relevant in the elderly.
*   **Calculi**.

**Risk Factors**

*   Low dietary fibre and high refined carbohydrate intake.
*   Family history of appendicitis.
*   Recurrent episodes of similar pain in the past (suggesting recurrent appendicitis).
*   Previous abdominal surgery (adhesions may contribute to obstruction).
*   Age: extremes of age associated with atypical presentation and higher complication rates.
*   Immunosuppression and diabetes mellitus (higher risk of perforation).

## Pathophysiology

Understanding the pathophysiological sequence is essential for predicting clinical features and complications:

1.  Luminal obstruction raises intraluminal pressure within the appendix.
2.  Venous and lymphatic drainage is compromised, leading to oedema and mucosal ischaemia.
3.  Bacterial overgrowth ensues (commonly E. coli, Bacteroides, Streptococcus, Klebsiella).
4.  Transmural inflammation develops — at this stage, the parietal peritoneum becomes irritated, shifting pain to the right iliac fossa.
5.  Arterial occlusion leads to gangrene and eventually perforation, resulting in localised abscess formation or generalised peritonitis.

[PEARL] The shift from visceral (periumbilical) to somatic (RIF) pain reflects the progression from mucosal distension to parietal peritoneal irritation — a hallmark of appendicitis, though seen in only about 50-60% of cases.

## Clinical Features

The classic presentation is well recognised, but clinicians must be alert to atypical features, particularly in children, the elderly, pregnant women, and those with a pelvic or retrocaecal appendix.

**Pain (Key Feature)**
*   **Onset**: typically gradual.
*   **Initial character**: periumbilical or central abdominal pain, visceral in origin, colicky (waxes and wanes) or dull aching. This is seen in approximately 50-60% of patients.
*   **Migration**: pain classically shifts to the right iliac fossa (RIF) within 4-12 hours as parietal peritoneal irritation supervenes.
*   **RIF pain quality**: becomes more constant, severe, and sharp once somatic; aggravated by movement, coughing, and sudden positional changes.
*   **Pain may be dull and aching if complicated** (e.g., abscess formation).

**Variation by Appendix Position**
*   **Retrocaecal appendix**: flank or back pain; RIF tenderness may be less pronounced.
*   **Pelvic appendix**: suprapubic pain, urinary symptoms, and diarrhoea due to proximity to bladder and rectum.
*   **Pre-/post-ileal appendix**: may mimic small bowel pathology.

**Associated Symptoms**
### Common (Present in Majority)
*   **Anorexia**: usually invariable; a useful discriminating feature.
*   **Nausea**: a prominent feature.
*   **Vomiting**: typically 1-2 episodes, non-billious, due to the gastrocolic reflex. Vomiting preceding pain should raise suspicion for an alternative diagnosis.

### Less Common
*   **Bowel habit changes**: constipation is usual; diarrhoea may occur with a pelvic appendix or when complicated (appendiceal abscess).
*   **Urinary symptoms**: frequency and dysuria may occur with a pelvic appendix due to bladder irritation.
*   **Fever**: usually low-grade (37.5-38.5°C); high swinging fever and rigors suggest perforation or abscess.
*   **Right lower abdominal swelling**: may be noted in appendiceal mass.
*   **Jaundice**: uncommon; may indicate portal pyaemia (Pylephlebitis) as a complication.

## Clinical Examination

### General Examination
*   Patient may appear unwell, flushed, or pyrexial.
*   Dehydration may be present, especially if vomiting has been prolonged.
*   Patient may lie supine with the right hip flexed (to relieve tension on the parietal peritoneum from the inflamed appendix).
*   Vital signs: pulse rate is usually normal in uncomplicated appendicitis; tachycardia suggests complication. Blood pressure and respiratory rate are typically normal.

### Abdominal Examination

#### Inspection
*   Reduced abdominal movement with respiration (peritonitis).
*   Visible swelling in the RIF (appendiceal mass).

#### Palpation — Key Signs
*   **Pointing sign**: the patient points to the McBurney's point (junction of medial 2/3 and lateral 1/3 of a line from the umbilicus to the anterior superior iliac spine) as the site of maximum pain.

![Figure 2: McBurney's Point — Surface Marking. Diagram illustrating McBurney's point on the surface of the abdomen: located one-third of the distance from the right anterior superior iliac spine (ASIS) to the umbilicus. This corresponds to the most common location of the base of the appendix and is the site of maximum tenderness in acute appendicitis.](https://upload.wikimedia.org/wikipedia/commons/3/3b/McBurney%27s_point.jpg)

*   **Localised tenderness in the RIF**: on light palpation, with guarding and rebound tenderness.
*   **Rovsing's sign**: deep palpation of the left iliac fossa elicits pain in the right iliac fossa. Indicates peritoneal irritation in the RIF.
*   **Psoas sign**: with the patient in the left lateral position, passive extension of the right hip elicits RIF pain. Seen in retrocaecal appendicitis.
*   **Obturator sign (Cope's sign)**: flexion and internal rotation of the right hip elicits RIF pain. Seen in pelvic appendicitis.
*   **Dunphy's sign**: pain in the RIF on coughing. Suggests retrocaecal appendicitis.
*   **Aaron's sign**: referred pain in the epigastrium on continuous firm pressure over McBurney's point.

#### Percussion
*   Percussion tenderness in the RIF.
*   Generalised peritonism (board-like rigidity) if perforated.

#### Digital Rectal Examination
*   Anterior rectal wall tenderness in pelvic appendicitis.
*   Tender mass may be palpable in the right side of the pelvis.

> [PEARL] **Examination Approach:** Always begin palpation away from the point of maximum tenderness to gain the patient's trust and accurately assess guarding and rebound. Involuntary guarding (rigidity) is more clinically significant than voluntary guarding. Rebound tenderness should be elicited gently. Alternatively, percussion tenderness (less uncomfortable for the patient) reliably demonstrates peritoneal irritation.

## Differential Diagnosis

The differential diagnosis of acute appendicitis is broad and varies with age and sex. A systematic approach to differentials is essential.

### Adult Females (Gynaecological Causes)
*   **Ruptured ectopic pregnancy**: enquire about LMP, sexual activity, history of amenorrhoea, and vaginal bleeding. Typically no anorexia or vomiting.
*   **Pelvic inflammatory disease (PID)**: bilateral lower abdominal pain, vaginal discharge, fever; no anorexia.
*   **Torsion or ruptured ovarian cyst**: recurrent lower abdominal pain; no anorexia or fever.
*   **Mittelschmerz (mid-cycle pain)**: mid-cycle, no fever or anorexia.
*   **Endometriosis**: cyclical pain, dysmenorrhoea.

### Both Sexes (General)
*   **Perforated peptic ulcer (PUD)**: history of dyspepsia, epigastric pain, no fever; air under diaphragm on erect CXR.
*   **Mesenteric adenitis**: mainly in children; recent viral infection; may be indistinguishable clinically.
*   **Intestinal obstruction**: distension, absolute constipation, vomiting, colicky pain.
*   **Regional ileitis/Crohn's disease**: longer history, more prominent fever, profuse or bloody diarrhoea.
*   **Perforated typhoid enteritis**: longer fever history, rose spots, relative bradycardia.
*   **Urinary tract infection (UTI)**: dysuria, frequency, suprapubic pain, positive nitrites and leucocytes on urinalysis.
*   **Renal/ureteric colic**: colicky loin-to-groin pain, haematuria, radiating to the groin or genitalia.
*   **Acute cholecystitis**: RUQ pain, positive Murphy's sign, fever, nausea.
*   **Acute pancreatitis**: epigastric pain radiating to the back, elevated serum amylase/lipase.
*   **Caecal cancer**: in the elderly; weight loss, change in bowel habit, anaemia.

### Children
*   **Mesenteric adenitis**: most common differential in children; recent viral upper respiratory tract infection.
*   **Gastroenteritis**: vomiting and diarrhoea prominent and often preceding pain.
*   **Meckel's diverticulitis**: clinically indistinguishable; usually diagnosed at surgery.
*   **Intussusception**: predominantly in younger children; redcurrant jelly stool.
*   **Lobar (right lower lobe) pneumonia**: pleuritic chest pain, productive cough, respiratory signs.
*   **Henoch-Schönlein purpura**: palpable purpura, arthralgia, haematuria.
*   **Testicular torsion (males)**: testicular/scrotal pain and swelling.

### Elderly
*   **Caecal pole tumour**: colicky RIF pain, weight loss, anaemia, change in bowel habit.
*   **Diverticulitis of the right colon**.
*   **Mesenteric vascular occlusion**.

## Investigations

The diagnosis of acute appendicitis is primarily clinical. Investigations serve to support the clinical diagnosis, exclude differentials, and assess for complications or fitness for surgery.

### Laboratory Investigations

#### Routine
*   **Full Blood Count (FBC)**: leucocytosis >10,000 cells/mm³ is expected; neutrophilia and left shift are typically present. Note that a normal WBC does not exclude appendicitis, particularly early in the course.
*   **Urinalysis**: nitrites and protein suggest UTI; presence of sugars may indicate diabetes mellitus. Microscopic haematuria may be seen with ureteric colic or an inflamed appendix adjacent to the ureter.
*   **Serum electrolytes and urea**: may be normal; useful to assess hydration status.
*   **C-reactive protein (CRP)**: elevated; rising CRP supports the diagnosis and correlates with severity.

#### Selective
*   **Serum amylase/lipase**: to exclude acute pancreatitis.
*   **Serum beta-hCG (pregnancy test)**: mandatory in all females of childbearing age to exclude ectopic pregnancy.
*   **Blood culture**: if sepsis or perforation suspected.

### Imaging

#### Ultrasonography (USS) of the Abdomen and Pelvis
*   **Advantages**: no ionising radiation, widely available, inexpensive, safe in pregnancy.
*   **Preferred first-line imaging**, especially in females (to exclude gynaecological pathology) and in children.
*   **In appendicitis, USS shows**: non-compressible tubular structure with diameter >6 mm, increased echogenicity of pericaecal fat, appendicolith, and periappendiceal fluid.
*   **Limitation**: the appendix may not be visualised (operator-dependent, less accurate in obese patients, and bowel gas may obscure views).

#### Contrast-Enhanced CT Scan of the Abdomen and Pelvis
*   **High sensitivity and specificity (approximately 96%)**.
*   **Preferred in**: obese patients, elderly patients (to exclude caecal tumour), equivocal clinical presentation, and failed USS.
*   **Associated with ionising radiation and higher cost**.
*   **CT findings**: periappendiceal fat stranding, thickened appendiceal wall, appendicolith, free fluid.

#### Plain Abdominal X-Ray
*   **Limited role in diagnosing appendicitis**.
*   **Useful to exclude intestinal obstruction (erect and supine films)**.
*   **May demonstrate a faecolith**.

#### Erect Chest X-Ray
*   **To rule out free air under the diaphragm (perforated viscus/PUD) and right lower lobe pneumonia**.

## Clinical Scoring: The Modified Alvarado Score (MANTRELS)

The Modified Alvarado Score (MANTRELS) is a clinical decision-making tool that aids in the diagnosis of acute appendicitis by quantifying symptoms, signs, and a laboratory finding. It is important to note that this score aids diagnosis but should not be used as the sole basis for a definitive diagnosis or to withhold surgery in a clearly unwell patient.

| Feature | Mnemonic | Score |
| :--- | :--- | :--- |
| **SYMPTOMS** | | |
| Migratory RIF pain | M | 1 |
| Anorexia | A | 1 |
| Nausea and/or vomiting | N | 1 |
| **SIGNS** | | |
| Tenderness in RIF | T | 2 |
| Rebound tenderness | R | 1 |
| Elevated temperature | E | 1 |
| Extra signs (abdominal exam findings)| E | 1 |
| **LABORATORY** | | |
| Leucocytosis > 10,000 cells/mm³ | L | 2 |
| **TOTAL** | | **10** |

### Score Interpretation
| Score | Interpretation | Action |
| :--- | :--- | :--- |
| 7 - 10 | Strongly suggestive of acute appendicitis | Proceed to appendicectomy |
| 5 - 6 | Equivocal | Further imaging (USS/CT); observe and reassess |
| 0 - 4 | Appendicitis unlikely | Observe; consider alternative diagnoses |

> **IMPORTANT NOTE**
> The Alvarado score aids diagnosis but does NOT replace clinical judgement. A score <5 does not exclude appendicitis if the clinical picture is compelling. Furthermore, in female patients, imaging (pelvic USS) should complement clinical assessment regardless of the score to exclude gynaecological pathology.

## Principles of Management

The management of acute appendicitis follows a structured approach encompassing resuscitation, investigation, clinical scoring, decision-making regarding operative versus conservative management, and post-operative care.

### Initial Management (All Patients)
*   **Nil Per Oral (NPO/NBM)**: essential to prepare for potential surgery and to rest the bowel.
*   **Intravenous (IV) fluid resuscitation**: crystalloids (e.g., normal saline or Hartmann's solution) to correct dehydration and maintain urine output.
*   **IV antibiotics**: broad-spectrum coverage targeting gram-negatives and anaerobes. A combination of ciprofloxacin (or ceftriaxone) with metronidazole is commonly used. Antibiotics serve as an adjunct to surgery, not a replacement.
*   **IV analgesia**: adequate pain control is not only humane but does not mask signs in the context of a working diagnosis.
*   **Blood transfusion**: if the patient is significantly anaemic.
*   **Monitoring**: regular vital signs (hourly pulse, 4-hourly temperature), fluid balance, and abdominal tenderness assessment.
*   **Urinary catheter**: to monitor urine output in septic or critically ill patients.

### Definitive Management

#### Uncomplicated Acute Appendicitis
The definitive treatment of uncomplicated acute appendicitis is appendicectomy, either open or laparoscopic. This is a surgical emergency and should be performed promptly once the diagnosis is established.

#### Surgical Approaches — Open Appendicectomy
*   **Lanz incision (preferred by most surgeons)**: transverse incision at McBurney's point (junction of medial 2/3 and lateral 1/3 of the umbilico-ASIS line). Provides a better cosmetic scar as it follows the skin crease.
*   **Gridiron (Grid Iron) incision**: made at right angles to the umbilico-ASIS line through McBurney's point. A muscle-splitting incision; gives a poor cosmetic result but adequate access.

![Figure 3: Common Abdominal Incisions for Appendicectomy](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Appendix_surgery_incision.svg/640px-Appendix_surgery_incision.svg.png)

*   **Right lower paramedian incision**: used when diagnosis is uncertain.
*   **Rutherford Morrison incision**: muscle-cutting incision; used in complicated appendicitis.
*   **Battle's incision**: lateral paramedian.
*   **Rocky Davies incision**: a variant of the Lanz incision.

#### Laparoscopic Appendicectomy
*   Minimally invasive; offers faster recovery, reduced wound complications, and better diagnostic accuracy.
*   Particularly advantageous in females of childbearing age (allows direct inspection of pelvic organs) and obese patients.
*   Associated with a slightly higher risk of intra-abdominal abscess compared to open surgery in perforated appendicitis.

#### Types of Appendicectomy
*   **Emergency appendicectomy**: for acute uncomplicated appendicitis.
*   **Elective (interval) appendicectomy**: performed 6-8 weeks after resolution of appendiceal mass or abscess managed conservatively.
*   **Laparoscopic appendicectomy**: minimally invasive option for uncomplicated cases.
*   **Incidental appendicectomy**: performed when the abdomen is opened for another reason. This is now generally discouraged unless the original surgery is contaminated or dirty.

> [PEARL] **Antibiotic-Only Management:** There is growing evidence supporting non-operative management (antibiotics alone) for uncomplicated acute appendicitis in selected adult patients. However, this approach carries a 20-35% recurrence rate within 1 year and is not yet standard practice in most settings. Surgery remains the gold standard treatment.

### Management of Appendiceal Mass

#### Composition of an Appendiceal Mass (Phlegmon)
*   Inflamed appendix.
*   Greater omentum.
*   Densely adherent caecum.
*   Terminal ileum.

#### Initial Conservative Management (Ochsner-Sherren Regimen)
Surgery is avoided initially due to the risk of iatrogenic injury to the adherent bowel (cecum or ileum), which could result in fistula formation. The Ochsner-Sherren regimen includes:

*   **A** — Adequate fluid resuscitation; Nil Per Oral (NPO); nasogastric tube if vomiting.
*   **B** — Twice-daily (BD) clinical assessment of symptoms and signs.
*   **C** — Charts: vital signs (Temperature, Respiratory Rate, Pulse Rate, Blood Pressure) monitored 4-hourly or more frequently.
*   **D** — Diameter of mass outlined daily with a skin marker to detect increase or decrease in size.
*   **E** — Electrolyte correction as indicated; appropriate antibiotics and analgesics.

#### Signs of Improvement (Continue Conservative Management)
*   Normal pulse rate.
*   Apyrexia.
*   Reducing or completely resolved mass.
*   Resolving abdominal tenderness.
If improvement is sustained, plan interval appendicectomy 6-8 weeks later.

#### Signs of Failure / Progression to Abscess
The following features suggest the mass is progressing to an abscess and mandate abandonment of conservative management and surgical intervention:

*   Continued increase in mass size or failure to decrease.
*   Rising or swinging pulse rate.
*   Rising temperature (>38.5°C or swinging fever).
*   Increasing pain, tenderness, and guarding.
*   Worsening general condition.
*   Features of intestinal obstruction or perforation.
*   Features of peritonitis.

### Management of Other Specific Complications

#### Appendiceal Abscess
*   Drainage of the abscess: either percutaneous image-guided drainage or surgical incision and drainage.
*   If the appendix is identified at drainage, it should be excised. If not, plan interval appendicectomy 6-8 weeks later.
*   Peritoneal lavage at the time of surgical drainage.

#### Ruptured Appendix with Peritonitis
*   Exploratory laparotomy: a lower midline abdominal incision is preferred over a right lower paramedian incision for better access.
*   Peritoneal toileting and lavage with warm saline.
*   Appendicectomy if the appendiceal stump is identified; otherwise defer.
*   Use of abdominal drain at the surgeon's discretion.
*   Continued post-operative broad-spectrum IV antibiotics.

## Post-Operative Care and Follow-Up

### Immediate Post-Operative Management
*   Monitoring of vital signs in the recovery room and ward.
*   Continuation of IV antibiotics for 24-48 hours in uncomplicated appendicitis; extended courses for perforated appendicitis.
*   Early mobilisation to reduce the risk of DVT and adhesions.
*   Analgesia: regular simple analgesia (paracetamol, NSAIDs) with opioids as needed.
*   Early oral feeding as tolerated.
*   Blood transfusion if required.

### Discharge and Follow-Up
*   Most patients with uncomplicated appendicitis are discharged within 24-48 hours post-operatively.
*   Wound review at 1-2 weeks (if clips or sutures used).
*   Post-operative clinic review to ensure recovery, address complications, and arrange histological results review.
*   Histological examination of the resected appendix is mandatory to confirm the diagnosis and exclude incidental malignancy (e.g., carcinoid tumour, appendiceal adenocarcinoma), particularly in older patients.
*   For patients managed with interval appendicectomy: ensure follow-up appointment is booked at 6-8 weeks after discharge.

## Complications

### Complications of Acute Appendicitis
*   **Appendiceal mass**: a phlegmon consisting of the inflamed appendix walled off by the greater omentum, terminal ileum, and caecum.
*   **Appendiceal abscess**: localised collection of pus following contained perforation.
*   **Appendiceal rupture/perforation**: leads to soiling of the peritoneal cavity.
*   **Generalised peritonitis**: spreading infection throughout the peritoneal cavity — a surgical emergency.
*   **Portal pyaemia (Pylephlebitis)**: septic thrombophlebitis of the portal venous system; rare but life-threatening; presents with swinging fever and jaundice.
*   **Liver abscess**: secondary to portal pyaemia.

### Risk Factors for Perforation
*   Extremes of age (children and elderly).
*   Immunosuppression and diabetes mellitus.
*   Faecolith obstruction.
*   Pelvic appendix.
*   Delayed presentation (>24-48 hours).
*   Previous abdominal surgery.

### Post-Operative Complications of Appendicectomy

#### Early
*   Haemorrhage.
*   Paralytic ileus.
*   Wound infection (superficial surgical site infection).
*   Intra-abdominal abscess (pelvic, subphrenic, retrocaecal).
*   Enterocutaneous fistula.
*   Septicaemia.
*   Pyelophlebitis.

#### Late
*   Adhesive intestinal obstruction.
*   Incisional hernia.
*   Faecal fistula.

## Key Points and Pitfalls

### Key Points
*   Classic presentation: Periumbilical pain migrating to RIF with anorexia.
*   Pain before vomiting suggests a surgical abdomen.
*   McBurney's point tenderness is the most reliable sign.
*   CT scan is the most accurate imaging modality; MRI preferred in pregnancy.
*   Do not delay analgesia - it does not mask clinical signs.
*   Higher perforation risk in extremes of age and delayed presentation.

### COMMON PITFALLS TO AVOID
*   Do not rely on a normal WBC to exclude appendicitis — it may be normal early in the disease.
*   Atypical presentations are the rule in children, the elderly, and pregnant women.
*   Do not dismiss the diagnosis because pain does not classically migrate — this occurs in only ~50-60% of cases.
*   Always perform a pregnancy test in females of childbearing age before labelling abdominal pain as appendicitis.
*   A pelvic or retrocaecal appendix will not produce classical RIF signs — consider specific positional signs.
*   In an appendiceal mass, avoid premature surgery due to the high risk of inadvertent bowel injury.
*   Always review histology post-operatively — carcinoid tumours are commonly found incidentally.

## Practice Essay Questions

1.  A 22-year-old male presents with a 24-hour history of abdominal pain, which started in the periumbilical region and has now moved to the right iliac fossa. Discuss the differential diagnosis and outline your management plan.
2.  Describe the pathophysiology of acute appendicitis and explain how this relates to the clinical features of the condition.
3.  Discuss the role of scoring systems and in imaging in the diagnosis of acute appendicitis.

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
