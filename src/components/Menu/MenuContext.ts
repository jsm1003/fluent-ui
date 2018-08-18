import React from 'react';
import { consumer as consumerCurry, provider as providerCurry } from '@/lib';

export const MenuContext = React.createContext({});

export const consumer = consumerCurry(MenuContext.Consumer);

export const provider = providerCurry(MenuContext.Provider);
