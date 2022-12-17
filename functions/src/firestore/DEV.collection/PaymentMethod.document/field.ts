import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: "$PAYMENT_METHOD",
  _DocumentType: {
    reference: DocumentTypeEnum.SYSTEM_MASTER,
  },
};

export default field;
