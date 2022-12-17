import * as schema from "../../Schema.collection/1.document/field";
import { DocumentIdentifierEnum } from "../../../../text/FirstLevelDocument/DocumentIdentifierEnum";

const field: schema.default = {
  OrderOptionsReference: {
    reference: "",
  },
  SalesNo: "",
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
    DocumentIdentifierEnum.SalesClosure,
  ],
  _SchemaVersion: 1,
};

export default field;
