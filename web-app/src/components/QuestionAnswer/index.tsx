import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { animated, useTransition, useSpring } from '@react-spring/web';
import { Typography } from 'antd';
import { useState } from 'react';
import QuestionAnswerForm from './QuestionAnswerForm';

const questionsInit: string[] = [
  "What does a typical day at your company look like?",
  "How does the company support work-life balance?",
  "What initiatives are in place for employee growth and development?",
  "How does the company promote diversity and inclusion?",
  "What are the core values that shape your work culture?"
];

const ARROW_BG =
  'flex items-center justify-center w-[40px] h-[40px] bg-gray-100 rounded-full cursor-pointer ';

const QuestionAnswer = () => {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [questions, setQuestions] = useState<string[]>(questionsInit);
  const [answered, setAnswered] = useState<boolean>(false);

  const transitions = useTransition(count, {
    key: count,
    from: {
      display: 'none',
      opacity: 0,
      transform: reverse ? 'translateY(-100%) ' : 'translateY(100%) ',
    },
    enter: { display: 'block', opacity: 1, transform: 'translateY(0%) ' },
    leave: {
      display: 'none',
      opacity: 0,
      transform: reverse ? 'translateY(100%) ' : 'translateY(-100%) ',
    },
    config: {
      tension: 120,
      mass: 1,
      delay: 300,
    },
  });

  const answeredAnimation = useSpring({
    opacity: answered ? 1 : 0,
    transform: answered ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 170, friction: 20 },
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

  const handleAddQuestion = (question: string) => {
    if (question.trim()) {
      setQuestions([...questions, question]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && questions.length > 0) {
      setAnswered(true); 

      setTimeout(() => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(count, 1);
        setQuestions(updatedQuestions);
  
        if(updatedQuestions.length === 1) {
          setCount(0);
          setReverse(false);
        } else {
          nextSlide();
        }
        setAnswered(false); 
      }, 1000);
    }
  };

  return (
    <>
    <div
      className="flex h-screen w-[80%] items-center justify-center mx-auto">
      <div className="p-5 flex flex-1 items-center justify-end" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-8 flex flex-col items-center justify-center">
          {questions.length === 0 ? (
            <div>
              <Typography.Paragraph className="text-3xl text-center">
                No questions from the audience!
              </Typography.Paragraph>
              <Typography.Paragraph className="text-sm text-center text-gray-800">
                Incoming questions will show up here so that you can answer them one by one.
              </Typography.Paragraph>
            </div>
          ) : (
            <>
              {questions.length > 1 && (
                <div className={`${ARROW_BG}`} onClick={prevSlide}>
                  <ArrowUpOutlined />
                </div>
              )}
              <div className="container h-[300px] flex flex-col items-center justify-center">
                {transitions((style, item) => (
                  <animated.div style={style} className="text-gray-800">
                    {questions.length > 1 && (
                      <animated.p style={style}>
                        {count + 1}/{questions.length}
                      </animated.p>
                    )}
                    <animated.p style={style} className="text-gray-700">
                      Feel free to ask questions
                    </animated.p>
                    <animated.p style={style} className="w- text-4xl text-black-base">
                      {questions[item]}
                    </animated.p>
                  </animated.div>
                ))}
              </div>
              {questions.length > 1 && (
                <div className={`${ARROW_BG}`} onClick={nextSlide}>
                  <ArrowDownOutlined />
                </div>
              )}

              {!answered && questions.length > 0 && (
                <Typography.Paragraph className="mt-6 text-gray-500">
                  Press <b>ENTER</b> to mark as answered.
                </Typography.Paragraph>
              )}

              {answered && (
                <animated.div
                  style={answeredAnimation}
                  className="mx-auto mt-6"
                >
                  <Typography.Text className="bg-black-700 text-white-base py-2 px-6 rounded-2xl">
                    Answered
                  </Typography.Text>
                </animated.div>
              )}
            
            </>
          )}
        </div>
      </div>
      <div className="flex-2 p-5 w-[40%]">
        <QuestionAnswerForm onAddQuestion={handleAddQuestion} />
      </div>
    </div>
    </>
  );
};

export default QuestionAnswer;
