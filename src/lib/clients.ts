export type ClientInput = {
  name: string;
  phone: string | null;
  email: string | null;
  notes: string | null;
};

export function parseClientForm(form: FormData): {
  values: ClientInput;
  error?: string;
} {
  const get = (k: string) => String(form.get(k) ?? "").trim();

  const values: ClientInput = {
    name: get("name"),
    phone: get("phone") || null,
    email: get("email") || null,
    notes: get("notes") || null,
  };

  if (!values.name) return { values, error: "El nombre es obligatorio" };
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
    return { values, error: "El correo no es válido" };
  }
  return { values };
}
