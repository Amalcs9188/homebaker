export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discountPrice: number;
  image: string;
  category: string;
  slug: string;
  new?: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderItem extends CartItem {
  subtotal: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'processing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  createdAt: Date;
  estimatedDelivery: Date;
  customerName: string;
  deliveryAddress: Address;
  paymentMethod: string;
  trackingInfo?: TrackingInfo;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface TrackingInfo {
  currentLocation: {
    lat: number;
    lng: number;
  };
  status: string;
  estimatedArrival: Date;
  driverName?: string;
  driverContact?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
  defaultAddressId?: string;
  orders: Order[];
}