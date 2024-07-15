import mailchimp from '@mailchimp/mailchimp_marketing';

// Load environment variables from .env file in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const apiKey = process.env.MAILCHIMP_API_KEY;
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
const listId = process.env.MAILCHIMP_LIST_ID;

if (!apiKey || !serverPrefix || !listId) {
  throw new Error('Mailchimp environment variables are not set.');
}

mailchimp.setConfig({
  apiKey,
  server: serverPrefix,
});

export const addSubscriber = async (email: string) => {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: email,
    status: 'subscribed',
  });
  return response;
};
