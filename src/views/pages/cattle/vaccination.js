import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import 'src/scss/style.scss'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormTextarea,
} from '@coreui/react';

const Vaccination = () => {
  const [visibleVaccination, setVisibleVaccination] = useState(false);
  const [selectedDate, setSelectedDate] = useState(''); // Estado para almacenar la fecha seleccionada
  const [vaccinationEvent, setVaccinatioEvent]=useState([])
  const [formData, setFormData] = useState([
    {
    cattleId: '',
    employeeId:'',
    diagnosis:'',
    treatament:'',
    vaccine: '',
    date_vaccination: '',
    } 

  ]);

  // Manejar el clic en una fecha del calendario
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr); // Establece la fecha seleccionada
    setVisibleVaccination(true); // Abre el modal
  };
  // Manejar el envío del formulario
  const handleSubmit = () => {
    setVaccinatioEvent([...vaccinationEvent, { ...formData, date: selectedDate}])
    setVisibleVaccination(false); // Cierra el modals
    setFormData({ cattleId: '', vaccineName: '', notes: '' }); // Limpia el formulario
  };

  return (
    <>
      <FullCalendar 
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={vaccinationEvent}
        />

      <CModal
        alignment="center"
        visible={visibleVaccination}
        onClose={() => setVisibleVaccination(false)}
      >
        <CModalHeader
          className='modal-module'>
          <CModalTitle className='typograhy-color-title'>
            Vaccination Plan
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p><strong>Date:</strong> {selectedDate}</p>
          <CForm>
            <CFormInput
              className="modal-name mb-3"
              placeholder="Cattle Number"
              type="text"
              name="cattleId"
              value={formData.cattleId}
              onChange={(e)=>setFormData({...formData, cattleId: e.target.value})}
            />
            <CFormInput
              className="modal-name mb-3"
              placeholder="Employee Number"
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={(e)=>setFormData({...formData, employeeId: e.target.value})}
            />
            <CFormInput
              className="modal-name mb-3"
              placeholder="Diagnosis"
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={(e)=>setFormData({...formData, employeeId: e.target.value})}
            />
            <CFormInput
              className="modal-name mb-3"
              placeholder="Treatment"
              type="text"
              name="treatament" 
              value={formData.treatament}
              onChange={(e)=>setFormData({...formData, treatament: e.target.value})}
            />
            <CFormInput
              className="modal-name mb-3"
              type="text"
              placeholder="Vaccine Name"
              name="vaccine"
              value={formData.vaccine}
              onChange={(e)=>setFormData({...formData, vaccine: e.target.value})}
            />
            <CFormInput
              className="modal-name mb-3"
              type="date"
              placeholder="Date Vaccination"
              name="date_vaccination"
              value={formData.date_vaccination}
              onChange={(e)=>setFormData({...formData, date_vaccination: e.target.value})}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton 
            className='button-no-hover-green'
            onClick={() => setVisibleVaccination(false)}>
            Close
          </CButton>
          <CButton
            className='button-no-hover-green'
            onClick={handleSubmit}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

function renderEventContent(eventInfo) {
  return(
    <>

      <b>{eventInfo.vaccinationEvent.target.vaccine}</b>
    </>
  )
}

export default Vaccination;