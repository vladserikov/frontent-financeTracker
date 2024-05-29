import React from 'react';

import { bem } from '../../utils/classnames';

const [errorBlock] = bem('error-message');

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className={errorBlock}>
      {message}
    </div>
  )
}

export default ErrorMessage