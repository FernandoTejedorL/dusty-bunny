import { createPortal } from 'react-dom';
import { StyledCheckOut } from './modal.styles';

const Modal = ({ children }) => {
	return createPortal(
		<StyledCheckOut>{children}</StyledCheckOut>,
		document.getElementById('modal')
	);
};

export default Modal;
