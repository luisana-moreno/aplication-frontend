import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'


const Login = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div className="login-background min-vh-100 d-flex flex-row align-items-center ">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="login-color p-4">
                <CCardBody>
                  <CForm>
                    <h1 className='typography-color-title'>Login</h1>
                    <p className="typography-color">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="email" autoComplete="email" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>  
                      <Link to="/dashboard">
                        <CButton className="button-color-login px-4">
                         <h6 className='typography-color'>Login</h6>
                        </CButton>
                        </Link>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0" onClick={()=> setVisible(!visible)}>
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="login-card text-white bg-primary py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2 className='typography-color-title'>Register</h2>
                    <p>holaaa</p>
                    <Link to="/register">
                      <CButton  className="button-color-login mt-3">
                      <h6 className='typography-color'> Register Now!</h6>
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle className='typography-color-title'>Recover your password</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h6>Please enter your email to reset your password</h6>
          <CInputGroup className="button-color mb-3"> 
            <CInputGroupText>
            <CIcon icon={cilUser} />
          </CInputGroupText>
         <CFormInput placeholder="email" autoComplete="email" />
         </CInputGroup>
          </CModalBody>
        <CModalFooter>
          <CButton className='button-color-login'
           onClick={() => setVisible(false)}>
            <h6 className='typography-color'>Close</h6>
          </CButton>
          <CButton className='button-color-login'>
           <h6 className='typography-color'> Save changes</h6>
            </CButton> 
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Login
