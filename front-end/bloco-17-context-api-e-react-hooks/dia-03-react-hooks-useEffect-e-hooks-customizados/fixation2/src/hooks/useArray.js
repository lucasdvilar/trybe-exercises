import { useState } from 'react';

const useArray = (defaultValue) => {
  const [list, setList] = useState(defaultValue);
  return [list, setList];
}

export default useArray;
