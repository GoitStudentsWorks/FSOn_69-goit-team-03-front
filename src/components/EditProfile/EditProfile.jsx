import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';
import { updateProfile } from 'store/auth/operations';
import { Icon } from 'components/Icons';

import {
    EditWrapper, IconStyle, Title, FormUser, FormWrapper, ErrorSection,
    FormSubmit, FormField,  Img, FieldAvatar, FormSection, ImgWrapper, IconPlus, Label, FormIcon, Eye 
} from './EditProfile.styled';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(32, 'Name must be at most 32 characters')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]+$/,
      'Password must contain at least one uppercase letter, and one lowercase letter'
    ),
});
const initialValues = {
    name: '',
    email: '',
    password: '',
};
const EditProfile = ({avatarURL, onCloseModal}) => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [password, setPassword] = useState('password');
    const [currentImage, setCurrentImage] = useState(avatarURL);

    
    const handleSubmit = (values, { resetForm }) => {
        const { avatar, name, email, password } = values;
         const formData = new FormData();
    if (avatar) {
      formData.append('avatar', avatar);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    dispatch(updateProfile(formData));
         resetForm();
        onCloseModal();
  }
function handleClick() {
    switch (password) {
      case 'text':
        return setPassword('password');
      case 'password':
        return setPassword('text');

      default:
        break;
    }
  }
    function handleFileChange(event) {
    const file = event;
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onload = function (e) {
      setCurrentImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
    return (
        <EditWrapper>
        <FormUser>
        <Title>Edit profile</Title>
        <Formik
          initialValues={initialValues}
          validationSchema={UserSchema}
                onSubmit={handleSubmit}
                >
                    {/* {({ setFieldValue}) => ( */}
            <FormSection>
                <Label htmlFor="avatar">
                  <ImgWrapper>
                    {currentImage ? (
                      <Img src={currentImage} alt="User picture" />
                    ) : (
                        <IconStyle>
                         <Icon id={"user"} />
                       </IconStyle>
                    )}
                    <IconPlus aria-label="add">
                         <Icon id={"plus"} />
                    </IconPlus>
                  </ImgWrapper>
                </Label>
                <FieldAvatar
                  id="avatar"
                  type="file"
                  name="avatar"
                  onChange={event => {
                    // setFieldValue('avatar', event.currentTarget.files[0]);
                    handleFileChange(event.currentTarget.files[0]);
                  }}
                />
                <ErrorSection name="name" component="div" />

            <FormWrapper>
                <ErrorSection name="name" component="div" />
                <FormField type="text" id="name" name="name" placeholder={user.name} />
            </FormWrapper>
            <FormWrapper>
                <ErrorSection name="email" component="div" />
                <FormField type="email" id="email" name="email" placeholder={user.email} />
                </FormWrapper>
                
                <FormWrapper>
                  <FormIcon>
                <ErrorSection name="password" component="div" />
                <FormField type={password}
              id="password"
              name="password"
                      placeholder="Enter your password" />
                   <Eye type="button" onClick={handleClick}>
                    <IconPlus aria-label="add">
                        <Icon id={"eye"} />
                      </IconPlus>
                       </Eye>
                </FormIcon>
                </FormWrapper>
                
             <FormSubmit type="submit">Send</FormSubmit>
              </FormSection>
                    {/* )} */}
          </Formik>
        </FormUser>
            </EditWrapper> 
      
   ) 
}

export default EditProfile;