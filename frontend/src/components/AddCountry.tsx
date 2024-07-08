import React, { useState } from "react";

interface Country {
  name: string;
  code: string;
  emoji: string;
  continent?: string;
}

const AddCountry: React.FC<{ addCountry: (country: Country) => void }> = ({
  addCountry,
}) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");
  const [continent, setContinent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCountry({ name, code, emoji, continent });
    setName("");
    setCode("");
    setEmoji("");
    setContinent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Emoji"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Continent"
        value={continent}
        onChange={(e) => setContinent(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Country
      </button>
    </form>
  );
};

export default AddCountry;
