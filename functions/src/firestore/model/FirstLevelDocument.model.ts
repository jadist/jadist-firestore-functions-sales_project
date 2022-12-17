import { FirestoreReference } from "./Firestore.model";
export interface FirstLevelDocumentModel {
  TransactionNoInitial?: string;
  _DocumentIdentifier: string;
  _DocumentType: FirestoreReference;
}
