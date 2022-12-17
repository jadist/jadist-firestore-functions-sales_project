import { FirestoreReference } from "../../../../../../model/Firestore.model";
interface field {
  CreatedDateTime: string;
  ItemQuantityRef: number;
  ModifiedDateTime: Date;
  ProductDescriptionRef: string;
  ProductSKURef: string;
  QuotationDetailsReference: FirestoreReference;
  _SchemaVersion: number;
}

export default field;
