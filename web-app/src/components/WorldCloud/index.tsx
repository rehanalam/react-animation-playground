import React, { useState, useEffect } from 'react';
import WordCloud, { Word } from 'react-wordcloud';
import { Input, Button, Typography, Form } from 'antd';
import WorldCloudForm from './WorldCloudForm';
import WorldCloudPreview from './WorldCloudPreview';

export interface IWordItem {
  text: string;
  value: number;
}

const WordCloudApp: React.FC = () => {
  const [words, setWords] = useState<IWordItem[]>([
    { text: 'integration', value: 0 },
    { text: 'transformers', value: 0 },
    { text: 'performance', value: 0 },
    { text: 'transpiration', value: 0 },
    { text: 'inspire', value: 0 },
    { text: 'focus', value: 0 },
    { text: 'innovation', value: 0 },
    { text: 'leadership', value: 0 },
    { text: 'fast', value: 0 },
    { text: 'change', value: 0 },
    { text: 'bold', value: 0 },
    { text: 'creative', value: 0 },
    { text: 'leading', value: 0 },
    { text: 'inspirational', value: 0 },
  ]);

  const handleAddWord = (word: string) => {
    if (word.trim()) {
      const existingWord = words.find((w) => w.text === word);
      if (existingWord) {
        // Increment the value if the word already exists
        setWords(
          words.map((w) => (w.text === word ? { ...w, value: w.value + 1 } : w))
        );
      } else {
        // Add the new word with an initial value
        setWords([...words, { text: word, value: 0 }]);
      }
    }
  };

  return (
    <div className="flex h-screen w-[80%] items-center justify-center mx-auto">
      <WorldCloudPreview words={words} />
      <WorldCloudForm onAddWord={handleAddWord} />
    </div>
  );
};

export default WordCloudApp;
