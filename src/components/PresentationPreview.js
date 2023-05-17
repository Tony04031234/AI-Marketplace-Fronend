function PresentationPreview({ presentationData }) {
  const formatSlideContent = (content) => content
    .split('. ')
    .map((sentence, index) => (
      <p key={index}>
        {sentence.charAt(0).toUpperCase() + sentence.slice(1)}
      </p>
    ));

  return (
    <div className="presentation-preview">
      {Object.entries(presentationData.slides).map(([key, slide], index) => (
        <div className="slide-card" key={index}>
          <img
            src={presentationData.header_image}
            alt={`Header for ${slide.title}`}
          />
          <h2 className="slide-title">{slide.title}</h2>
          {formatSlideContent(slide.content)}
        </div>
      ))}
    </div>
  );
}

export default PresentationPreview;
