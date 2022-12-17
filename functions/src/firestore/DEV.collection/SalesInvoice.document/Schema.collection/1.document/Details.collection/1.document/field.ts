import { FirestoreReference } from "../../../../../../model/Firestore.model";

interface field {
  _DetailSchemaVersion: number;
  CreatedDateTime: Date;
  DiscountInCurrency: number;
  DiscountInPercentage: number;
  DiscountTotalAmount: number;
  ItemPriceRef: number;
  ItemQuantity: number;
  ModifiedDateTime: Date;
  ProductDescriptionRef: string;
  ProductReference: FirestoreReference;
  ProductSKURef: string;
  ProductTitleRef: string;
  QuotationDetailReference: FirestoreReference;
  TotalAmount: number;
}

export default field;
