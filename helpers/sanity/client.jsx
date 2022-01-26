// client.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '39k28omz', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: 'v2021-03-25',
  useCdn: false, // `false` if you want to ensure fresh data
});
