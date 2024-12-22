import WordCloud from 'react-wordcloud';
import { Typography } from 'antd';
import { words } from 'lodash';
import { Word } from 'react-wordcloud';
import { IWordItem } from '.';

interface IWorldCloudPreviewProps {
  words: IWordItem[];
}

const WorldCloudPreview = ({ words }: IWorldCloudPreviewProps) => {
  return (
    <div className="p-5 flex flex-1 items-center justify-end">
      <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-5 ">
        <Typography.Paragraph className="text-gray-900 text-lg font-medium">
          Word Cloud
        </Typography.Paragraph>
        <div className="mx-auto h-[calc(80vh_-_100px)] w-[80%] flex items-center justify-center">
          <WordCloud
            words={words}
            options={{
              rotations: 2,
              rotationAngles: [-90, 0],
              fontSizes: [30, 60],
              padding: 2,
              enableTooltip: true,
              deterministic: false,
              transitionDuration: 1000, // Animation duration
              colors: [
                '#ed783d',
                '#ffc739',
                '#2c76ff',
                '#fc82a2',
                '#09dc94',
                '#ff514d',
                '#a0a6f6',
                '#f29dc1',
              ],
              fontFamily:
                ' -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WorldCloudPreview;
