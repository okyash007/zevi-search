export function filterProducts(products, priceBracket, ratings, brands) {
  if (priceBracket.length === 0) {
    priceBracket = [[0, Infinity]];
  }
  if (ratings.length === 0) {
    ratings = [1, 2, 3, 4, 5];
  }
  if (brands.length === 0) {
    brands = ["H&N", "Zara", "Zudio"];
  }

  return products.filter(function (product) {
    for (let i = 0; i < priceBracket.length; i++) {
      if (
        priceBracket[i][0] <= product.price &&
        product.price <= priceBracket[i][1]
      ) {
        return (
          ratings.includes(product.rating) && brands.includes(product.brand)
        );
      }
    }
    return false;
  });
}
