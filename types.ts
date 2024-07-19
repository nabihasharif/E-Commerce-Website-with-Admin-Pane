export interface Product {
  id: string;
  category: string;
  description: string;
  title: string;
  price: string;
  featured: boolean;
  imageURLs: string[];
  discount?: number;
  finalPrice?: number;
  size?: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageURL: string;
}

export interface Category {
  id: string;
  category: string;
  billboardId: string;
}

export interface SelectedSize {
  id: string;
  name: string;
}

export interface RequestData {
  title: string;
  description: string;
  price: number;
  files: File[];
  featured: boolean;
  category: string;
  sizes: SelectedSize[];
  categoryId: string;
  discount?: number;
}
