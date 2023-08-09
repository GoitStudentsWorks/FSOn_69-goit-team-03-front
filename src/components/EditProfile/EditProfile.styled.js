import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: baseline;
`;

export const FormUser = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const UserAvatar = styled.img`
  `;
  export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const ImgWrapper = styled.div`
  position: relative;
  width: 68px;
  height: 68px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 550ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 11px 0px rgba(82, 85, 188, 1);
    transform: scale(1.1);
  }

  &:hover svg {
    top: 50%;
    box-shadow: 0px 0px 11px 0px rgba(82, 85, 188, 1);
  }
`;
export const Title = styled.h2`
  font-family: Poppins;
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: #161616;
`;
export const Label = styled.label`
  width: 68px;
  height: 79px;
  margin: 25px auto 0 auto;
  cursor: pointer;
`;
export const IconStyle = styled.svg`
  width: 18px;
  height: 18px;
  color: #161616;
  `;
export const IconPlus = styled.svg`
  position: absolute;
  top: 98%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 550ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 24px;
  height: 24px;
  color: rgba(22, 22, 22, 1);
`;
  export const FormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;
export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;
export const FormSection = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormFields = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
  width: 100%;
`;

export const FieldAvatar = styled.input`
  display: none;
`;
export const FormField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color:#ffffff;
  border: 1px solid #5255BC;
  outline: none;
  border-radius: 8px;

  color:#161616;
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color:#161616;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const FormSubmit = styled.button`
  margin-top: 10px;
  padding: 14px;
  border: none;
  background: #5255BC;
  border-radius: 8px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color:#ffffff;

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;