type NationalityEligibility = {
  visaFree: boolean;
  transit240: boolean;
};

const nationalityEligibilityMap: Record<string, NationalityEligibility> = {
  GB: { visaFree: true, transit240: true }, // UK
  US: { visaFree: false, transit240: true }, // USA
  // Add more countries...
};

export const checkNationalityEligibility = (nationalities: string[]) => {
  return nationalities.map((nationality) => ({
    nationality,
    eligibility: nationalityEligibilityMap[nationality] || {
      visaFree: false,
      transit240: false,
    },
  }));
};

export type { NationalityEligibility };
