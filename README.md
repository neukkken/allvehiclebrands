# vehicle-brands

A comprehensive list of global car and motorcycle brands with metadata.

## Data

- **398 car brands**
- **340 motorcycle brands**
- Covers 30+ countries
- Each brand includes: name, type (`car` / `motorcycle` / `both`), country, status (`active` / `inactive` / `defunct`), and optional corporate group

## Install

```bash
npm install vehicle-brands
```

## Usage

```ts
import { carBrands, motorcycleBrands, allBrands } from 'vehicle-brands'
import { brandsByCountry, brandsByType, activeBrands, searchBrands } from 'vehicle-brands'

// Get all active Japanese brands
const japanese = brandsByCountry(allBrands, 'Japan')
const active = activeBrands(japanese)

// Search brands
const results = searchBrands(allBrands, 'Toyota')
```

## API

### Data
- `carBrands` — Array of car brands
- `motorcycleBrands` — Array of motorcycle brands
- `allBrands` — Deduplicated combined array

### Filters
- `brandsByCountry(brands, country)`
- `brandsByGroup(brands, group)`
- `brandsByType(brands, type)`
- `brandsByStatus(brands, status)`
- `activeBrands(brands)`
- `inactiveBrands(brands)`
- `searchBrands(brands, query)`
- `getCountries(brands)`
- `getGroups(brands)`

### Constants
- `COUNTRIES` — Country code → name mapping
- `GROUPS` — Corporate group constants

## License

MIT
