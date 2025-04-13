import react, {useState} from 'react'
import CIcon from '@coreui/icons-react';
import {
  cilPlus,
  cilTag,
  cilTags,
  cilWallet,
  cilCalendar,
  cilMobile,
  cilLocationPin,
  cilContact,
  cilPencil,


}from '@coreui/icons'
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
       <CRow
       className="g-3 mt-2">
        <h4 
          className='text-green mt-1 me-5'>
          Personal Data
        </h4>

        <CCol md={6}>
      <CFormInput 
        className="employees-name"
        placeholder="First Name" 
        aria-label="First Name" />
      <small
       className="text-muted">
      Please add your firts name.
      </small>
    </CCol>

    <CCol md={6}>
      <CFormInput 
        className="employees-name" 
        placeholder="Middle Name"
        aria-label="Middle Name" />
      <small
        className="text-muted">
       Please add your middle name.
      </small>
    </CCol>

    <CRow className="employees-las-name g-3 mt-2">
    <CCol md={6}>
      <CFormInput 
        className="employees-name" 
        placeholder="First Last-Name" 
        aria-label="First Last-Name" />
      <small
        className="text-muted">
        Please add your firts last-name.
      </small>
    </CCol>

    <CCol md={6}>
      <CFormInput
        className="employees-name" 
        placeholder="Second Last-Name"
        aria-label="Second Last-Name" />
      <small
        className="text-muted">
        Please add your second last-name.
      </small>
    </CCol>
  </CRow>
  </CRow>
  </div>;

  const Sectiontwo= () =>
    <div>
         <CRow
          className="g-3 mt-2">
            <h4
              className='text-green mt-1 me-5'>
              Personal Data
            </h4>
          <CCol md={6}>

        <CFormInput
          className="employees-name"
          placeholder="Document Number"
          aria-label="Document Number" />
      <small
        className="text-muted">
        Please add your document number.
      </small>
      </CCol>

      <CFormInput
        className="employees-name"
        type="date"
        placeholder= "register" />
      <small
        className="text-muted">
        Please add your date of Birth.
      </small>

      <CRow className="employees-las-name g-3 mt-2">

      <CCol md={6}>
        <CFormInput
          className="employees-name" 
          placeholder="Phone" 
          aria-label="Phone" />
      <small
        className="text-muted">
        Please add your phone.
      </small>

      </CCol>

      <CCol md={6}>
        <CFormInput 
          className="employees-name" 
          placeholder="Address" 
          aria-label="Address" />
       <small
        className="text-muted">
        Please add your address.
      </small>

      </CCol>

      <CCol md={6}>
        <CFormInput 
          className="employees-name" 
          placeholder="Contact Person" 
          aria-label="Contact Person" />
       <small
        className="text-muted">
        Please add your contact person.
      </small>

      </CCol>
    </CRow>
    </CRow>
    </div>;

  
    const EditSectionone= () =>
      <div>
           <CRow
       className="g-3 mt-2">
        <h4 
          className='text-green mt-1 me-5'>
          Edit Personal Data
        </h4>

        <CCol md={6}>
      <CFormInput 
        className="employees-name"
        placeholder="First Name" 
        aria-label="First Name" />
      <small
       className="text-muted">
      Please add your firts name.
      </small>
    </CCol>

    <CCol md={6}>
      <CFormInput 
        className="employees-name" 
        placeholder="Middle Name"
        aria-label="Middle Name" />
      <small
        className="text-muted">
       Please add your middle name.
      </small>
    </CCol>

    <CRow className="employees-las-name g-3 mt-2">
    <CCol md={6}>
      <CFormInput 
        className="employees-name" 
        placeholder="First Last-Name" 
        aria-label="First Last-Name" />
      <small
        className="text-muted">
        Please add your firts last-name.
      </small>
    </CCol>

    <CCol md={6}>
      <CFormInput
        className="employees-name" 
        placeholder="Second Last-Name"
        aria-label="Second Last-Name" />
      <small
        className="text-muted">
        Please add your second last-name.
      </small>
    </CCol>
  </CRow>
  </CRow>
  </div>;

      const EditSectiontwo= () =>
        <div>
            <CRow
          className="g-3 mt-2">
            <h4
              className='text-green mt-1 me-5'>
              Personal Data
            </h4>
          <CCol md={6}>

        <CFormInput
          className="employees-name"
          placeholder="Document Number"
          aria-label="Document Number" />
      <small
        className="text-muted">
        Please add your document number.
      </small>
      </CCol>

      <CFormInput
        className="employees-name"
        type="date"
        placeholder= "register" />
      <small
        className="text-muted">
        Please add your date of Birth.
      </small>

      <CRow className="employees-las-name g-3 mt-2">

      <CCol md={6}>
        <CFormInput
          className="employees-name" 
          placeholder="Phone" 
          aria-label="Phone" />
      <small
        className="text-muted">
        Please add your phone.
      </small>

      </CCol>

      <CCol md={6}>
        <CFormInput 
          className="employees-name" 
          placeholder="Address" 
          aria-label="Address" />
       <small
        className="text-muted">
        Please add your address.
      </small>

      </CCol>

      <CCol md={6}>
        <CFormInput 
          className="employees-name" 
          placeholder="Contact Person" 
          aria-label="Contact Person" />
       <small
        className="text-muted">
        Please add your contact person.
      </small>

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
        <h4 
        className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center" >
          Employee Management  
          <CButton 
          className='button-color text-white' 
          onClick={() => setVisible(!visible)}>
          <CIcon 
          icon={cilPlus} 
          className="me-2" />
          Add Employee  
          </CButton></h4> 
       </CCardHeader>
       
       <CCardBody>
        <CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />FirtsName</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilTags}/>MiddleName</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />Firts Las-Name</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilTags}/>Second Las-Name</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilWallet} />Document-Number</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilCalendar} />Date-Birth</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilMobile} />Phone</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilLocationPin} />Address</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilContact} />Contact-Person</CTableHeaderCell>
      <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />Actions</CTableHeaderCell>
    </CTableRow>
  </CTableHead>

  <CTableBody>
    <CTableRow>
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
        <CButton 
          className='me-2 mb-2' 
          size='sm' color='info' 
          variant='outline' 
          onClick={() => setEditVisible(!visible)}>
          Edit
        </CButton> 

        <CButton 
          className='me-2 mb-2' 
          size='sm' 
          color='danger' 
          variant='outline'
          onClick={() => deletesetVisible(!visible)}>
          Delete
          </CButton>

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
          <CModalHeader 
              className='modal-employee'>
          <CModalTitle>
          <h4 
            className='typography-color'>
            Employee Record
          </h4>
         </CModalTitle>
        </CModalHeader>

        <CModalBody 
          style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {sections[currentSection]}
        </CModalBody>

        <CModalFooter>
          <CButton 
            className='button-color-login text-white'
            onClick={handlePrevious} 
            disabled={currentSection === 0}>
            Fomer 
            </CButton>

          <CButton 
            className='button-color-login text-white' 
            onClick={handleNext} 
            disabled={currentSection === sections.length - 1}>
            Next
            </CButton>

          <CButton 
            className='button-color-login text-white' 
            onClick={() => setVisible(false)}>
            Add
            </CButton>
        </CModalFooter>
      </CModal>

      <CModal
        alignment="center"
        scrollable
        visible={EditVisible}
        onClose={() => setEditVisible(false)}
        
        >
          <CModalHeader 
            className='modal-employee'>
          <CModalTitle>
          <h4 
            className='typography-color-title'>
            Edit Employee 
          </h4>
           </CModalTitle>
        </CModalHeader>

        <CModalBody 
          style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {sections[currentEditSection]}
        </CModalBody>

        <CModalFooter>
          <CButton 
            className='button-color-login text-white'
            onClick={handlePreviousEdit} 
            disabled={currentEditSection === 0}>
            Fomer 
          </CButton>

          <CButton 
            className='button-color-login text-white' 
            onClick={handleNextEdit} 
            disabled={currentEditSection === sections.length - 1}>
            Next
          </CButton>

          <CButton 
          className='button-color-login text-white' 
          onClick={() => setEditVisible(false)}>
          Add
          </CButton>
        
        </CModalFooter>
      </CModal>
</CCard>

)
}
export default employees;

