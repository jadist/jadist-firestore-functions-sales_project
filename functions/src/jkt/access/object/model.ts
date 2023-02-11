import * as ur from "../../user/role/model";
import * as ul from "../../user/list/model";

import { AccessObjectEnum } from "./enum";

export const AccessObjectCollectionName = "ACCESS-OBJECT";

export interface AccessObjectDocumentModel {
  AccessCode: string;
  ObjectName: string;
  ObjectDescription: string;
  DocVersion: number;
}

export interface AccessObjectModel {
  Version?: {
    "1": never;
  };
  [AccessObjectCollectionName]: {
    [key: string]: AccessObjectDocumentModel;
  }[];
}

/**
 * Collection Name use CAPITAL, for System Data
 * Document No use Random String data, of Firebase Firestore random string
 * Of which has length of 20 char
 */
export const AccessObjectSystemData: AccessObjectModel = {
  [AccessObjectCollectionName]: [
    {
      [AccessObjectEnum.AccessObjectKey1IsUserRole]: {
        AccessCode: ur.UserRoleCollectionName,
        ObjectName: "User Role",
        ObjectDescription: "User Role Object",
        DocVersion: 1,
      },
    },
    {
      [AccessObjectEnum.AccessObjectKey2IsUserList]: {
        AccessCode: ul.UserListCollectionName,
        ObjectName: "User List",
        ObjectDescription: "User List Object",
        DocVersion: 1,
      },
    },
    {
      [AccessObjectEnum.AccessObjectKey3IsAccessObject]: {
        AccessCode: AccessObjectCollectionName,
        ObjectName: "Access Object",
        ObjectDescription: "Access Object, Object",
        DocVersion: 1,
      },
    },
  ],
};
