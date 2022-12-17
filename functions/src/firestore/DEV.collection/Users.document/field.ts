import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: "$USERS",
  _DocumentType: {
    reference: DocumentTypeEnum.NESTED_MASTER,
  },
};

export default field;
