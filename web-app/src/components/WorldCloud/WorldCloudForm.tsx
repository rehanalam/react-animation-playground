import React, { FC } from 'react';
import { Typography, Form, Input, Button } from 'antd';
import { useState } from 'react';

interface IWorldCloudFormProps {
  onAddWord: (word: string) => void;
}

const WorldCloudForm = ({ onAddWord }: IWorldCloudFormProps) => {
  const [newWord, setNewWord] = useState<string>('');

  const onFinish = (values: { word: string }) => {
    const { word } = values;
    onAddWord(word);
  };

  return (
    <div className="flex-2 p-5">
      <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-5">
        <Typography.Paragraph className="text-gray-900 text-lg font-medium">
          Enter Word
        </Typography.Paragraph>
        <Form
          layout="inline"
          onFinish={onFinish}
          className="flex justify-between "
        >
          <Form.Item
            name="word"
            rules={[{ required: true, message: 'Please input a word!' }]}
            className="w-[300px]"
          >
            <Input
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder="Type a word..."
              className='py-[10px]'
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Word
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default WorldCloudForm;
