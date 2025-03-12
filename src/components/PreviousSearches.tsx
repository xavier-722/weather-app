interface PreviousSearchesProps {
    searches: string[];
  }
  
  const PreviousSearches: React.FC<PreviousSearchesProps> = ({ searches }) => {
    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Previous Searches:</h3>
        <ul>
          {searches.map((search, index) => (
            <li key={index} className="text-gray-600">
              {search}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PreviousSearches;