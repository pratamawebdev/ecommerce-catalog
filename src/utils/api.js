export async function fetchData(index) {
  const res = await fetch(`https://fakestoreapi.com/products/${index}`);
  const result = await res.json();
  return result;
}
