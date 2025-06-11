import React, { Suspense } from 'react';

export function LazyWysiwygEditor(props) {
  const WysiwygEditorComponent = React.lazy(() =>
    import('./WysiwygEditor').then((module) => ({ default: module.WysiwygEditor }))
  );

  return (
    <Suspense fallback={<div>Loading rich text editor...</div>}>
      <WysiwygEditorComponent {...props} />
    </Suspense>
  );
}