import React, { PureComponent } from 'react';
import { H1, Body, MainContainer, Section } from '../components/Typography';

export class AboutMe extends PureComponent {
  render() {
    return (
      <Section minHeight="400px">
        <MainContainer>
          <H1>About me</H1>
          <Body>
            I have been a professional JavaScript developer for the last 5+ years and currently Head of Development for
            a mobile app company. From building one pager websites, full stack websites, single page web apps and custom
            components.
          </Body>
          <Body>
            I use various libraries and frameworks such as jQuery, Backbone, Handlebars, React.js, Less, Sass, Node.js,
            Express, Jade, Mocha, MongoDb, along with DevOps skills on AWS’s platform, using technologies like EBS (ELB,
            EC2), Lambdas, S3, Cloudfront, and Route53. 2015 saw a radical shift towards adoption of ES6 and I was an
            early adopter of React, and using Babel to make ES6 (ES7) viable with other great tools like webpack and
            gulp.
          </Body>
          <Body>
            I’m a big fan of using ES6, and more recently have looked at other newer libraries like immutable.js, redux,
            typeScript and am looking at adopting BEM-CSS style. Before becoming a JavaScript developer I worked as a
            game designer, thus I am very proficient at Photoshop and Sketch, these skills have combined with my coding
            ability to help me deliver projects to a high standard. Outside of work, I attend meetups involved within
            the web community. One I regularly attend, is the Facebook React meetup, held monthly. Meeting the very
            talented individuals who have built tools used by millions, such as Babel and redux, both of which enjoy a
            beer or two afterwards.
          </Body>
        </MainContainer>
      </Section>
    );
  }
}
