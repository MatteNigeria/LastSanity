// schemas/category.js
export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
      },
      {
        name: 'notification',
        title: 'Notification Name',
        type: 'string',
      },
      {
        name: 'foods',
        title: 'Foods',
        type: 'array',
        of: [{ type: 'foodReference' }],
      },
    ],
  };
  