"use client";

import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';


interface Empleado{
  id: number|null;
  usuario: string;
  rol: string;
}

interface Form{
  title: string;
  id: number;
  userId: string;
  description: string;
}

const TaskPage = () => {
  const [empleados, setEmpleados] = useState <Empleado[]> ([]);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState <Empleado> ();
  const [forms, setForms] = useState <Form[]> ([]);
  const [formData, setFormData] = useState  ({
    title: '',
    description: '',
    userId: '',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditing, setIsEditing] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchEmpleados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/all`);
      const data = await response.json();
      setEmpleados(data);
    }
    fetchEmpleados();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEmpleadoSelect = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setShowDropdown(false);
    async function fetchForms() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/${empleado.id}`);
      const data = await response.json();
      setForms(data);
    }
    fetchForms();
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Título y descripción son obligatorios.");
      return;
    }
    if (empleadoSeleccionado) {
      const method = isEditing ? 'PATCH' : 'POST';
      const endpoint = isEditing
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/${isEditing}`
        : `${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/create`;

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userId: empleadoSeleccionado.id,
        }),
      });

      if (response.ok) {
        const updatedForm = await response.json();
        if (isEditing) {
          setForms((prevForms) =>
            prevForms.map((form) => (form.id === updatedForm.id ? updatedForm : form))
          );
        } else {
          setForms((prevForms) => [...prevForms, updatedForm]);
        }
        setIsEditing(null);
        setFormData({ title: '', description: '', userId: '' });
      } else {
        alert("Error al actualizar o crear el formulario.");
      }
    }
  };

  const handleCompleteForm = (form) => {
    setFormData({ title: form.title, description: form.description, userId: form.userId });
    setIsEditing(form.id);
  };

  const handleDeleteForm = async (formId) => {
    const confirmed = window.confirm("¿Estás seguro de que deseas eliminar este formulario?");
    if (confirmed) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forms/${formId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setForms((prevForms) => prevForms.filter((form) => form.id !== formId));
      } else {
        alert("Error al eliminar el formulario.");
      }
    }
  };

  return (
    <div className={styles.taskPage}>
      <h1 className={styles.title}>Gestión de Formularios</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Buscar empleado"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowDropdown(true)}
        />
        
        {showDropdown && (
          <ul ref={dropdownRef} className={styles.employeeDropdown}>
            {empleados
              .filter((empleado) =>
                empleado.usuario.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((empleado) => (
                <li
                  key={empleado.id}
                  className={styles.employeeItem}
                  onClick={() => handleEmpleadoSelect(empleado)}
                >
                  {empleado.usuario}
                </li>
              ))}
          </ul>
        )}
      </div>
      
      {empleadoSeleccionado && (
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Formularios de {empleadoSeleccionado.usuario}</h2>
          <ul className={styles.formList}>
            {forms.map((form) => (
              <li key={form.id} className={styles.formItem}>
                <div className={styles.formContent}>
                  <strong>{form.title}</strong>: {form.description}
                </div>
                <div className={styles.formActions}>
                  <button onClick={() => handleCompleteForm(form)} className={styles.editButton}>
                    Editar
                  </button>
                  <button onClick={() => handleDeleteForm(form.id)} className={styles.deleteButton}>
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <form onSubmit={handleFormSubmit} className={styles.createForm}>
            <input
              type="text"
              name="title"
              className={styles.inputField}
              placeholder="Título"
              value={formData.title}
              onChange={handleFormChange}
              required
            />
            <textarea
              name="description"
              className={styles.textArea}
              placeholder="Descripción"
              value={formData.description}
              onChange={handleFormChange}
              required
            />
            <button type="submit" className={styles.submitButton}>
              {isEditing ? 'Actualizar Formulario' : 'Crear Formulario'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskPage;
