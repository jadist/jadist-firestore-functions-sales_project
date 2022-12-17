import { FirestoreReference } from "../../../../model/Firestore.model";
interface field {
  AsAdminNotes: string;
  AsAdminUserFullNameRef: string;
  AsAdminUserReference: FirestoreReference;
  AsDeliveryManNotes: string;
  AsDeliveryManUserFullNameRef: string;
  AsDeliveryManUserReference: FirestoreReference;
  CashAmount: number;
  CashRegistrationNo: string;
  CashRegistrationNotes: string;
  CreatedDateTime: Date;
  ModifiedDateTime: Date;
  _SchemaVersion: number;
}

export default field;
