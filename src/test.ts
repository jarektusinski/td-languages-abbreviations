import Abbreviations from '.';
import Names from './abbreviations';

const { LANGUAGES_ABBREVIATION } = Abbreviations;

const NUMBER_OF_ABBREVIATIONS = 232;
const NUMBER_OF_REDUNDANT_ABBREVIATIONS = 5;
const LANGUAGE_KEYS = [...Object.keys(Names)] as const;

const removeDashesWithSpace = (arr: readonly string[]): string[] =>
    arr.map((arg: string) => arg.replace('_', ' '));

const sortArray = (arr: readonly string[]): string[] =>
    removeDashesWithSpace(arr).sort();

it('should contain all names', () => {
    expect(LANGUAGES_ABBREVIATION).toHaveLength(NUMBER_OF_ABBREVIATIONS);
    expect((new Set(LANGUAGES_ABBREVIATION)).size)
        .toBe(NUMBER_OF_ABBREVIATIONS - NUMBER_OF_REDUNDANT_ABBREVIATIONS);
});

it('should be sorted', () => {
    expect(removeDashesWithSpace(LANGUAGE_KEYS)).toEqual(sortArray([...LANGUAGE_KEYS]));
});
