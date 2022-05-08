import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'patrfaep',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skfFRauSM9YNtv4SNNqkunIdAzYsmBcxqHH8Ppo06R6yXidZW9usKSJ1SCYPklw43huuNrX8zgo3T6iWchZcWzsFmMCzzT8JJwShnCo2R7zDlDG9I2UXZEdUigEbwsdLzpUnAAugIaJurbOut9HczRUEgpq6M52LOIBfXed79OmTL18foUvz',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
