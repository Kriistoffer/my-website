import { links } from '@/library/data';

export type SectionName = (typeof links)[number]['name'];
export type Theme = 'light' | 'dark' | null;
