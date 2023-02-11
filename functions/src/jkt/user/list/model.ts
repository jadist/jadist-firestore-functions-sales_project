import * as ur from "../role/model";
export const UserListCollectionName = "USER-LIST";
export const UserListSuperAdminKey = "UserListSuperAdminKey";

export interface UserListDocumentModel {
  UserRoleReference: string;
  Username: string;
  EmailAddress: string;
  FullName: string;
  PhoneNo: number;
  DocVersion: number;
}

export interface UserTypeModel {
  Version?: {
    "1": never;
  };
  [UserListCollectionName]: {
    [key: string]: UserListDocumentModel;
  }[];
}

/**
 * Collection Name use CAPITAL, for System Data
 * Document No use Random String data, of Firebase Firestore random string
 * Of which has length of 20 char
 */
export const UserRoleSystemData: UserTypeModel = {
  [UserListCollectionName]: [
    {
      [UserListSuperAdminKey]: {
        // eslint-disable-next-line max-len
        UserRoleReference: `/${ur.UserRoleCollectionName}/${ur.UserRoleSuperAdminKey}`,
        Username: "sa",
        EmailAddress: "",
        FullName: "Super Admin",
        PhoneNo: 621234567890,
        DocVersion: 1,
      },
    },
  ],
};
