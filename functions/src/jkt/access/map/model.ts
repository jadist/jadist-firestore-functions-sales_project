/* eslint-disable max-len */
import * as ul from "../../user/list/model";
import { AccessObjectEnum } from "../object/enum";

export const RoleAccessMapCollectionName = "ROLE-ACCESS-MAP";

export interface RoleAccessMapDocumentModel {
  UserRoleReference: string;
  AccessObjectReference: string;
  Create: boolean;
  Read: boolean;
  Update: boolean;
  Delete: boolean;
  DocVersion: number;
}

export interface RoleAccessMapModel {
  Version?: {
    "1": never;
  };
  [RoleAccessMapCollectionName]: {
    [key: string]: RoleAccessMapDocumentModel;
  }[];
}

/**
 * Collection Name use CAPITAL, for System Data
 * Document No use Random String data, of Firebase Firestore random string
 * Of which has length of 20 char
 */
export const RoleAccessMapSystemData: RoleAccessMapModel = {
  [RoleAccessMapCollectionName]: [
    {
      RoleAccessMapKey1IsUserRole: {
        UserRoleReference: `${ul.UserListCollectionName}/${ul.UserListSuperAdminKey}`,
        AccessObjectReference: `${ul.UserListCollectionName}/${ul.UserListSuperAdminKey}`,
        Create: true,
        Read: true,
        Update: true,
        Delete: true,
        DocVersion: 1,
      },
    },
    {
      RoleAccessMapKey2IsUserList: {
        UserRoleReference: `${ul.UserListCollectionName}/${ul.UserListSuperAdminKey}`,
        AccessObjectReference: `${AccessObjectEnum.AccessObjectKey2IsUserList}`,
        Create: true,
        Read: true,
        Update: true,
        Delete: true,
        DocVersion: 1,
      },
    },
    {
      RoleAccessMapKey3IsAccessObject: {
        UserRoleReference: `${ul.UserListCollectionName}/${ul.UserListSuperAdminKey}`,
        AccessObjectReference: `${AccessObjectEnum.AccessObjectKey3IsAccessObject}`,
        Create: true,
        Read: true,
        Update: true,
        Delete: true,
        DocVersion: 1,
      },
    },
  ],
};