import react, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import {
    cilPlus,
    cilTag,
    cilTags,
    cilWallet,
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
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CPagination,
    CPaginationItem,

} from '@coreui/react';
const SectionOne = ({ addInput, setAddInput }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Input</h4>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Input Category"
                    aria-label="Input Category"
                    value={addInput.input_category || ''}
                    onChange={(e) => setAddInput({ ...addInput, input_category: e.target.value })}
                >
                    <option value={''}>input category</option>
                    <option value={'Aliment'}>Aliment</option>
                    <option value={'Vaccinate'}>Vaccinate</option>
                </CFormSelect>
                <small className="text-muted">Please add the category of the input.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Name"
                    aria-label="Name"
                    value={addInput.name || ''}
                    onChange={(e) => setAddInput({ ...addInput, name: e.target.value })}
                />

                <small className="text-muted">Please add the name of the input.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Amount"
                    aria-label="Amount"
                    value={addInput.amount || ''}
                    onChange={(e) => setAddInput({ ...addInput, amount: e.target.value })} />

                <small className="text-muted">Please add the amount of the input.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Expiration Date"
                    aria-label="Expiration Date"
                    value={addInput.expiration_date || ''}
                    onChange={(e) => setAddInput({ ...addInput, expiration_date: e.target.value })}
                />
                <small className="text-muted">Please add the expiration date of the input.</small>
            </CCol>
        </CRow>
    </div>
)
const EditSectionOne = ({ currentInput, setCurrentInput }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Edit Input</h4>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Input Category"
                    aria-label="Input Category"
                    value={currentInput?.input_category || ''}
                    onChange={(e) => setCurrentInput({ ...currentInput, input_category: e.target.value })}
                >
                    <option value={''}>Input Category</option>
                    <option value={'Aliment'}>Aliment</option>
                    <option value={'Vaccinate'}>Vaccinate</option>
                </CFormSelect>
                <small className="text-muted">Please add input category.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Name"
                    aria-label="Name"
                    value={currentInput?.name || ''}
                    onChange={(e) => setCurrentInput({ ...currentInput, name: e.target.value })}
                />

                <small className="text-muted">Please add the name of the input.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Amount"
                    aria-label="Amount"
                    value={currentInput?.amount || ''}
                    onChange={(e) => setCurrentInput({ ...currentInput, amount: e.target.value })}
                />
                <small className="text-muted">Please add the amount of the input.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Expiration Date"
                    aria-label="Expiration Date"
                    value={currentInput?.expiration_date || ''}
                    onChange={(e) => setCurrentInput({ ...currentInput, expiration_date: e.target.value })}
                />
                <small className="text-muted">Please add the expiration date of the input.</small>
            </CCol>
            <CCol md={6}>
                <CFormTextarea
                    className="modal-name custom-select"
                    placeholder="Description"
                    aria-label="Description"
                    value={currentInput?.description || ''}
                    onChange={(e) => setCurrentInput({ ...currentInput, description: e.target.value })}
                />
                <small className="text-muted">Please add the description of the input.</small>
            </CCol>
        </CRow>
    </div>
)

const Inventory = () => {
    const [visibleInput, setVisibleInput] = useState(false)
    const [editVisibleInput, setEditVisibleInput] = useState(false)
    const [deleteVisibleInput, setDeleteVisibleInput] = useState(false)
    const [currentInput, setCurrentInput] = useState({})
    const [currentEditSectionInput, setCurrentEditSectionInput] = useState(0)
    const [activeKey, setActiveKey] = useState(1)
    const [deleteConfirmationInput, setDeleteConfirmationInput] = useState('')
    const [currentSectionInput, setCurrentSectionInput] = useState(0)
    const [input, setInput] = useState([
        {
            id: 1,
            input_category: 'Aliment',
            name: 'Food',
            amount: '10kg',
            expiration_date: '2023-12-31',
            description: 'Food for the animals',
        },
        {
            id: 2,
            input_category: 'Vaccinate',
            name: 'Vaccine A',
            amount: '5 doses',
            expiration_date: '2024-06-30',
            description: 'Vaccine for disease A',
        },
    ])
    const [addInput, setAddInput] = useState({
        input_category: '',
        name: '',
        amount: '',
        expiration_date: '',
        description: '',
    })
    const sections = [
        <SectionOne addInput={addInput} setAddInput={setAddInput} />,
    ]
    const editsections = [
        <EditSectionOne currentInput={currentInput} setCurrentInput={setCurrentInput} />,
    ]


    const handleAddInput = () => {
        setInput([...input, addInput])
        setAddInput({
            input_category: '',
            name: '',
            amount: '',
            expiration_date: '',
            description: '',
        })
        setVisibleInput(false)
    }


    const handleEditInput = () => {
        const updatedInput = input.map((inputItem) => {
            if (inputItem.id === currentInput.id) {
                return { ...inputItem, ...currentInput }
            }
            return inputItem
        })
        setInput(updatedInput)
        setEditVisibleInput(false)
    }

    const handleDeleteInput = () => {
        if (deleteConfirmationInput === 'confirm') {
            const updatedInput = input.filter((inputItem) => inputItem.id !== currentInput.id)
            setInput(updatedInput)
            setDeleteVisibleInput(false)
        }
    }



    return (
        <CCard className="mb-4">
            <CCardHeader>
                <h4 className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center">
                    Input
                    <CButton
                        className="button-no-hover-orange text-white"
                        onClick={() => setVisibleInput(true)}
                    >
                        <CIcon icon={cilPlus} className="me-2" />
                        Add Input
                    </CButton>
                </h4>
            </CCardHeader>

            <CCardBody>
                <CNav variant="tabs" role="tablist">
                    <CNavItem>
                        <CNavLink
                            className={`c-nav-link ${activeKey === 1 ? 'active' : ''}`}
                            active={activeKey === 1}
                            onClick={() => setActiveKey(1)}
                        >
                            Aliment
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            className={`c-nav-link ${activeKey === 2 ? 'active' : ''}`}
                            active={activeKey === 2}
                            onClick={() => setActiveKey(2)}
                        >
                            Vaccinate
                        </CNavLink>
                    </CNavItem>
                </CNav>
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                        <CTable hover responsive>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilTag} />
                                        Category
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilTags} />
                                        Name
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilWallet} />
                                        Amount
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilMobile} />
                                        Expiration Date
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilLocationPin} />
                                        Description
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilContact} />
                                        Actions
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {input
                                    .filter((input) => input.input_category === 'Aliment')
                                    .map((input) => (
                                        <CTableRow key={input.id}>
                                            <CTableDataCell>{input?.name || ''}</CTableDataCell>
                                            <CTableDataCell>{input?.amount || ''}</CTableDataCell>
                                            <CTableDataCell>{input?.expiration_date || ''}</CTableDataCell>
                                            <CTableDataCell>{input?.description || ''}</CTableDataCell>
                                            <CTableDataCell>
                                                <div className="d-flex">
                                                    <CButton
                                                        className="me-2 mb-2"
                                                        size="sm"
                                                        color="info"
                                                        variant="outline"
                                                        onClick={() => {
                                                            setCurrentInput(input)
                                                            setEditVisibleInput(true)
                                                        }}
                                                    >
                                                        Edit
                                                    </CButton>

                                                    <CButton
                                                        className="me-2 mb-2"
                                                        size="sm"
                                                        color="danger"
                                                        variant="outline"
                                                        onClick={() => {
                                                            setCurrentInput(input)
                                                            setDeleteVisibleInput(true)
                                                        }}
                                                    >
                                                        Delete
                                                    </CButton>
                                                </div>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                            </CTableBody>
                        </CTable>
                    </CTabPane>
                    <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                        <CTable hover responsive>
                            <CTableHead>
                                <CTableRow>

                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilTags} />
                                        Name
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilWallet} />
                                        Amount
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilMobile} />
                                        Expiration Date
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilLocationPin} />
                                        Description
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {' '}
                                        <CIcon icon={cilContact} />
                                        Actions
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {input
                                    .filter((input) => input.input_category == 'Vaccinate')
                                    .map((input) => (
                                        <CTableRow key={input.id}>
                                            <CTableDataCell>{input?.name || ''}</CTableDataCell>
                                            <CTableDataCell>{input?.amount || ''}</CTableDataCell>
                                            <CTableDataCell>{input?.expiration_date || ''}</CTableDataCell>
                                            <CTableDataCell>{input?.description || ''}</CTableDataCell>
                                            <CTableDataCell>
                                                <div className="d-flex">
                                                    <CButton
                                                        className="me-2 mb-2"
                                                        size="sm"
                                                        color="info"
                                                        variant="outline"
                                                        onClick={() => {
                                                            setCurrentInput(input)
                                                            setEditVisibleInput(true)
                                                        }}
                                                    >
                                                        Edit
                                                    </CButton>

                                                    <CButton
                                                        className="me-2 mb-2"
                                                        size="sm"
                                                        color="danger"
                                                        variant="outline"
                                                        onClick={() => {
                                                            setCurrentInput(input)
                                                            setDeleteVisibleInput(true)
                                                        }}
                                                    >
                                                        Delete
                                                    </CButton>
                                                </div>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                            </CTableBody>
                        </CTable>
                    </CTabPane>
                </CTabContent>
            </CCardBody>

            <CModal
                alignment="center"
                scrollable
                visible={editVisibleInput}
                onClose={() => setEditVisibleInput(false)}
            >
                <CModalHeader className="modal-module">
                    <CModalTitle className="text-white">Edit Input</CModalTitle>
                </CModalHeader>

                <CModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {editsections[currentEditSectionInput]}
                </CModalBody>

                <CModalFooter>
                    <CButton className="button-no-hover-green text-white" onClick={handleEditInput}>
                        Save Changes
                    </CButton>
                </CModalFooter>
            </CModal>

            <CModal visible={deleteVisibleInput} onClose={() => setDeleteVisibleInput(false)}>
                <CModalHeader>
                    <CModalTitle className="typography-color-title">Delete Input</CModalTitle>
                </CModalHeader>

                <CModalBody>
                    <h6>Please write 'confirm' to delete this input</h6>
                    <CFormInput
                        placeholder="confirm"
                        className="modal-border"
                        value={deleteConfirmationInput}
                        onChange={(e) => setDeleteConfirmationInput(e.target.value)}
                    />{' '}
                    {/* detectar los cambios guardados */}
                </CModalBody>

                <CModalFooter>
                    <CButton className="button-no-hover-green" onClick={() => setDeleteVisibleInput(false)}>
                        <h6 className="typography-color">Close</h6>
                    </CButton>

                    <CButton className="button-no-hover-green" onClick={handleDeleteInput}>
                        <h6 className="typography-color">delete</h6>
                    </CButton>
                </CModalFooter>

            </CModal>

            <CModal
                alignment="center"
                scrollable
                visible={visibleInput}
                onClose={() => setVisibleInput(false)}
            >
                <CModalHeader className="modal-module">
                    <CModalTitle className="text-white">Add Input</CModalTitle>
                </CModalHeader>

                <CModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {sections[currentSectionInput]}
                </CModalBody>

                <CModalFooter>
                    <CButton className="button-no-hover-green text-white" onClick={handleAddInput}>
                        Add Input
                    </CButton>
                </CModalFooter>
            </CModal>


        </CCard>

    )
}
export default Inventory