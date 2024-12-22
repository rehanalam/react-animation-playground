import React, { useState } from 'react';
import { Typography, Form, Input, Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useSpring, animated } from '@react-spring/web';
import { CheckOutlined } from '@ant-design/icons';

interface IQuestionAnswerForm {
  onAddQuestion: (word: string) => void;
}

const QuestionAnswerForm = ({ onAddQuestion }: IQuestionAnswerForm) => {
  const [newQuestion, setNewQuestion] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  // React Spring animations
  const thankYouAnimation = useSpring({
    opacity: showThankYou ? 1 : 0,
    transform: showThankYou ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 170, friction: 20 },
  });

  const formAnimation = useSpring({
    opacity: showForm ? 1 : 0,
    transform: showForm ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 170, friction: 20 },
  });

  const onFinish = (values: { word: string }) => {
    const { word } = values;
    onAddQuestion(word);
    setShowThankYou(true); // Show "Thank you" message
    setShowForm(false); // Hide form
    setTimeout(() => setShowThankYou(false), 2000); // Hide "Thank you" after 2 seconds
  };

  return (
    <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-8 flex flex-col  justify-center">
      {!showForm && !showThankYou && (
        <>
          <Typography.Paragraph className="text-gray-base text-2xl font-medium mb-4">
            Q&A
          </Typography.Paragraph>
          <Typography.Paragraph className="text-gray-900 text-lg font-medium mb-4 ">
            Do you have a question for the presenter? <br /> Be the first one to
            ask!
          </Typography.Paragraph>
          <Button
          type="primary"
          className="mt-8 px-8 py-2 text-lg"
          onClick={() => setShowForm(true)}
        >
          Ask Question
        </Button>
        </>
       
      )}

      {showForm && !showThankYou && (
        <animated.div style={formAnimation} className="w-full">
           <Typography.Paragraph className="text-gray-900 text-2xl font-medium mb-4">
            Q&A
          </Typography.Paragraph>
          <Typography.Paragraph className="text-gray-900 text-lg font-medium mb-4 ">
            Submit question to participate!
          </Typography.Paragraph>
          <Form layout="vertical" onFinish={onFinish} className="w-full">
            <Form.Item
              name="word"
              rules={[{ required: true, message: 'Please input a question!' }]}
            >
              <TextArea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Type a question..."
                rows={5}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="float-right">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </animated.div>
      )}

      {showThankYou && (
        <animated.div style={thankYouAnimation} className="mx-auto">
          <Typography.Paragraph className="text-green-950 text-xl font-medium">
          <CheckOutlined className='mr-3' /> Thank you!
          </Typography.Paragraph>
        </animated.div>
      )}
    </div>
  );
};

export default QuestionAnswerForm;
