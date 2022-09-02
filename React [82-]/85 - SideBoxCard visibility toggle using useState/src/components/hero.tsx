import React from 'react'
import classes from './hero.module.scss';
import Container from './container';
import Button from './button';

const Hero: React.FC = () => (
  <section className={classes.hero}>
    <Container>
      <div>
        <h1>This is a title</h1>
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem vero ratione vitae dicta explicabo
          perferendis amet quis provident molestiae magni!</p>
        <Button>Click me</Button>
      </div>
    </Container>
  </section>
);

export default Hero