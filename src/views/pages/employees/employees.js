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
    CPagination,
    CPaginationItem,

} from '@coreui/react';
const Sectionone= () =>
  <div>
       <CRow className="g-3 mt-2">
        <h5 className='typography-color-title'>Names and Surnames</h5> 
        <CCol md={6}>
      <CFormInput  className="employees-name" placeholder="First Name" aria-label="First Name" />
    </CCol>
    <CCol md={6}>
      <CFormInput className="employees-name" placeholder="Middle Name" aria-label="Middle Name" />
    </CCol>
    <CRow className="employees-las-name g-3 mt-2">
    <CCol md={6}>
      <CFormInput  className="employees-name" placeholder="First Last-Name" aria-label="First Last-Name" />
    </CCol>
    <CCol md={6}>
      <CFormInput className="employees-name" placeholder="Second Last-Name" aria-label="Second Last-Name" />
    </CCol>
  </CRow>
  </CRow>
  </div>;
  const Sectiontwo= () =>
    <div>
         <CRow className="g-3 mt-2">
          <h5 className='typography-color-title'>Names and Surnames</h5> 
          <CCol md={6}>
        <CFormInput className="employees-name" placeholder="Document-Number" aria-label="Document-Number" />
      </CCol>
      <CFormInput className="employees-name" type="date" placeholder= "register" />
      <CRow className="employees-las-name g-3 mt-2">
      <CCol md={6}>
        <CFormInput className="employees-name" placeholder="Phone" aria-label="Phone" />
      </CCol>
      <CCol md={6}>
        <CFormInput className="employees-name" placeholder="Address" aria-label="Address" />
      </CCol>
      <CCol md={6}>
        <CFormInput className="employees-name" placeholder="Contact-Person" aria-label="Contact-Person" />
      </CCol>
    </CRow>
    </CRow>
    </div>;
    const EditSectionone= () =>
      <div>
           <CRow className="g-3 mt-2">
            <h5 className='typography-color-title'>Names and Surnames</h5> 
            <CCol md={6}>
          <CFormInput  className="employees-name" placeholder="First Name" aria-label="First Name" />
        </CCol>
        <CCol md={6}>
          <CFormInput className="employees-name" placeholder="Middle Name" aria-label="Middle Name" />
        </CCol>
        <CRow className="employees-las-name g-3 mt-2">
        <CCol md={6}>
          <CFormInput  className="employees-name" placeholder="First Last-Name" aria-label="First Last-Name" />
        </CCol>
        <CCol md={6}>
          <CFormInput className="employees-name" placeholder="Second Last-Name" aria-label="Second Last-Name" />
        </CCol>
      </CRow>
      </CRow>
      </div>;
      const EditSectiontwo= () =>
        <div>
             <CRow className="g-3 mt-2">
              <h5 className='typography-color-title'>Names and Surnames</h5> 
              <CCol md={6}>
            <CFormInput className="employees-name" placeholder="Document-Number" aria-label="Document-Number" />
          </CCol>
          <CFormInput className="employees-name" type="date" placeholder= "register" />
          <CRow className="employees-las-name g-3 mt-2">
          <CCol md={6}>
            <CFormInput className="employees-name" placeholder="Phone" aria-label="Phone" />
          </CCol>
          <CCol md={6}>
            <CFormInput className="employees-name" placeholder="Address" aria-label="Address" />
          </CCol>
          <CCol md={6}>
            <CFormInput className="employees-name" placeholder="Contact-Person" aria-label="Contact-Person" />
          </CCol>
        </CRow>
        </CRow>
        </div>;
    

const employees= () =>{
const [visible, setVisible] =useState(false)
const [EditVisible, setEditVisible] =useState(false)
const [deletevisible, deletesetVisible] =useState(false)
const [currentSection, setCurrentSection] =useState(0)
const [currentEditSection, setEditCurrentSection]=useState(0)
const sections= [<Sectionone/>,<Sectiontwo/>]
const buttonsections= [<EditSectionone/>,<EditSectiontwo/>]

const handleNext = () => {
  if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
  }
};

const handlePrevious = () => {
  if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
  }
};

const handleNextEdit = () => {
  if (currentEditSection < sections.length - 1) {
      setEditCurrentSection(currentEditSection + 1);
  }
};

const handlePreviousEdit = () => {
  if (currentEditSection > 0) {
      setEditCurrentSection(currentEditSection - 1);
  }
};

return(<CCard>

       <CCardHeader>
        <h4 className="mb-0 d-flex justify-content-between align-items-center" >Employee Management  
          <CButton className='button-color text-white' onClick={() => setVisible(!visible)}
        Vertically centered scrollable modal>
        Add Employee  </CButton></h4> 
       </CCardHeader>
       <CCardBody>
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
      <CTableHeaderCell scope="col">Actions</CTableHeaderCell>

    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
      <CTableDataCell>
        <CButton className='me-2 mb-2' size='sm' color='info' variant='outline' onClick={() => setEditVisible(!visible)}>Edit</CButton> 
        <CButton className='me-2 mb-2' size='sm' color='danger' variant='outline'onClick={() => deletesetVisible(!visible)}>Delete</CButton>
      </CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
       </CCardBody>
       <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
        
        >
            <CModalHeader className='modal-employee'>
          <CModalTitle>
          <h4 className='typography-color-title'>Employee Record</h4>
           </CModalTitle>
        </CModalHeader>
        <CModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {sections[currentSection]}
        </CModalBody>
        <CModalFooter>
          <CButton className='button-color-login'onClick={handlePrevious} disabled={currentSection === 0}>Fomer </CButton>
          <CButton className='button-color-login' onClick={handleNext} disabled={currentSection === sections.length - 1}>Next</CButton>
          <CButton className='button-color-login' onClick={() => setVisible(false)}>Add</CButton>
        </CModalFooter>
      </CModal>
      <CModal
        alignment="center"
        scrollable
        visible={EditVisible}
        onClose={() => setEditVisible(false)}
        
        >
            <CModalHeader className='modal-employee'>
          <CModalTitle>
          <h4 className='typography-color-title'>Edit Employee </h4>
           </CModalTitle>
        </CModalHeader>
        <CModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {sections[currentEditSection]}
        </CModalBody>
        <CModalFooter>
          <CButton className='button-color-login'onClick={handlePreviousEdit} disabled={currentEditSection === 0}>Fomer </CButton>
          <CButton className='button-color-login' onClick={handleNextEdit} disabled={currentEditSection === sections.length - 1}>Next</CButton>
          <CButton className='button-color-login' onClick={() => setEditVisible(false)}>Add</CButton>
        </CModalFooter>
      </CModal>
</CCard>

)
}
export default employees;

