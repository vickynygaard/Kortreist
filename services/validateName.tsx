import leoProfanity from "leo-profanity";

interface ValidateOptions {
    minLength?: number;
    maxLength?: number;
    label?: string; 
  }

export function validateName(value: string, options?: ValidateOptions): string | null {
    const minLength = options?.minLength ?? 3;
    const maxLength = options?.maxLength ?? 15;
    const label = options?.label ?? "Kallenavn";

  // Check length
  if (value.length < minLength) {
    return `${label} må være minst ${minLength} tegn.`;
  }
  if (value.length > maxLength) {
    return `${label} kan ikke være lengre enn ${maxLength} tegn.`;
  }
  // Check allowed characters (letters, numbers, underscores, spaces, and Norwegian characters)
  if (!/^[A-Za-zÆØÅæøå0-9_ ]+$/.test(value)) {
    return "Kallenavn kan kun inneholde bokstaver, tall, mellomrom og understrek.";
  }
  // Use leoProfanity for banned word checking
  if (leoProfanity.check(value) || leoProfanity.list().some((badWord) => value.toLowerCase().includes(badWord))) {
    return "Dette kallenavnet inneholder upassende språk.";
  }
  return null;
}
