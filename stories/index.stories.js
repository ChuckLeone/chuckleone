import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Index from '../src/components/index.js';
import Music from '../src/components/music.js';
import Portfolio from '../src/components/portfolio.js';
import Games from '../src/components/games.js';
import ImageCarousel from '../src/components/imageCarousel.js';

storiesOf('Pages', module)
  .add('Index', () => <Index />)
  .add('Music', () => <Music />)
  .add('Portfolio', () => <Portfolio />)
  .add('Games', () => <Games />);

storiesOf('Components', module).add('ImageCarousel', () => <ImageCarousel />);
