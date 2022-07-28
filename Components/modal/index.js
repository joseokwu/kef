import { Tint, ModalContainer, Spacer } from "./style";

export const Modal = ({ children, closeModal, ...restProps }) => {
  return (
    <>
      <Tint {...restProps} onClick={closeModal} />
      <ModalContainer {...restProps}>
        <header>
          <Spacer />
          <img onClick={closeModal} src={"/assets/svgs/close.svg"} alt={""} />
        </header>
        <section>{children}</section>
      </ModalContainer>
    </>
  );
};
