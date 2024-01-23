import { forwardRef } from 'react';

function InnerComponent(props, ref) {
  return <input ref={ref} style={{ border: '2px solid green' }} />;
}

export const CustomInput = forwardRef(InnerComponent);
