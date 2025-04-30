import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export function ModalPortal({ children }) {
  const el = document.getElementById('modal');
  if (!el) {
    console.error("Modal container with id 'modal' not found!");
    return null;
  }
  return ReactDOM.createPortal(children, el);
}

ModalPortal.propTypes = {
  // children에는 React의 렌더링 가능한 모든 타입(문자열, 요소, 배열 등)이 들어올 수 있다.
  children: PropTypes.node.isRequired,
};
