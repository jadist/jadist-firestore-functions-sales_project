import * as schema from "../../Schema.collection/1.document/field";

const field: schema.default = {
  UserAccess: {
    map: {
      Create: true,
      Delete: false,
      Read: true,
      Update: true,
    },
  },
  _SchemaVersion: 1,
};

export default field;
