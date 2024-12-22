import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { animated, useTransition } from '@react-spring/web';
import { Form, Input, Typography } from 'antd';
import { useState } from 'react';

const questions = [
  'What does a typical day at your company look like?',
  'How does the company support work-life balance?',
  'What initiatives are in place for employee growth and development?',
  'How does the company promote diversity and inclusion?',
  'What are the core values that shape your work culture?',
];

const ARROW_BG =
  'flex items-center justify-center w-[40px] h-[40px] bg-gray-100 rounded-full';

const QuestionAnswer = () => {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);

  const transitions = useTransition(count, {
    key: count,
    from: {
      display: 'none',
      transform: reverse ? 'translateY(-100%) ' : 'translateY(100%) ',
    },
    enter: { display: 'block', transform: 'translateY(0%) ' },
    leave: {
      display: 'none',
      transform: reverse ? 'translateY(100%) ' : 'translateY(-100%) ',
    },
    config: {
      tension: 120,
      mass: 1,
      easing: (t) => t * 2, // Smooth in-out easing
    },
  });

  const prevSlide = () => {
    let prevSlide = count - 1 < 0 ? questions.length - 1 : count - 1;
    setCount(prevSlide);
    setReverse(true);
  };

  const nextSlide = () => {
    let nextSlide = count + 1 < questions.length ? count + 1 : 0;
    setCount(nextSlide);
    setReverse(false);
  };

  return (
    <div className="flex h-screen w-[80%] items-center justify-center mx-auto">
      <div className="p-5 flex flex-1 items-center justify-end">
        <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-5 flex flex-col items-center justify-center ">
          <div className={`${ARROW_BG}`} onClick={prevSlide}>
            <ArrowUpOutlined />
          </div>
          <div className="container h-[300px] flex flex-col items-center justify-center ">
            {transitions((style, item) => (
              <animated.div style={style}>
                <animated.p style={style}>
                  {count + 1}/{questions.length}
                </animated.p>
                <animated.p style={style}>
                  Feel free to ask questions
                </animated.p>
                <animated.p style={style} className="w- text-4xl">
                  {questions[item]}
                </animated.p>
              </animated.div>
            ))}
          </div>

          <div className={`${ARROW_BG}`} onClick={nextSlide}>
            <ArrowDownOutlined />
          </div>
        </div>
      </div>
      <div className="flex-2 p-5">
        <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-5"></div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
