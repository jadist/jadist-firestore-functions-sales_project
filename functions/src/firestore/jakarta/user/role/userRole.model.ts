export const UserRoleCollectionName = "USER-ROLE";

export interface UserRoleDocumentModel {
  UniqueCode: string;
  RoleName: string;
  RoleDescription: string;
  DocVersion: string;
}

export interface UserRoleModel {
  Version?: {
    "1": never;
  };
  [UserRoleCollectionName]: {
    [key: string]: UserRoleDocumentModel;
  }[];
}

/**
 * Collection Name use CAPITAL, for System Data
 * Document No use Random String data, of Firebase Firestore random string
 * Of which has length of 20 char
 */
export const UserRoleSystemData: UserRoleModel = {
  [UserRoleCollectionName]: [
    {
      UserRoleRandomKey001: {
        UniqueCode: "SALES",
        RoleName: "Salesperson",
        RoleDescription: "Daily Salesperson",
        DocVersion: "1",
      },
    },
    {
      UserRoleRandomKey002: {
        UniqueCode: "CONSUMER",
        RoleName: "Consumer",
        RoleDescription: "Someone who use Jadist services",
        DocVersion: "1",
      },
    },
    {
      UserRoleRandomKey003: {
        UniqueCode: "ADMIN-OF-SALES",
        RoleName: "Admin of Sales",
        RoleDescription: "Someone who manage Jadist's Consumer",
        DocVersion: "1",
      },
    },
    {
      UserRoleRandomKey004: {
        UniqueCode: "DELIVERY-MAN",
        RoleName: "Delivery Man",
        RoleDescription:
          "Someone who responsible of delivering Jadist's products",
        DocVersion: "1",
      },
    },
    {
      UserRoleRandomKey005: {
        UniqueCode: "ADMIN-OF-FINANCE",
        RoleName: "Admin of Finance",
        RoleDescription:
          "Someone who responsible of managing Cash Registration",
        DocVersion: "1",
      },
    },
  ],
};
