import {} from "../../../../model/Firestore.model";
interface field {
  CreatedDateTime?: Date;
  DocumentTypeDescription?: string;
  DocumentTypeName?: string;
  ModifiedDateTime?: Date;
  UserAccess: {
    Create: boolean;
    Delete: boolean;
    Read: boolean;
    Update: boolean;
  };
  _SchemaVersion: number;
}

export default field;
