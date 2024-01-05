import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};

export default ThemeDecorator;
