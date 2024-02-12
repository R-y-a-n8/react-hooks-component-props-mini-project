import React from 'react';

function About({ imageSrc, altText, aboutText }) {
  // Set default values if props are not provided
  imageSrc = imageSrc || "https://via.placeholder.com/215";
  altText = altText || "blog logo";

  return (
    <aside>
      <img src={imageSrc} alt={altText} />
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;
