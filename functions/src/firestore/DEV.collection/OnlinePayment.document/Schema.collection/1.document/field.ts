import { FirestoreReference } from "../../../../model/Firestore.model";
interface field {
  CreatedDateTime: Date;
  ModifiedDateTime: Date;
  PaymentMethodNameref: string;
  PaymentMethodReference: FirestoreReference;
  PaymentNotes: string;
  PaymentProfiderNameref: string;
  PaymentProviderReference: FirestoreReference;
  PaymentReferenceNo: string;
  _SchemaVersion: number;
}

export default field;
