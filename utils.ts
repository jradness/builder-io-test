import { createClient } from 'contentful';

const client = createClient({
  space: '83ly1vi0zb0q',
  accessToken: '-LEyR9XaVcznm4aYdNfnywLlqptTn8TTmbeXsQKXcdE',
});

// Retrieve the entries from Contentful
const getConditionsPosts = async () => {
  const response = await client.getEntries({
    content_type: 'conditionModel',
  });

  return response.items;
};
