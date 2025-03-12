import { useState, useDeferredValue, FormEvent } from "react";
import { TextInput, Button } from "@mantine/core";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(deferredInput);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <TextInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;