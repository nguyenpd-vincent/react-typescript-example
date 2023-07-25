import { getIntl } from "@/locales";

const t = getIntl();
export const dayweekView = [
  {
    value: "day",
    label: t.formatMessage({
      id: "event.modal.day.0.name",
      defaultMessage: "Jour",
    }),
  },
  {
    value: "week",
    label: t.formatMessage({
      id: "event.modal.day.1.name",
      defaultMessage: "Semaine",
    }),
  },
];

export const weekData = [
  {
    id: 1,
    name: t.formatMessage({
      id: "event.modal.week.0.name",
      defaultMessage: "Lundi",
    }),
  },
  {
    id: 2,
    name: t.formatMessage({
      id: "event.modal.week.1.name",
      defaultMessage: "Mardi",
    }),
  },
  {
    id: 3,
    name: t.formatMessage({
      id: "event.modal.week.2.name",
      defaultMessage: "Mercredi",
    }),
  },
  {
    id: 4,
    name: t.formatMessage({
      id: "event.modal.week.3.name",
      defaultMessage: "Jeudi",
    }),
  },
  {
    id: 5,
    name: t.formatMessage({
      id: "event.modal.week.4.name",
      defaultMessage: "Vendredi",
    }),
  },

  {
    id: 6,
    name: t.formatMessage({
      id: "event.modal.week.5.name",
      defaultMessage: "Samedi",
    }),
  },

  {
    id: 0,
    name: t.formatMessage({
      id: "event.modal.week.6.name",
      defaultMessage: "Dimanche",
    }),
  },
];

export const frequency = [3, 5, 10, 15, 20, 30, 60];

export const weekStartDay = [
  {
    id: 7,
    label: t.formatMessage({
      id: "event.modal.startDate.7.name",
      defaultMessage: "Jour choisi",
    }),
  },
  {
    id: 1,
    label: t.formatMessage({
      id: "event.modal.startDate.1.name",
      defaultMessage: "Lundi",
    }),
  },
  {
    id: 2,
    label: t.formatMessage({
      id: "event.modal.startDate.2.name",
      defaultMessage: "Mardi",
    }),
  },
  {
    id: 3,
    label: t.formatMessage({
      id: "event.modal.startDate.3.name",
      defaultMessage: "Mercredi",
    }),
  },
  {
    id: 4,
    label: t.formatMessage({
      id: "event.modal.startDate.4.name",
      defaultMessage: "Jeudi",
    }),
  },
  {
    id: 5,
    label: t.formatMessage({
      id: "event.modal.startDate.5.name",
      defaultMessage: "Vendredi",
    }),
  },
  {
    id: 6,
    label: t.formatMessage({
      id: "event.modal.startDate.6.name",
      defaultMessage: "Samedi",
    }),
  },
  {
    id: 0,
    label: t.formatMessage({
      id: "event.modal.startDate.0.name",
      defaultMessage: "Jour choisi",
    }),
  },
];

export const selectOption = [
  {
    id: 1,
    value: "lastName",
    label: t.formatMessage({
      id: "event.modal.display.0.name",
      defaultMessage: "Jour",
    }),
  },
  {
    id: 2,
    value: "firstName",
    label: t.formatMessage({
      id: "event.modal.display.1.name",
      defaultMessage: "Prénom",
    }),
  },
  {
    id: 3,
    value: "number",
    label: t.formatMessage({
      id: "event.modal.display.2.name",
      defaultMessage: "Numéro de dossier",
    }),
  },
  {
    id: 4,
    value: "civilityTitle",
    label: t.formatMessage({
      id: "event.modal.display.3.name",
      defaultMessage: "Civilité",
    }),
  },
  {
    id: 5,
    value: "age",
    label: t.formatMessage({
      id: "event.modal.display.4.name",
      defaultMessage: "Âge",
    }),
  },
  {
    id: 6,
    value: "email",
    label: t.formatMessage({
      id: "event.modal.display.5.name",
      defaultMessage: "Adresse électronique",
    }),
  },
  {
    id: 7,
    value: "homePhoneNumber",
    label: t.formatMessage({
      id: "event.modal.display.6.name",
      defaultMessage: "Téléphone domicile",
    }),
  },
  {
    id: 8,
    value: "mobilePhoneNumber",
    label: t.formatMessage({
      id: "event.modal.display.7.name",
      defaultMessage: "Téléphone mobile",
    }),
  },
  {
    id: 9,
    value: "smsPhoneNumber",
    label: t.formatMessage({
      id: "event.modal.display.8.name",
      defaultMessage: "Téléphone sms",
    }),
  },
  {
    id: 10,
    value: "title",
    label: t.formatMessage({
      id: "event.modal.display.9.name",
      defaultMessage: "Titre du rendez-vous",
    }),
  },
  {
    id: 11,
    value: "observation",
    label: t.formatMessage({
      id: "event.modal.display.10.name",
      defaultMessage: "Commentaire du rendez-vous",
    }),
  },
  {
    id: 12,
    value: "startTime",
    label: t.formatMessage({
      id: "event.modal.display.11.name",
      defaultMessage: "Heure de début du rendez-vous",
    }),
  },
  {
    id: 13,
    value: "endTime",
    label: t.formatMessage({
      id: "event.modal.display.12.name",
      defaultMessage: "Heure de fin du rendez-vous",
    }),
  },
  {
    id: 14,
    value: "creationDate",
    label: t.formatMessage({
      id: "event.modal.display.13.name",
      defaultMessage: "Date de prise du rendez-vous",
    }),
  },
];
