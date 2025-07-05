import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import MarkdownIt from 'markdown-it';

import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options */);

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

export interface SSRMdEditorProps {
  onChange?: (text: string) => any;
  value?: string;
}

export const SSRMdEditor: FC<SSRMdEditorProps> = ({ onChange, value }) => {
  return <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} value={value} onChange={({text}) => onChange?.(text)} />;
}
