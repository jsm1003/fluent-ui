import React from 'react';
import { consumer as consumerCurry } from '@/lib';

export const MenuContext: React.Context<any> = React.createContext({});

export const consumer = consumerCurry(MenuContext);
