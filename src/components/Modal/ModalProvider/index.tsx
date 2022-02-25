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

  /* we select the needed component for populating the modal wrapper */
  const innerComponent = inners[modalInner];
  console.log(innerComponent);

  return (
    <>
      {/* we provide modal setters in order to display or populate the modal from anywhere in the app.
    We provide the display boolean value. It may be needed to trigger useEffect() for example*/}
      <ModalContext.Provider value={{ setModalDisplay, setModalInner ,modalDisplay }} >
        {children}
        <Modal display={modalDisplay}>
          {innerComponent}
        </Modal>
      </ModalContext.Provider>
    </>
  );
};

export default ModalProvider;

