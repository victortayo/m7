import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const acuteAppendicitisContent = `
# HERO_START
Title: Acute Appendicitis
Subtitle: Surgery | User Generated Note
Definition: Acute appendicitis is acute inflammation of the vermiform appendix, most likely due to obstruction of the lumen of the appendix.
Stats: 
- Peak Incidence: 10-30 years
- M:F Ratio: 1.4:1
- Mortality: <1% for uncomplicated, 5-15% if perforated
- Perforation Rate: 15-20%
- Critical Threshold: N/A
# HERO_END

## What You Need to Learn
*   Understand the underlying causes and the step-by-step process of how appendicitis develops.
*   Be able to take a focused history and perform a relevant physical examination to suspect appendicitis.
*   Know which investigations to order, how to interpret them, and understand their limitations.
*   Be familiar with the main differential diagnoses to consider in a patient with right iliac fossa pain.
*   Outline the management principles for uncomplicated and complicated appendicitis.
*   Recognize the potential complications of the condition and its treatment.

## Aetiology & Pathophysiology
**AETIOLOGY**
*   Lymphoid hyperplasia (60%) - associated with viral infections (measles, mononucleosis), Crohn's disease
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
*   Initial periumbilical/epigastric pain - moderate intensity, colicky or dull ache in nature (visceral pain from T10 dermatome)
*   Migration of pain to the right iliac fossa (parietal peritoneal irritation) - a hallmark feature

Site variations depending on appendix position:
*   Retrocaecal appendix - pain at right flank
*   Pelvic appendix - deep pelvic discomfort, dysuria
*   Subhepatic appendix - right upper quadrant pain

Aggravating and alleviating factors:
*   Aggravating: coughing, sneezing, or sudden movement exacerbates the pain
*   Alleviating: analgesics, lying still

Associated symptoms:
*   Anorexia (almost universal - its absence should prompt reconsideration of the diagnosis)
*   Nausea and vomiting (typically after onset of pain - pain before vomiting suggests surgical cause)
*   Low-grade fever
*   Constipation or diarrhoea
*   Dysuria or frequency (if appendix near bladder)
*   Right lower abdominal swelling (in late presentations)

## Physical Examination
**II. PHYSICAL EXAMINATION**
**General Examination**
*   General appearance - note distress, posture (lying still suggests peritoneal irritation)
*   Dehydration
*   Febrile - usually low-grade fever (<38.5°C)
*   Tachycardia
*   Furred/coated tongue

**Abdominal Examination**
*   **Inspection:** Abdominal distension, Scars, Patient lying still.
*   **Palpation:** Tenderness at McBurney's point, Rebound tenderness and guarding, Muscle spasm, Rovsing's sign, Psoas sign, Obturator sign.
*   **Percussion:** Tenderness at RIF, Loss of liver dullness (perforation).
*   **Auscultation:** Bowel sounds may be reduced or absent.

**Digital Rectal Examination (DRE)**
*   Right-sided tenderness suggests pelvic appendicitis.

## Investigations
**III. INVESTIGATIONS**
**Laboratory Investigations**
*   **FBC:** Leucocytosis with neutrophilia (WBC >10,000/mm³)
*   **CRP & ESR:** Elevated
*   **Urine Analysis:** To rule out UTI
*   **Urine beta-hCG:** Mandatory in all females of childbearing age

**Imaging**
*   **Ultrasound:** Non-compressible appendix >6mm.
*   **CT Scan:** Most accurate; shows dilated appendix, fat stranding.
*   **MRI:** Preferred in pregnancy.

## Scoring Systems
**Alvarado Score (MANTRELS)**
*   **M** - Migration of pain (1)
*   **A** - Anorexia (1)
*   **N** - Nausea/Vomiting (1)
*   **T** - Tenderness in RIF (2)
*   **R** - Rebound tenderness (1)
*   **E** - Elevated temperature (1)
*   **L** - Leucocytosis (2)
*   **S** - Shift to left (1)

*Score 7-10 suggests high probability of appendicitis.*

## Differential Diagnosis
**General:** Gastroenteritis, Mesenteric adenitis, Meckel's diverticulitis, Crohn's, UTI, Perforated peptic ulcer.
**Gynaecological:** Ectopic pregnancy, Ovarian torsion, PID, Mittelschmerz.
**Paediatric:** Intussusception, Lobar pneumonia.

## Management
**IV. TREATMENT**
**Initial Management:** NBM, IV fluids, Analgesia, IV antibiotics (if perforation suspected).

**1. Uncomplicated Appendicitis**
*   **Emergency Appendicectomy** (Open or Laparoscopic). Laparoscopic is preferred.

**2. Appendix Mass (>3-5 days)**
*   **Conservative Management (Ochsner-Sherren Regimen):** NBM, IV fluids, IV antibiotics, analgesia, and close monitoring of the mass size.
*   **Interval Appendicectomy** after 6-8 weeks.

**3. Appendix Abscess**
*   **CT-guided drainage** OR surgical drainage.
*   Followed by interval appendicectomy.

## Complications
**Early**
*   Gangrenous appendix
*   Perforation
*   Peritonitis
*   Appendix mass/abscess
*   Sepsis
*   Portal pyaemia (pylephlebitis)

**Late**
*   Adhesions and intestinal obstruction
*   Infertility (females)
*   Enterocutaneous fistula

## Key Points & Clinical Pearls
*   Classic presentation: Periumbilical pain migrating to RIF with anorexia.
*   Pain before vomiting suggests a surgical abdomen.
*   McBurney's point tenderness is the most reliable sign.
*   CT scan is the most accurate imaging modality; MRI preferred in pregnancy.
*   Do not delay analgesia - it does not mask clinical signs.
*   Higher perforation risk in extremes of age and delayed presentation.
> [PEARL] "When in doubt, take it out!" - The risk of negative appendicectomy is less than the risk of perforation from delayed surgery.

## Practice Essay Questions
1.  A 22-year-old male presents with a 24-hour history of abdominal pain, which started in the periumbilical region and has now moved to the right iliac fossa. Discuss the differential diagnosis and outline your management plan.
2.  Describe the pathophysiology of acute appendicitis and explain how this relates to the clinical features of the condition.
3.  Discuss the role of scoring systems and imaging in the diagnosis of acute appendicitis.
`;

const intestinalObstructionContent = `
# HERO_START
Title: Intestinal Obstruction
Subtitle: Surgery | User Generated Note
Definition: Intestinal obstruction is the mechanical or functional blockade of the bowel that prevents the normal movement of the products of digestion. More specifically, it is the stoppage in the onward flow of intestinal contents, occurring distal to the ampulla of Vater — hence it is characterised by bilious vomiting.
# HERO_END

## What You Need to Learn
*   Distinguish between mechanical and functional intestinal obstruction.
*   Recognize the cardinal signs and symptoms of intestinal obstruction.
*   Understand the pathophysiology of fluid and electrolyte shifts in obstruction.
*   Formulate a differential diagnosis based on the patient's age and clinical presentation.
*   Outline the principles of initial resuscitation and management.
*   Know the indications for conservative versus surgical management.

## Classification
**A. Broad Classification**
Intestinal obstruction is broadly classified into:
* Dynamic (Mechanical) Obstruction — something within the lumen, wall, or outside the gut stops or restricts intestinal contents.
* Adynamic (Functional/Paralytic) Obstruction — paralysis of the intestinal wall musculature leading to inability to propel contents, with no actual mechanical block (e.g. paralytic ileus post-laparotomy).

**B. Classification of Mechanical Obstruction**
* Acute — sudden onset
* Chronic — slow progressive narrowing (often colorectal cancer, TB stricture)
* Acute-on-Chronic — a chronic case that suddenly becomes completely occluded (usually by impacted faeces)

**C. Classification by Site**
* High (Upper) Intestinal Obstruction — affects lower duodenum, jejunum, upper ileum
* Low (Lower) Intestinal Obstruction — affects terminal ileum and colon

**D. Classification by Nature**
* Simple obstruction — isolated occlusion of lumen, no blood supply impairment
* Strangulation obstruction — occlusion with impaired blood supply (surgical emergency)
* Closed-loop obstruction — obstructed loop closed at both ends; nothing escapes proximally or distally (e.g. volvulus, hernia with competent ileocaecal valve in right colon obstruction)

> [NB] Ligament of Treitz is the anatomical landmark separating upper (proximal) from lower (distal) intestinal obstruction.

## Aetiology
**A. Dynamic (Mechanical) Causes**
Divided by the anatomical location of the obstructing lesion:

**i. Intraluminal (within the lumen)**
* Faecal impaction / Bezoars
* Foreign bodies (e.g. swallowed coins — common in paediatric practice)
* Worms/Ascaris — especially relevant in Nigeria and other tropical settings
* Gallstones (Gallstone ileus)

**ii. Intramural (within the intestinal wall)**
* Atresia / Stenosis (congenital — common in neonates)
* Strictures — commonly due to tuberculosis, Crohn's disease
* Malignancy (colorectal carcinoma, gastric cancer, cancer of head of pancreas)
* Polyps / Haemangiomas / Intussusception

**iii. Extramural (outside the intestine)**
* Bands and Adhesions — most common cause in adults; from previous surgery, TB peritonitis, PID
* Hernia — external (inguinal, femoral, umbilical) and internal
* Volvulus — especially sigmoid volvulus (common in Nigeria/West Africa)
* Intussusception — most common mechanical obstruction in infants
* Intra-abdominal tumours — lymphoma, ovarian cysts, teratoma

**B. Causes by Age Group**

| GI Region | Infancy & Childhood | Adults |
| :--- | :--- | :--- |
| **Upper GI** | Infantile Hypertrophic Pyloric Stenosis (IHPS)<br>Duodenal atresia / stenosis, Annular pancreas | Gastric cancer, Complicated peptic ulcer<br>Cancer of head of pancreas, Gallstone |
| **Lower GI** | Jejunal/Ileal atresia, stenosis<br>Gut malrotation, Intussusception<br>Hirschsprung's disease, Anorectal malformation, Volvulus | Adhesions, Paralytic ileus<br>Colorectal carcinoma, Anastomotic stenosis<br>Sigmoid volvulus |

**C. Adynamic (Functional) Causes**
* Post abdominal surgery (paralytic ileus) — most common; physiologic; peristalsis returns: small bowel ~12-24hrs, stomach ~24-48hrs, large bowel ~48-72hrs
* Peritonitis
* Hypokalaemia
* Retroperitoneal haemorrhage
* Mesenteric arterial thrombosis
* Spinal cord injury

## Pathophysiology
**A. Mechanical Obstruction**
Regardless of aetiology, the proximal bowel dilates and develops altered motility while the bowel below the obstruction continues normal peristalsis until it is empty, after which it contracts and becomes immobile.

Distension is produced by two factors:
* **Gas** — significant overgrowth of aerobic and anaerobic organisms results in considerable gas production. After reabsorption of O2 and CO2, the majority is nitrogen (90%) and hydrogen sulphide.
* **Fluid** — accumulation of various digestive juices within the bowel wall, with excess secreted into the lumen while absorption is retarded.

Progressive cascade:
Obstruction → Increased proximal peristalsis (colicky pain) → Bowel dilates → Peristaltic strength reduces → Flaccidity and paralysis (protective against vascular damage from increased intraluminal pressure).

Fluid accumulation (3rd space loss) → hypovolaemia → shock. Gas and fluid distension → increased intraluminal pressure → venous congestion → arterial occlusion → ischaemic infarction of bowel wall (mucosa first) → bacterial translocation → bacteraemia → septicaemia → bowel gangrene → perforation → peritonitis.

**B. Adynamic Obstruction**
There is paralysis of intestinal wall musculature. Pain is not a predominant feature. Effortless vomiting may occur. Radiologically, gas-filled loops of intestine are seen throughout with multiple fluid levels (including pelvic gas, unlike mechanical obstruction).

## Clinical Features
**A. Cardinal Signs of Dynamic Obstruction (Classic Quartet)**
* Colicky abdominal pain
* Abdominal distension
* Vomiting
* Absolute constipation (obstipation — no faeces, no flatus)

**TRIAD**
* Upper GI obstruction: Abdominal pain + Vomiting + Distension
* Lower GI obstruction: Abdominal pain + Distension + Constipation

**B. Features by Level of Obstruction**

| Feature | High SBO | Low SBO | Large Bowel |
| :--- | :--- | :--- | :--- |
| **Vomiting** | Early, profuse, rapid dehydration | Delayed | Late (faeculent) |
| **Distension** | Minimal | Central, pronounced | Early, peripheral/pronounced |
| **Pain** | Central (periumbilical) | Predominant, central | Mild |
| **Constipation** | Late | Earlier | Early, pronounced |
| **AXR (erect)** | Minimal fluid levels | Multiple central fluid levels | Peripheral haustral loops |

## Management — History
**i. Biodata**
* Name, Age, Sex, Address, Occupation
* Age: Children — congenital malformations; Elderly — tumours
* Sex: More common in males

**ii. History of Presenting Complaints (Symptom Analysis)**
* **Vomiting**
  * Duration, mode of onset (gradual or sudden; early onset = small intestinal, late = colonic)
  * Content: food → fluid (clear/bilious) → faeculent (progression)
  * Character: projectile or effortless, bilious (distal to ampulla of Vater) or non-bilious (proximal)
  * Any haematemesis
* **Abdominal Pain**
  * Duration, mode of onset
  * Location: periumbilical (small bowel), suprapubic/hypogastric (large bowel)
  * Severity: mild (no strangulation) vs severe (strangulation)
  * Nature: usually colicky, coinciding with peristalsis
  * Sudden exacerbation and persistence of constant pain suggests perforation
* **Abdominal Distension**
  * Present or absent, upper abdomen or generalised
  * Progressive or intermittent; rate of increase
* **Constipation**
  * Relative constipation: passing flatus but no faeces
  * Absolute constipation (obstipation): no faeces, no flatus
  * In newborns: has child passed meconium? Normally should pass at least once in first 24hrs and twice daily thereafter
  * Nature of stool: pellets (rectal tumour), red currant jelly (intussusception), melaena (upper GI bleeding), blood-stained stool

**iii. History Suggestive of Cause**

| Suspected Cause | Suggestive History |
| :--- | :--- |
| **Adhesions/Bands** | Previous abdominal surgery, TB, peritonitis, PID, gynaecological procedures |
| **Hernia** | Previous history of protruding abdominal/groin mass, suddenly becomes irreducible and painful |
| **Cancer/Tumour** | Weight loss, anorexia, rectal bleeding, tenesmus, easy fatigability, abdominal mass |
| **Intussusception** | Red currant jelly stool, irritable infant, recent URTI or watery diarrhoea |
| **Faecal Impaction** | Low residue diet, chronic constipation, hard faeces, painful defaecation |
| **Stricture** | Previous TB, prolonged diarrhoea disease (e.g. Crohn's) |
| **Polyposis syndrome** | Similar occurrence in family members |

**iv. History of Complications**
* Children: fever, general body weakness, failure to thrive
* Adults: fever, general body weakness, metastasis (cough, back pain, right hypochondrial pain)

**v. Other Aspects of History**
* Past medical/surgical history
* Review of systems
* In children: perinatal history, nutrition history, immunisation history, developmental milestones
* Family and social history

## Management — Physical Examination
**i. General Examination**
* Wasting, pallor, jaundice
* Dehydration — sunken eyes, reduced skin turgor, dry mucous membranes
* Fever — onset of ischaemia, perforation, or associated inflammatory disease
* Vital signs: tachycardia, hypotension (shock)

**ii. Abdominal Examination**
* **Inspection**
  * Gross distension
  * Visible peristalsis — moving left to right in upper quadrant (gastric outlet obstruction)
  * Healed surgical incision scars (adhesions)
  * Hernia orifices — epigastric, umbilical, groin (inguinal/femoral); ALL hernia orifices must be examined
* **Palpation**
  * Tenderness — generalised or localised (localised = pending/established ischaemia)
  * Guarding and rigidity (peritonitis)
  * Palpable mass:
    * Left upper quadrant: infant (IHPS); adult (gastric cancer)
    * Iliac fossa: Hirschsprung's disease (children); faecal impaction, colorectal cancer (adults)
    * Right upper quadrant: intussusception
* **Percussion**
  * Tympanitic or hypertympanitic (gas-filled loops)
* **Auscultation**
  * Absent bowel sounds — paralytic ileus or obstruction proximal to ileocaecal valve
  * Increased, high-pitched, tinkling bowel sounds — obstruction distal to ileocaecal valve

**iii. Digital Rectal Examination**
* Adults: assess tone (patulous or not), swelling size/consistency, nature of stool on finger
* Children: use little finger or bulb of thermometer
* Absent anal opening/dimple at site — anorectal malformation
* Expulsion of foul-smelling stool on removal of examining finger — Fountain's Sign in Hirschsprung's disease
* Empty rectum may be present in Hirschsprung's disease

**iv. External Genitalia and Other Regions**
* External genitalia may be abnormal in anorectal malformation
* Children: examine for associated anomalies — CHARGE and VACTERLH syndromes

> [NB] VACTERLH: Vertebral anomaly, Anorectal malformation, Cardiac anomaly, Tracheo-oesophageal anomaly, Renal anomaly, Limb problems, Hydrocephalus

> [NB] CHARGE: Coloboma of eye, Heart problem, Anorectal malformation, Renal anomaly, Genital anomaly, Ear problem of congenital origin

## Management — Investigations
**i. Specific Investigations**
* **Plain Abdominal X-Ray (Erect and Supine)**
  * Done erect and supine; if too sick to stand, use lateral decubitus view
  * Multiple air-fluid levels >3 + air cut-off sign + absence of air in expected region = confirms intestinal obstruction
  > [NOTE] multiple air-filled levels are seen normally within 10 days of intra-abdominal surgery and after drinking carbonated drinks
  * Air under diaphragm — intestinal perforation (better seen on CXR)
* **Classic AXR features:**
  * Erect: multiple air-fluid levels (>3 is significant)
  * Supine small bowel: centrally located dilated loops, valvulae conniventes (plicae semilunares)
  * Supine large bowel: peripherally located dilated loops, haustral markings
  * Single bubble sign — gastric outlet obstruction (IHPS, gastric stenosis, gastric cancer)
  * Double bubble sign — duodenal atresia
  * Triple bubble sign — jejunal atresia
  * Adynamic obstruction (paralytic ileus) — bowel gas throughout including in pelvis
* **Contrast Studies**
  * Barium Meal + Follow-through (upper GI obstruction): shoulder appearance, string sign, umbrella sign, filling defect
  * Barium Enema (lower GI obstruction):
    * Corkscrew appearance — gut malrotation
    * Coiled spring sign — intussusception
    * Champagne glass / inverted umbrella — Hirschsprung's disease
    * Apple core deformity / filling defect — colorectal cancer
    * Bird beak deformity — volvulus
  * Water-soluble contrast (Gastrograffin) preferred when contrast study is required; contraindicated in peritonitis, strangulation, perforation
* **Abdominal Ultrasound**
  * Of little importance except in complicated cases (e.g. to locate mass)
  * Target/Donut sign (transverse view) or Pseudokidney sign (longitudinal view) — intussusception
* **Endoscopy**
  * Upper GI endoscopy + biopsy — gastric outlet obstruction for histological diagnosis
  * Lower GI endoscopy (proctoscopy, sigmoidoscopy, colonoscopy) — to visualise obstruction site and take biopsy, e.g. Hirschsprung's disease (absent/decreased ganglion cells)
* **Special Investigations for Neonates**
  * Invertogram (Wangensteen-Rice) — for anorectal malformation; wait till child is 16-24hrs old, turn upside down, lateral view of pelvis
  * Cross Table Lateral Radiograph of Pelvis — preferred (avoids respiratory distress of invertogram)

**ii. Supportive Investigations**
* FBC: anaemia (chronic cases, cancer), leucocytosis (infection)
* Blood electrolytes, urea and creatinine: electrolyte derangement; increased urea (dehydration); alkalosis (high SBO), acidosis (low SBO)
* Liver function tests: metastasis, paraneoplastic syndrome
* Grouping and cross-matching — if patient needs transfusion or going for surgery
* Urinalysis (M/C/S) — especially in lower GI obstruction; check sugar, proteins
* Chest X-ray — may show elevated diaphragm, free gas under diaphragm
* ECG — for patients ≥40 years to assess cardiac function
* Abdominal USS / CT scan — to locate mass

## Management — Treatment
**i. Supportive/Resuscitative Treatment (The 3 TUBES)**
* IV Cannula + Nasogastric (NG) Tube + Urethral Catheter
* Secure IV access — give IV fluid to rehydrate; patient may be in shock
* IV Fluid Resuscitation: Normal saline or Ringer's lactate as anti-shock (20ml/kg) if shock present, then maintenance. 
> [NOTE] avoid dextrose for first 24hrs in adults (raised glucogenic hormones); in children use 4.3% dextrose in 0.18% saline (children prone to hypoglycaemia due to ineffective glycogen storage)
* Nasogastric tube decompression — to reduce increased intraluminal pressure, prevent aspiration
* Nil Per Os (NPO/NBM) — to prevent further distension and prepare patient for surgery
* IV antibiotics — ceftriaxone (gram negatives) + metronidazole/flagyl (anaerobes) — to prevent secondary infections
* Urethral catheterisation — for hourly urine output monitoring (target >0.5ml/kg/hr)
* Correct electrolyte imbalance
* Adequate monitoring of vital signs — initially more frequently
* Bowel preparation for large bowel obstruction prior to surgery
* **In Neonates specifically:**
  * Give Vitamin K 1mg IV/IM at start — to prevent haemorrhagic disease of the newborn
  * Nurse in thermo-neutral environment — to prevent hypothermia
> [NOTE] After adequate resuscitation (stable vital signs + optimal hourly urine output), exploratory laparotomy is done. However, in adhesive bowel obstruction, there is room for conservative management first.

**ii. Conservative Management of Adhesive Intestinal Obstruction**
* Continue resuscitative measures; reduce vital sign monitoring to 4-hourly
* Observe patient for improvement: passing faeces/flatus, decreased abdominal pain, decreased distension, bowel sounds becoming normoactive
* Once improved, commence oral intake, encourage high-fibre diet long-term
* Conservative management should rarely continue beyond 72 hours
* If symptoms worsen, stop conservative management and proceed to exploratory laparotomy
* **Other conservative measures for specific causes:**
  * Faecal impaction: soap and water enema +/- osmotic laxative (e.g. Dulcolax)
  * Chronic intestinal obstruction: enema saponins followed by laparotomy with definitive surgical procedure

**iii. Indications for Surgery**
* Peritonitis
* Strangulation
* Persisting shock despite rehydration
* Failed conservative management
* Evidence of perforation

**iv. Definitive Surgical Treatment (depends on diagnosis)**
* Exploratory laparotomy + surgical treatment of cause:
* **By Cause:**
  * Adhesions — adhesiolysis; only the one causing obstruction is excised; resect non-viable bowel loops + anastomosis
  * Bands — release/ligate the band
  * Tumour (benign) — resect, end-to-end anastomosis
  * Malignant tumours — resection based on blood supply + appropriate anastomosis:
    * Caecum to right hepatic flexure: Right hemicolectomy
    * Transverse colon: Transverse colectomy
    * Descending colon to upper sigmoid: Left hemicolectomy
    * Lower sigmoid to upper rectum (>15cm from anal verge): Anterior resection
    * Rectal tumour <10cm from anal verge: Abdominoperineal resection
  * Hernia — Herniotomy (children) or Hernioraphy (adults) + resection + end-to-end anastomosis for non-viable bowel
  * Gastric cancer — subtotal gastrectomy (>50% resected) + gastrojejunostomy, OR Bilroth II operation for antral cancer
  * Malrotation — Ladd's operation
  * Ileal atresia/stenosis — resection and anastomosis
  * Infantile pyloric stenosis — Ramstedt Pyloromyotomy
  * Duodenal atresia + annular pancreas — duodeno-duodenostomy or gastroduodenostomy
  * Hirschsprung's disease:
    * Swenson's operation (rectosigmoidectomy)
    * Duhamel Operation (retro-rectal operation)
    * Soave operation (endorectal operation)
  * Anorectal malformation:
    * Low type — anal cutback (anoplasty)
    * Intermediate and high type — 2-stage operation: 1st stage colostomy; 2nd stage PSARP/Pena's operation (posterior sagittal anorecto-plasty) — done when infant is ~4-6 months old and has attained 10kg

> [NB] Bilroth I: Distal gastrectomy (<50%) + gastroduodenostomy — used for peptic ulcer disease

> [NB] Bilroth II: Distal gastrectomy (<50%) + gastrojejunostomy

## Complications Of Intestinal Obstruction
**Systemic Complications**
* Dehydration and hypovolaemia
* Electrolyte derangement
* Shock
* Acute renal failure
* Respiratory embarrassment

**Local/Bowel Complications**
* Strangulation → bowel gangrene
* Bowel perforation
* Peritonitis
* Intra-abdominal sepsis
* Septicaemia

**Post-Operative Complications**
* Anastomotic failure/leakage
* Anastomotic stenosis
* Recurrence of adhesion
* Intraperitoneal abscesses
* Enterocutaneous fistula

## Specific Conditions
**A. INTUSSUSCEPTION**
Intussusception is a condition where a bowel loop invaginates or telescopes into an adjacent bowel loop. The invaginated bowel is the intussusceptum; the receiving bowel is the intussuscepiens. It is the most common cause of mechanical intestinal obstruction in infants.

**Classification:**
* Jejunojejunal, Ileoileal, Ileocaecal or Ileocolic (most common in children), Colocolic, Colorectal, Prolapsed intussusception
* Primary/Idiopathic — no pathologic lead point (enlarged Peyer's patches from URTI, gastroenteritis, weaning)
* Secondary — with pathologic lead point (Meckel's diverticulum — commonest in children, tumour, polyp, haemangioma, intestinal duplication cyst)

**Epidemiology:**
* Idiopathic intussusception: common between 3 months – 3 years; peak age 4-10 months
* Peyer's patches enlarge due to: viral URTI, viral gastroenteritis (rota, adeno, Norwalk virus), weaning — hence rota virus vaccine is implicated

**Triad of symptoms (30% of infants):**
* Intermittent abdominal pain (irritable cries, raising legs/flexing hips)
* Vomiting
* Bloody-mucoid stool (red currant jelly stool)

**Investigations:**
* Abdominal USS: Target/Donut sign (transverse), Pseudokidney sign (longitudinal)
* Barium enema: Coiled spring sign (diagnostic and sometimes therapeutic)
* Plain AXR: dilated bowel loops, multiple air-fluid levels

**Treatment:**
* **Non-operative (first 24-48hrs, no peritonitis/gangrene):**
  * Hydrostatic reduction: normal saline under USS guidance or barium enema under fluoroscopy. Enema tube at height of 100cm from anus (pressure 100cmH2O). Not more than 3 attempts; if fails → surgery
  * Pneumatic reduction: air insufflation at 80-120mmHg. Safer (less bowel perforation; air reabsorbed if perforation occurs)

* **Operative (when non-operative fails, no facility, sepsis, peritonitis, gangrene):**
  * Laparotomy via right extended upper transverse incision
  * Assess bowel viability BEFORE reducing intussusception
  * Viable: manual reduction by milking intussusceptum from intussuscepiens (never pull apex)
  * Viable but difficult (oedema): warm saline-soaked towel around for 10min, then reduce
  * Still impossible/questionable viability: wrap with saline-soaked towel + 100% O2 for 10min; if viable — manual reduction; if not — resection and anastomosis
  * Non-viable (black, perforated): immediate resection and anastomosis
  * Post-op: fixation to posterior wall to prevent recurrence (preferred over simple reduction)

For secondary intussusception: resection and anastomosis always — non-operative or simple manual reduction not done.

**B. ADHESIVE BOWEL OBSTRUCTION**
Adhesions are classified as early (fibrinous) or late (fibrous). Practically: 'easy' flimsy vs 'difficult' dense. Postoperative adhesions causing obstruction usually involve the lower small bowel. Appendicitis and gynaecological operations are the most common precursors.

**Common Causes of Adhesion Formation:**
* Ischaemic areas, vascular occlusion
* Sites of anastomoses
* Reperitonealisation of raw areas
* Foreign material — talc, starch, gauze, silk
* Infection — peritonitis, tuberculosis
* Inflammatory conditions — Crohn's disease, radiation enteritis

**Prevention of Adhesions:**
* Good surgical technique
* Washing peritoneal cavity with saline to remove clots
* Minimising contact with gauze
* Covering anastomosis and raw peritoneal surfaces
* Instillation of anti-adhesion agents (PVP, chondroitin, hyaluronidase, hydrocortisone, silicone, dextran, etc.) — no single agent has been shown to be particularly effective

**Treatment of Recurrent Adhesive Obstruction:**
* Repeat adhesiolysis (enterolysis) alone
* Noble's plication operation
* Charles-Phillips transmesenteric plication
* Intestinal intubation (Baker's tube)

**C. APPENDICEAL MASS — OSCHNER-SHERREN REGIMEN (Appendix)**
Though not directly intestinal obstruction, it is included given its appearance in the source material:
* NPO, IV fluids, IV antibiotics, IV analgesics
* Hourly pulse and 4-hourly temperature
* Outline mass with skin marker to monitor daily change in size
* Monitor abdominal tenderness

If improves (normal pulse, no fever, resolving/resolved mass, no tenderness): plan interval appendectomy in 6-8 weeks.
If persists/worsens: abandon conservative management and surgically intervene.

**Signs of appendiceal abscess formation:**
* Continued increase or failure to decrease in mass size
* Increasing/persisting pain, tenderness, guarding
* Swinging fever
* Rising pulse rate

Treatment of appendiceal abscess: Drainage of abscess with or without appendectomy + peritoneal lavage.

## Key Points & Clinical Pearls
*   In Nigeria, the most common cause of mechanical bowel obstruction in adults is postoperative adhesions, followed by obstructed external hernias and sigmoid volvulus.
*   Always examine all hernia orifices in a patient with suspected intestinal obstruction.
*   The presence of fever, tachycardia, and localized tenderness should raise suspicion of strangulation.
*   Aggressive fluid resuscitation is the cornerstone of initial management.
> [PEARL] A patient with colicky abdominal pain, vomiting, distension and absolute constipation is obstructed until proven otherwise.
> [PEARL] In a child with suspected intussusception, the absence of the classic triad does not rule out the diagnosis. Ultrasound is the investigation of choice.

## Practice Essay Questions
1.  A 65-year-old man with a known inguinal hernia presents with a 2-day history of colicky abdominal pain, vomiting, and abdominal distension. Discuss your initial management and the definitive surgical options.
2.  Discuss the aetiology and pathophysiology of sigmoid volvulus, with particular reference to the Nigerian context. Outline the principles of its management.
3.  A 4-month-old infant presents with episodes of inconsolable crying and has passed a stool mixed with blood and mucus. Discuss the differential diagnosis and management.
`;

export const generateStudyNote = async (specialtyName: string, topicTitle: string): Promise<string> => {
  if (topicTitle === 'Acute Appendicitis') {
    return Promise.resolve(acuteAppendicitisContent);
  } else if (topicTitle === 'Intestinal Obstruction') {
    return Promise.resolve(intestinalObstructionContent);
  }
  return Promise.resolve(`# ${topicTitle}\n\nContent coming soon...`);
};

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export const generateQuiz = async (specialtyName: string, topicTitle: string, questionCount: number = 5): Promise<QuizQuestion[]> => {
  try {
    const prompt = `
      Generate ${questionCount} high-yield multiple-choice questions (MCQs) for medical students regarding \"${topicTitle}\" in \"${specialtyName}\".
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
              explanation: { type: 'string' }
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
