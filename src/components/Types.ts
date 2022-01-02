
export type SortingType = "ASC" | "DESC"
export type DocumentType = 'CPF' | "CNPJ"

export type Address = {
    postalCode: string,
    address: string,
    numberAddress: Number,
    complement: string,
    district: string,
    uf: string,
    city: string
}

export type Company = {
    id: string
    image: string,
    documentType: DocumentType,
    document: string,
    name: string,
    email: string,
    openingDate: Date,
    address: Address
}