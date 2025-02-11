export const FORM_STEPS = [
  {
    title: "Informações Pessoais",
    subTitle: "Preencha o formulário com suas informações pessoais.",
  },
  {
    title: "Informações de Endereço",
    subTitle: "Preencha o formulário com suas informações de endereço.",
  },
  {
    title: "Informações Profissionais",
    subTitle: "Preencha o formulário com suas informações profissionais.",
  },
  {
    title: "Preferências e Interesses",
    subTitle:
      "Precisamos saber quais são as suas preferências e seus interesses.",
  },
];

export const VALIDATION_STEPS = [
  ["fullName", "birthDate", "email", "phone"],
  [
    "residentialAddress.country",
    "residentialAddress.state",
    "residentialAddress.city",
    "residentialAddress.street",
    "residentialAddress.zip",
  ],
  [],
  [],
];
