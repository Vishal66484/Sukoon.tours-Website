
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Currency = 'INR' | 'USD' | 'EUR' | 'AED';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceInINR: number | string) => string;
  exchangeRate: number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Approximate Exchange Rates (Base INR)
const RATES: Record<Currency, number> = {
  INR: 1,
  USD: 0.012, // 1 INR = 0.012 USD (approx ₹83/$)
  EUR: 0.011, // 1 INR = 0.011 EUR (approx ₹90/€)
  AED: 0.044, // 1 INR = 0.044 AED (approx ₹22/AED)
};

const SYMBOLS: Record<Currency, string> = {
  INR: '₹',
  USD: '$',
  EUR: '€',
  AED: 'AED ',
};

export const CurrencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('INR');

  const formatPrice = (priceInINR: number | string) => {
    // Ensure we have a number
    let numericPrice = typeof priceInINR === 'string' 
      ? parseFloat(priceInINR.replace(/[^0-9.]/g, '')) 
      : priceInINR;

    if (isNaN(numericPrice)) return 'N/A';

    const convertedPrice = numericPrice * RATES[currency];
    const symbol = SYMBOLS[currency];

    // Format options based on currency
    const options: Intl.NumberFormatOptions = {
      minimumFractionDigits: currency === 'INR' ? 0 : 0,
      maximumFractionDigits: 0,
    };

    return `${symbol}${convertedPrice.toLocaleString('en-US', options)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, exchangeRate: RATES[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
