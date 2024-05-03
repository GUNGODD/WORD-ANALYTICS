const SentimentDisplay = ({ sentimentResult, error }) => {
    return (
      <div>
        {sentimentResult && (
          <div className="text-center font-semibold text-lg mb-4">
            Result: {sentimentResult}
          </div>
        )}
        {error && <div className="text-center text-red-500 mb-4">Error: {error}</div>}
      </div>
    );
  };
  
  export default SentimentDisplay;