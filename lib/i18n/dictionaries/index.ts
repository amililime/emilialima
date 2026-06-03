import type { Dict, Locale } from "../types";
import en from "./en";
import es from "./es";
import ptBR from "./pt-BR";
import nl from "./nl";
import de from "./de";

export const DICTIONARIES: Record<Locale, Dict> = {
  en,
  es,
  "pt-BR": ptBR,
  nl,
  de,
};
