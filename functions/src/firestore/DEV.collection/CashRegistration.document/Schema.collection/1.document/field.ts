interface field {
  AsAdminNotes: string;
  AsAdminUserFullNameRef: string;
  AsAdminUserReference: {
    reference: string;
  };
  AsDeliveryManNotes: string;
  AsDeliveryManUserFullNameRef: string;
  AsDeliveryManUserReference: {
    reference: string;
  };
  CashAmount: number;
  CashRegistrationNo: string;
  CashRegistrationNotes: string;
  CreatedDateTime: Date;
  ModifiedDateTime: Date;
  _SchemaVersion: number;
}

export default field;
