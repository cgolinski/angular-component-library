import { storiesOf } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';
import { JbButtonComponent } from 'src/components/jb-button/jb-button.component';

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

storiesOf('My JB Button', module)
  .add('large', () => ({
    component: JbButtonComponent,
    props: {
      text: 'This is my large JB Button!',
      size: 'large',
    },
  }))
  .add('medium', () => ({
    component: JbButtonComponent,
    props: {
      text: 'This is my medium JB Button!',
      size: 'medium',
    },
  }))
  .add('small', () => ({
    component: JbButtonComponent,
    props: {
      text: 'This is my small JB Button!',
      size: 'small',
    },
  }));

//Each story is a single state of your component. In the above case, there are two stories for the demo button component:

// Button
//   ├── with text
//   └── with emoji
