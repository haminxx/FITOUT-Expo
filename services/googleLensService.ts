/**
 * Google Lens-style product search (SerpApi or Apify).
 * TODO: Replace with real API.
 * SerpApi: https://serpapi.com/search?engine=google_lens&url=IMAGE_URL&api_key=KEY
 * Apify: actor borderline/google-lens with imageUrls
 */
export interface ProductMatch {
  id: string;
  title: string;
  price: string;
  source: string;
  link?: string;
  thumbnail?: string;
}

export interface SearchByImageInput {
  imageUrl: string;
  type?: 'all' | 'products' | 'visual_matches' | 'exact_matches';
}

export async function searchProductsByImage(
  _input: SearchByImageInput
): Promise<ProductMatch[]> {
  // TODO: Call SerpApi or Apify Google Lens API
  // SerpApi: engine=google_lens, url=imageUrl
  // Apify: imageUrls, searchTypes
  return [];
}
