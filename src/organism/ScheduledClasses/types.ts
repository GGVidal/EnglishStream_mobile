import { ChipProps } from '@atoms/Chip/types';

export interface ScheduledClass {
  id: string;
  classQuantity: number;
  chips: ChipProps[];
  date: string;
  imageUrl: string;
  title: string;
}

export interface AddClassItem {
  id: string;
  isAddClass: true;
}

export type ClassItem = ScheduledClass | AddClassItem;
