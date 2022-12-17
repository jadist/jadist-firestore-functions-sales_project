import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: "$PAYMENT_PROVIDER",
  _DocumentType: {
    reference: DocumentTypeEnum.MASTER,
  },
};

export default field;
