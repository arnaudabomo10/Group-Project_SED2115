//Gemma
import React from 'react';
import './AboutPage.css'; 
// Imports a CSS file for styling the AboutPage component. It ensures the styles defined in AboutPage.css are applied.

const AboutPage = () => {
 // Defines a functional component named AboutPage. Functional components return JSX to render UI.
  return (
// The return statement specifies the JSX that will be rendered on the screen.
    <div className="about-page">
      <h1>Engagement communautaire</h1>
      <p>
        Investir dans le progrès. Cultiver des relations bienveillantes. Être un partenaire solide.
      </p>
      <p>
        En tant que compagnie aérienne mondiale, nous avons la responsabilité de nous rapprocher des communautés dans lesquelles nos employés vivent, travaillent et servent. Grâce à des partenariats stratégiques avec des organisations à but non lucratif au sein de ces communautés, nous favorisons des partenariats constructifs afin de contribuer au changement en concentrant nos ressources sur l’environnement, l’équité, l’éducation et le bien-être dans son ensemble.
      </p>
    </div>
  );
};

export default AboutPage;
// Exports the AboutPage component so it can be imported and used in other parts of the application.
