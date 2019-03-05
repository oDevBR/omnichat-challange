export interface Customer {
    objectId?: string;
    createdAt?: string;
    updatedAt?: string;
    name: string;
    lastName: string;
    acceptsMarketing: boolean;
    email: string;
    phoneAreaCode: string;
    phoneCountryCode: string;
    phoneNumber: string;
    birthDate: string;
    businessAccount?: boolean;
    businessName: any;
    address: Address;
}

interface Address {
    name?: string;
    addressLine1: string;
    addressLine2?: string;
    number: string;
    suburb: string;
    city: string;
    state: string;
    country: string;
    zip: string;
}
