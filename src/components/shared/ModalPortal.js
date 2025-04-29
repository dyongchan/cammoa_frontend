import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export function ModalPortal({ children }) {
  const el = document.getElementById('modal');
  return el ? ReactDOM.createPortal(children, el) : null;
}

ModalPortal.propTypes = {
  // children에는 React의 렌더링 가능한 모든 타입(문자열, 요소, 배열 등)이 들어올 수 있다.
  children: PropTypes.node.isRequired,
};
