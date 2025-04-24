import react, { useState } from 'react'
import CIcon from '@coreui/icons-react'
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
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
} from '@coreui/react'
const SectionOne = ({ addClient, setAddClient }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Client Data</h4>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Client Type"
                    aria-label="Client Type"
                    value={addClient.client_type|| ''}
                    onChange={(e) => setAddClient({ ...addClient, client_type: e.target.value })}
                >
                    <option value={''}>Client Type</option>
                    <option value={'Company'}>Company</option>
                    <option value={'Person'}>Person</option>
                </CFormSelect>
                <small className="text-muted">Please add your client type.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="company Name"
                    aria-label="company Name"
                    value={addClient.company_name}
                    onChange={(e) => setAddClient({ ...addClient, company_name: e.target.value })}
                />

                <small className="text-muted">Please add company name.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={addClient.firts_name}
                    onChange={(e) => setAddClient({ ...addClient, firts_name: e.target.value })}
                />
                <small className="text-muted">Please add your firts name.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="first Last-Name"
                    aria-label="first Last-Name"
                    value={addClient.Firts_Las_Name}
                    onChange={(e) => setAddClient({ ...addClient, Firts_Las_Name: e.target.value })}
                />
                <small className="text-muted">Please add your first last-name.</small>
            </CCol>
        </CRow>
    </div>
)

const SectionTwo = ({ addClient, setAddClient }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Client Data</h4>
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="document Number"
                    aria-label="Document Number"
                    value={addClient.Document_Number}
                    onChange={(e) => setAddClient({ ...addClient, Document_Number: e.target.value })}
                />
                <small className="text-muted">Please add your document number.</small>
            </CCol>
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="rif"
                    value={addClient.rif}
                    onChange={(e) => setAddClient({ ...addClient, rif: e.target.value })}
                />
                <small className="text-muted">Please add your rif.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={addClient.Phone}
                    onChange={(e) => setAddClient({ ...addClient, Phone: e.target.value })}
                />
                <small className="text-muted">Please add your phone.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Address"
                    aria-label="Address"
                    value={addClient.Address}
                    onChange={(e) => setAddClient({ ...addClient, Address: e.target.value })}
                />
                <small className="text-muted">Please add your address.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="email"
                    aria-label="email"
                    value={addClient.email}
                    onChange={(e) => setAddClient({ ...addClient, email: e.target.value })}
                />
                <small className="text-muted">Please add your email</small>
            </CCol>
        </CRow>
    </div>
)

const EditSectionOne = ({ currentClient, setCurrentClient }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Edit Client Data</h4>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name"
                    placeholder="Client Type"
                    aria-label="Client Type"
                    value={currentClient?.client_type || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, client_type: e.target.value })}
                >
                    <option value={''}>Client Type</option>
                    <option value={'Company'}>Company</option>
                    <option value={'Person'}>Person</option>
                </CFormSelect>
                <small className="text-muted">Please add client type.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="company Name"
                    aria-label="company Name"
                    value={currentClient?.company_name || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, company_name: e.target.value })}
                />
                <small className="text-muted">Please add your company name.</small>
            </CCol>

            <CRow className="g-3 mt-2">
                <CCol md={6}>
                    <CFormInput
                        className="modal-name"
                        placeholder="First Name"
                        aria-label="First Name"
                        value={currentClient?.firts_name || ''}
                        onChange={(e) => setCurrentClient({ ...currentClient, firts_name: e.target.value })}
                    />
                    <small className="text-muted">Please add your firts name.</small>
                </CCol>

                <CCol md={6}>
                    <CFormInput
                        className="modal-name"
                        placeholder="firts Last-Name"
                        aria-label="firts Last-Name"
                        value={currentClient?.Firts_Las_Name || ''}
                        onChange={(e) => setCurrentClient({ ...currentClient, Firts_Las_Name: e.target.value })}
                    />
                    <small className="text-muted">Please add your firts last-name.</small>
                </CCol>
            </CRow>
        </CRow>
    </div>
)

const EditSectionTwo = ({ currentClient, setCurrentClient }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Edit Client Data</h4>
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Document Number"
                    aria-label="Document Number"
                    value={currentClient?.Document_Number || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, Document_Number: e.target.value })}
                />
                <small className="text-muted">Please add your document number.</small>
            </CCol>
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Rif"
                    aria-label="Rif"
                    value={currentClient?.rif || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, rif: e.target.value })}
                />
                <small className="text-muted">Please add your rif.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={currentClient?.Phone || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, Phone: e.target.value })}
                />
                <small className="text-muted">Please add your phone.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Address"
                    aria-label="Address"
                    value={currentClient?.Address || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, Address: e.target.value })}
                />
                <small className="text-muted">Please add your address.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name"
                    placeholder="Email"
                    aria-label="Email"
                    value={currentClient?.email || ''}
                    onChange={(e) => setCurrentClient({ ...currentClient, email: e.target.value })}
                />
                <small className="text-muted">Please add your contact person.</small>
            </CCol>
        </CRow>
    </div>
)

const Client = () => {
    const [visibleClient, setVisibleClient] = useState(false)
    const [editVisibleClient, setEditVisibleClient] = useState(false)
    const [deleteVisibleClient, setDeleteVisibleClient] = useState(false)
    const [currentSectionClient, setCurrentSectionClient] = useState(0)
    const [currentEditSectionClient, setCurrentEditSectionClient] = useState(0)
    const [activeKey, setActiveKey] = useState(2)
    const [currentClient, setCurrentClient] = useState(null)
    const [deleteConfirmationClient, setDeleteConfirmationClient] = useState('')
    const [client, setClient] = useState([
        {
            client_type: 'Person',
            company_name: '',
            firts_name: 'Juan',
            Firts_Las_Name: 'Alarcon',
            Document_Number: '30625345',
            Phone: '0424-1234567',
            Address: 'calle 123',
            email: 'juanalarcon@gmail,com',
        },
        {
            client_type: 'Company',
            company_name: 'Caño Amarillo C.A',
            firts_name: '',
            Firts_Las_Name: '',
            Document_Number: '',
            Rif: 'J-12345678-9',
            Phone: '0276-1234567',
            Address: 'colon caño amarillo',
            email: 'queseracañoamarillo@gmail,com',
        },
    ])
    const [addClient, setAddClient] = useState({
        client_type: '',
        company_name: '',
        firts_name: '',
        Firts_Las_Name: '',
        Document_Number: '',
        Rif: '',
        Phone: '',
        Address: '',
        email: '',
    })
    const sections = [
        <SectionOne addClient={addClient} setAddClient={setAddClient} />,
        <SectionTwo addClient={addClient} setAddClient={setAddClient} />,
    ]
    const editsections = [
        <EditSectionOne currentClient={currentClient} setCurrentClient={setCurrentClient} />,
        <EditSectionTwo currentClient={currentClient} setCurrentClient={setCurrentClient} />,
    ]

    const handleNext = () => {
        if (currentSectionClient < sections.length - 1) {
            setCurrentSectionClient(currentSectionClient + 1)
        }
    }

    const handlePrevious = () => {
        if (currentSectionClient > 0) {
            setCurrentSectionClient(currentSectionClient - 1)
        }
    }

    const handleNextEdit = () => {
        if (currentEditSectionClient < sections.length - 1) {
            setCurrentEditSectionClient(currentEditSectionClient + 1)
        }
    }

    const handlePreviousEdit = () => {
        if (currentEditSectionClient > 0) {
            setCurrentEditSectionClient(currentEditSectionClient - 1)
        }
    }

    const handleAddClient = () => {
        setClient([...client, addClient])

        setAddClient({
            client_type: '',
            company_name: '',
            firts_name: '',
            Firts_Las_Name: '',
            Document_Number: '',
            Rif: '',
            Phone: '',
            Address: '',
            email: '',
        })
        setVisibleClient(false)
    }

    const handleEditClient = () => {
        if (!currentClient || !currentClient.Document_Number) {
            console.error('No Client selected for editing.')
            return
        }

        const updatedClient = client.map((client) => {
            if (client.Document_Number === currentClient.Document_Number) {
                return { ...client, ...currentClient }
            }
            return client
        })

        setClient(updatedClient)
        setEditVisibleClient(false)
    }

    const handleDeleteClient = () => {
        if (!currentClient || !currentClient.Document_Number) {
            console.error('No Client selected for deletion.')
            return
        }

        if (deleteConfirmationClient === 'confirm') {
            const deleteClient = client.filter(
                (client) => client.Document_Number !== currentClient.Document_Number,
            )
            setClient(deleteClient)
            setDeleteVisibleClient(false)
        } else {
            console.error('Delete confirmation failed.')
        }
    }

    return (
        <CCard>
            <CCardHeader>
                <h4 className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center">
                    Client Management
                    <CButton
                        className="button-no-hover-orange text-white"
                        onClick={() => setVisibleClient(true)}
                    >
                        <CIcon icon={cilPlus} className="me-2" />
                        Add Client
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
                                Person
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink
    className={`c-nav-link ${activeKey === 2 ? 'active' : ''}`}
    active={activeKey === 2}
    onClick={() => setActiveKey(2)}
>
            
                                Company
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
                                            Client type
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilTags} />
                                            Company Name
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilTag} />
                                            firts name
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilTags} />
                                            firts LasName
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilWallet} />
                                            Document-Number
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilWallet} />
                                            Rif
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilMobile} />
                                            Phone
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilLocationPin} />
                                            Address
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilContact} />
                                            Email
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilPencil} />
                                            Actions
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {client 
                                    .filter((client) => client.client_type === 'Person')
                                    .map((client) => (
                                        <CTableRow key={client.Document_Number}>
                                            <CTableDataCell>{client?.client_type || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.company_name || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.firts_name || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.Firts_Las_Name || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.Document_Number || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.Rif || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.Phone || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.Address || ''} </CTableDataCell>
                                            <CTableDataCell>{client?.email || ''} </CTableDataCell>

                                            <CTableDataCell>
                                                <div className="d-flex">
                                                    <CButton
                                                        className="me-2 mb-2"
                                                        size="sm"
                                                        color="info"
                                                        variant="outline"
                                                        onClick={() => {
                                                            setCurrentClient(client)
                                                            setEditVisibleClient(true)
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
                                                            setCurrentClient(client)
                                                            setDeleteVisibleClient(true)
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
                                            <CIcon icon={cilTag} />
                                            Client type
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilTags} />
                                            Company Name
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilTag} />
                                            firts name
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilTags} />
                                            firts LasName
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilWallet} />
                                            Document-Number
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilWallet} />
                                            Rif
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilMobile} />
                                            Phone
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilLocationPin} />
                                            Address
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilContact} />
                                            Email
                                        </CTableHeaderCell>
                                        <CTableHeaderCell className="text-green">
                                            {' '}
                                            <CIcon icon={cilPencil} />
                                            Actions
                                        </CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    {client
                                    .filter((client) => client.client_type == 'Company')
                                    .map((client) => (
                                         <CTableRow key={client.Document_Number}>
                                            <CTableDataCell>{client?.client_type || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.company_name || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.firts_name || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.Firts_Las_Name || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.Document_Number || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.Rif || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.Phone || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.Address || ''}</CTableDataCell>
                                            <CTableDataCell>{client?.email || ''}</CTableDataCell>
                                            <CTableDataCell>
                                            <div className="d-flex">
                                                    <CButton
                                                        className="me-2 mb-2"
                                                        size="sm"
                                                        color="info"
                                                        variant="outline"
                                                        onClick={() => {
                                                            setCurrentClient(client)
                                                            setEditVisibleClient(true)
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
                                                            setCurrentClient(client)
                                                            setDeleteVisibleClient(true)
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
                visible={visibleClient}
                onClose={() => setVisibleClient(false)}
            >
                <CModalHeader className="modal-module">
                    <CModalTitle className="typography-color">Client Record</CModalTitle>
                </CModalHeader>

                <CModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {sections[currentSectionClient]}
                </CModalBody>

                <CModalFooter>
                    <CButton
                        className="button-no-hover-green text-white"
                        onClick={handlePrevious}
                        disabled={currentSectionClient === 0}
                    >
                        Fomer
                    </CButton>

                    <CButton
                        className="button-no-hover-green text-white"
                        onClick={handleNext}
                        disabled={currentSectionClient === sections.length - 1}
                    >
                        Next
                    </CButton>

                    <CButton className="button-no-hover-green text-white" onClick={handleAddClient}>
                        Add
                    </CButton>
                </CModalFooter>
            </CModal>

            <CModal
                alignment="center"
                scrollable
                visible={editVisibleClient}
                onClose={() => setEditVisibleClient(false)}
            >
                <CModalHeader className="modal-module">
                    <CModalTitle className="text-white">Edit Client</CModalTitle>
                </CModalHeader>

                <CModalBody style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                    {editsections[currentEditSectionClient]}
                </CModalBody>

                <CModalFooter>
                    <CButton
                        className="button-no-hover-green text-white"
                        onClick={handlePreviousEdit}
                        disabled={currentEditSectionClient === 0}
                    >
                        Previos
                    </CButton>

                    <CButton
                        className="button-no-hover-green text-white"
                        onClick={handleNextEdit}
                        disabled={currentEditSectionClient === sections.length - 1}
                    >
                        Next
                    </CButton>

                    <CButton className="button-no-hover-green text-white" onClick={handleEditClient}>
                        Save Changes
                    </CButton>
                </CModalFooter>
            </CModal>
            <CModal visible={deleteVisibleClient} onClose={() => setDeleteVisibleClient(false)}>
                <CModalHeader>
                    <CModalTitle className="typography-color-title">Delete Client</CModalTitle>
                </CModalHeader>

                <CModalBody>
                    <h6>Please write 'confirm' to delete this client</h6>
                    <CFormInput
                        placeholder="confirm"
                        className="modal-border"
                        value={deleteConfirmationClient}
                        onChange={(e) => setDeleteConfirmationClient(e.target.value)}
                    />{' '}
                    {/* detectar los cambios guardados */}
                </CModalBody>

                <CModalFooter>
                    <CButton className="button-no-hover-green" onClick={() => setDeleteVisibleClient(false)}>
                        <h6 className="typography-color">Close</h6>
                    </CButton>

                    <CButton className="button-no-hover-green" onClick={handleDeleteClient}>
                        <h6 className="typography-color">delete</h6>
                    </CButton>
                </CModalFooter>
            </CModal>
        </CCard>
    )
}
export default Client
