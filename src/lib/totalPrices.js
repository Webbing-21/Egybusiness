
export const productsTotal = (products) => {
    return products.reduce((total, product) => {
        const productsTotal = total + product.discount
        return productsTotal
      }, 0);
}