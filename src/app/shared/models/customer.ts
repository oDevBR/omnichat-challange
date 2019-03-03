export interface Customer {
    objectId: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    lastName: string;
    acceptsMarketing: string;
    email: string;
    phoneAreaCode: string;
    phoneCountryCode: string;
    phoneNumber: string;
    businessName: string;
    birthDate: string;
    businessAccount: boolean;
    taxDocumentNumber: string;
    address: Address[];
    gender: string;
}

interface Address {
    name: string;
    addressLine1: string;
    addressLine2: string;
    number: string;
    suburb: string;
    state: string;
    country: string;
    zip: string;
}
