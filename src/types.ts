export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: ('V' | 'VE' | 'GF' | 'DF' | 'N')[]; // Vegetarian, Vegan, Gluten Free, Dairy Free, Contains Nuts
  category: 'midday' | 'allday' | 'brunch' | 'wine' | 'dessert';
  pairing?: string;
}

export interface ReservationDetails {
  guests: number;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface CateringDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  additionalInfo: string;
}

export interface GiftCardOrder {
  design: 'terracotta' | 'sage' | 'charcoal' | 'gold';
  amount: number;
  recipientName: string;
  recipientEmail: string;
  senderName: string;
  senderEmail: string;
  message: string;
}
