import { FirestoreReference } from "../../../../../../model/Firestore.model";

interface field {
  CreatedDateTime?: Date;
  DiscountInPercentage?: number;
  ItemPrice: number;
  ModifiedDateTime?: Date;
  ProductReference: FirestoreReference;
  ProductSKURef?: string;
  ProductDescriptionRef?: string;
  _SchemaVersion: number;
}

export default field;
