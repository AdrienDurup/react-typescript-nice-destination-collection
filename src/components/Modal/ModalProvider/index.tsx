// Imports

// Components

// context
import { FunctionComponent } from 'react';
import Modal from '..';
import ModalContext, { useModalContext } from '../context';

//props interface
// interface BaseProps {
//   [key: string]: any,
// }
// interface ComponentPropsPair {
//   InnerComponent: FunctionComponent,
//   props: BaseProps
// }
interface ModalProps {
  inners: {// object containing components that can be injected in modal
    // [key: string]: ComponentPropsPair,
    [key: string]: JSX.Element,
  }
}

const ModalProvider: FunctionComponent<ModalProps> = ({ inners, children }) => {
  /* we get values and setters for Modals with a custom hook */
  const { modalDisplay, setModalDisplay, modalInner, setModalInner } = useModalContext();
  console.log(inners);

  const innerComponent = inners[modalInner];
  console.log(innerComponent);

  return (
    <>
      {/* we provide modal setters in order to display or populate the modal from anywhere in the app.
    value will never change : components using these setters won’t re-render */}
      <ModalContext.Provider value={{ setModalDisplay, setModalInner }} >
        {children}
        <Modal display={modalDisplay}>
          {innerComponent}
        </Modal>
      </ModalContext.Provider>
    </>
  );
};

export default ModalProvider;

