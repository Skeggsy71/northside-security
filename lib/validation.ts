export interface LeadFormData {
  name: string;
  phone: string;
  suburb: string;
  interest?: string;
}

export interface ValidationResult {
  success: boolean;
  errors: Record<string, string>;
}

export function validateLead(data: LeadFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your name";
  }

  const phone = data.phone.replace(/[\s\-()]/g, "");
  if (!phone.match(/^0[489]\d{8}$/)) {
    errors.phone = "Please enter a valid Australian phone number";
  }

  if (!data.suburb || data.suburb.trim().length < 2) {
    errors.suburb = "Please enter your suburb";
  }

  return { success: Object.keys(errors).length === 0, errors };
}
