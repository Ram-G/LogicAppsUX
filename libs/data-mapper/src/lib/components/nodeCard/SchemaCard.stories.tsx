import { store } from '../../core/state/Store';
import { NormalizedDataType, SchemaNodeProperty, SchemaType } from '../../models';
import type { SchemaCardProps } from './SchemaCard';
import { SchemaCard } from './SchemaCard';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import type { NodeProps } from 'reactflow';
import { ReactFlowProvider } from 'reactflow';

export default {
  component: SchemaCard,
  title: 'Data Mapper Components/Card/Schema Card',
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
} as ComponentMeta<typeof SchemaCard>;

export const Standard: ComponentStory<typeof SchemaCard> = (args: NodeProps<SchemaCardProps>) => (
  <div style={{ padding: '10px' }}>
    <ReactFlowProvider>
      <SchemaCard {...args} />
    </ReactFlowProvider>
  </div>
);

Standard.args = {
  data: {
    schemaNode: {
      key: 'key',
      name: 'Name',
      fullName: 'key',
      namespacePrefix: '',
      namespaceUri: '',
      normalizedDataType: NormalizedDataType.String,
      properties: SchemaNodeProperty.NotSpecified,
      nodeProperties: [SchemaNodeProperty.NotSpecified],
      children: [],
      pathToRoot: [],
    },
    schemaType: SchemaType.Source,
    displayHandle: true,
    isLeaf: false,
    isChild: false,
    displayChevron: true,
    relatedConnections: [],
    onClick: () => console.log('Schema card clicked'),
    disabled: false,
    error: false,
  },
};
