
import type { JSX } from 'react/jsx-runtime';
import * as learnData from '@/data/learn';
import DataBinding from './DataBinding';
// import JSXAttributes from './JSXAttributes';
import ConditionalRendering from './ConditionalRendering';
import ConditionalDisplay from './ConditionalDisplay';

function JSX_Markup(): JSX.Element {
  const {
    statusMessage,
    imageType,
    isShowReactImage
  } = learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessage} />
      {/* <JSXAttributes /> */}
      <ConditionalRendering imageType={imageType}>
      </ConditionalRendering>
      <ConditionalDisplay isShowReactImage={isShowReactImage} />
    </dl>
  );
}

export default JSX_Markup;
