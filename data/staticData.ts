import { Specialty } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 'surgery',
    name: 'Surgery',
    icon: 'Circle',
    color: 'bg-red-500',
    topics: [
      { id: 'appendicitis', title: 'Acute Appendicitis', category: 'GI Surgery' },
      { id: 'hernias', title: 'Abdominal Wall Hernias', category: 'GI Surgery' },
      { id: 'intestinal-obstruction', title: 'Intestinal Obstruction', category: 'GI Surgery' },
      { id: 'breast-cancer', title: 'Breast Cancer', category: 'General Surgery' },
      { id: 'thyroid-swellings', title: 'Thyroid Swellings', category: 'Endocrine' },
      { id: 'trauma-primary-survey', title: 'Trauma: Primary Survey', category: 'Trauma & Emergency' },
      { id: 'burns-management', title: 'Burns Management', category: 'Trauma & Emergency' },
    ]
  },
  {
    id: 'internal-medicine',
    name: 'Internal Medicine',
    icon: 'Triangle',
    color: 'bg-blue-500',
    topics: [
      { id: 'hypertension', title: 'Hypertension in Nigeria', category: 'Cardiology' },
      { id: 'heart-failure', title: 'Congestive Cardiac Failure', category: 'Cardiology' },
      { id: 'stroke', title: 'Cerebrovascular Accident', category: 'Neurology' },
      { id: 'diabetes-mellitus', title: 'Diabetes Mellitus', category: 'Endocrinology' },
      { id: 'malaria', title: 'Severe Malaria', category: 'Infectious Disease' },
      { id: 'tuberculosis', title: 'Pulmonary Tuberculosis', category: 'Infectious Disease' },
      { id: 'hiv-aids', title: 'HIV/AIDS Management', category: 'Infectious Disease' },
      { id: 'ckd', title: 'Chronic Kidney Disease', category: 'Nephrology' },
    ]
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: 'Square',
    color: 'bg-orange-400',
    topics: [
      { id: 'neonatal-jaundice', title: 'Neonatal Jaundice', category: 'Neonatology' },
      { id: 'malnutrition', title: 'PEM (Kwashiorkor & Marasmus)', category: 'Nutrition' },
      { id: 'pneumonia-u5', title: 'Pneumonia in Under-5s', category: 'Respiratory' },
      { id: 'diarrhea', title: 'Acute Watery Diarrhea', category: 'Gastroenterology' },
      { id: 'measles', title: 'Measles', category: 'Infectious Disease' },
      { id: 'sickle-cell', title: 'Sickle Cell Disease', category: 'Haematology' },
    ]
  },
  {
    id: 'obgyn',
    name: 'Obstetrics & Gynecology',
    icon: 'PersonStanding',
    color: 'bg-pink-500',
    topics: [
      { id: 'preeclampsia', title: 'Preeclampsia & Eclampsia', category: 'Obstetrics' },
      { id: 'aph', title: 'Antepartum Hemorrhage', category: 'Obstetrics' },
      { id: 'pph', title: 'Postpartum Hemorrhage', category: 'Obstetrics' },
      { id: 'fibroids', title: 'Uterine Fibroids', category: 'Gynecology' },
      { id: 'cervical-cancer', title: 'Cervical Cancer Screening', category: 'Gynecology' },
      { id: 'ectopic-pregnancy', title: 'Ectopic Pregnancy', category: 'Gynecology' },
    ]
  },
  {
    id: 'community-health',
    name: 'Community Health',
    icon: 'Users',
    color: 'bg-green-500',
    topics: [
      { id: 'epi', title: 'EPI Schedule in Nigeria', category: 'Child Health' },
      { id: 'phc', title: 'Primary Health Care Principles', category: 'Health Systems' },
      { id: 'epidemiology-stats', title: 'Basic Epidemiology & Biostats', category: 'Epidemiology' },
      { id: 'occupational-health', title: 'Occupational Health Hazards', category: 'Environmental Health' },
    ]
  },
  {
    id: 'ophthalmology',
    name: 'Ophthalmology',
    icon: 'Eye',
    color: 'bg-cyan-500',
    topics: [
      { id: 'cataract', title: 'Cataract', category: 'Lens' },
      { id: 'glaucoma', title: 'Glaucoma', category: 'Optic Nerve' },
      { id: 'conjunctivitis', title: 'Conjunctivitis (Apollo)', category: 'Infection' },
      { id: 'eye-trauma', title: 'Ocular Trauma', category: 'Emergency' },
    ]
  },
  {
    id: 'radiology',
    name: 'Radiology',
    icon: 'Scan',
    color: 'bg-slate-500',
    topics: [
      { id: 'cxr-basics', title: 'Chest X-Ray Interpretation', category: 'Chest Imaging' },
      { id: 'fractures', title: 'Fracture Patterns', category: 'MSK' },
      { id: 'imaging-modalities', title: 'Imaging Modalities', category: 'Basics' },
    ]
  },
  {
    id: 'anesthesiology',
    name: 'Anesthesiology',
    icon: 'Octagon',
    color: 'bg-teal-500',
    topics: [
      { id: 'general-anesthesia', title: 'General Anesthesia', category: 'Techniques' },
      { id: 'spinal-anesthesia', title: 'Spinal Anesthesia', category: 'Techniques' },
      { id: 'airway-management', title: 'Airway Management', category: 'Emergency' },
      { id: 'resuscitation', title: 'CPR & Resuscitation', category: 'Emergency' },
    ]
  },
  {
    id: 'ent',
    name: 'ENT',
    icon: 'Star',
    color: 'bg-indigo-500',
    topics: [
      { id: 'otitis-media', title: 'Otitis Media', category: 'Otology' },
      { id: 'epistaxis', title: 'Epistaxis', category: 'Rhinology' },
      { id: 'tonsillitis', title: 'Tonsillitis', category: 'Throat' },
      { id: 'foreign-bodies', title: 'Foreign Bodies in ENT', category: 'Emergency' },
    ]
  },
  {
    id: 'behavioral-science',
    name: 'Behavioral Science',
    icon: 'Pentagon',
    color: 'bg-purple-500',
    topics: [
      { id: 'schizophrenia', title: 'Schizophrenia', category: 'Psychosis' },
      { id: 'depression', title: 'Depression', category: 'Mood Disorders' },
      { id: 'substance-abuse', title: 'Substance Abuse in Nigeria', category: 'Addiction' },
      { id: 'anxiety-disorders', title: 'Anxiety Disorders', category: 'Neurotic Disorders' },
    ]
  },
  {
    id: 'pharmacology',
    name: 'Pharmacology',
    icon: 'Hexagon',
    color: 'bg-yellow-500',
    topics: [
      { id: 'antibiotics', title: 'Common Antibiotics', category: 'Infectious Disease' },
      { id: 'antihypertensives', title: 'Antihypertensive Classes', category: 'Cardiovascular' },
      { id: 'analgesics', title: 'Analgesics & NSAIDs', category: 'Pain Management' },
      { id: 'antimalarials', title: 'Antimalarial Therapy', category: 'Infectious Disease' },
    ]
  },
];