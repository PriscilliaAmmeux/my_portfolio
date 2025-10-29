export function slugify(
  input: string,
  { maxLength = 100 }: { maxLength?: number } = {}
): string {
  if (!input) return "";

  // Normalize and remove diacritics (portable)
  const withoutDiacritics = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); 

  const slug = withoutDiacritics
    .toLowerCase()
    .replace(/&+/g, "and") 
    .replace(/[^a-z0-9]+/g, "-") 
    .replace(/(^-|-$)/g, "") 
    .slice(0, maxLength) 
    .replace(/(^-|-$)/g, ""); 

  return slug || "item";
}
