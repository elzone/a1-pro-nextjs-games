export type GameDataType = {
  identifier: string; // уникальный идентификатор игры
  seo_title: string; // уникальный SEO-ключ игры
  title: string; // Текстовое название игры
  provider: string; // ID провайдера игры
  categories: string[];
};
