import react, { useState } from 'react'
import CIcon from '@coreui/icons-react';
import {
    cilPlus,
    cilTag,
    cilTags,
    cilWallet,
    cilCalendar,
    cilMobile,
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
import { color } from 'chart.js/helpers';
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
                    placeholder="cattle Number"
                    aria-label="cattle Number"
                    value={addCattle.cattle_Number}
                    onChange={(e) => setAddCattle({ ...addCattle, cattle_Number: e.target.value })}
                />
                <small
                    className="text-muted">
                    Please add cattle number.
                </small>
            </CCol>

            <CCol md={6}>
                
                <CFormSelect
                    className="modal-name"
                    placeholder="Breed Bovine"
                    aria-label="Breed Bovine"
                    value={addCattle.breed_Bovine}
                    onChange={(e) => setAddCattle({ ...addCattle, breed_Bovine: e.target.value })}
                >
                <option value={''}>Breed Bovine</option>
                <option value={'Holstein'}>Holstein</option>
                <option value={'Jersey'}>Jersey</option>
                <option value={'Gyrolandas'}>Gyrolandas</option>
                <option value={'Carora'}>Carora</option>
                <option value={'Gyrhol'}>Gyrhol</option>
                </CFormSelect>
                <small
                    className="text-muted">
                    Please add breed bovine.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                        className="modal-name"
                        type="date"
                        placeholder="Register Date of Birth"
                        value={addCattle.Date_Birth}
                        onChange={(e) => setAddCattle({ ...addCattle, Date_Birth: e.target.value })} />
                    <small className="text-muted">
                        Please add ate of Birth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Color"
                    aria-label="Color"
                    value={addCattle.color}
                    onChange={(e) => setAddCattle({ ...addCattle, color: e.target.value })} 
                    >
                <option value={''}>Color</option>
                <option value={'Black and White'}>Black and White</option>
                <option value={'Red and White'}>Red and White</option>
                <option value={'Dark brown and White'}>Dark brown and White</option>
                </CFormSelect>
                    
                <small
                    className="text-muted">
                    Please add cattle color.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                        className="modal-name"
                        placeholder="Weigth"
                        value={addCattle.weigth}
                        onChange={(e) => setAddCattle({ ...addCattle, weigth: e.target.value })} />
                    <small className="text-muted">
                        Please add cattle weigth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Stage"
                    aria-label="Stage"
                    value={addCattle.stage}
                    onChange={(e) => setAddCattle({ ...addCattle, stage: e.target.value })} 
                    >
                <option value={''}>Stage</option>
                <option value={'Suckling calf'}>Suckling calf</option>
                <option value={'Weaned calf'}>Weaned calf</option>
                <option value={'Calves'}>Calves</option>
                <option value={'Heifers'}>Heifers</option>
                <option value={'Cows'}>Cows</option>
                </CFormSelect>
                <small
                    className="text-muted">
                    Please add cattle stage.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormSelect
                        className="modal-name"
                        placeholder="Statu Cattle"
                        value={addCattle.statu_cattle}
                        onChange={(e) => setAddCattle({ ...addCattle, statu_cattle: e.target.value })} 
                        >
                <option value={''}>Statu Cattle</option>
                <option value={'In service'}>In service</option>
                <option value={'Not in service'}>Not in service</option>
                </CFormSelect>
                    <small className="text-muted">
                        Please add statu cattle.
                    </small>
            </CCol>
        </CRow>

    </div>;


const EditSectionOne = ({ currentCattle, setCurrentCattle }) =>
    <div>
        <CRow
            className="g-3 mt-2">
            <h4 className='text-green mt-1 me-5'>
                Cattle Data
            </h4>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="cattle"
                    aria-label="cattle"
                    value={currentCattle?.cattle_Number || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, cattle_Number: e.target.value })} />
                <small
                    className="text-muted">
                    Please add cattle number.
                </small>
            </CCol>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Breed Bovine"
                    aria-label="Breed Bovine"
                    value={currentCattle?.breed_Bovine || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, breed_Bovine: e.target.value })} 
                    >
                <option value={''}>Breed Bovine</option>
                <option value={'Holstein'}>Holstein</option>
                <option value={'Jersey'}>Jersey</option>
                <option value={'Gyrolandas'}>Gyrolandas</option>
                <option value={'Carora'}>Carora</option>
                <option value={'Gyrhol'}>Gyrhol</option>
                </CFormSelect>                
                <small
                    className="text-muted">
                    Please add breed bovine.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                        className="modal-name"
                        type="date"
                        placeholder="Register Date of Birth"
                        value={currentCattle?.Date_Birth || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, Date_Birth: e.target.value })} />
                    <small className="text-muted">
                        Please add ate of Birth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Color"
                    aria-label="Color"
                    value={currentCattle?.color || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, color: e.target.value })} 
                    >
                <option value={''}>Color</option>
                <option value={'Black and White'}>Black and White</option>
                <option value={'Red and White'}>Red and White</option>
                <option value={'Dark brown and White'}>Dark brown and White</option>
                </CFormSelect>
                <small
                    className="text-muted">
                    Please add cattle color.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                        className="modal-name"
                        placeholder="Weigth"
                        value={currentCattle?.weigth || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, weigth: e.target.value })} />
                    <small className="text-muted">
                        Please add cattle weigth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Stage"
                    aria-label="Stage"
                    value={currentCattle?.stage || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, stage: e.target.value })} 
                    >
                <option value={''}>Stage</option>
                <option value={'Suckling calf'}>Suckling calf</option>
                <option value={'Weaned calf'}>Weaned calf</option>
                <option value={'Calves'}>Calves</option>
                <option value={'Heifers'}>Heifers</option>
                <option value={'Cows'}>Cows</option>
                </CFormSelect>
                <small
                    className="text-muted">
                    Please add cattle stage.
                </small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormSelect
                        className="modal-name"
                        placeholder="Statu Cattle"
                        value={currentCattle?.statu_cattle || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, statu_cattle: e.target.value })} 
                        >
                <option value={''}>Statu Cattle</option>
                <option value={'In service'}>In service</option>
                <option value={'Not in service'}>Not in service</option>
                </CFormSelect>
                    <small className="text-muted">
                        Please add statu cattle.
                    </small>
            </CCol>
        </CRow>
    </div>


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
            cattle_Number: '1001',
            breed_Bovine: 'Holstein',
            Date_Birth: '2021-01-15',
            color: 'Black and White',
            weigth: '600.50',
            stage: 'Cows',
            statu_cattle: 'in service',
        },
        {
            cattle_Number: '1008',
            breed_Bovine: 'Gyrolandas',
            Date_Birth: '2022-03-10',
            color: 'Dark brown and white',
            weigth: '480.00',
            stage: 'Heifers',
            statu_cattle: 'not in service',
        },

    ])
    const [addCattle, setAddCattle] = useState({
        cattle_Number: '',
        breed_Bovine: '',
        Date_Birth: '',
        color: '',
        weigth: '',
        stage: '',
        statu_cattle: '',
    
        })
    const sections = [
        <SectionOne addCattle={addCattle} setAddCattle={setAddCattle} />,
    ]
    const editsections = [
        <EditSectionOne currentCattle={currentCattle} setCurrentCattle={setCurrentCattle} />,
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

    const handleEdit = () => {
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
        if (!currentCattle || !currentCattle.cattle_Number) {
            console.error("No Cattle selected for editing.");
            return;
        }

        const updatedCattle = cattle.map((cattle) => {
            if (cattle.cattle_Number === currentCattle.cattle_Number) {
                return { ...cattle, ...currentCattle };
            }
            return cattle;
        });

        setCattle(updatedCattle);
        setEditVisibleCattle(false);
    }

    const handleDeleteCattle = () => {
        if (!currentCattle || !currentCattle.cattle_Number) {
            console.error("No Cattle selected for deletion.");
            return;
        }

        if (deleteConfirmationCattle  === 'confirm') {
            const deleteCattle  = cattle.filter(
                (cattle) => cattle.cattle_Number !== currentCattle.cattle_Number
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
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />Cattle Number</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />Bread Bovine</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilCalendar} />Date-Birth</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />Color</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />Weigth</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilWallet} />Stage</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilMobile} />Status Cattle</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilPencil} />Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {cattle.map((cattle) => (
                            <CTableRow key={cattle.Document_Number}>
                                <CTableDataCell>{cattle?.cattle_Number || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.breed_Bovine || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.Date_Birth || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.color || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.weigth || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.stage || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.statu_cattle || ''} </CTableDataCell>

                                <CTableDataCell>
                                    <div className='d-flex'>
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
                        className='button-no-hover-green text-white'
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
                        className='button-no-hover-green text-white'
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
                        className='button-no-hover-green text-white'
                        onClick={() => setDeleteVisibleCattle (false)}>
                            Close
                    </CButton>

                    <CButton
                        className='button-no-hover-green text-white'
                        onClick={handleDeleteCattle }>
                            delete
                    </CButton>
                </CModalFooter>
            </CModal>
        </CCard>
    )
}
export default Cattle ;
