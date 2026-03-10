import Abbreviations from './abbreviations';

/** @type LanguageAbbreviation[] */
const LANGUAGES_ABBREVIATION = [...Object.values(Abbreviations)] as const;

type LanguageAbbreviation = typeof LANGUAGES_ABBREVIATION[number];

export type { LanguageAbbreviation }

export default {
    ...Abbreviations,
    LANGUAGES_ABBREVIATION,
};
