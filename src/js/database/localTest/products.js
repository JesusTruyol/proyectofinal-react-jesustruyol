
export function createProduct(props) {

}

export function getProduct(productId) { }

function productBelongsTo(productId, userId) {
  const product = getProduct(productId);
  return product.userId === userId;
}

export function deleteProduct(productId) {
  const userId = localStorage.getItem('userId');
  if (!productBelongsTo(productId, userId)) return false;
  // Borrar de la base de datos
  return true;
}