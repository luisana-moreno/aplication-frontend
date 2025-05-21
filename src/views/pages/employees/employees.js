import react, { useState, useEffect  } from 'react'
import { helpFetch } from "src/helpper/helpFetch.js"
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
          className="modal-name custom-select"
          placeholder="First Name"
          aria-label="First Name"
          value={addEmployee.first_name}
          onChange={(e) => setAddEmployee({ ...addEmployee, first_name: e.target.value })}
        />
        <small
          className="text-muted">
          Please add your firts name.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Middle Name"
          aria-label="Middle Name"
          value={addEmployee.middle_name}
          onChange={(e) => setAddEmployee({ ...addEmployee, middle_name: e.target.value })}
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
          className="modal-name custom-select"
          placeholder="First Last-Name"
          aria-label="First Last-Name"
          value={addEmployee.first_lasname}
          onChange={(e) => setAddEmployee({ ...addEmployee, first_lasname: e.target.value })} />
        <small
          className="text-muted">
          Please add your firts last-name.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Second Last-Name"
          aria-label="Second Last-Name"
          value={addEmployee.second_lasname}
          onChange={(e) => setAddEmployee({ ...addEmployee, second_lasname: e.target.value })} />
        <small
          className="text-muted">
          Please add your second last-name.
        </small>
      </CCol>
    </CRow>

  </div>;

const SectionTwo = ({ addEmployee, setAddEmployee, position}) =>
  <div>
    <CRow className="g-3 mt-2">
      <h4 className='text-green mt-1 me-5'>
        Personal Data
      </h4>
      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Document Number"
          aria-label="Document Number"
          value={addEmployee.document_number}
          onChange={(e) => setAddEmployee({ ...addEmployee, document_number: e.target.value })} />
        <small
          className="text-muted">
          Please add your document number.
        </small>
      </CCol>
      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          type="date"
          placeholder="register"
          value={addEmployee.date_birth}
          onChange={(e) => setAddEmployee({ ...addEmployee, date_birth: e.target.value })} />
        <small className="text-muted">
          Please add your date of Birth.
        </small>
      </CCol>
    </CRow>
    <CRow className="g-3 mt-2">

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Phone"
          aria-label="Phone"
          value={addEmployee.phone}
          onChange={(e) => setAddEmployee({ ...addEmployee, phone: e.target.value })} />
        <small
          className="text-muted">
          Please add your phone.
        </small>

      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Address"
          aria-label="Address"
          value={addEmployee.address}
          onChange={(e) => setAddEmployee({ ...addEmployee, address: e.target.value })} />
        <small
          className="text-muted">
          Please add your address.
        </small>

      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          type='date'
          placeholder="Date Contrate "
          value={addEmployee.contract_date}
          onChange={(e) => setAddEmployee({ ...addEmployee, contract_date: e.target.value })} />
        <small
          className="text-muted">
          Please add your contrate date.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormSelect
          className="modal-name custom-select"
          placeholder="Position"
          aria-label="Position"
          value={addEmployee.position}
          onChange={(e) => setAddEmployee({ ...addEmployee, position: e.target.value })} 
          >
            <option value="">Position</option>
                                    {position.map((emp) => (
                                        <option key={emp.id}
                                            value={emp.name_position}>
                                            {emp.name_position}
                                        </option>
                                    ))}
        </CFormSelect>
        <small
          className="text-muted">
          Please add your Position.
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
          className="modal-name custom-select"
          placeholder="First Name"
          aria-label="First Name"
          value={currentEmployee?.first_name || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, first_name: e.target.value })} />
        <small
          className="text-muted">
          Please add your firts name.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Middle Name"
          aria-label="Middle Name"
          value={currentEmployee?.middle_name || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, middle_name: e.target.value })} />
        <small
          className="text-muted">
          Please add your middle name.
        </small>
      </CCol>

      <CRow className="employees-las-name g-3 mt-2">
        <CCol md={6}>
          <CFormInput
            className="modal-name custom-select"
            placeholder="First Last-Name"
            aria-label="First Last-Name"
            value={currentEmployee?.first_lasname || ''}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, first_lasname: e.target.value })} />
          <small
            className="text-muted">
            Please add your firts last-name.
          </small>
        </CCol>

        <CCol md={6}>
          <CFormInput
            className="modal-name custom-select"
            placeholder="Second Last-Name"
            aria-label="Second Last-Name"
            value={currentEmployee?.second_lasname || ''}
            onChange={(e) => setCurrentEmployee({ ...currentEmployee, second_lasname: e.target.value })} />
          <small
            className="text-muted">
            Please add your second last-name.
          </small>
        </CCol>
      </CRow>
    </CRow>
  </div>;

const EditSectionTwo = ({ currentEmployee, setCurrentEmployee, position}) =>
  <div>
    <CRow className="g-3 mt-2">
      <h4 className='text-green mt-1 me-5'>
        Edit Personal Data
      </h4>
      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Document Number"
          aria-label="Document Number"
          value={currentEmployee?.document_number || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, document_number: e.target.value })} />
        <small
          className="text-muted">
          Please add your document number.
        </small>
      </CCol>
      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          type="date"
          placeholder="register"
          value={currentEmployee?.date_birth || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, date_birth: e.target.value })} />
        <small
          className="text-muted">
          Please add your date of Birth.
        </small>
      </CCol>
    </CRow>
    <CRow className="employees-las-name g-3 mt-2">
      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Phone"
          aria-label="Phone"
          value={currentEmployee?.phone || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, phone: e.target.value })} />
        <small
          className="text-muted">
          Please add your phone.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          placeholder="Address"
          aria-label="Address"
          value={currentEmployee?.address || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, address: e.target.value })} />
        <small
          className="text-muted">
          Please add your address.
        </small>
      </CCol>

      <CCol md={6}>
        <CFormInput
          className="modal-name custom-select"
          type='date'
          placeholder="Date Contrate "
          value={currentEmployee?.contract_date || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, contract_date: e.target.value })} />
        <small
          className="text-muted">
          Please add your date contrate.
        </small>
      </CCol>
      <CCol md={6}>
        <CFormSelect
          className="modal-name custom-select"
          placeholder="Position"
          aria-label="Position"
          value={currentEmployee?.position || ''}
          onChange={(e) => setCurrentEmployee({ ...currentEmployee, position: e.target.value })} 
          >
            <option value="">Position</option>
                                    {position.map((emp) => (
                                        <option key={emp.id}
                                            value={emp.name_position}>
                                            {emp.name_position}
                                        </option>
                                    ))}
        </CFormSelect>
        <small
          className="text-muted">
          Please add your Position.
        </small>
      </CCol>
    </CRow>
  </div>;


const employees = () => {
  const API = helpFetch()
  const [visible, setVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [deleteVisible, setDeleteVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [currentEditSection, setEditCurrentSection] = useState(0)
  const [currentEmployee, setCurrentEmployee] = useState(null)
  const [deleteConfirmation, setDeleteConfirmation] = useState('')
  const [position, setPosition] = useState([])
  const [employee, setEmployee] = useState([
  ])
  const [addEmployee, setAddEmployee] = useState({
    first_name: '',
    middle_name: '',
    first_lasname: '',
    second_lasname: '',
    document_number: '',
    date_birth: '',
    phone: '',
    address: '',
    contract_date: '',
    position: '',

  })
  const sections = [
    <SectionOne addEmployee={addEmployee} setAddEmployee={setAddEmployee} position={position}  />,
    <SectionTwo addEmployee={addEmployee} setAddEmployee={setAddEmployee} position={position} />,
  ]
  const editsections = [
    <EditSectionOne currentEmployee={currentEmployee} setCurrentEmployee={setCurrentEmployee}  position={position}/>,
    <EditSectionTwo currentEmployee={currentEmployee} setCurrentEmployee={setCurrentEmployee}  position={position}/>
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

  useEffect(() => {
    const fetchEmployye = async () => {
        try {
            const response = await API.get("/employees");
            console.log("empleados cargados:", response);
            setEmployee(response);
        } catch (error) {
            console.error("Error al obtener los empleados:", error);
        }
    };

    fetchEmployye()
}, [])

useEffect(() => {
    const fetchPosition = async () => {
        try {
            const employee_position = await API.get("/employees_position_enum");
            setPosition(employee_position);
        } catch (error) {
            console.error("error al obtener la posicion del empleado", error);
        }
    } 
    fetchPosition()
}
, [])

  const handleAddEmployee = async () => {
      const addedEmployee = await API.post("/employees", {
          first_name: addEmployee.first_name,
          middle_name: addEmployee.middle_name,
          first_lasname: addEmployee.first_lasname,
          second_lasname: addEmployee.second_lasname,
          document_number: addEmployee.document_number,
          date_birth: addEmployee.date_birth,
          phone: addEmployee.phone,
          address: addEmployee.address,
          contract_date: addEmployee.contract_date,
          position: addEmployee.position,

          
      })
      setEmployee([...employee,addedEmployee,])

    setAddEmployee({
      first_name: '',
      middle_name: '',
      first_lasname: '',
      second_lasname: '',
      document_number: '',
      date_birth: '',
      phone: '',
      address: '',
      contract_date: '',
      position: '',
    })
    setVisible(false);
  }

  const handleEditEmployee = async () => {
    if (!currentEmployee || !currentEmployee.id) {
        console.error("No employee selected for editing.")
        return
    }
    try {
        const updatedEmployee = await API.put(
            "/employees",
            {
                id: currentEmployee.id,
                first_name: currentEmployee.first_name,
                middle_name: currentEmployee.middle_name,
                first_lasname: currentEmployee.first_lasname,
                second_lasname: currentEmployee.second_lasname,
                document_number: currentEmployee.document_number,
                date_birth: currentEmployee.date_birth,
                phone: currentEmployee.phone,
                address: currentEmployee.address,
                contract_date: currentEmployee.contract_date,
                position: currentEmployee.position,
            },  currentEmployee.id
        )
        setEmployee((prevEmployee) =>
            prevEmployee.map((employee) =>
                employee.id === currentEmployee.id
                    ? { ...employee, ...updatedEmployee } : employee,
            )
        ),
            setEditVisible(false)
    } catch (error) {
        console.error("Error updating employee:", error)

    }
}

const handleDeleteEmployee =async () => {
  if (deleteConfirmation === "confirm") {
      const employeeId = currentEmployee.id
      try {
          const deleteVisible =  await API.del("/employees",employeeId);
          setEmployee(employee.filter((employee) => employee.id !== currentEmployee.id))
          setDeleteVisible(false)
      } catch (error) {
          console.error("Error deleting employee:", error)
      }

  } else {
      console.error("Delete confirmation failed.")
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
              <CTableHeaderCell className='text-green'> <CIcon icon={cilContact} />Date Contrate</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilContact} />Position</CTableHeaderCell>
              <CTableHeaderCell className='text-green'> <CIcon icon={cilPencil} />Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {employee.map((employees) => (
              <CTableRow key={employees.id}>
                <CTableDataCell>{employees?.first_name || ''} </CTableDataCell>
                <CTableDataCell>{employees?.middle_name || ''} </CTableDataCell>
                <CTableDataCell>{employees?.first_lasname || ''} </CTableDataCell>
                <CTableDataCell>{employees?.second_lasname || ''} </CTableDataCell>
                <CTableDataCell>{employees?.document_number || ''} </CTableDataCell>
                <CTableDataCell>{employees?.date_birth || ''} </CTableDataCell>
                <CTableDataCell>{employees?.phone || ''} </CTableDataCell>
                <CTableDataCell>{employees?.address || ''} </CTableDataCell>
                <CTableDataCell>{employees?.contract_date || ''} </CTableDataCell>
                <CTableDataCell>{employees?.position || ''} </CTableDataCell>

                <CTableDataCell>
                  <div className='d-flex'>
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
                  </div>
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
            className='button-no-hover-green text-white'
            onClick={handlePrevious}
            disabled={currentSection === 0}>
            Fomer
          </CButton>

          <CButton
            className='button-no-hover-green text-white'
            onClick={handleNext}
            disabled={currentSection === sections.length - 1}>
            Next
          </CButton>

          <CButton
            className='button-no-hover-green text-white'
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
            className='button-no-hover-green text-white'
            onClick={handlePreviousEdit}
            disabled={currentEditSection === 0}>
            Previos
          </CButton>

          <CButton
            className='button-no-hover-green text-white'
            onClick={handleNextEdit}
            disabled={currentEditSection === sections.length - 1}>
            Next
          </CButton>

          <CButton
            className='button-no-hover-green text-white'
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
            className='button-no-hover green'
            onClick={() => setDeleteVisible(false)}>
            <h6
              className='typography-color'>
              Close
            </h6>
          </CButton>

          <CButton
            className='button-no-hover-green'
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
