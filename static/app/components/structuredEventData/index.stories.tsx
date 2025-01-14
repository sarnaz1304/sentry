import {Fragment} from 'react';

import {addSuccessMessage} from 'sentry/actionCreators/indicator';
import {CodeSnippet} from 'sentry/components/codeSnippet';
import JSXNode from 'sentry/components/stories/jsxNode';
import JSXProperty from 'sentry/components/stories/jsxProperty';
import StructuredEventData from 'sentry/components/structuredEventData';
import storyBook from 'sentry/stories/storyBook';

export default storyBook(StructuredEventData, story => {
  story('Default', () => {
    return (
      <Fragment>
        <p>
          The <JSXNode name="StructuredEventData" /> component is used to render event
          data in a way that is easy grok. This includes differentiation between boolean
          and null values, as well as rendering collapsible objects and arrays.
        </p>
        <StructuredEventData data="foo" />
        <StructuredEventData data={100} />
        <StructuredEventData data={null} />
        <StructuredEventData data={false} />
        <StructuredEventData data={{foo: 'bar', arr: [1, 2, 3, 4, 5, 6]}} />
        <StructuredEventData data={['one', 2, null]} />
      </Fragment>
    );
  });

  story('Annotations', () => {
    return (
      <Fragment>
        <p>
          The <JSXProperty name="meta" value /> property accepts the event{' '}
          <code>_meta</code> and can annotate filtered values with
          <JSXProperty name="withAnnotatedText" value="true" />.
        </p>
        <StructuredEventData
          data={{obj: {foo: '[Filtered]'}}}
          meta={{obj: {foo: {'': {len: 3}}}}}
          withAnnotatedText
        />
      </Fragment>
    );
  });

  story('Custom rendering of value types', () => {
    return (
      <Fragment>
        <p>
          Using the <JSXProperty name="config" value /> property, you can customize when
          and how certain data types are displayed.
        </p>
        <p>Input:</p>
        <CodeSnippet language="javascript">{`data: {nil: null, bool: 'this_should_look_like_a_boolean'}`}</CodeSnippet>
        <p>Config:</p>
        <CodeSnippet language="javascript">
          {`const config = {
  renderNull: () => 'nulllllll',
  isBoolean: value => value === 'this_should_look_like_a_boolean',
}`}
        </CodeSnippet>
        <p>Output:</p>
        <StructuredEventData
          data={{nil: null, bool: 'this_should_look_like_a_boolean'}}
          config={{
            renderNull: () => 'nulllllll',
            isBoolean: value => value === 'this_should_look_like_a_boolean',
          }}
        />
        <p>
          By default, strings within object values will render without quotes around them,
          as you can see in the example above. In order to render values with quotes (or
          any other custom formatting), you can set the <code>isString</code>
          <JSXProperty name=" config" value /> with something like this:
        </p>
        <CodeSnippet language="javascript">
          {`const config = {
  isString: (v: any) => {
    return typeof v === 'string';
  },
}; `}
        </CodeSnippet>
      </Fragment>
    );
  });

  story('Allow copy to clipboard', () => {
    return (
      <Fragment>
        <p>
          Using the <JSXProperty name="showCopyButton" value /> property and
          <JSXProperty name="onCopy" value /> callback, you can customize whether to show
          a copy to clipboard button, and what happens when copy is pressed.
        </p>
        <StructuredEventData
          data={{red: 'fish', blue: 'fish'}}
          showCopyButton
          onCopy={() => {
            addSuccessMessage('Copied successfully!');
          }}
        />
      </Fragment>
    );
  });
});
