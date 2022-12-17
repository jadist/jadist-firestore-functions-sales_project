import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: "$ORDER_OPTION",
  _DocumentType: {
    reference: DocumentTypeEnum.SYSTEM_TRANSACTION,
  },
};

export default field;
