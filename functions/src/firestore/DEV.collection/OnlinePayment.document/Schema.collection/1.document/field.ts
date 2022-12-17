interface field {
  CreatedDateTime: Date;
  ModifiedDateTime: Date;
  PaymentMethodNameref: string;
  PaymentMethodReference: {
    reference: string;
  };
  PaymentNotes: string;
  PaymentProfiderNameref: string;
  PaymentProviderReference: {
    reference: string;
  };
  PaymentReferenceNo: string;
  _SchemaVersion: number;
}

export default field;
