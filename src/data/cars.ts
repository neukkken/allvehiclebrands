import type { Brand } from '../types'
import { GROUPS } from '../constants/groups'

export const carBrands: Brand[] = [
  // === JAPAN ===
  { name: 'Toyota', type: 'both', country: 'Japan', status: 'active', group: GROUPS.TOYOTA },
  { name: 'Honda', type: 'both', country: 'Japan', status: 'active', group: GROUPS.HONDA },
  { name: 'Nissan', type: 'car', country: 'Japan', status: 'active', group: GROUPS.NISSAN },
  { name: 'Mazda', type: 'car', country: 'Japan', status: 'active', group: GROUPS.MAZDA },
  { name: 'Subaru', type: 'car', country: 'Japan', status: 'active', group: GROUPS.SUBARU },
  { name: 'Mitsubishi', type: 'car', country: 'Japan', status: 'active', group: GROUPS.MITSUBISHI },
  { name: 'Suzuki', type: 'both', country: 'Japan', status: 'active', group: GROUPS.SUZUKI },
  { name: 'Daihatsu', type: 'car', country: 'Japan', status: 'active', group: GROUPS.TOYOTA },
  { name: 'Isuzu', type: 'car', country: 'Japan', status: 'active', group: GROUPS.ISUZU },
  { name: 'Lexus', type: 'car', country: 'Japan', status: 'active', group: GROUPS.TOYOTA },
  { name: 'Acura', type: 'car', country: 'Japan', status: 'active', group: GROUPS.HONDA },
  { name: 'Infiniti', type: 'car', country: 'Japan', status: 'active', group: GROUPS.NISSAN },
  { name: 'Mitsuoka', type: 'car', country: 'Japan', status: 'active' },
  { name: 'Hino', type: 'car', country: 'Japan', status: 'active', group: GROUPS.TOYOTA },
  { name: 'Scion', type: 'car', country: 'Japan', status: 'inactive', group: GROUPS.TOYOTA },
  { name: 'Datsun', type: 'car', country: 'Japan', status: 'inactive', group: GROUPS.NISSAN },

  // === GERMANY ===
  { name: 'Volkswagen', type: 'car', country: 'Germany', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Audi', type: 'car', country: 'Germany', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'BMW', type: 'both', country: 'Germany', status: 'active', group: GROUPS.BMW },
  { name: 'Mercedes-Benz', type: 'both', country: 'Germany', status: 'active', group: GROUPS.MERCEDES },
  { name: 'Porsche', type: 'car', country: 'Germany', status: 'active', group: GROUPS.PORSCHE },
  { name: 'Opel', type: 'car', country: 'Germany', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Mini', type: 'car', country: 'Germany', status: 'active', group: GROUPS.BMW },
  { name: 'Smart', type: 'car', country: 'Germany', status: 'active', group: GROUPS.MERCEDES },
  { name: 'Maybach', type: 'car', country: 'Germany', status: 'active', group: GROUPS.MERCEDES },
  { name: 'Bentley', type: 'car', country: 'Germany', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Bugatti', type: 'car', country: 'Germany', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Lamborghini', type: 'car', country: 'Germany', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Rolls-Royce', type: 'car', country: 'Germany', status: 'active', group: GROUPS.BMW },
  { name: 'MAN', type: 'car', country: 'Germany', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Neoplan', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Alpina', type: 'car', country: 'Germany', status: 'active', group: GROUPS.BMW },
  { name: 'Borgward', type: 'car', country: 'Germany', status: 'inactive' },
  { name: 'Trabant', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Wartburg', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Goggomobil', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'NSU', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Auto Union', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Horch', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Wanderer', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'DKW', type: 'car', country: 'Germany', status: 'defunct' },

  // === ITALY ===
  { name: 'Fiat', type: 'car', country: 'Italy', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Ferrari', type: 'car', country: 'Italy', status: 'active', group: GROUPS.FERRARI },
  { name: 'Lamborghini', type: 'car', country: 'Italy', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Maserati', type: 'car', country: 'Italy', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Alfa Romeo', type: 'car', country: 'Italy', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Lancia', type: 'car', country: 'Italy', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Abarth', type: 'car', country: 'Italy', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Pagani', type: 'car', country: 'Italy', status: 'active' },
  { name: 'Pininfarina', type: 'car', country: 'Italy', status: 'active' },
  { name: 'De Tomaso', type: 'car', country: 'Italy', status: 'inactive' },
  { name: 'Innocenti', type: 'car', country: 'Italy', status: 'defunct' },
  { name: 'Iso Rivolta', type: 'car', country: 'Italy', status: 'defunct' },
  { name: 'Autobianchi', type: 'car', country: 'Italy', status: 'defunct' },
  { name: 'Moretti', type: 'car', country: 'Italy', status: 'defunct' },

  // === FRANCE ===
  { name: 'Peugeot', type: 'car', country: 'France', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Citroën', type: 'car', country: 'France', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'DS', type: 'car', country: 'France', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Renault', type: 'car', country: 'France', status: 'active', group: GROUPS.RENAULT },
  { name: 'Bugatti', type: 'car', country: 'France', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Alpine', type: 'car', country: 'France', status: 'active', group: GROUPS.RENAULT },
  { name: 'Dacia', type: 'car', country: 'France', status: 'active', group: GROUPS.RENAULT },
  { name: 'Mobilize', type: 'car', country: 'France', status: 'active', group: GROUPS.RENAULT },
  { name: 'Panhard', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Delahaye', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Talbot', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Simca', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Matra', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Facel Vega', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Hotchkiss', type: 'car', country: 'France', status: 'defunct' },

  // === UK ===
  { name: 'Jaguar', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.JLR },
  { name: 'Land Rover', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.JLR },
  { name: 'Aston Martin', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.ASTON_MARTIN },
  { name: 'McLaren', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Lotus', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.GEELY },
  { name: 'Bentley', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Rolls-Royce', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.BMW },
  { name: 'Mini', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.BMW },
  { name: 'MG', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.SAIC },
  { name: 'Caterham', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Morgan', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Noble', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'TVR', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Vauxhall', type: 'car', country: 'United Kingdom', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Austin', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Morris', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Rover', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Triumph', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Hillman', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Humber', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Sunbeam', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Jensen', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Reliant', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Bristol', type: 'car', country: 'United Kingdom', status: 'defunct' },

  // === SWEDEN ===
  { name: 'Volvo', type: 'car', country: 'Sweden', status: 'active', group: GROUPS.VOLVO },
  { name: 'Polestar', type: 'car', country: 'Sweden', status: 'active', group: GROUPS.POLESTAR },
  { name: 'Saab', type: 'car', country: 'Sweden', status: 'inactive' },
  { name: 'Koenigsegg', type: 'car', country: 'Sweden', status: 'active' },
  { name: 'NEVS', type: 'car', country: 'Sweden', status: 'inactive' },
  { name: 'Scania', type: 'car', country: 'Sweden', status: 'active', group: GROUPS.VW_GROUP },

  // === USA ===
  { name: 'Ford', type: 'car', country: 'United States', status: 'active', group: GROUPS.FORD },
  { name: 'Chevrolet', type: 'car', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'GMC', type: 'car', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'Cadillac', type: 'car', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'Buick', type: 'car', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'Lincoln', type: 'car', country: 'United States', status: 'active', group: GROUPS.FORD },
  { name: 'Dodge', type: 'car', country: 'United States', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Chrysler', type: 'car', country: 'United States', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Jeep', type: 'car', country: 'United States', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Ram', type: 'car', country: 'United States', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Tesla', type: 'car', country: 'United States', status: 'active' },
  { name: 'Rivian', type: 'car', country: 'United States', status: 'active', group: GROUPS.RIVIAN },
  { name: 'Lucid', type: 'car', country: 'United States', status: 'active', group: GROUPS.LUCID },
  { name: 'Fisker', type: 'car', country: 'United States', status: 'active' },
  { name: 'Rivian', type: 'car', country: 'United States', status: 'active', group: GROUPS.RIVIAN },
  { name: 'Hummer', type: 'car', country: 'United States', status: 'active', group: GROUPS.GM },
  { name: 'Saturn', type: 'car', country: 'United States', status: 'inactive', group: GROUPS.GM },
  { name: 'Pontiac', type: 'car', country: 'United States', status: 'inactive', group: GROUPS.GM },
  { name: 'Oldsmobile', type: 'car', country: 'United States', status: 'inactive', group: GROUPS.GM },
  { name: 'Mercury', type: 'car', country: 'United States', status: 'inactive', group: GROUPS.FORD },
  { name: 'Plymouth', type: 'car', country: 'United States', status: 'inactive', group: GROUPS.STELLANTIS },
  { name: 'Eagle', type: 'car', country: 'United States', status: 'defunct', group: GROUPS.STELLANTIS },
  { name: 'DeLorean', type: 'car', country: 'United States', status: 'defunct' },
  { name: 'Vector', type: 'car', country: 'United States', status: 'defunct' },
  { name: 'Saleen', type: 'car', country: 'United States', status: 'active' },
  { name: 'Hennessey', type: 'car', country: 'United States', status: 'active' },

  // === SOUTH KOREA ===
  { name: 'Hyundai', type: 'car', country: 'South Korea', status: 'active', group: GROUPS.HYUNDAI },
  { name: 'Kia', type: 'car', country: 'South Korea', status: 'active', group: GROUPS.HYUNDAI },
  { name: 'Genesis', type: 'car', country: 'South Korea', status: 'active', group: GROUPS.HYUNDAI },
  { name: 'SsangYong', type: 'car', country: 'South Korea', status: 'active', group: GROUPS.SAIC },
  { name: 'Daewoo', type: 'car', country: 'South Korea', status: 'inactive', group: GROUPS.GM },
  { name: 'Samsung Motors', type: 'car', country: 'South Korea', status: 'inactive', group: GROUPS.RENAULT },

  // === CHINA ===
  { name: 'SAIC Motor', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'BYD', type: 'car', country: 'China', status: 'active', group: GROUPS.BYD },
  { name: 'Geely', type: 'car', country: 'China', status: 'active', group: GROUPS.GEELY },
  { name: 'Great Wall', type: 'car', country: 'China', status: 'active', group: GROUPS.GREAT_WALL },
  { name: 'Chery', type: 'car', country: 'China', status: 'active', group: GROUPS.CHERY },
  { name: 'Changan', type: 'car', country: 'China', status: 'active', group: GROUPS.CHANGAN },
  { name: 'BAIC', type: 'car', country: 'China', status: 'active', group: GROUPS.BAIC },
  { name: 'FAW', type: 'car', country: 'China', status: 'active', group: GROUPS.FAW },
  { name: 'Dongfeng', type: 'car', country: 'China', status: 'active', group: GROUPS.DONGFENG },
  { name: 'GAC', type: 'car', country: 'China', status: 'active', group: GROUPS.GAC },
  { name: 'NIO', type: 'car', country: 'China', status: 'active', group: GROUPS.NIO },
  { name: 'XPeng', type: 'car', country: 'China', status: 'active', group: GROUPS.XPENG },
  { name: 'Li Auto', type: 'car', country: 'China', status: 'active', group: GROUPS.LI_AUTO },
  { name: 'Zeekr', type: 'car', country: 'China', status: 'active', group: GROUPS.ZEEKR },
  { name: 'Polestar', type: 'car', country: 'China', status: 'active', group: GROUPS.POLESTAR },
  { name: 'Lynk & Co', type: 'car', country: 'China', status: 'active', group: GROUPS.GEELY },
  { name: 'Hongqi', type: 'car', country: 'China', status: 'active', group: GROUPS.FAW },
  { name: 'Wuling', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'Baojun', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'MG', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'Maxus', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'IM Motors', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'AITO', type: 'car', country: 'China', status: 'active' },
  { name: 'Hozon (Neta)', type: 'car', country: 'China', status: 'active' },
  { name: 'WM Motor', type: 'car', country: 'China', status: 'active' },
  { name: 'HiPhi', type: 'car', country: 'China', status: 'active' },
  { name: 'Aiways', type: 'car', country: 'China', status: 'active' },
  { name: 'Voyah', type: 'car', country: 'China', status: 'active', group: GROUPS.DONGFENG },
  { name: 'Aion', type: 'car', country: 'China', status: 'active', group: GROUPS.GAC },
  { name: 'Deepal', type: 'car', country: 'China', status: 'active', group: GROUPS.CHANGAN },
  { name: 'Seres', type: 'car', country: 'China', status: 'active' },
  { name: 'Xiaomi Auto', type: 'car', country: 'China', status: 'active' },
  { name: 'Huawei (AITO)', type: 'car', country: 'China', status: 'active' },
  { name: 'Brilliance', type: 'car', country: 'China', status: 'active' },
  { name: 'JAC', type: 'car', country: 'China', status: 'active' },
  { name: 'Foton', type: 'car', country: 'China', status: 'active', group: GROUPS.BAIC },
  { name: 'Zotye', type: 'car', country: 'China', status: 'inactive' },
  { name: 'Soueast', type: 'car', country: 'China', status: 'inactive' },
  { name: 'Haima', type: 'car', country: 'China', status: 'active' },
  { name: 'Landwind', type: 'car', country: 'China', status: 'inactive' },
  { name: 'Roewe', type: 'car', country: 'China', status: 'active', group: GROUPS.SAIC },
  { name: 'Venucia', type: 'car', country: 'China', status: 'active', group: GROUPS.DONGFENG },
  { name: 'Bestune', type: 'car', country: 'China', status: 'active', group: GROUPS.FAW },

  // === INDIA ===
  { name: 'Tata', type: 'car', country: 'India', status: 'active', group: GROUPS.TATA },
  { name: 'Mahindra', type: 'car', country: 'India', status: 'active', group: GROUPS.MAHINDRA },
  { name: 'Maruti Suzuki', type: 'car', country: 'India', status: 'active', group: GROUPS.MARUTI },
  { name: 'Hyundai India', type: 'car', country: 'India', status: 'active', group: GROUPS.HYUNDAI },
  { name: 'Kia India', type: 'car', country: 'India', status: 'active', group: GROUPS.HYUNDAI },
  { name: 'Honda Cars India', type: 'car', country: 'India', status: 'active', group: GROUPS.HONDA },
  { name: 'Toyota Kirloskar', type: 'car', country: 'India', status: 'active', group: GROUPS.TOYOTA },
  { name: 'MG Motor India', type: 'car', country: 'India', status: 'active', group: GROUPS.SAIC },
  { name: 'Renault India', type: 'car', country: 'India', status: 'active', group: GROUPS.RENAULT },
  { name: 'Nissan India', type: 'car', country: 'India', status: 'active', group: GROUPS.NISSAN },
  { name: 'Skoda Auto India', type: 'car', country: 'India', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Volkswagen India', type: 'car', country: 'India', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Force Motors', type: 'car', country: 'India', status: 'active' },
  { name: 'Hindustan Motors', type: 'car', country: 'India', status: 'inactive' },
  { name: 'Premier', type: 'car', country: 'India', status: 'defunct' },
  { name: 'San Storm', type: 'car', country: 'India', status: 'inactive' },

  // === RUSSIA ===
  { name: 'Lada', type: 'car', country: 'Russia', status: 'active' },
  { name: 'UAZ', type: 'car', country: 'Russia', status: 'active' },
  { name: 'GAZ', type: 'car', country: 'Russia', status: 'active' },
  { name: 'Moskvich', type: 'car', country: 'Russia', status: 'inactive' },
  { name: 'Volga', type: 'car', country: 'Russia', status: 'inactive' },
  { name: 'ZIL', type: 'car', country: 'Russia', status: 'defunct' },
  { name: 'Marussia', type: 'car', country: 'Russia', status: 'defunct' },
  { name: 'Aurus', type: 'car', country: 'Russia', status: 'active' },
  { name: 'KAMAZ', type: 'car', country: 'Russia', status: 'active' },

  // === CZECH REPUBLIC ===
  { name: 'Skoda', type: 'car', country: 'Czech Republic', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Tatra', type: 'car', country: 'Czech Republic', status: 'active' },
  { name: 'Škoda', type: 'car', country: 'Czech Republic', status: 'active', group: GROUPS.VW_GROUP },

  // === SPAIN ===
  { name: 'SEAT', type: 'car', country: 'Spain', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Cupra', type: 'car', country: 'Spain', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Hispania', type: 'car', country: 'Spain', status: 'defunct' },
  { name: 'Pegaso', type: 'car', country: 'Spain', status: 'defunct' },

  // === ROMANIA ===
  { name: 'Dacia', type: 'car', country: 'Romania', status: 'active', group: GROUPS.RENAULT },
  { name: 'ARO', type: 'car', country: 'Romania', status: 'defunct' },

  // === AUSTRALIA ===
  { name: 'Holden', type: 'car', country: 'Australia', status: 'inactive', group: GROUPS.GM },
  { name: 'Brabham', type: 'car', country: 'Australia', status: 'active' },

  // === BRAZIL ===
  { name: 'Fiat Brazil', type: 'car', country: 'Brazil', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Volkswagen Brazil', type: 'car', country: 'Brazil', status: 'active', group: GROUPS.VW_GROUP },
  { name: 'Chevrolet Brazil', type: 'car', country: 'Brazil', status: 'active', group: GROUPS.GM },
  { name: 'Troller', type: 'car', country: 'Brazil', status: 'active', group: GROUPS.FORD },
  { name: 'Agrale', type: 'car', country: 'Brazil', status: 'active' },

  // === MALAYSIA ===
  { name: 'Proton', type: 'car', country: 'Malaysia', status: 'active', group: GROUPS.GEELY },
  { name: 'Perodua', type: 'car', country: 'Malaysia', status: 'active' },
  { name: 'Bufori', type: 'car', country: 'Malaysia', status: 'active' },

  // === IRAN ===
  { name: 'Iran Khodro', type: 'car', country: 'Iran', status: 'active' },
  { name: 'SAIPA', type: 'car', country: 'Iran', status: 'active' },
  { name: 'Pars Khodro', type: 'car', country: 'Iran', status: 'inactive' },

  // === TURKEY ===
  { name: 'TOGG', type: 'car', country: 'Turkey', status: 'active' },
  { name: 'Tofaş', type: 'car', country: 'Turkey', status: 'active', group: GROUPS.STELLANTIS },
  { name: 'Karsan', type: 'car', country: 'Turkey', status: 'active' },
  { name: 'TEMSA', type: 'car', country: 'Turkey', status: 'active' },
  { name: 'Otokar', type: 'car', country: 'Turkey', status: 'active' },

  // === VIETNAM ===
  { name: 'VinFast', type: 'car', country: 'Vietnam', status: 'active' },
  { name: 'Thaco', type: 'car', country: 'Vietnam', status: 'active' },

  // === OTHER COUNTRIES ===
  { name: 'SsangYong', type: 'car', country: 'South Korea', status: 'active' },
  { name: 'Pyeonghwa', type: 'car', country: 'South Korea', status: 'inactive' },

  // === TAIWAN ===
  { name: 'Luxgen', type: 'car', country: 'Taiwan', status: 'active' },
  { name: 'Yulon', type: 'car', country: 'Taiwan', status: 'active' },

  // === NETHERLANDS ===
  { name: 'Spyker', type: 'car', country: 'Netherlands', status: 'inactive' },
  { name: 'Donkervoort', type: 'car', country: 'Netherlands', status: 'active' },
  { name: 'DAF', type: 'car', country: 'Netherlands', status: 'active' },
  { name: 'VDL', type: 'car', country: 'Netherlands', status: 'active' },

  // === BELGIUM ===
  { name: 'Minerva', type: 'car', country: 'Belgium', status: 'defunct' },

  // === SWITZERLAND ===
  { name: 'Rinspeed', type: 'car', country: 'Switzerland', status: 'active' },
  { name: 'Monteverdi', type: 'car', country: 'Switzerland', status: 'defunct' },

  // === AUSTRIA ===
  { name: 'Steyr', type: 'car', country: 'Austria', status: 'active' },
  { name: 'KTM', type: 'both', country: 'Austria', status: 'active', group: GROUPS.KTM },
  { name: 'Rosenbauer', type: 'car', country: 'Austria', status: 'active' },

  // === CANADA ===
  { name: 'Magnum', type: 'car', country: 'Canada', status: 'inactive' },

  // === MEXICO ===
  { name: 'Mastretta', type: 'car', country: 'Mexico', status: 'inactive' },
  { name: 'Vuhl', type: 'car', country: 'Mexico', status: 'active' },

  // === SOUTH AFRICA ===
  { name: 'Perana', type: 'car', country: 'South Africa', status: 'inactive' },
  { name: 'Birkin', type: 'car', country: 'South Africa', status: 'active' },

  // === EGYPT ===
  { name: 'GB Auto', type: 'car', country: 'Egypt', status: 'active' },

  // === UZBEKISTAN ===
  { name: 'UzDaewoo', type: 'car', country: 'Uzbekistan', status: 'active' },
  { name: 'GM Uzbekistan', type: 'car', country: 'Uzbekistan', status: 'active', group: GROUPS.GM },

  // === DEFINED MULTIPLE TIMES - DEDUP ===
  // The following are unique entries that should not duplicate others
  { name: 'Zagato', type: 'car', country: 'Italy', status: 'active' },
  { name: 'Corbellati', type: 'car', country: 'Italy', status: 'active' },
  { name: 'AZLK', type: 'car', country: 'Russia', status: 'defunct' },
  { name: 'RAF', type: 'car', country: 'Latvia', status: 'defunct' },
  { name: 'ErAZ', type: 'car', country: 'Armenia', status: 'defunct' },
  { name: 'LuAZ', type: 'car', country: 'Ukraine', status: 'defunct' },
  { name: 'ZAZ', type: 'car', country: 'Ukraine', status: 'active' },
  { name: 'Bogdan', type: 'car', country: 'Ukraine', status: 'inactive' },
  { name: 'KrAZ', type: 'car', country: 'Ukraine', status: 'active' },
  { name: 'Etalon', type: 'car', country: 'Ukraine', status: 'active' },
  { name: 'MAZ', type: 'car', country: 'Belarus', status: 'active' },
  { name: 'BelAZ', type: 'car', country: 'Belarus', status: 'active' },
  { name: 'MTZ', type: 'car', country: 'Belarus', status: 'active' },

  // === TUNISIA ===
  { name: 'Wallyscar', type: 'car', country: 'Tunisia', status: 'active' },

  // === POLAND ===
  { name: 'FSO', type: 'car', country: 'Poland', status: 'defunct' },
  { name: 'Polski Fiat', type: 'car', country: 'Poland', status: 'defunct' },
  { name: 'Syrena', type: 'car', country: 'Poland', status: 'defunct' },
  { name: 'DZT', type: 'car', country: 'Poland', status: 'defunct' },
  { name: 'Arrinera', type: 'car', country: 'Poland', status: 'inactive' },
  { name: 'Izera', type: 'car', country: 'Poland', status: 'active' },

  // === SERBIA / YUGOSLAVIA ===
  { name: 'Zastava', type: 'car', country: 'Serbia', status: 'inactive' },
  { name: 'Yugo', type: 'car', country: 'Serbia', status: 'defunct' },

  // === SLOVENIA ===
  { name: 'IMV', type: 'car', country: 'Slovenia', status: 'defunct' },
  { name: 'TAM', type: 'car', country: 'Slovenia', status: 'defunct' },

  // === BULGARIA ===
  { name: 'Bulgarrenault', type: 'car', country: 'Bulgaria', status: 'defunct' },
  { name: 'Rila', type: 'car', country: 'Bulgaria', status: 'defunct' },
  { name: 'Pirin', type: 'car', country: 'Bulgaria', status: 'defunct' },
  { name: 'Chavdar', type: 'car', country: 'Bulgaria', status: 'defunct' },

  // === GREECE ===
  { name: 'ELBO', type: 'car', country: 'Greece', status: 'inactive' },
  { name: 'BIAMAX', type: 'car', country: 'Greece', status: 'defunct' },

  // === HUNGARY ===
  { name: 'Ikarus', type: 'car', country: 'Hungary', status: 'active' },
  { name: 'Csepel', type: 'car', country: 'Hungary', status: 'defunct' },

  // === PORTUGAL ===
  { name: 'UMM', type: 'car', country: 'Portugal', status: 'defunct' },
  { name: 'Edfor', type: 'car', country: 'Portugal', status: 'defunct' },

  // === FINLAND ===
  { name: 'Sisu', type: 'car', country: 'Finland', status: 'active' },
  { name: 'Valmet', type: 'car', country: 'Finland', status: 'active' },

  // === NORWAY ===
  { name: 'Think', type: 'car', country: 'Norway', status: 'inactive' },
  { name: 'Buddy', type: 'car', country: 'Norway', status: 'inactive' },

  // === DENMARK ===
  { name: 'Zenvo', type: 'car', country: 'Denmark', status: 'active' },

  // === THAILAND ===
  { name: 'Thai Rung', type: 'car', country: 'Thailand', status: 'active' },
  { name: 'Verge', type: 'car', country: 'Thailand', status: 'active' },

  // === INDONESIA ===
  { name: 'Esemka', type: 'car', country: 'Indonesia', status: 'active' },
  { name: 'Fin Komodo', type: 'car', country: 'Indonesia', status: 'active' },
  { name: 'Mobil Anak Bangsa', type: 'car', country: 'Indonesia', status: 'inactive' },

  // === PHILIPPINES ===
  { name: 'Francisco Motors', type: 'car', country: 'Philippines', status: 'inactive' },
  { name: 'Del Monte', type: 'car', country: 'Philippines', status: 'defunct' },

  // === PAKISTAN ===
  { name: 'Dewan Farooque', type: 'car', country: 'Pakistan', status: 'inactive' },

  // === BANGLADESH ===
  { name: 'Pragoti', type: 'car', country: 'Bangladesh', status: 'active' },

  // === NIGERIA ===
  { name: 'Innoson', type: 'car', country: 'Nigeria', status: 'active' },
  { name: 'Nord', type: 'car', country: 'Nigeria', status: 'inactive' },

  // === MOROCCO ===
  { name: 'Laraki', type: 'car', country: 'Morocco', status: 'active' },

  // === NEW ZEALAND ===
  { name: 'Almac', type: 'car', country: 'New Zealand', status: 'defunct' },
  { name: 'Saker', type: 'car', country: 'New Zealand', status: 'active' },

  // === LUXEMBOURG ===
  { name: 'Dudach', type: 'car', country: 'Luxembourg', status: 'defunct' },

  // === Special / Microbrans ===
  { name: 'Reva', type: 'car', country: 'India', status: 'inactive' },
  { name: 'Tazzari', type: 'car', country: 'Italy', status: 'active' },
  { name: 'Microlino', type: 'car', country: 'Switzerland', status: 'active' },
  { name: 'Casalini', type: 'car', country: 'Italy', status: 'active' },
  { name: 'Aixam', type: 'car', country: 'France', status: 'active' },
  { name: 'Microcar', type: 'car', country: 'France', status: 'active' },
  { name: 'Ligier', type: 'car', country: 'France', status: 'active' },
  { name: 'Chatenet', type: 'car', country: 'France', status: 'active' },
  { name: 'Bellier', type: 'car', country: 'France', status: 'active' },
  { name: 'MIA Electric', type: 'car', country: 'France', status: 'defunct' },
  { name: 'Mega', type: 'car', country: 'France', status: 'inactive' },
  { name: 'Venturi', type: 'car', country: 'Monaco', status: 'active' },
  { name: 'Fornasari', type: 'car', country: 'Italy', status: 'inactive' },
  { name: 'Covini', type: 'car', country: 'Italy', status: 'inactive' },
  { name: 'Mazzanti', type: 'car', country: 'Italy', status: 'active' },
  { name: 'Farbio', type: 'car', country: 'United Kingdom', status: 'inactive' },
  { name: 'Ginetta', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Marcos', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Westfield', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'AC Cars', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Radical', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Ariel', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'BAC', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Lagonda', type: 'car', country: 'United Kingdom', status: 'inactive', group: GROUPS.ASTON_MARTIN },
  { name: 'Daimler', type: 'car', country: 'United Kingdom', status: 'inactive', group: GROUPS.JLR },
  { name: 'Austin-Healey', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'MG Rover', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Standard', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Singer', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Wolseley', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Riley', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Alvis', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Leyland', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Bedford', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Commer', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Allard', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Frazer Nash', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Healey', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Jensen-Healey', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Elva', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Gilbern', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Marauder', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Rochdale', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Berkeley', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Fairthorpe', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Peerless', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Warwick', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Hiller', type: 'car', country: 'United Kingdom', status: 'defunct' },
  { name: 'Hansa', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Glas', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Melkus', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Sachsenring', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Robur', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Framo', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Barkas', type: 'car', country: 'Germany', status: 'defunct' },
  { name: 'Multicar', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Gemballa', type: 'car', country: 'Germany', status: 'active' },
  { name: 'RUF', type: 'car', country: 'Germany', status: 'active' },
  { name: '9ff', type: 'car', country: 'Germany', status: 'active' },
  { name: 'TechArt', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Brabus', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Carlsson', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Irmscher', type: 'car', country: 'Germany', status: 'active' },
  { name: 'AC Schnitzer', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Hamann', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Mansory', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Novitec', type: 'car', country: 'Germany', status: 'active' },

  // === AUSTRALIAN SPECIALS ===
  { name: 'HRT', type: 'car', country: 'Australia', status: 'inactive' },
  { name: 'Tickford', type: 'car', country: 'Australia', status: 'active' },
  { name: 'FPV', type: 'car', country: 'Australia', status: 'inactive' },
  { name: 'HSV', type: 'car', country: 'Australia', status: 'inactive' },
  { name: 'Elfin', type: 'car', country: 'Australia', status: 'defunct' },
  { name: 'Bolwell', type: 'car', country: 'Australia', status: 'defunct' },
  { name: 'Pioneer', type: 'car', country: 'Australia', status: 'defunct' },
  { name: 'Daytona', type: 'car', country: 'Australia', status: 'active' },
  { name: 'Porsche', type: 'car', country: 'Germany', status: 'active', group: GROUPS.PORSCHE },
  { name: 'KTM', type: 'both', country: 'Austria', status: 'active', group: GROUPS.KTM },
  { name: 'BAC', type: 'car', country: 'United Kingdom', status: 'active' },
  { name: 'Rimac', type: 'car', country: 'Croatia', status: 'active' },
  { name: 'Dok-Ing', type: 'car', country: 'Croatia', status: 'active' },
  { name: 'Gumpert', type: 'car', country: 'Germany', status: 'inactive' },
  { name: 'Apollo', type: 'car', country: 'Germany', status: 'active' },
  { name: 'EDAG', type: 'car', country: 'Germany', status: 'active' },
  { name: 'e.GO Mobile', type: 'car', country: 'Germany', status: 'inactive' },
  { name: 'Sono Motors', type: 'car', country: 'Germany', status: 'inactive' },
  { name: 'StreetScooter', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Next E.Go Mobile', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Volocopter', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Lilium', type: 'car', country: 'Germany', status: 'active' },
  { name: 'EVT', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Mubea', type: 'car', country: 'Germany', status: 'active' },
  { name: 'Quant', type: 'car', country: 'Liechtenstein', status: 'active' },
  { name: 'nanoFlowcell', type: 'car', country: 'Switzerland', status: 'active' },
]
