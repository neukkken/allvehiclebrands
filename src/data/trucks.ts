import type { Brand } from '../types'
import { GROUPS } from '../constants/groups'

export const truckBrands: Brand[] = [
  // === USA ===
  { name: 'Freightliner', type: 'truck', country: 'United States', status: 'active', group: GROUPS.DAIMLER_TRUCK },
  { name: 'Kenworth', type: 'truck', country: 'United States', status: 'active', group: GROUPS.PACCAR },
  { name: 'Peterbilt', type: 'truck', country: 'United States', status: 'active', group: GROUPS.PACCAR },
  { name: 'Mack', type: 'truck', country: 'United States', status: 'active', group: GROUPS.VOLVO_GROUP },
  { name: 'International', type: 'truck', country: 'United States', status: 'active', group: GROUPS.NAVISTAR },
  { name: 'Western Star', type: 'truck', country: 'United States', status: 'active', group: GROUPS.DAIMLER_TRUCK },
  { name: 'Oshkosh', type: 'truck', country: 'United States', status: 'active', group: GROUPS.OSHKOSH },
  { name: 'Autocar', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Brockway', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'White', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'Diamond T', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'Sterling', type: 'truck', country: 'United States', status: 'defunct', group: GROUPS.DAIMLER_TRUCK },
  { name: 'Marmon', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'FWD', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'REO', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'Pierce', type: 'truck', country: 'United States', status: 'active', group: GROUPS.OSHKOSH },
  { name: 'Ferrara', type: 'truck', country: 'United States', status: 'active' },
  { name: 'E-One', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Seagrave', type: 'truck', country: 'United States', status: 'active' },
  { name: 'HME Ahrens-Fox', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Nikola', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Bollinger', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Terex', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Euclid', type: 'truck', country: 'United States', status: 'defunct' },
  { name: 'Hendrickson', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Workhorse', type: 'truck', country: 'United States', status: 'active' },
  { name: 'Ford Trucks', type: 'truck', country: 'United States', status: 'active', group: GROUPS.FORD },
  { name: 'Chevrolet Commercial', type: 'truck', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'GMC Commercial', type: 'truck', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'Caterpillar', type: 'truck', country: 'United States', status: 'inactive' },
  { name: 'Spartan', type: 'truck', country: 'United States', status: 'active' },

  // === CANADA ===
  { name: 'Hayes', type: 'truck', country: 'Canada', status: 'defunct' },
  { name: 'Pacific', type: 'truck', country: 'Canada', status: 'defunct' },
  { name: 'Lion Electric', type: 'truck', country: 'Canada', status: 'active' },
  { name: 'Sicard', type: 'truck', country: 'Canada', status: 'defunct' },

  // === MEXICO ===
  { name: 'DINA', type: 'truck', country: 'Mexico', status: 'active' },
  { name: 'Kenworth Mexicana', type: 'truck', country: 'Mexico', status: 'active', group: GROUPS.PACCAR },

  // === BRAZIL ===
  { name: 'Agrale', type: 'truck', country: 'Brazil', status: 'active' },
  { name: 'FNM', type: 'truck', country: 'Brazil', status: 'defunct' },
  { name: 'Volkswagen Caminhões e Ônibus', type: 'truck', country: 'Brazil', status: 'active', group: GROUPS.TRATON },

  // === GERMANY ===
  { name: 'MAN', type: 'truck', country: 'Germany', status: 'active', group: GROUPS.TRATON },
  { name: 'Mercedes-Benz Trucks', type: 'truck', country: 'Germany', status: 'active', group: GROUPS.DAIMLER_TRUCK },
  { name: 'Magirus', type: 'truck', country: 'Germany', status: 'active', group: GROUPS.IVECO_GROUP },
  { name: 'Magirus-Deutz', type: 'truck', country: 'Germany', status: 'defunct' },
  { name: 'Büssing', type: 'truck', country: 'Germany', status: 'defunct' },
  { name: 'Hanomag-Henschel', type: 'truck', country: 'Germany', status: 'defunct' },
  { name: 'Krupp', type: 'truck', country: 'Germany', status: 'defunct' },
  { name: 'Faun', type: 'truck', country: 'Germany', status: 'active' },
  { name: 'Kaelble', type: 'truck', country: 'Germany', status: 'defunct' },
  { name: 'Multicar', type: 'truck', country: 'Germany', status: 'active' },
  { name: 'Titan Spezialfahrzeuge', type: 'truck', country: 'Germany', status: 'active' },
  { name: 'Quantron', type: 'truck', country: 'Germany', status: 'active' },

  // === SWEDEN ===
  { name: 'Scania', type: 'truck', country: 'Sweden', status: 'active', group: GROUPS.TRATON },
  { name: 'Volvo Trucks', type: 'truck', country: 'Sweden', status: 'active', group: GROUPS.VOLVO_GROUP },
  { name: 'Kalmar', type: 'truck', country: 'Sweden', status: 'active' },
  { name: 'Einride', type: 'truck', country: 'Sweden', status: 'active' },
  { name: 'Volta Trucks', type: 'truck', country: 'Sweden', status: 'active' },

  // === FRANCE ===
  { name: 'Renault Trucks', type: 'truck', country: 'France', status: 'active', group: GROUPS.VOLVO_GROUP },
  { name: 'Berliet', type: 'truck', country: 'France', status: 'defunct' },
  { name: 'Saviem', type: 'truck', country: 'France', status: 'defunct' },
  { name: 'Unic', type: 'truck', country: 'France', status: 'defunct' },
  { name: 'Somua', type: 'truck', country: 'France', status: 'defunct' },
  { name: 'Arquus', type: 'truck', country: 'France', status: 'active', group: GROUPS.VOLVO_GROUP },
  { name: 'Nicolas', type: 'truck', country: 'France', status: 'active' },

  // === ITALY ===
  { name: 'Iveco', type: 'truck', country: 'Italy', status: 'active', group: GROUPS.IVECO_GROUP },
  { name: 'Astra', type: 'truck', country: 'Italy', status: 'active', group: GROUPS.IVECO_GROUP },
  { name: 'OM', type: 'truck', country: 'Italy', status: 'defunct' },
  { name: 'Perlini', type: 'truck', country: 'Italy', status: 'active' },
  { name: 'Bremach', type: 'truck', country: 'Italy', status: 'defunct' },

  // === NETHERLANDS ===
  { name: 'DAF', type: 'truck', country: 'Netherlands', status: 'active', group: GROUPS.PACCAR },
  { name: 'Terberg', type: 'truck', country: 'Netherlands', status: 'active' },
  { name: 'GINAF', type: 'truck', country: 'Netherlands', status: 'active' },
  { name: 'Spijkstaal', type: 'truck', country: 'Netherlands', status: 'active' },

  // === UNITED KINGDOM ===
  { name: 'Leyland Trucks', type: 'truck', country: 'United Kingdom', status: 'active', group: GROUPS.PACCAR },
  { name: 'ERF', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Foden', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Seddon Atkinson', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Bedford', type: 'truck', country: 'United Kingdom', status: 'defunct', group: GROUPS.GM },
  { name: 'Scammell', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Thornycroft', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'AEC', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Dennis Eagle', type: 'truck', country: 'United Kingdom', status: 'active' },
  { name: 'Guy Motors', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Albion Motors', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Atkinson Vehicles', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Maudslay', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Sentinel', type: 'truck', country: 'United Kingdom', status: 'defunct' },
  { name: 'Tevva', type: 'truck', country: 'United Kingdom', status: 'active' },

  // === SPAIN ===
  { name: 'Pegaso', type: 'truck', country: 'Spain', status: 'defunct' },
  { name: 'Barreiros', type: 'truck', country: 'Spain', status: 'defunct' },
  { name: 'UROVESA', type: 'truck', country: 'Spain', status: 'active' },
  { name: 'Santana', type: 'truck', country: 'Spain', status: 'defunct' },
  { name: 'Sava', type: 'truck', country: 'Spain', status: 'defunct' },

  // === CZECH REPUBLIC ===
  { name: 'Tatra', type: 'truck', country: 'Czech Republic', status: 'active' },
  { name: 'LIAZ', type: 'truck', country: 'Czech Republic', status: 'defunct' },
  { name: 'Praga', type: 'truck', country: 'Czech Republic', status: 'defunct' },
  { name: 'Avia', type: 'truck', country: 'Czech Republic', status: 'inactive' },

  // === POLAND ===
  { name: 'Jelcz', type: 'truck', country: 'Poland', status: 'active' },
  { name: 'Star', type: 'truck', country: 'Poland', status: 'defunct' },
  { name: 'Autosan', type: 'truck', country: 'Poland', status: 'active' },

  // === AUSTRIA ===
  { name: 'Steyr', type: 'truck', country: 'Austria', status: 'defunct' },
  { name: 'ÖAF', type: 'truck', country: 'Austria', status: 'defunct' },
  { name: 'Rosenbauer', type: 'truck', country: 'Austria', status: 'active' },

  // === SWITZERLAND ===
  { name: 'Saurer', type: 'truck', country: 'Switzerland', status: 'defunct' },
  { name: 'Berna', type: 'truck', country: 'Switzerland', status: 'defunct' },
  { name: 'FBW', type: 'truck', country: 'Switzerland', status: 'defunct' },
  { name: 'Mowag', type: 'truck', country: 'Switzerland', status: 'active' },

  // === FINLAND ===
  { name: 'Sisu Auto', type: 'truck', country: 'Finland', status: 'active' },

  // === HUNGARY ===
  { name: 'Rába', type: 'truck', country: 'Hungary', status: 'active' },
  { name: 'Csepel', type: 'truck', country: 'Hungary', status: 'defunct' },

  // === ROMANIA ===
  { name: 'Roman', type: 'truck', country: 'Romania', status: 'active' },
  { name: 'DAC', type: 'truck', country: 'Romania', status: 'defunct' },

  // === RUSSIA ===
  { name: 'KAMAZ', type: 'truck', country: 'Russia', status: 'active' },
  { name: 'GAZ', type: 'truck', country: 'Russia', status: 'active' },
  { name: 'Ural', type: 'truck', country: 'Russia', status: 'active' },
  { name: 'ZIL', type: 'truck', country: 'Russia', status: 'defunct' },
  { name: 'BAZ', type: 'truck', country: 'Russia', status: 'active' },
  { name: 'Tonar', type: 'truck', country: 'Russia', status: 'active' },
  { name: 'Yarovit', type: 'truck', country: 'Russia', status: 'inactive' },
  { name: 'KAvZ', type: 'truck', country: 'Russia', status: 'active' },

  // === BELARUS ===
  { name: 'MAZ', type: 'truck', country: 'Belarus', status: 'active' },
  { name: 'BelAZ', type: 'truck', country: 'Belarus', status: 'active' },
  { name: 'MZKT', type: 'truck', country: 'Belarus', status: 'active' },

  // === UKRAINE ===
  { name: 'KrAZ', type: 'truck', country: 'Ukraine', status: 'active' },

  // === SERBIA ===
  { name: 'FAP', type: 'truck', country: 'Serbia', status: 'active' },

  // === JAPAN ===
  { name: 'Hino', type: 'truck', country: 'Japan', status: 'active', group: GROUPS.TOYOTA },
  { name: 'Isuzu', type: 'both', country: 'Japan', status: 'active', group: GROUPS.ISUZU },
  { name: 'UD Trucks', type: 'truck', country: 'Japan', status: 'active', group: GROUPS.ISUZU },
  { name: 'Mitsubishi Fuso', type: 'truck', country: 'Japan', status: 'active', group: GROUPS.DAIMLER_TRUCK },

  // === CHINA ===
  { name: 'Sinotruk', type: 'truck', country: 'China', status: 'active', group: GROUPS.SINOTRUK },
  { name: 'FAW Jiefang', type: 'truck', country: 'China', status: 'active', group: GROUPS.FAW },
  { name: 'Dongfeng Trucks', type: 'truck', country: 'China', status: 'active', group: GROUPS.DONGFENG },
  { name: 'Shacman', type: 'truck', country: 'China', status: 'active', group: GROUPS.SHACMAN },
  { name: 'Foton', type: 'truck', country: 'China', status: 'active', group: GROUPS.BAIC },
  { name: 'Dayun', type: 'truck', country: 'China', status: 'active' },
  { name: 'JAC Motors', type: 'both', country: 'China', status: 'active' },
  { name: 'SAIC Hongyan', type: 'truck', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'CAMC', type: 'truck', country: 'China', status: 'active', group: GROUPS.GEELY },
  { name: 'BeiBen Truck', type: 'truck', country: 'China', status: 'active' },
  { name: 'Tri-Ring', type: 'truck', country: 'China', status: 'active' },
  { name: 'Sany Heavy Industry', type: 'truck', country: 'China', status: 'active' },
  { name: 'XCMG', type: 'truck', country: 'China', status: 'active' },
  { name: 'Zoomlion', type: 'truck', country: 'China', status: 'active' },
  { name: 'Farizon', type: 'truck', country: 'China', status: 'active', group: GROUPS.GEELY },
  { name: 'Hanvan', type: 'truck', country: 'China', status: 'active' },
  { name: 'C&C Trucks', type: 'truck', country: 'China', status: 'active' },
  { name: 'Qingling Motors', type: 'truck', country: 'China', status: 'active' },

  // === INDIA ===
  { name: 'Tata Trucks', type: 'truck', country: 'India', status: 'active', group: GROUPS.TATA },
  { name: 'Ashok Leyland', type: 'truck', country: 'India', status: 'active', group: GROUPS.HINDUJA },
  { name: 'BharatBenz', type: 'truck', country: 'India', status: 'active', group: GROUPS.DAIMLER_TRUCK },
  { name: 'Eicher Trucks', type: 'truck', country: 'India', status: 'active', group: GROUPS.EICHER },
  { name: 'Mahindra Commercial', type: 'truck', country: 'India', status: 'active', group: GROUPS.MAHINDRA },
  { name: 'Force Motors', type: 'truck', country: 'India', status: 'active' },
  { name: 'AMW', type: 'truck', country: 'India', status: 'inactive' },

  // === SOUTH KOREA ===
  { name: 'Hyundai Commercial', type: 'truck', country: 'South Korea', status: 'active', group: GROUPS.HYUNDAI },
  { name: 'Tata Daewoo', type: 'truck', country: 'South Korea', status: 'active', group: GROUPS.TATA },
  { name: 'Asia Motors', type: 'truck', country: 'South Korea', status: 'defunct' },
  { name: 'Samsung Commercial Vehicles', type: 'truck', country: 'South Korea', status: 'defunct' },

  // === TURKEY ===
  { name: 'BMC', type: 'truck', country: 'Turkey', status: 'active' },
  { name: 'Ford Otosan', type: 'truck', country: 'Turkey', status: 'active', group: GROUPS.FORD },
  { name: 'Otokar', type: 'truck', country: 'Turkey', status: 'active' },
  { name: 'Askam', type: 'truck', country: 'Turkey', status: 'defunct' },
  { name: 'FNSS', type: 'truck', country: 'Turkey', status: 'active' },

  // === AUSTRALIA ===
  { name: 'Western Star Australia', type: 'truck', country: 'Australia', status: 'active', group: GROUPS.DAIMLER_TRUCK },
  { name: 'Leader Trucks', type: 'truck', country: 'Australia', status: 'defunct' },
]
