import { FirestoreReference } from "../../../../model/Firestore.model";

interface field {
  _SchemaVersion: number;
  AccessTypeReference: FirestoreReference;
  CreatedDateTime?: Date;
  DocumentTypeReference: FirestoreReference;
  ModifiedDateTime?: Date;
}

export default field;
