import { type SchemaTypeDefinition } from 'sanity'

import { servicesType } from './servicesType'
import { servicesContentType } from './servicesContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType,servicesContentType],
}
