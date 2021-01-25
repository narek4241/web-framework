import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
  console.log(collection);
});

// #task #findOut async-nity nuance workflow
collection.fetch();
