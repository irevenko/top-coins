export function formatDate(dateStr) {
  const parts = dateStr.split('T');
  return parts[0].toString();
}

export function sortByPrice(response) {
  const sorted = response.sort((a, b) => b.current_price - a.current_price);
  return sorted;
}

export function sortByMarketCap(response) {
  const sorted = response.sort((a, b) => b.market_cap - a.market_cap);
  return sorted;
}

export function sortByTotalVolume(response) {
  const sorted = response.sort((a, b) => b.total_volume - a.total_volume);
  return sorted;
}

export function sortBySupply(response) {
  const sorted = response.sort((a, b) => b.circulating_supply - a.circulating_supply);
  return sorted;
}
