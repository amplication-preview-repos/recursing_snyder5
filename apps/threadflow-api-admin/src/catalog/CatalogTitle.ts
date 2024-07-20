import { Catalog as TCatalog } from "../api/catalog/Catalog";

export const CATALOG_TITLE_FIELD = "id";

export const CatalogTitle = (record: TCatalog): string => {
  return record.id?.toString() || String(record.id);
};
