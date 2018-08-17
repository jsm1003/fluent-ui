import React from 'react';
import { consumer as consumerCurry, provider as providerCurry } from '@/lib';

export const RadioContext = React.createContext({});

export const consumer = consumerCurry(RadioContext);

export const provider = providerCurry(RadioContext);
