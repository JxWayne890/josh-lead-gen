
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Define TypeScript types for Google Places API
export interface GoogleAddressData {
  formattedAddress: string;
  streetNumber: string;
  route: string;
  locality: string;
  administrativeAreaLevel1: string;
  postalCode: string;
  country: string;
  lat: number;
  lng: number;
}
