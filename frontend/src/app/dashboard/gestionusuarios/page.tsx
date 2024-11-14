"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CreateUserButton from "../../../components/botones/CreateUserButton";
import SaveChangesButton from "../../../components/botones/SaveChangesButton";
import DeleteUserButton from "../../../components/botones/DeleteUserButton";
import styles from './styles.module.scss';
import React from "react";

interface ClientData {
  rol: string;
  nombre: string;
}

interface User {
  id: number;
  usuario: string;
  rol: string;
  password: string;
}

const GestionUsuariosPage = () => {
  const { data: session, status } = useSession();
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [newUser, setNewUser] = useState<Omit<User, 'id'>>({usuario: "", rol: "", password: "" });

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      window.location.href = "/"; // Redirige a login si no está autenticado
      return;
    }

    const fetchUsuarios = async () => {
      if (!session?.user) return;

      try {
        const token = (session.user as { token: string }).token;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/all`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Error al obtener los usuarios");

        const data = await res.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        alert("No se pudo obtener la lista de usuarios.");
      }
    };

    fetchUsuarios();
  }, [session, status]);

  const handleCreateUserButtonClick = () => {
    setIsCreatingUser(true);
  };

  const handleSaveNewUser = async () => {
    if (!session?.user) return;

    try {
      // Datos del usuario a crear (no es necesario hashear la contraseña aquí)
      const userToCreate = { ...newUser };

      const token = (session.user as { token: string }).token;

      // Llamamos a la ruta de registro del backend (que usa la función `register`)
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {  // Usamos /auth/register en lugar de /users
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(userToCreate),
      });

      if (!res.ok) throw new Error("Error al crear usuario");

      const createdUser = await res.json();
      setUsuarios(prevUsuarios => [...prevUsuarios, createdUser]);
      setIsCreatingUser(false);
      setNewUser({usuario: "", rol: "", password: "" });
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert("No se pudo crear el usuario.");
    }
  };

  const handleDeleteSelectedUsers = async () => {
    if (!session?.user || selectedUsers.length === 0) return;

    try {
      const token = (session.user as { token: string }).token;

      for (const userId of selectedUsers) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/delete/${userId}`, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Error al eliminar usuario");
      }

      setUsuarios(prevUsuarios => prevUsuarios.filter(usuario => !selectedUsers.includes(usuario.id)));
      setSelectedUsers([]);
    } catch (error) {
      console.error("Error al eliminar usuarios:", error);
      alert("No se pudo eliminar los usuarios seleccionados.");
    }
  };

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prevSelected =>
      prevSelected.includes(userId)
        ? prevSelected.filter(id => id !== userId)
        : [...prevSelected, userId]
    );
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.buttonContainer}>
        <CreateUserButton onClick={handleCreateUserButtonClick} />
        {selectedUsers.length > 0 && (
          <DeleteUserButton onClick={handleDeleteSelectedUsers}>
            Eliminar {selectedUsers.length} usuario{selectedUsers.length > 1 ? "s" : ""}
          </DeleteUserButton>
        )}
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Contraseña</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(usuario.id)}
                  onChange={() => toggleUserSelection(usuario.id)}
                />
              </td>
              <td>{usuario.id}</td>
              <td>{usuario.usuario}</td>
              <td>{usuario.rol}</td>
              <td>******</td> {/* Mostrar enmascarada */}
            </tr>
          ))}
          {isCreatingUser && (
            <tr>
              <td></td>
              <td>Auto</td>
              <td>
                <input
                  type="text"
                  value={newUser.usuario}
                  onChange={(e) => setNewUser({ ...newUser, usuario: e.target.value })}
                  placeholder="Nombre de usuario"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={newUser.rol}
                  onChange={(e) => setNewUser({ ...newUser, rol: e.target.value })}
                  placeholder="Rol"
                />
              </td>
              <td>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  placeholder="Contraseña"
                />
              </td>
              <td>
                <button onClick={handleSaveNewUser}>Guardar</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default GestionUsuariosPage;
