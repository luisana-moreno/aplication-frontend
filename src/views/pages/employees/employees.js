import react, {useState} from 'react'
import {
    CCard,
    CButton,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CRow,
    CTable,
    CTableDataCell,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CFormSelect,
    CTableBody,
    CFormTextarea,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle,

} from '@coreui/react';
const employees= () =>{
const [visible, setVisible] =useState(false)
return(<CCard>

       <CCardHeader>
        <h4>Employee Management</h4> 
       </CCardHeader>
       <CCardBody>
        <CButton className='button-color' onClick={() => setVisible(!visible)}
        Vertically centered scrollable modal>
        add employee 
        </CButton>
        <CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">#</CTableHeaderCell>
      <CTableHeaderCell scope="col">Firts-Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Middle-Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Firts-Las-Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Second-Las-Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Document-Number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Date-Birth</CTableHeaderCell>
      <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
      <CTableHeaderCell scope="col">Address</CTableHeaderCell>
      <CTableHeaderCell scope="col">Contact-Person</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>@fat</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
      <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
       </CCardBody>
       <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="VerticallyCenteredScrollableExample2"
        >
        <CModalBody>
            <h1>hola</h1>
        </CModalBody>
      </CModal>
</CCard>

)
}
export default employees;

