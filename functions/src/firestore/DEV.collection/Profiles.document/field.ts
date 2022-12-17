import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: "$PROFILES",
  _DocumentType: {
    reference: DocumentTypeEnum.SYSTEM_MASTER,
  },
};

export default field;
