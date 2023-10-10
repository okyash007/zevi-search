export function filterProducts(products, priceBracket, ratings , brands) {
    return products.filter(function(product) {
      return product.price >= priceBracket[0] && product.price <= priceBracket[1] && ratings.includes(product.rating) && brands.includes(product.brand);
    });
  }
  
