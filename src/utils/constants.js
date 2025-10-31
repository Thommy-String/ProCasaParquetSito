// Dati Aziendali (DEVONO CORRISPONDERE AL TUO GBP)
export const COMPANY_NAME = "Pro Casa Parquet"; // Il tuo nome commerciale
export const MAIN_CATEGORY = "Posa parquet";
export const PRIMARY_CITY = "Piacenza";

// Usa il numero di telefono REALE che hai sul GBP
export const PHONE_NUMBER = "+393518530582"; 
export const EMAIL_ADDRESS = "info@procasapiacenza.it"; // La tua email
export const WEBSITE_URL = "https://www.procasapiacenza.it"; // Il tuo dominio futuro

// Questo è l'indirizzo di REGISTRAZIONE (es. casa tua)
// Serve per lo Schema Markup, anche se è NASCOSTO sul GBP
export const SCHEMA_ADDRESS = {
  streetAddress: "Via Roma 10", // Sostituisci con il tuo indirizzo REALE
  addressLocality: "Piacenza",
  addressRegion: "PC",
  postalCode: "29121",
  addressCountry: "IT"
};

// Coordinate GPS di Piacenza (per lo Schema)
export const SCHEMA_GEO = {
  latitude: 45.0526,
  longitude: 9.6929
};

// Queste DEVONO corrispondere alle Categorie Secondarie del tuo GBP
export const GBP_CATEGORIES = [
  "Posa Parquet",
  "Posa Resina",
  "Posa Pavimenti LVT",
  "Levigatura Parquet",
  "Ristrutturazione Pavimenti",
  "Posa Battiscopa",
];

// Queste sono le AREE DI SERVIZIO che hai inserito nel GBP
export const SERVICE_AREAS = [
  { name: "Piacenza", slug: "piacenza" },
  { name: "Cremona", slug: "cremona" },
  { name: "Lodi", slug: "lodi" },
  { name: "Parma", slug: "parma" },
  { name: "Pavia", slug: "pavia" },
  // Aggiungi le altre (fino a 20)
];