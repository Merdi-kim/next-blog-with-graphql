import React, { ReactNode } from 'react';
import Highlight from 'react-highlight';

function CodeDisplayer({ children }: { children: ReactNode }) {
  return (
    <Highlight className="w-full my-4 py-2 px-4 rounded-xl overflow-auto" language="javascript">
      {children}
    </Highlight>
  );
}

export default CodeDisplayer;
