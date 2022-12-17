import { FirestoreReference } from "../../../model/Firestore.model";
interface field {
  AccessTypeReference: {
    reference: string;
  };
  CreatedDateTime?: Date;
  DocumentIdentifierReference: FirestoreReference;
  ModifiedDateTime?: Date;
  ProfileReference: FirestoreReference;
  _AccessSchemaVersion: number;
}

export default field;
