export interface UserRoleModel {
  version?: {
    "1": any;
  };
  "USER-ROLE": {
    [key: string]: {
      UniqueCode: string;
      RoleName: string;
      RoleDescription: string;
    };
  }[];
}

/**
 * Collection Name use CAPITAL, for System Data
 * Document No use Random String data, of Firebase Firestore random string
 * Of which has length of 20 char
 */
export const UserRoleSystemData: UserRoleModel = {
  "USER-ROLE": [
    {
      UserRoleRandomKey001: {
        UniqueCode: "SALES",
        RoleName: "Salesperson",
        RoleDescription: "Daily Salesperson",
      },
    },
    {
      UserRoleRandomKey002: {
        UniqueCode: "CONSUMER",
        RoleName: "Consumer",
        RoleDescription: "Someone who use Jadist services",
      },
    },
    {
      UserRoleRandomKey003: {
        UniqueCode: "ADMIN-OF-SALES",
        RoleName: "Admin of Sales",
        RoleDescription: "Someone who manage Jadist's Consumer",
      },
    },
    {
      UserRoleRandomKey004: {
        UniqueCode: "DELIVERY-MAN",
        RoleName: "Delivery Man",
        RoleDescription:
          "Someone who responsible of delivering Jadist's products",
      },
    },
    {
      UserRoleRandomKey005: {
        UniqueCode: "ADMIN-OF-FINANCE",
        RoleName: "Admin of Finance",
        RoleDescription:
          "Someone who responsible of managing Cash Registration",
      },
    },
  ],
};
