import { useState, useEffect } from "react"
import { helpFetch } from "src/helpper/helpFetch.js"
import CIcon from "@coreui/icons-react"
import { cilPlus, cilTag, cilTags, cilWallet, cilMobile, cilLocationPin, cilContact, cilPencil } from "@coreui/icons"
import {
    CCard,
    CButton,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CRow,
    CTable,
    CTableDataCell,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CFormSelect,
    CTableBody,
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
} from "@coreui/react"
const SectionOne = ({ addClient, setAddClient, clientType}) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Client Data</h4>

            <CCol md={6}>
                <CFormSelect 
                    className="modal-name custom-select"
                    placeholder="Client Type"
                    aria-label="Client Type"
                    value={addClient?.client_type || ""}
                    onChange={(e) => setAddClient({ ...addClient, client_type: e.target.value })}
                    >
                    <option value="">Type Client</option>
                                    {clientType.map((cli) => (
                                        <option key={cli.id}
                                            value={cli.name_rol}>
                                            {cli.name_rol}
                                        </option>
                                    ))}
                </CFormSelect>
                <small className="text-muted">Please add your client type.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="company Name"
                    aria-label="company Name"
                    value={addClient?.company_name || ""}
                    onChange={(e) => setAddClient({ ...addClient, company_name: e.target.value })}
                />

                <small className="text-muted">Please add company name.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={addClient?.first_name || ""}
                    onChange={(e) => setAddClient({ ...addClient, first_name: e.target.value })}
                />
                <small className="text-muted">Please add your first name.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="First Last-Name"
                    aria-label="First Last-Name"
                    value={addClient?.first_lasname || ""}
                    onChange={(e) => setAddClient({ ...addClient, first_lasname: e.target.value })}
                />
                <small className="text-muted">Please add your first last-name.</small>
            </CCol>
        </CRow>
    </div>
)

const SectionTwo = ({ addClient, setAddClient, clientType }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Client Data</h4>
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Document Number"
                    aria-label="Document Number"
                    value={addClient?.document_number || ""}
                    onChange={(e) => setAddClient({ ...addClient, document_number: e.target.value })}
                />
                <small className="text-muted">Please add your document number.</small>
            </CCol>
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="rif"
                    value={addClient?.rif || ""}
                    onChange={(e) => setAddClient({ ...addClient, rif: e.target.value })}
                />
                <small className="text-muted">Please add your rif.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={addClient?.phone || ""}
                    onChange={(e) => setAddClient({ ...addClient, phone: e.target.value })}
                />
                <small className="text-muted">Please add your phone.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Address"
                    aria-label="Address"
                    value={addClient?.address || ""}
                    onChange={(e) => setAddClient({ ...addClient, address: e.target.value })}
                />
                <small className="text-muted">Please add your address.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="email"
                    aria-label="email"
                    value={addClient?.email || ""}
                    onChange={(e) => setAddClient({ ...addClient, email: e.target.value })}
                />
                <small className="text-muted">Please add your email</small>
            </CCol>
        </CRow>
    </div>
)

const EditSectionOne = ({ currentClient, setCurrentClient, clientType }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Edit Client Data</h4>

            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    placeholder="Client Type"
                    aria-label="Client Type"
                    value={currentClient?.client_type || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, client_type: e.target.value })}
                    >
                    <option value="">Type Client</option>
                                    {clientType.map((cli) => (
                                        <option key={cli.id}
                                            value={cli.name_rol}>
                                            {cli.name_rol}
                                        </option>
                                    ))}
                </CFormSelect>
                <small className="text-muted">Please add client type.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="company Name"
                    aria-label="company Name"
                    value={currentClient?.company_name || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, company_name: e.target.value })}
                />
                <small className="text-muted">Please add your company name.</small>
            </CCol>

            <CRow className="g-3 mt-2">
                <CCol md={6}>
                    <CFormInput
                        className="modal-name custom-select"
                        placeholder="First Name"
                        aria-label="First Name"
                        value={currentClient?.first_name || ""}
                        onChange={(e) => setCurrentClient({ ...currentClient, first_name: e.target.value })}
                    />
                    <small className="text-muted">Please add your firts name.</small>
                </CCol>

                <CCol md={6}>
                    <CFormInput
                        className="modal-name custom-select"
                        placeholder="firts Last-Name"
                        aria-label="firts Last-Name"
                        value={currentClient?.first_lasname || ""}
                        onChange={(e) => setCurrentClient({ ...currentClient, first_lasname: e.target.value })}
                    />
                    <small className="text-muted">Please add your firts last-name.</small>
                </CCol>
            </CRow>
        </CRow>
    </div>
)

const EditSectionTwo = ({ currentClient, setCurrentClient, clientType }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Edit Client Data</h4>
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Document Number"
                    aria-label="Document Number"
                    value={currentClient?.document_number || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, Document_Number: e.target.value })}
                />
                <small className="text-muted">Please add your document number.</small>
            </CCol>
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Rif"
                    aria-label="Rif"
                    value={currentClient?.rif || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, rif: e.target.value })}
                />
                <small className="text-muted">Please add your rif.</small>
            </CCol>
        </CRow>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={currentClient?.phone || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, Phone: e.target.value })}
                />
                <small className="text-muted">Please add your phone.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Address"
                    aria-label="Address"
                    value={currentClient?.address || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, Address: e.target.value })}
                />
                <small className="text-muted">Please add your address.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="Email"
                    aria-label="Email"
                    value={currentClient?.email || ""}
                    onChange={(e) => setCurrentClient({ ...currentClient, email: e.target.value })}
                />
                <small className="text-muted">Please add your contact person.</small>
            </CCol>
        </CRow>
    </div>
)

const Client = () => {
    const API = helpFetch()
    const [visibleClient, setVisibleClient] = useState(false)
    const [editVisibleClient, setEditVisibleClient] = useState(false)
    const [deleteVisibleClient, setDeleteVisibleClient] = useState(false)
    const [currentSectionClient, setCurrentSectionClient] = useState(0)
    const [currentEditSectionClient, setCurrentEditSectionClient] = useState(0)
    const [activeKey, setActiveKey] = useState(2)
    const [currentClient, setCurrentClient] = useState(null)
    const [deleteConfirmationClient, setDeleteConfirmationClient] = useState("")
    const [client, setClient] = useState([])
    const [clientType, setClientType] = useState([])
    const [addClient, setAddClient] = useState({
        client_type: "",
        company_name: "",
        first_name: "",
        first_lasname: "", 
        document_number: "",
        rif: "",
        phone: "",
        address: "",
        email: "",
    })

    const sections = [
        <SectionOne key="section-one" addClient={addClient} setAddClient={setAddClient} clientType={clientType} />,
        <SectionTwo key="section-two" addClient={addClient} setAddClient={setAddClient} clientType={clientType} />,

    ]

    const editsections = [
        <EditSectionOne key="edit-section-one" currentClient={currentClient} setCurrentClient={setCurrentClient} clientType={clientType}  />,
        <EditSectionTwo key="edit-section-two" currentClient={currentClient} setCurrentClient={setCurrentClient} clientType={clientType}  />,
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

    useEffect(() => {
        const fetchClient = async () => {
            try {
                const response = await API.get("/client");
                console.log("Clientes cargados:", response);
                setClient(response);
            } catch (error) {
                console.error("Error al obtener los clientes:", error);
            }
        };

        fetchClient()
    }, [])

    useEffect(() => {
        const fetchClientType = async () => {
            try {
                const type = await API.get("/client_type_enum")
                setClientType(type);
            } catch (error) {
                console.error("error al obtener el tipo de cliente", error);
            }
        };
        fetchClientType()
    }
    , [])

    const handleAddClient = async () => {
        const addedClient = await API.post("/client", {
            client_type: addClient.client_type,
            company_name: addClient.company_name,
            first_name: addClient.first_name,
            first_lasname: addClient.first_lasname,
            document_number: addClient.document_number,
            rif: addClient.rif,
            phone: addClient.phone,
            address: addClient.address,
            email: addClient.email,
        })
        setClient([...client,addedClient,])

        setAddClient({
            client_type: "",
            company_name: "",
            first_name: "",
            first_lasname: "",
            document_number: "",
            rif: "",
            phone: "",
            address: "",
            email: "",
        })
        setVisibleClient(false)
    }

    const handleEditClient = async () => {
        if (!currentClient || !currentClient.id) {
            console.error("No Client selected for editing.")
            return
        }
        try {
            const updatedClient = await API.put(
                "/client",
                {
                    id: currentClient.id,
                    client_type: currentClient.client_type,
                    company_name: currentClient.company_name,
                    first_name: currentClient.first_name,
                    first_lasname: currentClient.first_lasname,
                    document_number: currentClient.document_number,
                    rif: currentClient.rif,
                    phone: currentClient.phone,
                    address: currentClient.address,
                    email: currentClient.email,
                },  currentClient.id
            )
            setClient((prevClient) =>
                prevClient.map((client) =>
                    client.id === currentClient.id
                        ? { ...client, ...updatedClient } : client,
                )
            ),
                setEditVisibleClient(false)
        } catch (error) {
            console.error("Error updating client:", error)

        }
    }

    const handleDeleteClient =async () => {
        if (deleteConfirmationClient === "confirm") {
            const clientId = currentClient.id
            try {
                const deleteClient =  await API.del("/client",clientId);
                setClient(client.filter((client) => client.id !== currentClient.id))
                setDeleteVisibleClient(false)
            } catch (error) {
                console.error("Error deleting client:", error)
            }

        } else {
            console.error("Delete confirmation failed.")
        }
    }
    const typeClient = (id) => {
        const clientEnum = typeClient.find((cli) => cli.id === id);
        return clientEnum ? clientEnum.id : 'Unknown';
    }; 

    return (
        <CCard>
            <CCardHeader>
                <h4 className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center">
                    Client Management
                    <CButton className="button-no-hover-orange text-white" onClick={() => setVisibleClient(true)}>
                        <CIcon icon={cilPlus} className="me-2" />
                        Add Client
                    </CButton>
                </h4>
            </CCardHeader>

            <CCardBody>
                <CNav variant="tabs" role="tablist">
                    <CNavItem>
                        <CNavLink
                            className={`c-nav-link ${activeKey === 1 ? "active" : ""}`}
                            active={activeKey === 1}
                            onClick={() => setActiveKey(1)}
                        >
                            Person
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink
                            className={`c-nav-link ${activeKey === 2 ? "active" : ""}`}
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
                                        {" "}
                                        <CIcon icon={cilTag} />
                                        firts name
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilTags} />
                                        firts LasName
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilWallet} />
                                        Document-Number
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilMobile} />
                                        Phone
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilLocationPin} />
                                        Address
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilContact} />
                                        Email
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilPencil} />
                                        Actions
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {client
                                    .filter((client) => client.client_type?.toLowerCase() === "person")
                                    .map((client) => (
                                        <CTableRow key={client.id}>
                                            <CTableDataCell>{client?.first_name || ""} </CTableDataCell>
                                            <CTableDataCell>{client?.first_lasname || ""} </CTableDataCell>
                                            <CTableDataCell>{client?.document_number || ""} </CTableDataCell>
                                            <CTableDataCell>{client?.phone || ""} </CTableDataCell>
                                            <CTableDataCell>{client?.address || ""} </CTableDataCell>
                                            <CTableDataCell>{client?.email || ""} </CTableDataCell>

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
                                        {" "}
                                        <CIcon icon={cilTags} />
                                        Company Name
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilWallet} />
                                        Rif
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilMobile} />
                                        Phone
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilLocationPin} />
                                        Address
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilContact} />
                                        Email
                                    </CTableHeaderCell>
                                    <CTableHeaderCell className="text-green">
                                        {" "}
                                        <CIcon icon={cilPencil} />
                                        Actions
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {client
                                    .filter((client) => client.client_type?.toLowerCase() === "company")
                                    .map((client) => (
                                        <CTableRow key={client.id}>
                                            <CTableDataCell>{client?.company_name || ""}</CTableDataCell>
                                            <CTableDataCell>{client?.rif || ""}</CTableDataCell>
                                            <CTableDataCell>{client?.phone || ""}</CTableDataCell>
                                            <CTableDataCell>{client?.address || ""}</CTableDataCell>
                                            <CTableDataCell>{client?.email || ""}</CTableDataCell>
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
            <CModal alignment="center" scrollable visible={visibleClient} onClose={() => setVisibleClient(false)}>
                <CModalHeader className="modal-module">
                    <CModalTitle className="typography-color">Client Record</CModalTitle>
                </CModalHeader>

                <CModalBody style={{ maxHeight: "70vh", overflowY: "auto" }}>{sections[currentSectionClient]}</CModalBody>

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

            <CModal alignment="center" scrollable visible={editVisibleClient} onClose={() => setEditVisibleClient(false)}>
                <CModalHeader className="modal-module">
                    <CModalTitle className="text-white">Edit Client</CModalTitle>
                </CModalHeader>

                <CModalBody style={{ maxHeight: "70vh", overflowY: "auto" }}>
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
                    />{" "}
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
