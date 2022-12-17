import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/DocumentType.enum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: "$PRODUCTS",
  _DocumentType: {
    reference: DocumentTypeEnum.MASTER,
  },
};

export default field;
