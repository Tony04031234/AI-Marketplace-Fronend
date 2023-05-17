function CodePreview({ generatedCode }) {
  return (
    <div className="code-preview">
      <pre>{generatedCode}</pre>
    </div>
  );
}

export default CodePreview;
