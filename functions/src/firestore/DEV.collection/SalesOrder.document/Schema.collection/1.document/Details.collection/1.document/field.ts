import { FirestoreReference } from "../../../../../../model/Firestore.model";

interface field {
  _SchemaVersion: number;
  CreatedDateTime?: Date;
  ItemPriceRef: number;
  ItemQuantity: number;
  ModifiedDateTime?: Date;
  ProductDescriptionRef: string;
  ProductSKURef: string;
  ProductTitleRef: string;
  QuotationReference: FirestoreReference;
  TotalAmount: number;
}

export default field;
