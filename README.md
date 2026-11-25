# vehicle-brands

A comprehensive list of global car, motorcycle, and truck brands with metadata.

## Data

- **398 car brands**
- **340 motorcycle brands**
- **165 truck brands**
- Covers 60+ countries
- Each brand includes: name, type (`car` / `motorcycle` / `truck` / `both`), country, status (`active` / `inactive` / `defunct`), and optional corporate group

## Install

```bash
npm install vehicle-brands
```

## Usage

```ts
import { carBrands, motorcycleBrands, truckBrands, allBrands } from 'vehicle-brands'
import { brandsByCountry, brandsByType, activeBrands, searchBrands } from 'vehicle-brands'

// Get all active Japanese brands
const japanese = brandsByCountry(allBrands, 'Japan')
const active = activeBrands(japanese)

// Get all truck brands
const trucks = brandsByType(allBrands, 'truck')

// Search brands
const results = searchBrands(allBrands, 'Scania')
```

## API

### Data
- `carBrands` — Array of car brands
- `motorcycleBrands` — Array of motorcycle brands
- `truckBrands` — Array of truck brands
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
