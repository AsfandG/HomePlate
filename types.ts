export interface ProductsArray {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  newprice: number;
  oldprice: number;
}

export interface CategoriesArray {
  categories: Category[];
}

export interface Category {
  image: string;
  id: number;
  title: string;
  images: string;
  quantity: number;
  category: string;
}

export interface BannerElement {
  id: number;
  title: string;
  description: string;
  image: string;
  offer: string;
}

export interface BestSellingProduct {
  id: number;
  title: string;
  category: string;
  image: string;
  offer: string;
  oldPrice: number;
  newPrice: number;
  itemsSold: number;
  totalItems: number;
  tag: string;
}

export interface Contact {
  id: number;
  heading: string;
  text: string;
}
