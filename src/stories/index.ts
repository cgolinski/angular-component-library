import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('My Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button!!!',
    },
  }))
  .add('with emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

//Each story is a single state of your component. In the above case, there are two stories for the demo button component:

// Button
//   ├── with text
//   └── with emoji
