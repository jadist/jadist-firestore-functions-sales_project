import { FirestoreReference } from "../../../../model/Firestore.model";

interface field {
  CreatedDateTime?: Date[];
  ModifiedDateTime?: Date[];
  OrderOptions: FirestoreReference[];
  Reference: FirestoreReference[];
  SalesNo: string;
  _SchemaVersion: number;
}

export default field;
