import CodeDisplayer from '../components/CodeDisplayer';

export const renderers = {
  a: ({ children }) => <a className="text-white">{children}</a>,
  //h1:({ children}) => <h1 className="text-3xl font-semibold mb-40">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
  h4: ({ children }) => <h4 className="text-base font-semibold mb-4">{children}</h4>,
  h5: ({ children }) => <h5 className="text-sm font-semibold mb-4">{children}</h5>,
  p: ({ children }) => <p className="my-20 bg-red-600 text-md">{children}</p>,
  italic: ({ children }) => <i>{children}</i>,
  bold: ({ children }) => <strong>{children}</strong>,
  code: ({ children }) => <div className="p-2 rounded-lg bg-gray-500">{children}</div>,
  code_block: ({ children }) => <CodeDisplayer>{children}</CodeDisplayer>,
  ol: ({ children }) => <ol className="font-bold mb-4">{children}</ol>,
  ul: ({ children }) => <ul className="font-bold mb-4">{children}</ul>,
  li: ({ children }) => <li>{children}</li>,
  //img:({children}) => <img src={children.src}/>
};
/*
li
children: ReactNode;
blockquote
children: ReactNode;
code
children: ReactNode;
*/
