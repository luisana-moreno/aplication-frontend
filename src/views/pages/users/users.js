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
const SectionOne = ({ addUser, setAddUser, userPosition }) => (
    <div>
        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={addUser?.first_name || ""}
                    onChange={(e) => setAddUser({ ...addUser, first_name: e.target.value })}
                />
                <small className="text-muted">Please enter the user's first name.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="First Last Name"
                    aria-label="First Last Name"
                    value={addUser?.first_lasname || ""}
                    onChange={(e) => setAddUser({ ...addUser, first_lasname: e.target.value })}
                />
                <small className="text-muted">Please enter the user's first last name.</small>
            </CCol>
        </CRow>

        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={addUser?.email || ""}
                    onChange={(e) => setAddUser({ ...addUser, email: e.target.value })}
                />
                <small className="text-muted">Please enter the user's email.</small>
            </CCol>
        </CRow>

        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    aria-label="User Role"
                    value={addUser?.rol || ""}
                    onChange={(e) => setAddUser({ ...addUser, rol: e.target.value })}
                >
                <option value="">position</option>
                                    {userPosition.map((rol) => (
                                        <option key={rol.id}
                                            value={rol.name_rol}>
                                            {rol.name_rol}
                                        </option>
                                    ))}
                </CFormSelect>
                <small className="text-muted">Please select the user role.</small>
            </CCol>
        </CRow>
    </div>
);
const EditSectionOne = ({ currentUser, setCurrentUser, userPosition }) => (
    <div>
        <CRow className="g-3 mt-2">
            <h4 className="text-green mt-1 me-5">Edit User Data</h4>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="First Name"
                    aria-label="First Name"
                    value={currentUser?.first_name || ""}
                    onChange={(e) => setCurrentUser({ ...currentUser, first_name: e.target.value })}
                />
                <small className="text-muted">Please add your first name.</small>
            </CCol>

            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    placeholder="First Last Name"
                    aria-label="First Last Name"
                    value={currentUser?.first_lasname || ""}
                    onChange={(e) => setCurrentUser({ ...currentUser, first_lasname: e.target.value })}
                />
                <small className="text-muted">Please add your first last name.</small>
            </CCol>
        </CRow>

        <CRow className="g-3 mt-2">
            <CCol md={6}>
                <CFormInput
                    className="modal-name custom-select"
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={currentUser?.email || ""}
                    onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                />
                <small className="text-muted">Please add your email address.</small>
            </CCol>
            <CCol md={6}>
                <CFormSelect
                    className="modal-name custom-select"
                    aria-label="Role"
                    value={currentUser?.rol || ""}
                    onChange={(e) => setCurrentUser({ ...currentUser, rol: e.target.value })}
                >
                <option value="">position</option>
                                    {userPosition.map((rol) => (
                                        <option key={rol.id}
                                            value={rol.name_rol}>
                                            {rol.name_rol}
                                        </option>
                                    ))}
                </CFormSelect>
                <small className="text-muted">Please select the user's role.</small>
            </CCol>
        </CRow>
    </div>
)

const users = () => {
    const API = helpFetch()
    const [visibleUser, setVisibleUser] = useState(false)
    const [editVisibleUser, setEditVisibleUser] = useState(false)
    const [deleteVisibleUser, setDeleteVisibleUser] = useState(false)
    const [currentSectionUser, setCurrentSectionUser] = useState(0)
    const [currentEditSectionUser, setCurrentEditSectionUser] = useState(0)
    const [currentUser, setCurrentUser] = useState(null)
    const [deleteConfirmationUser, setDeleteConfirmationUser] = useState("")
    const [user, setUser] = useState([])
    const [userPosition, setUserPosition] = useState([])
    const [addUser, setAddUser] = useState({
        id: "",
        password: "",
        first_name: "",
        first_lasname: "",
        email: "",
        phone: "",
        rol: ""
    })

    const sections = [
        <SectionOne key="section-one" addUser={addUser} setAddUser={setAddUser} userPosition={userPosition} />,
    ]

    const editsections = [
        <EditSectionOne key="edit-section-one" currentUser={currentUser} setCurrentUser={setCurrentUser} userPosition={userPosition} />,
    ]

    const handleNext = () => {
        if (currentSectionUser < sections.length - 1) {
            setCurrentSectionUser(currentSectionUser + 1)
        }
    }

    const handlePrevious = () => {
        if (currentSectionUser > 0) {
            setCurrentSectionUser(currentSectionUser - 1)
        }
    }

    const handleNextEdit = () => {
        if (currentEditSectionUser < sections.length - 1) {
            setCurrentEditSectionUser(currentEditSectionUser + 1)
        }
    }

    const handlePreviousEdit = () => {
        if (currentEditSectionUser > 0) {
            setCurrentEditSectionUser(currentEditSectionUser - 1)
        }
    }

    useEffect(() => {
        const fetchUserAdded = async () => {
            try {
                const response = await API.get("/users");
                console.log("Usuarios cargados:", response);
                setUser(response);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };

        fetchUserAdded()
    }, [])

    useEffect(() => {
        const fetchUserPosition = async () => {
            try {
                const position= await API.get("/name_rol_enum");
                console.log("Usuarios cargados:", position);
                setUserPosition(position);
            } catch (error) {
                console.error("error al obtener el tipo position", error);
            }
        };
        fetchUserPosition()
    }
    , [])
    const handleAddUser = async () => {
        const addedUser = await API.post(
            "/users", {
            first_name: addUser.first_name,
            first_lasname: addUser.first_lasname,
            email: addUser.email,
            phone: addUser.phone,
            rol: addUser.rol,
        })
        setUser([...user, addedUser])

        setAddUser({
            first_name: "",
            first_lasname: "",
            email: "",
            phone: "",
            rol: ""
        })
        setVisibleUser(false)
    }

    const handleEditUser = async () => {
        if (!currentUser || !currentUser.id) {
            console.error("No User selected for editing.")
            return
        }
        try {
            const updatedUser = await API.put(
                "/users", {
                    first_name: currentUser.first_name,
                    first_lasname: currentUser.first_lasname,
                    email: currentUser.email,
                    phone: currentUser.phone,
                    rol: currentUser.rol,
                },  currentUser.id
            )
            setUser((prevUser) =>
                prevUser.map((user) =>
                    user.id === currentUser.id
                        ? { ...user, ...updatedUser } : user,
                )
            )
            setEditVisibleUser(false)
        } catch (error) {
            console.error("Error updating user:", error)
        }
    }

    const handleDeleteUser =async () => {
        if (deleteConfirmationUser === "confirm") {
            const userId = currentUser.id
            try {
                const deleteConfirmationUser =  await API.del("/users",userId);
                setUser(user.filter((user) => user.id !== currentUser.id))
                setDeleteVisibleUser(false)
            } catch (error) {
                console.error("Error deleting user:", error)
            }

        } else {
            console.error("Delete confirmation failed.")
        }
    };

    const positionUser = (id) => {
        const userEnum = positionUser.find((user) => user.id === id);
        return userEnum ? positionUser.id : 'Unknown';
    }

return (
    <CCard>
        <CCardHeader>
            <h4 className=" typography-color-title  mb-0 d-flex justify-content-between align-items-center" >
                User Management
                <CButton className='button-no-hover-orange text-white' onClick={() => setVisibleUser(!visibleUser)} >
                    <CIcon icon={cilPlus} className="me-2" />
                    Add User
                </CButton>
            </h4>
        </CCardHeader>

        <CCardBody>
            <CTable hover responsive>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />first_name</CTableHeaderCell>
                        <CTableHeaderCell className='text-green'> <CIcon icon={cilTag} />first_lasname</CTableHeaderCell>
                        <CTableHeaderCell className='text-green'> <CIcon icon={cilTags} />email</CTableHeaderCell>
                        <CTableHeaderCell className='text-green'> <CIcon icon={cilWallet} />rol</CTableHeaderCell>
                        <CTableHeaderCell className='text-green'> <CIcon icon={cilPencil} />Actions</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    {user.map((user) => (
                        <CTableRow key={user.id}>
                            <CTableDataCell>{user?.first_name || ''} </CTableDataCell>
                            <CTableDataCell>{user?.first_lasname || ''} </CTableDataCell>
                            <CTableDataCell>{user?.email || ''} </CTableDataCell>
                            <CTableDataCell>{user?.rol || ''} </CTableDataCell>
                            <CTableDataCell>
                                <div className='d-flex'>
                                    <CButton
                                        className='me-2 mb-2'
                                        size='sm' color='info'
                                        variant='outline'
                                        onClick={() => {
                                            setCurrentUser(user);
                                            setEditVisibleUser(true);
                                        }}>
                                        Edit
                                    </CButton>

                                    <CButton
                                        className='me-2 mb-2'
                                        size='sm'
                                        color='danger'
                                        variant='outline'
                                        onClick={() => { setCurrentUser(user); setDeleteVisibleUser(true); }}>
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
            visible={visibleUser}
            onClose={() => setVisibleUser(false)}

        >
            <CModalHeader
                className='modal-module'>
                <CModalTitle className='typography-color'>
                User Record
                </CModalTitle>
            </CModalHeader>

            <CModalBody
                style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {sections[currentSectionUser]}
            </CModalBody>

            <CModalFooter>
                <CButton
                    className='button-no-hover-green text-white'
                    onClick={handlePrevious}
                    disabled={currentSectionUser === 0}>
                    Fomer
                </CButton>

                <CButton
                    className='button-no-hover-green text-white'
                    onClick={handleNext}
                    disabled={currentSectionUser === sections.length - 1}>
                    Next
                </CButton>

                <CButton
                    className='button-no-hover-green text-white'
                    onClick={handleAddUser}>
                    Add
                </CButton>
            </CModalFooter>
        </CModal>

        <CModal
            alignment="center"
            scrollable
            visible={editVisibleUser}
            onClose={() => setEditVisibleUser(false)}

        >
            <CModalHeader
                className='modal-module'>
                <CModalTitle className='text-white'>
                    Edit User
                </CModalTitle>
            </CModalHeader>


            <CModalBody
                style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                {editsections[currentEditSectionUser]}
            </CModalBody>

            <CModalFooter>
                <CButton
                    className='button-no-hover-green text-white'
                    onClick={handlePreviousEdit}
                    disabled={currentEditSectionUser === 0}>
                    Previos
                </CButton>

                <CButton
                    className='button-no-hover-green text-white'
                    onClick={handleNextEdit}
                    disabled={currentEditSectionUser === sections.length - 1}>
                    Next
                </CButton>

                <CButton
                    className='button-no-hover-green text-white'
                    onClick={handleEditUser}>
                    Save Changes
                </CButton>

            </CModalFooter>
        </CModal>
        <CModal
            visible={deleteVisibleUser}
            onClose={() => setDeleteVisibleUser(false)}
        >
            <CModalHeader>
                <CModalTitle
                    className='typography-color-title'>
                    Delete User
                </CModalTitle>
            </CModalHeader>

            <CModalBody>
                <h6>
                    Please write 'confirm' to delete this users
                </h6>
                <CFormInput
                    placeholder="confirm"
                    className='modal-border'
                    value={deleteConfirmationUser}
                    onChange={(e) => setDeleteConfirmationUser(e.target.value)} /> {/* detectar cambios*/}
            </CModalBody>

            <CModalFooter>
                <CButton
                    className='button-no-hover green'
                    onClick={() => setDeleteVisibleUser(false)}>
                    <h6
                        className='typography-color'>
                        Close
                    </h6>
                </CButton>

                <CButton
                    className='button-no-hover-green'
                    onClick={handleDeleteUser}>
                    <h6 className='typography-color'>
                        delete
                    </h6>
                </CButton>
            </CModalFooter>
        </CModal>
    </CCard>

)
}
export default users
