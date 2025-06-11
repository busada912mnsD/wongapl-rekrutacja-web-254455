import React from 'react';
import Wysiwyg, {
  Toolbar,
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnLink 
} from 'react-simple-wysiwyg';

export function WysiwygEditor({ input }) {
  const editorValue = typeof input.value === 'string' ? input.value : '';

  function onChange(e) {
    input.onChange(e.target.value);
  }

  return (
    <div className="mb-5 [&_.rsw-ce]:bg-white">
    <Wysiwyg value={editorValue} onChange={onChange} >
      <Toolbar>
        <BtnBold />
        <BtnItalic />
        <BtnUnderline />
        <BtnLink />
      </Toolbar>
    </Wysiwyg>
    </div>
  );
}