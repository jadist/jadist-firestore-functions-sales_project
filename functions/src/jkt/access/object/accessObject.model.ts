import * as ur from "../../user/role/userRole.model";
import * as ul from "../../user/list/userList.model";

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
 * This module will populate:
 * 1. Master Data
 */
export const AccessObjectSystemData: AccessObjectModel = {
  [AccessObjectCollectionName]: [
    {
      AccessObjectKey1IsUserRole: {
        AccessCode: ur.UserRoleCollectionName,
        ObjectName: "User Role",
        ObjectDescription: "User Role Object",
        DocVersion: 1,
      },
    },
    {
      AccessObjectKey2IsUserList: {
        AccessCode: ul.UserListCollectionName,
        ObjectName: "User List",
        ObjectDescription: "User List Object",
        DocVersion: 1,
      },
    },
    {
      AccessObjectKey3IsAccessObject: {
        AccessCode: AccessObjectCollectionName,
        ObjectName: "Access Object",
        ObjectDescription: "Access Object, Object",
        DocVersion: 1,
      },
    },
  ],
};
