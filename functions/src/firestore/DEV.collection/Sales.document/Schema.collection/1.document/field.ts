import { FirestoreReference } from "../../../../model/Firestore.model";
import { DocumentIdentifierEnum } from "../../../../text/FirstLevelDocument/DocumentIdentifierEnum";

interface field {
  CreatedDateTime?: Date[];
  ModifiedDateTime?: Date[];
  OrderOptionsReference?: FirestoreReference;
  SalesNo: string;
  TransactionsDescription?: string[];
  TransactionsExecutionOrder: [
    DocumentIdentifierEnum.Quotation,
    DocumentIdentifierEnum.PurchaseOrder,
    DocumentIdentifierEnum.SalesOrder,
    DocumentIdentifierEnum.SalesInvoice,
    DocumentIdentifierEnum.DeliveryOrder,
    DocumentIdentifierEnum.SalesInvoice,
    DocumentIdentifierEnum.ReceivedNotes,
    DocumentIdentifierEnum.CashCollections,
    DocumentIdentifierEnum.CashRegistration,
    DocumentIdentifierEnum.SalesClosure
  ];
  TransactionsReference?: FirestoreReference[];
  _SchemaVersion: number;
}

export default field;
