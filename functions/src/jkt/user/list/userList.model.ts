export const UserListCollectionName = "USER-LIST";

export interface UserListDocumentModel {
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
        Username: "sa",
        EmailAddress: "",
        FullName: "Super Admin",
        PhoneNo: 621234567890,
        DocVersion: 1,
      },
    },
  ],
};
