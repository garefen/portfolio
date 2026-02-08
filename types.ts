import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  url: string;
  imageUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight?: boolean;
}

export type Theme = 'dark' | 'light';