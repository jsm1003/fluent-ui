import React from 'react';
import { consumer as consumerCurry, provider as providerCurry } from '@/lib';

export const TabContext = React.createContext({});

export const consumer = consumerCurry(TabContext.Consumer);

export const provider = providerCurry(TabContext.Provider);
