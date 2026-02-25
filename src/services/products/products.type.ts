import type { PaginatedResponse } from '../../types/api.type.ts';

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  thumbnail: string;
  images: string[];
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string; // could also be Date if you parse it
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string; // or Date
  updatedAt: string; // or Date
  barcode: string;
  qrCode: string;
}
export type ProductsType = PaginatedResponse<{ products: Product[] }>;

export type Category = {
  slug: string;
  name: string;
  url: string;
};
