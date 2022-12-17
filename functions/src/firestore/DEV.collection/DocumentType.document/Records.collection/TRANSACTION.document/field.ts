import * as schema from "../../Schema.collection/1.document/field";

const field: schema.default = {
  UserAccess: {
    Create: true,
    Delete: true,
    Read: true,
    Update: true,
  },
  _SchemaVersion: 1,
};

export default field;
