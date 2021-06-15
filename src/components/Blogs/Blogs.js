import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './BlogStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { blogs } from '../../constants/constants';


const Blogs = () => (
  <Section nopadding id="blog">
    <SectionDivider />
    <SectionTitle main>Blogs</SectionTitle>
    <GridContainer>
      {blogs.map(({id, title, source}) => (
        <BlogCard key={id}>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
         
          <UtilityList>
            <ExternalLinks href={source}>Read</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Blogs;