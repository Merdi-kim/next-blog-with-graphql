import React from 'react';
import Highlight from 'react-highlight';

function CodeDisplayer({ code }) {
  return (
    <Highlight className="w-full my-4 py-2 px-4 rounded-xl overflow-auto" language="javascript">
      {code}
    </Highlight>
  );
}

export default CodeDisplayer;
