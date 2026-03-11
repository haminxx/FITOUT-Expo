export interface MockProduct {
  id: string;
  title: string;
  price: string;
  source: string;
  imageUrl?: string;
}

export const MOCK_PRODUCTS: MockProduct[] = [
  { id: '1', title: 'Nike Hoodie', price: '$49.99', source: 'nike.com' },
  { id: '2', title: 'Classic White Tee', price: '$24.99', source: 'uniqlo.com' },
  { id: '3', title: 'Slim Fit Chinos', price: '$59.00', source: 'zara.com' },
  { id: '4', title: 'Similar Style Jacket', price: '$89.99', source: 'asos.com' },
  { id: '5', title: 'Matching Sneakers', price: '$120.00', source: 'adidas.com' },
  { id: '6', title: 'Cotton Crewneck', price: '$34.99', source: 'hm.com' },
];
