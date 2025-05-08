import react, { useState, useEffect } from 'react'
import { helpFetch } from "src/helpper/helpFetch.js"
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

const SectionOne = ({ addCattle, setAddCattle, breedBovine, colorCattle, stageCattle, statuCattle}) =>
    <div>
        <CRow
            className="g-3 mt-2">
            <h4 className='text-green mt-1 me-5'>
                Cattle Data
            </h4>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="cattle Number"
                    aria-label="cattle Number"
                    value={addCattle.cattle_number}
                    onChange={(e) => setAddCattle({ ...addCattle, cattle_number: e.target.value })}
                />
                <small
                    className="text-muted">
                    Please add cattle number.
                </small>
            </CCol>

            <CCol md={6}>
                
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Breed Bovine"
                    aria-label="Breed Bovine"
                    value={addCattle.breed_bovine}
                    onChange={(e) => setAddCattle({ ...addCattle, breed_bovine: e.target.value })}
                >
                <option value="">breed Bovine</option>
                                    {breedBovine.map((cattleRace) => (
                                        <option key={cattleRace.id}
                                            value={cattleRace.name}>
                                            {cattleRace.name}
                                        </option>
                                    ))}
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
                        className="modal-name custom-select"
                        type="date"
                        placeholder="Register Date of Birth"
                        value={addCattle.date_birth}
                        onChange={(e) => setAddCattle({ ...addCattle, date_birth: e.target.value })}>
                        </CFormInput>
                    <small className="text-muted">
                        Please add ate of Birth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Color"
                    aria-label="Color"
                    value={addCattle.color_cattle}
                    onChange={(e) => setAddCattle({ ...addCattle, color_cattle: e.target.value })} 
                    >
                <option value="">Color Cattle</option>
                                    {colorCattle.map((color) => (
                                        <option key={color.id}
                                            value={color.name}>
                                            {color.name}
                                        </option>
                                    ))}
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
                        className="modal-name custom-select"
                        type="number" 
                        placeholder="Weight"
                        value={addCattle.weight}
                        onChange={(e) => setAddCattle({ ...addCattle, weight: parseFloat(e.target.value) || '' })}/>
                    <small className="text-muted">
                        Please add cattle weigth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Stage"
                    aria-label="Stage"
                    value={addCattle.stage}
                    onChange={(e) => setAddCattle({ ...addCattle, stage: e.target.value })} 
                    >
                    <option value="">Stage</option>
                        {stageCattle.map((stage) => (
                        <option key={stage.id} 
                            value={stage.name}>
                            {stage.name}
                        </option>
))}
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
                        className="modal-name custom-select"
                        placeholder="Statu Cattle"
                        value={addCattle.statu_cattle}
                        onChange={(e) => setAddCattle({ ...addCattle, statu_cattle: e.target.value })} 
                        >
                <option value="">Status cattle</option>
                                    {statuCattle.map((statu) => (
                                        <option key={statu.id}
                                            value={statu.name}>
                                            {statu.name}
                                        </option>
                                    ))}
                </CFormSelect>
                    <small className="text-muted">
                        Please add statu cattle.
                    </small>
            </CCol>
        </CRow>

    </div>;


const EditSectionOne = ({ currentCattle, setCurrentCattle, breedBovine, colorCattle, stageCattle, statuCattle}) =>
    <div>
        <CRow
            className="g-3 mt-2">
            <h4 className='text-green mt-1 me-5'>
                Cattle Data
            </h4>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="cattle"
                    aria-label="cattle"
                    value={currentCattle?.cattle_number || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, cattle_number: e.target.value })} />
                <small
                    className="text-muted">
                    Please add cattle number.
                </small>
            </CCol>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Breed Bovine"
                    aria-label="Breed Bovine"
                    value={currentCattle?.breed_bovine || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, breed_bovine: e.target.value })} 
                    >
                <option value="">breed Bovine</option>
                                    {breedBovine.map((cattleRace) => (
                                        <option key={cattleRace.id}
                                            value={cattleRace.name}>
                                            {cattleRace.name}
                                        </option>
                                    ))}
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
                    className="modal-name custom-select"
                    type="date"
                    placeholder="Register Date of Birth"
                    value={currentCattle?.date_birth || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, date_birth: e.target.value })}/>
                    <small className="text-muted">
                        Please add ate of Birth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Color"
                    aria-label="Color"
                    value={currentCattle?.color_cattle || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, color_cattle: e.target.value })} 
                    >
                <option value="">Color Cattle</option>
                                    {colorCattle.map((color) => (
                                        <option key={color.id}
                                            value={color.name}>
                                            {color.name}
                                        </option>
                                    ))}
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
                        className="modal-name custom-select"
                        type="number"
                        placeholder="Weight"
                        value={currentCattle?.weight || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, weight: e.target.value })}/>
                    <small className="text-muted">
                        Please add cattle weigth.
                    </small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Stage"
                    aria-label="Stage"
                    value={currentCattle?.stage || ''}
                    onChange={(e) => setCurrentCattle({ ...currentCattle, stage: e.target.value })} 
                    >
                <option value="">Stage</option>
                                    {stageCattle.map((stage) => (
                                        <option key={stage.id}
                                            value={stage.name}>
                                            {stage.name}
                                        </option>
                                    ))}
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
                        className="modal-name custom-select"
                        placeholder="Statu Cattle"
                        value={currentCattle?.statu_cattle || ''}
                        onChange={(e) => setCurrentCattle({ ...currentCattle, statu_cattle: e.target.value })} 
                        >
                <option value="">Status cattle</option>
                                    {statuCattle.map((statu) => (
                                        <option key={statu.id}
                                            value={statu.name}>
                                            {statu.name}
                                        </option>
                                    ))}
                </CFormSelect>
                    <small className="text-muted">
                        Please add statu cattle.
                    </small>
            </CCol>
        </CRow>
    </div>


const Cattle = () => {
    const API = helpFetch()
    const [visibleCattle , setVisibleCattle ] = useState(false)
    const [editVisibleCattle, setEditVisibleCattle] = useState(false)
    const [deleteVisibleCattle, setDeleteVisibleCattle] = useState(false)
    const [currentSectionCattle, setCurrentSectionCattle] = useState(0)
    const [currentEditSectionCattle, setCurrentEditSectionCattle] = useState(0)
    const [currentCattle, setCurrentCattle] = useState(null)
    const [deleteConfirmationCattle, setDeleteConfirmationCattle] = useState('')
    const [cattle, setCattle] = useState([])
    const [breedBovine, setBreedBovine] = useState([])
    const [colorCattle, setColorCattle] = useState([])
    const [stageCattle, setStageCattle] = useState([])
    const [statuCattle, setStatuCattle] = useState([])
    const [addCattle, setAddCattle] = useState({
        cattle_number:  "",
        breed_bovine: "",
        date_birth: "",
        color_cattle: "",
        weight: "",
        stage: "",
        statu_cattle: ""
    
        })
    const sections = [
        <SectionOne addCattle={addCattle} setAddCattle={setAddCattle} breedBovine={breedBovine} colorCattle={colorCattle} stageCattle={stageCattle} statuCattle={statuCattle}/>,
    ]
    const editsections = [
        <EditSectionOne currentCattle={currentCattle} setCurrentCattle={setCurrentCattle} breedBovine={breedBovine} colorCattle={colorCattle}stageCattle={stageCattle} statuCattle={statuCattle}/>,
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

    useEffect(() => {
            const fetchCattle = async () => {
                try {
                    const response = await API.get("/cattle");
                    console.log("Cattle cargados:", response);
                    setCattle(response);
                } catch (error) {
                    console.error("Error al obtener los cattle:", error);
                }
            };
    
            fetchCattle()
        }, [])

    useEffect(() => {
                const fetchBreedBovine = async () => {
                    try {
                        const breedBovine= await API.get("/breed_bovine_enum");
                        console.log("Cattle cargados:", breedBovine);
                        setBreedBovine(breedBovine);
                    } catch (error) {
                        console.error("error al obtener el tipo de breed bovine", error);
                    }
                };
                fetchBreedBovine()
            }
            , [])

            useEffect(() => {
                const fetchColorBo = async () => {
                    try {
                        const colorBovine= await API.get("/cattle_color_enum");
                        console.log("Cattle cargados:", colorBovine);
                        setColorCattle(colorBovine);
                    } catch (error) {
                        console.error("error al obtener el tipo de breed bovine", error);
                    }
                };
                fetchColorBo()
            }
            , [])

            useEffect(() => {
                const fetchStageBo = async () => {
                    try {
                        const stage = await API.get("/cattle_stage_enum");
                        console.log("Etapa Cattle:", stage);
                        setStageCattle(stage); 
                    } catch (error) {
                        console.error("Error al obtener la etapa", error);
                    }
                };
                fetchStageBo();
            }, []);

            useEffect(() => {
                const fetchStatuBo = async () => {
                    try {
                        const statu = await API.get("/cattle_statu_enum");
                        console.log("Estado Cattle:", statu);
                        setStatuCattle(statu); 
                    } catch (error) {
                        console.error("Error al obtener el estado", error);
                    }
                };
                fetchStatuBo();
            }, []);

    const handleAddCattle = async () => {
                const addedCattle = await API.post("/cattle", {
                    cattle_number: addCattle.cattle_number,
                    breed_bovine: addCattle.breed_bovine,
                    date_birth: addCattle.date_birth,
                    color_cattle: addCattle.color_cattle,
                    weight: parseFloat(addCattle.weight),
                    stage: addCattle.stage,
                    statu_cattle: addCattle.statu_cattle,
                })
                setCattle([...cattle,addedCattle,])

        setAddCattle({
            cattle_number:  "",
            breed_bovine: "",
            date_birth: "",
            color_cattle: "",
            weight: "",
            stage: "",
            statu_cattle: ""      
        })
        setVisibleCattle(false);
    }

    const handleEditCattle = async () => {
        if (!currentCattle || !currentCattle.id) {
            console.error("No cattle selected for editing.")
            return
        }
        try {
            const updatedCattle = await API.put(
                "/cattle",
                {
                    cattle_number: currentCattle.cattle_number,
                    breed_bovine: currentCattle.breed_bovine,
                    date_birth: currentCattle.date_birth,
                    color_cattle: currentCattle.color_cattle,
                    weight: parseFloat(addCattle.weight),
                    stage: currentCattle.stage,
                    statu_cattle: currentCattle.statu_cattle,
                },  currentCattle.id
            )
            setCattle((prevCattle) =>
                prevCattle.map((cattle) =>
                    cattle.id === currentCattle.id
                        ? { ...cattle, ...updatedCattle } : cattle,
                )
            ),
                setEditVisibleCattle(false)
        } catch (error) {
            console.error("Error updating cattle:", error)

        }
    }

    const handleDeleteCattle =async () => {
        if (deleteConfirmationCattle === "confirm") {
            const cattleId = currentCattle.id
            try {
                const deleteConfirmationCattle =  await API.del("/cattle",cattleId);
                setCattle(cattle.filter((cattle) => cattle.id !== currentCattle.id))
                setDeleteVisibleCattle(false)
            } catch (error) {
                console.error("Error deleting cattle:", error)
            }

        } else {
            console.error("Delete confirmation failed.")
        }
    }
    const bovineBreed = (id) => {
        const breedEnum = bovineBreed.find((cattleRace) => cattleRace.id === id);
        return breedEnum ? breedBovine.id : 'Unknown';
    }; 
    const colorBo = (id) => {
        const breedEnum = colorBo.find((bovineColor) => bovineColor.id === id);
        return breedEnum ? colorCattle.id : 'Unknown';
    }; 
    const stageBo = (id) => {
        const breedEnum = stageBo.find((stageCattle) => stageCattle.id === id);
        return breedEnum ? stageCattle.id : 'Unknown';
    }; 
    const statuBo = (id) => {
        const breedEnum = statuBo.find((statuCattle) => statuCattle.id === id);
        return breedEnum ? statuCattle.id : 'Unknown';
    };
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
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />Weight</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilWallet} />Stage</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilMobile} />Status Cattle</CTableHeaderCell>
                            <CTableHeaderCell className='text-green'> <CIcon icon={cilPencil} />Actions</CTableHeaderCell>
                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                        {cattle.map((cattle) => (
                            <CTableRow key={cattle.id}>
                                <CTableDataCell>{cattle?.cattle_number || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.breed_bovine || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.date_birth || ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.color_cattle|| ''} </CTableDataCell>
                                <CTableDataCell>{cattle?.weight || ''} </CTableDataCell>
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
