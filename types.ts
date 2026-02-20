export interface Topic {
  id: string;
  title: string;
  category?: string;
}

export interface Specialty {
  id: string;
  name: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export interface NoteContent {
  id: string; // usually specialtyId_topicId
  specialtyId: string;
  topicId: string;
  title: string;
  content: string; // Markdown content
  lastUpdated: number;
}

export interface SavedNote extends NoteContent {
  savedAt: number;
}