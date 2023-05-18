function PresentationPreview({ presentationData }) {
  const formatSlideContent = (content) => {
    if (!content) {
      return [];
    }
    return content
      .split('. ')
      .map((sentence) => (
        <p>
          {sentence.charAt(0).toUpperCase() + sentence.slice(1)}
        </p>
      ));
  };

  return (
    <div className="presentation-preview">
      {presentationData.slides.map((slide, index) => {
        if (!slide || !slide.title || !slide.content) {
          return null;
        }

        return (
          <div className="slide-card" key={index}>
            <img
              src={presentationData.header_image}
              alt={`Header for ${slide.title}`}
            />
            <h2 className="slide-title">{slide.title}</h2>
            {formatSlideContent(slide.content)}
          </div>
        );
      })}
    </div>
  );
}

export default PresentationPreview;
