import React from 'react';
import {builder} from "@builder.io/react";

// export async function getStaticProps() {
//   const links = await builder.getAll('navigation-links', {
//     fields: ['data.url', 'data.label']
//     // You can use options for queries, sorting, and targeting here
//     // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
//   });
//   // console.log("links", links);
//   return {
//     props: {
//       links: links.map(o => ({...o.data})),
//     },
//     revalidate: 5,
//   };
// }

const About = () => {

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
