import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import FacilityCode from './common/resources/facility/facility-code.enum';
import ResourceCode from './common/resources/resource/resource-code.enum';

export const translationKeys = {
  login: {
    email: {
      label: 'login.email.label',
    },
    password: {
      label: 'login.password.label',
    },
    submit: 'login.submit',
  },
  planet: {
    planetOverview: {
      overview: 'planet.planet-overview.Overview',
      queues: 'planet.planet-overview.Queues',
    },
  },
  facilities: {
    [FacilityCode.METAL_MINE]: {
      name: `facilities.${FacilityCode.METAL_MINE}.name`,
      description: `facilities.${FacilityCode.METAL_MINE}.description`,
    },
    [FacilityCode.CRYSTAL_MINE]: {
      name: `facilities.${FacilityCode.CRYSTAL_MINE}.name`,
      description: `facilities.${FacilityCode.CRYSTAL_MINE}.description`,
    },
    [FacilityCode.DEUTERIUM_MINE]: {
      name: `facilities.${FacilityCode.DEUTERIUM_MINE}.name`,
      description: `facilities.${FacilityCode.DEUTERIUM_MINE}.description`,
    },
  },
  resources: {
    [ResourceCode.METAL]: {
      name: `resources.${ResourceCode.METAL}.name`,
    },
    [ResourceCode.CRYSTAL]: {
      name: `resources.${ResourceCode.CRYSTAL}.name`,
    },
    [ResourceCode.DEUTERIUM]: {
      name: `resources.${ResourceCode.DEUTERIUM}.name`,
    },
  },
};

const resources = {
  en: {
    translation: {
      // Login
      [translationKeys.login.email.label]: 'Email',
      [translationKeys.login.password.label]: 'Password',
      [translationKeys.login.submit]: 'Submit',
      // Planet
      [translationKeys.planet.planetOverview.overview]: 'Overview',
      [translationKeys.planet.planetOverview.queues]: 'Queues',
      // Facilities
      [translationKeys.facilities.METAL_MINE.name]: 'Metal mine',
      [translationKeys.facilities.METAL_MINE.description]:
        'Metal is the main resource for conducting research and the construction of buildings, ships, and defensive units. Exceptions are Solar Satellites, Espionage Probes, Energy Technology, Hyperspace Technology, Computer Technology and Graviton Technology. If you do not have a Metal Mine yet, you will be producing 30 units per hour (in normal universes). In speed universes the basic amount is higher, depending on the speed factor.',
      [translationKeys.facilities.CRYSTAL_MINE.name]: 'Crystal mine',
      [translationKeys.facilities.CRYSTAL_MINE.description]:
        'Crystal is the main resource for electronic components and alloys. It is also crucial in conducting research and construction of buildings, ships and defensive structures. Exceptions are Rocket Launchers, Metal Storages, Combustion Drive, Graviton Technology, and Armour Technology. If there is no crystal mine on a planet, a base amount of 15 units per hour will be produced and in speed universes correspondingly more.',
      [translationKeys.facilities.DEUTERIUM_MINE.name]: 'Deuterium mine',
      [translationKeys.facilities.DEUTERIUM_MINE.description]:
        'Deuterium is a heavy isotope of hydrogen and not very abundant. It is predominantly used as fuel but it is also needed for some types of research and the construction of some ships, defense, and buildings. Contrary to metal and crystal, there is no base amount produced without a synthesizer. The amount produced per hour depends on the temperature of the planet. The colder the planet, the more deuterium will be produced.',
      // Resources
      [translationKeys.resources.METAL.name]: 'Metal',
      [translationKeys.resources.CRYSTAL.name]: 'Crystal',
      [translationKeys.resources.DEUTERIUM.name]: 'Deuterium',
    },
  },
};

export default i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  keySeparator: false,
});
