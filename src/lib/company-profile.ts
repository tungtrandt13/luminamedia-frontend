import { companyIdentity } from "@/lib/compliance-content";

export const companyProfile = {
  legalNameVi: companyIdentity.name,
  displayNameVi: companyIdentity.name,
  legalNameEn: companyIdentity.name,
  brandName: "Lumina Media Agency",
  domain: "https://luminamedia.vn",
  apiContactEmail: companyIdentity.email,
  registrationNumber: companyIdentity.registrationNumber,
  taxId: companyIdentity.taxId,
  registrationCountry: companyIdentity.registrationCountry,
  phone: companyIdentity.phone,
  addressVi: companyIdentity.address,
  addressEn: companyIdentity.address,
};
