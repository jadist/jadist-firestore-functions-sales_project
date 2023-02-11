import * as ur from "../role/userRole.model";
export const UserListCollectionName = "USER-LIST";

export interface UserListDocumentModel {
  UserRoleReference: {
    Reference?: true;
    Path: string;
  };
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
      SuperAdminUserKey: {
        // eslint-disable-next-line max-len
        UserRoleReference: {
          Path: `/${ur.UserRoleCollectionName}/${ur.UserRoleSuperAdminKey}`,
        },
        Username: "sa",
        EmailAddress: "",
        FullName: "Super Admin",
        PhoneNo: 621234567890,
        DocVersion: 1,
      },
    },
  ],
};
