import { FirestoreReference } from "../../../../../../model/Firestore.model";

interface field {
  CreatedDateTime?: Date;
  DiscountInCurrency: number;
  DiscountInPercentage: number;
  DiscountTotalAmount: number;
  ItemPriceRef: number;
  ItemQuantity: number;
  ModifiedDateTime?: Date;
  ProductReference: FirestoreReference;
  TotalAmount: number;
  _SchemaVersion: number;
}

export default field;
