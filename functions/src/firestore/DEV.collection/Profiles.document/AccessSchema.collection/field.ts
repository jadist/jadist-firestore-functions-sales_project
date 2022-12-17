import { FirestoreReference } from "../../../model/Firestore.model";
interface field {
  AccessTypeReference: FirestoreReference;
  CreatedDateTime?: Date;
  DocumentIdentifierReference: FirestoreReference;
  ModifiedDateTime?: Date;
  ProfileReference: FirestoreReference;
  _AccessSchemaVersion: number;
}

export default field;
