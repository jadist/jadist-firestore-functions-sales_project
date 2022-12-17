import { FirestoreReference } from "../../../../model/Firestore.model";
interface field {
  AsConsumerUserAddressRef: string;
  AsConsumerUserFullNameRef: string;
  AsConsumerUserReference: FirestoreReference;
  CreatedDateTime: Date;
  DeliveryOrderNo: string;
  ModifiedDateTime: Date;
  _SchemaVersion: number;
}

export default field;
