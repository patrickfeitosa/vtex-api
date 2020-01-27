import getSkuSeller from './getSkuSeller';

const getSkuInstallments = (sku: IProductItem, sellerId?: number | string) => {
  const { commertialOffer }: ISeller = getSkuSeller(sku, sellerId);
  const { Installments } = commertialOffer;

  // Get by min price value
  return Installments.reduce(
    (prev: IObj, current: IObj) => (prev.Value < current.Value ? prev : current),
    {},
  );
};

export default getSkuInstallments;
