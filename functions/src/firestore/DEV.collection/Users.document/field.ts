import { FirstLevelDocumentModel } from "../../model/FirstLevelDocument.model";
import { DocumentTypeEnum } from "../../text/FirstLevelDocument/DocumentTypeEnum";
import { DocumentIdentifierEnum } from "../../text/FirstLevelDocument/DocumentIdentifierEnum";

const field: FirstLevelDocumentModel = {
  _DocumentIdentifier: DocumentIdentifierEnum.Users,
  _DocumentType: {
    reference: DocumentTypeEnum.NESTED_MASTER,
  },
};

export default field;
