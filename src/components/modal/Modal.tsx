import React from "react";
import './modal.scss';
import x from './x.svg';
import { useGlobalState } from "../../hooks/useGlobalState";

export interface IModalProps {
    children: JSX.Element;
    hideClose?: boolean;
    closeModalCallback?: () => void;
}

export const Modal = React.forwardRef(({ children, hideClose, closeModalCallback  }: IModalProps,ref: React.ForwardedRef<HTMLDivElement>): JSX.Element => {
    const { setShowModal} = useGlobalState();

    const closeModal = () => {
        if (closeModalCallback) {
          closeModalCallback();
        }
        setShowModal(false);
      };
    return (
        <div className="modal" ref={ref}>
            {!hideClose && (
                 <img className="modal__close" src={x} alt="x" onClick={closeModal}/>
            )}
            {children}
        </div>
    );
});