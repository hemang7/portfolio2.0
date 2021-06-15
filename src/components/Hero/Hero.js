import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hemang Choudhary <br />
        Web Developer
      </SectionTitle>
      <SectionText>
        I make cool stuff for the web.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:hemang2050@gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;