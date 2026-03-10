# [TusinskiDev] Languages Abbreviations

A TypeScript/JavaScript library providing standardized language abbreviations for 232 languages worldwide. Perfect for internationalization (i18n) and localization (l10n) projects.

## Features

- ✅ **232 Language Abbreviations**: Comprehensive coverage of languages from around the world
- ✅ **TypeScript Support**: Full type safety with TypeScript definitions
- ✅ **Zero Dependencies**: Lightweight library with no external dependencies
- ✅ **Tree Shaking**: Import only what you need

## Installation

```bash
npm install td-languages-abbreviations
```

or

```bash
yarn add td-languages-abbreviations
```

## Usage

### Basic Usage

```typescript
import Abbreviations from 'td-languages-abbreviations';

// Access individual language abbreviations
console.log(Abbreviations.ENGLISH); // 'en'
console.log(Abbreviations.POLISH); // 'pl'
console.log(Abbreviations.GERMAN); // 'de'
```

### Using the Language Array

```typescript
import { LANGUAGES_ABBREVIATION } from 'td-languages-abbreviations';

// Get all language abbreviations as an array
console.log(LANGUAGES_ABBREVIATION.length); // 232
console.log(LANGUAGES_ABBREVIATION.includes('en')); // true
```

### TypeScript Support

```typescript
import type { LanguageAbbreviation } from 'td-languages-abbreviations';

function setLanguage(lang: LanguageAbbreviation) {
  // TypeScript will ensure only valid language codes are passed
  console.log(`Setting language to: ${lang}`);
}

setLanguage('en'); // ✅ Valid
setLanguage('invalid'); // ❌ TypeScript error
```

### Available Languages

The library includes abbreviations for languages such as:

- English (`en`)
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Chinese (`zh`)
- Japanese (`ja`)
- Arabic (`ar`)
- Russian (`ru`)
- Portuguese (`pt`)
- Italian (`it`)
- And 222 more...

## API Reference

### Constants

All language abbreviations are available as named constants:

```typescript
import Abbreviations from 'td-languages-abbreviations';

Abbreviations.ENGLISH     // 'en'
Abbreviations.SPANISH     // 'es'
Abbreviations.FRENCH      // 'fr'
// ... and so on
```

### LANGUAGES_ABBREVIATION Array

A readonly array containing all 232 language abbreviations:

```typescript
import { LANGUAGES_ABBREVIATION } from 'td-languages-abbreviations';

type LanguageAbbreviation = typeof LANGUAGES_ABBREVIATION[number];
```

### TypeScript Types

```typescript
import type { LanguageAbbreviation } from 'td-languages-abbreviations';

// Use for type-safe language handling
interface UserPreferences {
  language: LanguageAbbreviation;
  fallbackLanguage: LanguageAbbreviation;
}
```

## Examples

### Language Selector Component

```typescript
import React from 'react';
import { LANGUAGES_ABBREVIATION } from 'td-languages-abbreviations';

const LanguageSelector: React.FC = () => {
  return (
    <select>
      {LANGUAGES_ABBREVIATION.map(lang => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
```

### Validation Function

```typescript
import type { LanguageAbbreviation } from 'td-languages-abbreviations';

function isValidLanguage(lang: string): lang is LanguageAbbreviation {
  return LANGUAGES_ABBREVIATION.includes(lang as LanguageAbbreviation);
}

// Usage
if (isValidLanguage(userInput)) {
  // TypeScript knows userInput is a valid LanguageAbbreviation
  setUserLanguage(userInput);
}
```

### Internationalization Helper

```typescript
import Abbreviations from 'td-languages-abbreviations';

const SUPPORTED_LANGUAGES = [
  Abbreviations.ENGLISH,
  Abbreviations.SPANISH,
  Abbreviations.FRENCH,
  Abbreviations.GERMAN
] as const;

function getLocalizedContent(language: string) {
  if (!SUPPORTED_LANGUAGES.includes(language as any)) {
    throw new Error(`Unsupported language: ${language}`);
  }

  // Load localized content...
}
```

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### Formatting

```bash
npm run format
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Jarosław Tusiński**
