import { type SchemaTypeDefinition } from 'sanity'

import { servicesType } from './servicesType'
import { servicesKeywordType } from './serviceKeywords'
import { servicesContentType } from './servicesContentType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [servicesType,servicesContentType,servicesKeywordType],
}
