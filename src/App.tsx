import React, { Fragment, PureComponent } from 'react';

import { FadeIn } from './components/FadeIn';
import { AboutMe } from './page/AboutMe';
import { Footer } from './page/Footer';
import { Gallery } from './page/Gallery/Gallery';
import { Header } from './page/Header';
import { Links } from './page/Links';

export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <FadeIn />
        <Links />
        <Header />
        <AboutMe />
        <Gallery />
        <Footer />
      </Fragment>
    );
  }
}
