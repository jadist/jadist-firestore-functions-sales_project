import * as schema from "../../Schema.collection/1.document/field";

const field: schema.default = {
  UserAccess: {
    map: {
      Create: false,
      Delete: false,
      Read: true,
      Update: false,
    },
  },
  _SchemaVersion: 1,
};

export default field;
