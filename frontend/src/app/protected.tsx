// pages/protected.tsx
import { GetServerSideProps } from 'next';
import { authenticateUser } from '../lib/auth';

interface ProtectedPageProps {
    rol?: string;
}

const ProtectedPage = ({ rol }: ProtectedPageProps) => {
    if (!rol) {
        return <p>No autorizado</p>;
    }

    return (
        <div>
            <h1>Bienvenido, {rol === 'jefe' ? 'Jefe' : 'Empleado'}</h1>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
const { isAuthenticated, rol } = authenticateUser(context);

    if (!isAuthenticated) {
        return {
            redirect: {
            destination: '/noAutorizado',
            permanent: false,
            },
        };
    }

    return {
        props: { rol },
    };
};

export default ProtectedPage;
