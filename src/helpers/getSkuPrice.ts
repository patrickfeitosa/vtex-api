import getSkuSeller from './getSkuSeller';
import getSkuInstallments from './getSkuInstallments';
import fixProductSearchPrice from './fixProductSearchPrice';

const getSkuPrice = (sku: IObj, sellerId?: number | string) => {
  const seller = getSkuSeller(sku, sellerId);
  const { commertialOffer: co } = seller;
  const installments = getSkuInstallments(sku);
  const quantity = co.AvailableQuantity;
  const noListPrice = co.Price === co.ListPrice;

  return {
    available: Boolean(quantity),
    availableQuantity: quantity,
    seller: seller.sellerName,
    sellerId: seller.sellerId,
    bestPrice: fixProductSearchPrice(co.Price) || quantity,
    listPrice: noListPrice ? false : fixProductSearchPrice(co.ListPrice),
    installments: installments.NumberOfInstallments,
    installmentsValue: fixProductSearchPrice(installments.Value),
    installmentsInterestRate: installments.InterestRate,
  };
};

export default getSkuPrice;
