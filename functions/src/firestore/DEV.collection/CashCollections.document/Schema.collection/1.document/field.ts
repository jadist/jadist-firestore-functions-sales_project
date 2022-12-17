import { FirestoreReference } from "../../../../model/Firestore.model";

interface field {
  AsDeliveryManUserFullNameRef: string;
  AsDeliveryManUserNotes: string;
  AsDeliveryManUserReference: FirestoreReference;
  CashAmount: number;
  CashCollectionNo: string;
  CashCollectionNotes: string;
  CreatedDateTime: string;
  ModifiedDateTime: Date;
  PayerDescription: string;
  PayerName: string;
  _SchemaVersion: number;
}

export default field;
