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
const SectionOne = ({ addCattle, setAddCattle }) =>
    <div>
        <CRow
            className="g-3 mt-2">
            <h4 className='text-green mt-1 me-5'>
                Cattle Data
            </h4>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={addCattle.firts_name}
                    onChange={(e) => setAddCattle({ ...addCattle, firts_name: e.target.value })}
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
                    value={addCattle.Middle_Name}
                    onChange={(e) => setAddCattle({ ...addCattle, Middle_Name: e.target.value })}
                />

                <small
                    className="text-muted">
                    Please add your middle name.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="First Last-Name"
                    aria-label="First Last-Name"
                    value={addCattle.Firts_Las_Name}
                    onChange={(e) => setAddCattle({ ...addCattle, Firts_Las_Name: e.target.value })} />
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
                    value={addCattle.Second_Las_Name}
                    onChange={(e) => setAddCattle({ ...addCattle, Second_Las_Name: e.target.value })} />
                <small
                    className="text-muted">
                    Please add your second last-name.
                </small>
            </CCol>
        </CRow>

    </div>;

const SectionTwo = ({ addCattle, setAddCattle }) =>
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
                    value={addCattle.Document_Number}
                    onChange={(e) => setAddCattle({ ...addCattle, Document_Number: e.target.value })} />
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
                    value={addCattle.Date_Birth}
                    onChange={(e) => setAddCattle({ ...addCattle, Date_Birth: e.target.value })} />
                <small className="text-muted">
                    Please add your date of Birth.
                </small>
            </CCol>
        </CRow>
        <CRow className=" g-3 mt-2">

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={addCattle.Phone}
                    onChange={(e) => setAddCattle({ ...addCattle, Phone: e.target.value })} />
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
                    value={addCattle.Address}
                    onChange={(e) => setAddCattle({ ...addCattle, Address: e.target.value })} />
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
                    value={addCattle.Contact_Person}
                    onChange={(e) => setAddCattle({ ...addCattle, Contact_Person: e.target.value })} />
                <small
                    className="text-muted">
                    Please add your contact person.
                </small>
            </CCol>
        </CRow>
    </div>;

const EditSectionOne = ({ currentCattle, setCurrentCattle }) =>
    <div>
        <CRow className="g-3 mt-2">
            <h4 className='text-green mt-1 me-5'>
                Edit Client Data
            </h4>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={currentCattle?.firts_name || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, firts_name: e.target.value })} />
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
                    value={currentCattle?.Middle_Name || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, Middle_Name: e.target.value })} />
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
                        value={currentCattle?.Firts_Las_Name || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, Firts_Las_Name: e.target.value })} />
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
                        value={currentCattle?.Second_Las_Name || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, Second_Las_Name: e.target.value })} />
                    <small
                        className="text-muted">
                        Please add your second last-name.
                    </small>
                </CCol>
            </CRow>
        </CRow>
    </div>;

const EditSectionTwo = ({ currentCattle, setCurrentCattle }) =>
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
                    value={currentCattle?.Document_Number || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, Document_Number: e.target.value })} />
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
                    value={currentCattle?.Date_Birth || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, Date_Birth: e.target.value })} />
                <small
                    className="text-muted">
                    Please add your date of Birth.
                </small>
            </CCol>
        </CRow>
        <CRow className=" g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={currentCattle?.Phone || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, Phone: e.target.value })} />
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
                    value={currentCattle?.Address || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, Address: e.target.value })} />
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
                    value={currentCattle?.Contact_Person || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, Contact_Person: e.target.value })} />
                <small
                    className="text-muted">
                    Please add your contact person.
                </small>
            </CCol>
        </CRow>
    </div>;



const Cattle = () => {
    const [visibleCattle , setVisibleCattle ] = useState(false)
    const [editVisibleCattle, setEditVisibleCattle] = useState(false)
    const [deleteVisibleCattle, setDeleteVisibleCattle] = useState(false)
    const [currentSectionCattle, setCurrentSectionCattle] = useState(0)
    const [currentEditSectionCattle, setCurrentEditSectionCattle] = useState(0)
    const [currentCattle, setCurrentCattle] = useState(null)
    const [deleteConfirmationCattle, setDeleteConfirmationCattle] = useState('')
    const [cattle, setCattle] = useState([
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
    const [addCattle, setAddCattle] = useState({
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
        <SectionOne addCattle={addCattle} setAddCattle={setAddCattle} />,
        <SectionTwo addCattle={addCattle} setAddCattle={setAddCattle} />,
    ]
    const editsections = [
        <EditSectionOne currentCattle={currentCattle} setCurrentCattle={setCurrentCattle} />,
        <EditSectionTwo currentCattle={currentCattle} setCurrentCattle={setCurrentCattle} />
    ]

    const handleNext = () => {
        if (currentEditSectionCattle < sections.length - 1) {
            setCurrentSectionCattle(currentSectionCattle + 1);
        }
    };

    const handlePrevious = () => {
        if (currentEditSectionCattle > 0) {
            setCurrentSectionCattle(currentSectionCattle - 1);
        }
    };

    const handleNextEdit = () => {
        if (currentEditSectionCattle < sections.length - 1) {
            setCurrentEditSectionCattle(currentSectionCattle + 1);
        }
    };

    const handlePreviousEdit = () => {
        if (currentEditSectionCattle > 0) {
            setCurrentSectionCattle(currentSectionCattle - 1);
        }
    };

    const handleAddCattle = () => {
        setCattle([...cattle, addCattle]);

        setAddCattle({
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
        setVisibleCattle(false);
    }

    const handleEditCattle = () => {
        if (!currentCattle || !currentCattle.Document_Number) {
            console.error("No Cattle selected for editing.");
            return;
        }

        const updatedCattle = cattleattle.map((cattle) => {
            if (cattle.Document_Number === currentCattle.Document_Number) {
                return { ...cattle, ...currentCattle };
            }
            return cattle;
        });

        setCattle(updatedCattle);
        setEditVisibleCattle(false);
    }

    const handleDeleteCattle = () => {
        if (!currentCattle || !currentCattle.Document_Number) {
            console.error("No Cattle selected for deletion.");
            return;
        }

        if (deleteConfirmationCattle  === 'confirm') {
            const deleteCattle  = cattle.filter(
                (cattle) => cattle.Document_Number !== currentCattle.Document_Number
            );
            setCattle (deleteCattle );
            setDeleteVisibleCattle (false);
        }
        else {
            console.error("Delete confirmation failed.");
        }
    }

    return (
        <CCard>
            <CCardHeader>
                <h4 className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center" >
                    Cattle Management
                    <CButton className='button-no-hover-orange text-white' onClick={() => setVisibleCattle (!visibleCattle )} >
                        <CIcon icon={cilPlus} className="me-2" />
                        Add Cattle
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
                        {cattle.map((cattle) => (
                            <CTableRow key={cattle.Document_Number}>
                                <CTableDataCell>{cattle?.firts_name || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Middle_Name || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Firts_Las_Name || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Second_Las_Name || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Document_Number || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Date_Birth || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Phone || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Address || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Contact_Person || ''} </CTableDataCell>

                                <CTableDataCell>
                                    <CButton
                                        className='me-2 mb-2'
                                        size='sm' color='info'
                                        variant='outline'
                                        onClick={() => {
                                            setCurrentCattle (cattle);
                                            setEditVisibleCattle (true);
                                        }}>
                                        Edit
                                    </CButton>

                                    <CButton
                                        className='me-2 mb-2'
                                        size='sm'
                                        color='danger'
                                        variant='outline'
                                        onClick={() => { setCurrentCattle (cattle); setDeleteVisibleCattle (true); }}>
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
                visible ={visibleCattle }
                onClose={() => setVisibleCattle (false)}

            >
                <CModalHeader
                    className='modal-module'>
                    <CModalTitle className='typography-color'>
                        Cattle Record
                    </CModalTitle>
                </CModalHeader>

                <CModalBody
                    style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {sections[currentSectionCattle ]}
                </CModalBody>

                <CModalFooter>
                    <CButton
                        className='button-color-login text-white'
                        onClick={handlePrevious}
                        disabled={currentSectionCattle  === 0}>
                        Fomer
                    </CButton>

                    <CButton
                        className='button-color-login text-white'
                        onClick={handleNext}
                        disabled={currentSectionCattle  === sections.length - 1}>
                        Next
                    </CButton>

                    <CButton
                        className='button-color-login text-white'
                        onClick={handleAddCattle }>
                        Add
                    </CButton>
                </CModalFooter>
            </CModal>

            <CModal
                alignment="center"
                scrollable
                visible={editVisibleCattle }
                onClose={() => setEditVisibleCattle (false)}

            >
                <CModalHeader
                    className='modal-module'>
                    <CModalTitle className='text-white'>
                        Edit Cattle 
                    </CModalTitle>
                </CModalHeader>

                <CModalBody
                    style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {editsections[currentEditSectionCattle ]}
                </CModalBody>

                <CModalFooter>
                    <CButton
                        className='button-color-login text-white'
                        onClick={handlePreviousEdit}
                        disabled={currentEditSectionCattle  === 0}>
                        Previos
                    </CButton>

                    <CButton
                        className='button-color-login text-white'
                        onClick={handleNextEdit}
                        disabled={currentEditSectionCattle  === sections.length - 1}>
                        Next
                    </CButton>

                    <CButton
                        className='button-color-login text-white'
                        onClick={handleEditCattle }>
                        Save Changes
                    </CButton>

                </CModalFooter>
            </CModal>
            <CModal
                visible ={deleteVisibleCattle }
                onClose={() => setDeleteVisibleCattle (false)}
            >
                <CModalHeader>
                    <CModalTitle
                        className='typography-color-title'>
                        Delete Cattle 
                    </CModalTitle>
                </CModalHeader>

                <CModalBody>
                    <h6>
                        Please write 'confirm' to delete this cattle
                    </h6>
                    <CFormInput
                        placeholder="confirm"
                        className='modal-border'
                        value={deleteConfirmationCattle }
                        onChange={(e) => setDeleteConfirmationCattle (e.target.value)} /> {/* detectar los cambios guardados */}
                </CModalBody>

                <CModalFooter>
                    <CButton
                        className='button-no-hover'
                        onClick={() => setDeleteVisibleCattle (false)}>
                        <h6
                            className='typography-color'>
                            Close
                        </h6>
                    </CButton>

                    <CButton
                        className='button-color-login'
                        onClick={handleDeleteCattle }>
                        <h6 className='typography-color'>
                            delete
                        </h6>
                    </CButton>
                </CModalFooter>
            </CModal>
        </CCard>
    )
}
export default Cattle ;
