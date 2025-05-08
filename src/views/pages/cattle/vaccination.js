import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
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
  CTooltip,
} from '@coreui/react'

const Vaccination = () => {
  const [visibleVaccination, setVisibleVaccination] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [vaccinationEvents, setVaccinationEvents] = useState([])
  const [formData, setFormData] = useState({
    cattleId: '',
    employeeId: '',
    diagnosis: '',
    treatment: '',
    vaccine: '',
    date_vaccination: '',
  })

  // Manejar el clic en una fecha del calendario
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr)
    setFormData({
      ...formData,
      date_vaccination: info.dateStr,
    })
    setVisibleVaccination(true)
  }

  // Manejar el envío del formulario
  const handleSubmit = () => {
    // Crear un nuevo evento con la estructura que espera FullCalendar
    const newEvent = {
      title: `Vacuna: ${formData.vaccine}`,
      date: selectedDate,
      extendedProps: {
        cattleId: formData.cattleId,
        employeeId: formData.employeeId,
        diagnosis: formData.diagnosis,
        treatment: formData.treatment,
        vaccine: formData.vaccine,
        date_vaccination: formData.date_vaccination,
      },
    }

    setVaccinationEvents([...vaccinationEvents, newEvent])
    setVisibleVaccination(false)
    setFormData({
      cattleId: '',
      employeeId: '',
      diagnosis: '',
      treatment: '',
      vaccine: '',
      date_vaccination: '',
    })
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventContent={renderEventContent}
        events={vaccinationEvents}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek',
        }}
        height="auto"
        locale="es"
        buttonText={{
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
        }}
      />

      <CModal
        alignment="center"
        visible={visibleVaccination}
        onClose={() => setVisibleVaccination(false)}
      >
        <CModalHeader className="modal-module">
          <CModalTitle className="typograhy-color-title">Vaccination Plan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>
            <strong>Date:</strong> {selectedDate}
          </p>
          <CForm>
            <CFormInput
              className="modal-name mb-3 custom-select"
              placeholder="Cattle Number"
              type="text"
              name="cattleId"
              value={formData.cattleId}
              onChange={(e) => setFormData({ ...formData, cattleId: e.target.value })}
            />
            <CFormInput
              className="modal-name mb-3 custom-select"
              placeholder="Employee Number"
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
            />
            <CFormInput
              className="modal-name mb-3 custom-select"
              placeholder="Diagnosis"
              type="text"
              name="diagnosis"
              value={formData.diagnosis}
              onChange={(e) => setFormData({ ...formData, diagnosis: e.target.value })}
            />
            <CFormInput
              className="modal-name mb-3 custom-select"
              placeholder="Treatment"
              type="text"
              name="treatament"
              value={formData.treatament}
              onChange={(e) => setFormData({ ...formData, treatament: e.target.value })}
            />
            <CFormInput
              className="modal-name mb-3 custom-select"
              type="text"
              placeholder="Vaccine Name"
              name="vaccine"
              value={formData.vaccine}
              onChange={(e) => setFormData({ ...formData, vaccine: e.target.value })}
            />
            <CFormInput
              className="modal-name mb-3"
              type="date"
              placeholder="Date Vaccination custom-select"
              name="date_vaccination"
              value={formData.date_vaccination}
              onChange={(e) => setFormData({ ...formData, date_vaccination: e.target.value })}
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton className="button-no-hover-green" onClick={() => setVisibleVaccination(false)}>
            Close
          </CButton>
          <CButton className="button-no-hover-green" onClick={handleSubmit}>
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

function renderEventContent(eventInfo) {
  return (
    <CTooltip
      content={
        `Diagnóstico: ${eventInfo.event.extendedProps.diagnosis || 'N/A'}` +
        `\nResponsable: ${eventInfo.event.extendedProps.employeeId || 'N/A'}\n`
      }
      placement="right"
      trigger="hover"
    >
      <div className="vaccination-event">
        <div className="event-title">{eventInfo.event.title}</div>
        <div className="event-cattle">Ganado: {eventInfo.event.extendedProps.cattleId}</div>
      </div>
    </CTooltip>
  )
}

export default Vaccination