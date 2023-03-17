import { openmrsFetch } from '@openmrs/esm-framework';

export async function fetchLocation() {
  return openmrsFetch(`/ws/rest/v1/location?q=&v=default`);
}
