import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useGetFredCategoryQuery } from './redux/fredCategories/api';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from './redux/store';
import Dashboard from './components/Dashboard';
import WordCloudApp from './components/WorldCloud';
import QuestionSlider from './QuestionSlider';
import QuestionAnswer from './components/QuestionAnswer';
import ChartsSample from './components/ChartsSample';

function App() {
  // const {data, isLoading} = useGetFredCategoryQuery(undefined,{refetchOnMountOrArgChange: true});

  const questions = [
    { id: 1, text: 'My workload is manageable', value: 3 },
    { id: 2, text: 'It is clear what I am supposed to work on', value: 3 },
    { id: 3, text: 'We are focusing on the right things', value: 3 },
    { id: 4, text: 'I have everything I need to do my job', value: 3 },
    { id: 5, text: 'I know which direction we are heading', value: 3 },
  ];

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
          <div className="font-sans bg-gray-50">
            <ChartsSample/>
            <QuestionAnswer />
            {/* <QuestionSlider questions={questions} /> */}
            <WordCloudApp />

          </div>
          {/* <Dashboard /> */}
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
