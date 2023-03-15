import config from "@/config/api";

const baseUrl = config.BASE_API_URL;
const apiKey = config.API_KEY!;

export const fetcher = async (apiPath: string) => {
  const apiEndpoint = `${baseUrl}${apiPath}`;

  const url = new URL(apiEndpoint);
  let searchParams = new URLSearchParams({ api_key: apiKey });

  if (apiPath.includes("/images")) {
    searchParams = new URLSearchParams({ api_key: apiKey, include_image_language: "null" });
  }

  url.search = searchParams.toString();

  const res = await fetch(url);
  return res.json();
};

export const fetchWithPagination = async ({ apiPath, page }: { apiPath: string; page: number }) => {
  const apiEndpoint = `${baseUrl}${apiPath}`;

  const url = new URL(apiEndpoint);
  const searchParams = new URLSearchParams({
    page: page.toString(),
    api_key: apiKey,
  });

  url.search = searchParams.toString();

  const res = await fetch(url);
  return res.json();
};

const createFetchUrlFromApiEndpoint = (apiEndpoint: string) => {
  const url = new URL(apiEndpoint);
  const searchParams = new URLSearchParams({ api_key: apiKey });
  url.search = searchParams.toString();

  return url;
};

export const getMovie = async (id: string) => {
  const apiEndpoint = `${baseUrl}/movie/${id}`;

  const url = createFetchUrlFromApiEndpoint(apiEndpoint);

  const res = await fetch(url);
  return res.json();
};

export const getTv = async (id: string) => {
  const apiEndpoint = `${baseUrl}/tv/${id}`;

  const url = createFetchUrlFromApiEndpoint(apiEndpoint);

  const res = await fetch(url);
  return res.json();
};

export const getData = async (apiURL: string) => {
  const apiEndpoint = `${baseUrl}${apiURL}`;

  const url = createFetchUrlFromApiEndpoint(apiEndpoint);

  const res = await fetch(url);
  return res.json();
};
