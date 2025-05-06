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
    CPagination,
    CPaginationItem,

} from '@coreui/react';

const users = () =>{


const[users, setUsers] =useState([

    {
        firts_name: 'Luis',
        Firts_Las_Name: 'Moreno',
        email: 'luismoreno@gmail.com',
        Phone: '0424-1234567',
        Address: 'la grita/urb el molino',
        Rol:'Dairy manager'
        
    },
    {
        firts_name: 'Mariana',
        Firts_Las_Name: 'Perez',
        email:'luismoreno@gmail.com',
        Phone: '0424-1234567',
        Address: 'la grita/urb el molino',
        Rol:'Manager'
        
    },


])

    return(
        <CTable hover responsive>
                            <CTableHead>
                                <CTableRow>
                                    {}
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilTag} />First Name</CTableHeaderCell>
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilTags} /> firts LasName</CTableHeaderCell>
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilContact} /> Email</CTableHeaderCell>
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilMobile} /> Phone</CTableHeaderCell>
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilLocationPin} /> Address</CTableHeaderCell>
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilContact} /> Rol</CTableHeaderCell>
                                    <CTableHeaderCell className='text-green'><CIcon icon={cilPencil} /> Actions</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
        </CTable>
    )

}
export default users
