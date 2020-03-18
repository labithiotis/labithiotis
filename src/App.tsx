import React, { PureComponent, Fragment } from 'react';
import { FadeIn } from './components/FadeIn';
import { Page } from './page/Page';

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <FadeIn />
        <Page />
      </Fragment>
    );
  }
}
