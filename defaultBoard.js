import { uuid } from './utils'

export default {
  name: 'AirTribe',
  columns: [
    {
      name: 'Not Started',
      tasks: [
        {
          description: 'Here goes the description',
          name: 'Card 4',
          id: uuid(),
        },
        {
          description: 'Here goes the description',
          name: 'Card 1',
          id: uuid(),
        },
        {
          description: 'Here goes the description',
          name: 'Card 5',
          id: uuid(),
        },
      ],
    },
    {
      name: 'In progress',
      tasks: [
        {
          description: 'Here goes the description',
          name: 'Card 2',
          id: uuid(),
        },
      ],
    },
    {
      name: 'Completed',
      tasks: [
        {
          description: 'Here goes the description',
          name: 'Card 3',
          id: uuid(),
        },
      ],
    },
  ],
}
