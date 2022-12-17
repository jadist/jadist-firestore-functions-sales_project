import { FirestoreReference } from "../../../../model/Firestore.model";

interface field {
  _SchemaVersion: number;
  AsAdminUserReference: FirestoreReference;
  CreatedDateTime: Date;
  ModifiedDateTime?: Date;
}

export default field;
