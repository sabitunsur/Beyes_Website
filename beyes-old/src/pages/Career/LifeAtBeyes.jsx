import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown} from 'lucide-react';
import { scrollToTop } from '../../utils/scrollToTop';
import SEO from '../../components/Common/SEO';
import { careerPageData } from '../../constants/career';
import '../../styles/pages/Career/lifeAtBeyes.css';

const LifeAtBeyes = () => {
  const pageData = careerPageData.lifeAtBeyes;
  scrollToTop(); // Sayfa yüklendiğinde en üste kaydır
  return (
    <>
      <SEO 
        title={pageData.seo.title}
        description={pageData.seo.description}
        keywords={pageData.seo.keywords}
      />

      <div className="career-page">
        {/* Hero Section */}
        <section className="career-hero">
          <div className="hero-background">
            <img src={pageData.heroImage} alt={pageData.title} />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{pageData.title}</h1>
              <p className="hero-subtitle">
                {pageData.subtitle}
              </p>
              <Link to="/career/life-at-beyes-details" className="scroll-indicator">
                <ChevronDown />
                <div className="text-container">
                  <span>İncele</span>
                </div>
              </Link>
            </div>

            <div className="hero-buttons">
              <Link to="/career/being-a-part-of-beyes" className="btn btn-primary">Beyes'li Olmak</Link>
            </div>
          </div>
        </section>



      </div>
    </>
  );
};

export default LifeAtBeyes; 