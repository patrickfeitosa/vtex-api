import catalogRequest from './services/catalogRequest';
import trim from './utils/trim';

/**
 * @module catalog-system
 */
const searchProduct = ({
  ft,
  fq,
  orderBy,
  from,
  to,
  priceRange,
  collection,
  salesChannel,
  seller,
  headers,
  accountName,
  auth,
}: ISearchProductParams): Promise<{
  status: number, json: IProduct[] | [], headers: Headers
}> => {
  let query = '';

  if (ft) query += `ft=${trim(ft)}`;
  if (fq) query += Array.isArray(fq) ? fq.map((val) => `fq=${val}`).join('&') : `&fq=${fq}`;
  if (orderBy) query += `&O=${orderBy}`;
  if (from !== undefined && from > -1) query += `&_from=${from}`;
  if (to !== undefined && to > -1) query += `&_to=${to}`;
  if (priceRange) query += `&fq=P:[${priceRange}]`;
  if (collection) query += `&fq=productClusterIds:${collection}`;
  if (salesChannel) query += `&fq=isAvailablePerSalesChannel_${salesChannel}:1`;
  if (seller) query += `fq=sellerIds:${seller}`;
  if (query.charAt(0) === '&') query = query.substr(1);

  return catalogRequest({
    path: '/products/search',
    query,
    headers,
    accountName,
    auth,
  });
};

export default searchProduct;