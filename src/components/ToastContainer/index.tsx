import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const StyledContainer = styled(ToastContainer).attrs({
  // custom props
})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
    border-radius: 8px;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
    background-color: #428ccb;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
export default StyledContainer;
