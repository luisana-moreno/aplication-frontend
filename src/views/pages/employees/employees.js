import react, { useState } from 'react'
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
} from '@coreui/icons'
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
const SectionOne = ({ addEmployee, setAddEmployee }) =>
  <div>
    <CRow
      className="g-3 mt-2">
      <h4 className='text-green mt-1 me-5'>
        Personal Data
      </h4>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="First Name"
          aria-label="First Name"
          value={addEmployee.firts_name}
          onChange={(e) => setAddEmployee({ ...addEmployee, firts_name: e.target.value })}
        />
        <small
          className="text-muted">
          Please add your firts name.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Middle Name"
          aria-label="Middle Name"
          value={addEmployee.Middle_Name}
          onChange={(e) => setAddEmployee({ ...addEmployee, Middle_Name: e.target.value })}
        />

        <small
          className="text-muted">
          Please add your middle name.
        </small>
      </CCol>
    </CRow>
    <CRow className="employees-las-name g-3 mt-2">
      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="First Last-Name"
          aria-label="First Last-Name"
          value={addEmployee.Firts_Las_Name}
          onChange={(e) => setAddEmployee({ ...addEmployee, Firts_Las_Name: e.target.value })} />
        <small
          className="text-muted">
          Please add your firts last-name.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Second Last-Name"
          aria-label="Second Last-Name"
          value={addEmployee.Second_Las_Name}
          onChange={(e) => setAddEmployee({ ...addEmployee, Second_Las_Name: e.target.value })} />
        <small
          className="text-muted">
          Please add your second last-name.
        </small>
      </CCol>
    </CRow>

  </div>;

const SectionTwo = ({ addEmployee, setAddEmployee }) =>
  <div>
    <CRow className="g-3 mt-2">
      <h4 className='text-green mt-1 me-5'>
        Personal Data
      </h4>
      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Document Number"
          aria-label="Document Number"
          value={addEmployee.Document_Number}
          onChange={(e) => setAddEmployee({ ...addEmployee, Document_Number: e.target.value })} />
        <small
          className="text-muted">
          Please add your document number.
        </small>
      </CCol>
      <CCol md={6}>
        <CFormInput
          className="modal-name"
          type="date"
          placeholder="register"
          value={addEmployee.Date_Birth}
          onChange={(e) => setAddEmployee({ ...addEmployee, Date_Birth: e.target.value })} />
        <small className="text-muted">
          Please add your date of Birth.
        </small>
      </CCol>
    </CRow>
    <CRow className="g-3 mt-2">

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Phone"
          aria-label="Phone"
          value={addEmployee.Phone}
          onChange={(e) => setAddEmployee({ ...addEmployee, Phone: e.target.value })} />
        <small
          className="text-muted">
          Please add your phone.
        </small>

      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Address"
          aria-label="Address"
          value={addEmployee.Address}
          onChange={(e) => setAddEmployee({ ...addEmployee, Address: e.target.value })} />
        <small
          className="text-muted">
          Please add your address.
        </small>

      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Contact Person"
          aria-label="Contact Person"
          value={addEmployee.Contact_Person}
          onChange={(e) => setAddEmployee({ ...addEmployee, Contact_Person: e.target.value })} />
        <small
          className="text-muted">
          Please add your contact person.
        </small>
      </CCol>
    </CRow>
  </div>;


const EditSectionOne = ({ currentEmployee, setCurrentEmployee }) =>
  <div>
    <CRow className="g-3 mt-2">
      <h4 className='text-green mt-1 me-5'>
        Edit Personal Data
      </h4>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="First Name"
          aria-label="First Name"
          value={currentEmployee?.firts_name || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, firts_name: e.target.value })} />
        <small
          className="text-muted">
          Please add your firts name.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Middle Name"
          aria-label="Middle Name"
          value={currentEmployee?.Middle_Name || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, Middle_Name: e.target.value })} />
        <small
          className="text-muted">
          Please add your middle name.
        </small>
      </CCol>

      <CRow className="employees-las-name g-3 mt-2">
        <CCol md={6}>
          <CFormInput
            className="modal-name"
            placeholder="First Last-Name"
            aria-label="First Last-Name"
            value={currentEmployee?.Firts_Las_Name || ''}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, Firts_Las_Name: e.target.value })} />
          <small
            className="text-muted">
            Please add your firts last-name.
          </small>
        </CCol>

        <CCol md={6}>
          <CFormInput
            className="modal-name"
            placeholder="Second Last-Name"
            aria-label="Second Last-Name"
            value={currentEmployee?.Second_Las_Name || ''}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, Second_Las_Name: e.target.value })} />
          <small
            className="text-muted">
            Please add your second last-name.
          </small>
        </CCol>
      </CRow>
    </CRow>
  </div>;

const EditSectionTwo = ({ currentEmployee, setCurrentEmployee }) =>
  <div>
    <CRow className="g-3 mt-2">
      <h4 className='text-green mt-1 me-5'>
        Edit Personal Data
      </h4>
      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Document Number"
          aria-label="Document Number"
          value={currentEmployee?.Document_Number || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, Document_Number: e.target.value })} />
        <small
          className="text-muted">
          Please add your document number.
        </small>
      </CCol>
      <CCol md={6}>
        <CFormInput
          className="modal-name"
          type="date"
          placeholder="register"
          value={currentEmployee?.Date_Birth || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, Date_Birth: e.target.value })} />
        <small
          className="text-muted">
          Please add your date of Birth.
        </small>
      </CCol>
    </CRow>
    <CRow className="employees-las-name g-3 mt-2">
      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Phone"
          aria-label="Phone"
          value={currentEmployee?.Phone || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, Phone: e.target.value })} />
        <small
          className="text-muted">
          Please add your phone.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Address"
          aria-label="Address"
          value={currentEmployee?.Address || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, Address: e.target.value })} />
        <small
          className="text-muted">
          Please add your address.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name"
          placeholder="Contact Person"
          aria-label="Contact Person"
          value={currentEmployee?.Contact_Person || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, Contact_Person: e.target.value })} />
        <small
          className="text-muted">
          Please add your contact person.
        </small>
      </CCol>
    </CRow>
  </div>;


const employees = () => {
  const [visible, setVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentEditSection, setEditCurrentSection] = useState(0)
  const [currentEmployee, setCurrentEmployee] = useState(null)
  const [deleteConfirmation, setDeleteConfirmation] = useState('')
  const [employee, setEmployee] = useState([

    {
      firts_name: 'Alicia',
      Middle_Name: 'Martina',
      Firts_Las_Name: 'De los Santos',
      Second_Las_Name: 'Pequeños',
      Document_Number: '21456987',
      Date_Birth: '09/09/2014',
      Phone: '1234567894',
      Address: 'Las Palmas',
      Contact_Person: '0313245'
    },
    {
      firts_name: 'Alicia',
      Middle_Name: 'Martina',
      Firts_Las_Name: 'De los Santos',
      Second_Las_Name: 'Pequeños',
      Document_Number: '2145647987',
      Date_Birth: '09/09/2014',
      Phone: '1234567894',
      Address: 'Las Palmas',
      Contact_Person: '0313245'
    },

  ])
  const [addEmployee, setAddEmployee] = useState({
    firts_name: '',
    Middle_Name: '',
    Firts_Las_Name: '',
    Second_Las_Name: '',
    Document_Number: '',
    Date_Birth: '',
    Phone: '',
    Address: '',
    Contact_Person: '',

  })
  const sections = [
    <SectionOne addEmployee={addEmployee} setAddEmployee={setAddEmployee} />,
    <SectionTwo addEmployee={addEmployee} setAddEmployee={setAddEmployee} />,
  ]
  const editsections = [
    <EditSectionOne currentEmployee={currentEmployee} setCurrentEmployee={setCurrentEmployee} />,
    <EditSectionTwo currentEmployee={currentEmployee} setCurrentEmployee={setCurrentEmployee} />
  ]

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

  const handleAddEmployee = () => {
    setEmployee([...employee, addEmployee]);

    setAddEmployee({
      firts_name: '',
      Middle_Name: '',
      Firts_Las_Name: '',
      Second_Las_Name: '',
      Document_Number: '',
      Date_Birth: '',
      Phone: '',
      Address: '',
      Contact_Person: '',
    })
    setVisible(false);
  }

  const handleEditEmployee = () => {
    if (!currentEmployee || !currentEmployee.Document_Number) {
      console.error("No employee selected for editing.");
      return;
    }

    const updatedEmployee = employee.map((emp) => {
      if (emp.Document_Number === currentEmployee.Document_Number) {
        return { ...emp, ...currentEmployee };
      }
      return emp;
    });

    setEmployee(updatedEmployee);
    setEditVisible(false);
  }

  const handleDeleteEmployee = () => {
    if (!currentEmployee || !currentEmployee.Document_Number) {
      console.error("No employee selected for deletion.");
      return;
    }

    if (deleteConfirmation === 'confirm') {
      const deleteEmployee = employee.filter(
        (emp) => emp.Document_Number !== currentEmployee.Document_Number
      );
      setEmployee(deleteEmployee);
      setDeleteVisible(false);
    }
    else {
      console.error("Delete confirmation failed.");
    }
  }

  return (
    <CCard>
      <CCardHeader>
        <h4 className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center" >
          Employee Management
          <CButton className='button-no-hover-orange text-white' onClick={() => setVisible(!visible)} >
            <CIcon icon={cilPlus} className="me-2" />
            Add Employee
          </CButton>
        </h4>
      </CCardHeader>

      <CCardBody>
        <CTable hover responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell className='text-green'> FirtsName  <CIcon icon={cilTag} className="nav-icon icon-small" /></CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />MiddleName</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />Firts Las-Name</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />Second Las-Name</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilWallet} />Document-Number</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilCalendar} />Date-Birth</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilMobile} />Phone</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilLocationPin} />Address</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilContact} />Contact-Person</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilPencil} />Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {employee.map((employees) => (
              <CTableRow key={employees.Document_Number}>
                <CTableDataCell>{employees?.firts_name || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Middle_Name || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Firts_Las_Name || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Second_Las_Name || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Document_Number || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Date_Birth || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Phone || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Address || ''} </CTableDataCell>
                <CTableDataCell>{employees?.Contact_Person || ''} </CTableDataCell>

                <CTableDataCell>
                  <CButton
                    className='me-2 mb-2'
                    size='sm' color='info'
                    variant='outline'
                    onClick={() => {
                      setCurrentEmployee(employees);
                      setEditVisible(true);
                    }}>
                    Edit
                  </CButton>

                  <CButton
                    className='me-2 mb-2'
                    size='sm'
                    color='danger'
                    variant='outline'
                    onClick={() => { setCurrentEmployee(employees); setDeleteVisible(true); }}>
                    Delete
                  </CButton>

                </CTableDataCell>

              </CTableRow>
            ))}
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
          className='modal-module'>
          <CModalTitle className='typography-color'>
            Employee Record
          </CModalTitle>
        </CModalHeader>

        <CModalBody
          style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {sections[currentSection]}
        </CModalBody>

        <CModalFooter>
          <CButton
            className='button-no-hover-orange text-white'
            onClick={handlePrevious}
            disabled={currentSection === 0}>
            Fomer
          </CButton>

          <CButton
            className='button-no-hover-orange text-white'
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}>
            Next
          </CButton>

          <CButton
            className='button-no-hover-orange text-white'
            onClick={handleAddEmployee}>
            Add
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal
        alignment="center"
        scrollable
        visible={editVisible}
        onClose={() => setEditVisible(false)}

      >
        <CModalHeader
          className='modal-module'>
          <CModalTitle className='text-white'>
            Edit Employee
          </CModalTitle>
        </CModalHeader>

        <CModalBody
          style={{ maxHeight: '70vh', overflowY: 'auto' }}>
          {editsections[currentEditSection]}
        </CModalBody>

        <CModalFooter>
          <CButton
            className='button-no-hover-orange text-white'
            onClick={handlePreviousEdit}
            disabled={currentEditSection === 0}>
            Previos
          </CButton>

          <CButton
            className='button-no-hover-orange text-white'
            onClick={handleNextEdit}
            disabled={currentEditSection === sections.length - 1}>
            Next
          </CButton>

          <CButton
            className='button-no-hover-orange text-white'
            onClick={handleEditEmployee}>
            Save Changes
          </CButton>

        </CModalFooter>
      </CModal>
      <CModal
        visible={deleteVisible}
        onClose={() => setDeleteVisible(false)}
      >
        <CModalHeader>
          <CModalTitle
            className='typography-color-title'>
            Delete Employee
          </CModalTitle>
        </CModalHeader>

        <CModalBody>
          <h6>
            Please write 'confirm' to delete this employee
          </h6>
          <CFormInput
            placeholder="confirm"
            className='modal-border'
            value={deleteConfirmation}
            onChange={(e) => setDeleteConfirmation(e.target.value)} /> {/* detectar cambios*/}
        </CModalBody>

        <CModalFooter>
          <CButton
            className='button-no-hover'
            onClick={() => setDeleteVisible(false)}>
            <h6
              className='typography-color'>
              Close
            </h6>
          </CButton>

          <CButton
            className='button-no-hover-orange'
            onClick={handleDeleteEmployee}>
            <h6 className='typography-color'>
              delete
            </h6>
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>

  )
}
export default employees;
