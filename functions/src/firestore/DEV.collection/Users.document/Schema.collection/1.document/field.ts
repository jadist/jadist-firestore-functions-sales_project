import { FirestoreReference } from "../../../../model/Firestore.model";

interface field {
  CreatedDateTime?: Date;
  EmailAddress: string;
  IsLocked: boolean;
  JoinDateTime: Date;
  ModifiedDateTime?: Date;
  PhoneNo: number;
  UserReference: FirestoreReference;
  UserFullName: string;
  UserNo: string;
  Username: string;
  ValidatedDateTimeRef: Date;
  ValidatedReference: FirestoreReference;
  _SchemaVersion: number;
}

export default field;
