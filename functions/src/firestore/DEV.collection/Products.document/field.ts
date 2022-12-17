import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/FirstLevelDocument/DocumentTypeEnum";
import { DocumentIdentifierEnum } from "../../text/FirstLevelDocument/DocumentIdentifierEnum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: DocumentIdentifierEnum.Products,
  _DocumentType: {
    reference: DocumentTypeEnum.MASTER,
  },
};

export default field;
