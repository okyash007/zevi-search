import { faker } from '@faker-js/faker'



export function useGetData() {
    const brands = ['H&N', 'Zara', 'Zudio']
    const products = [];
  for (let i = 0; i < 10; i++) {
    const product = {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      description: faker.commerce.productDescription(),
      image: faker.image.urlLoremFlickr({ category: 'fashion', height: 600 , width: 400 }),
      material: faker.commerce.productMaterial(),
      rating: Math.floor(Math.random() * 5) + 1,
      brand: brands[Math.floor(Math.random() * brands.length)],
    };
    products.push(product);
  }
  return products
}