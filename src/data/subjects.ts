import { Subject } from '../types';
import { ALL_SUBJECTS_CONFIG } from './allSubjectsList';
import { CLASS_10_SUBJECTS } from './class10/class10SubjectsList';

export const CLASS_12_SUBJECTS: Subject[] = ALL_SUBJECTS_CONFIG.map(s => ({
  ...s,
  classLevel: 12
}));

export { CLASS_10_SUBJECTS };

export const SUBJECTS_DATA: Subject[] = [
  ...CLASS_12_SUBJECTS,
  ...CLASS_10_SUBJECTS
];
