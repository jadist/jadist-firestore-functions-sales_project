import { FirestoreReference } from "./Firestore.model";
import { TransactionNoInitialEnum } from "../text/FirstLevelDocument/TransactionNoInitialEnum";
import { DocumentIdentifierEnum } from "../text/FirstLevelDocument/DocumentIdentifierEnum";

export interface FirstLevelDocumentModel {
  TransactionNoInitial?: TransactionNoInitialEnum;
  _DocumentIdentifier: DocumentIdentifierEnum;
  _DocumentType: FirestoreReference;
}
