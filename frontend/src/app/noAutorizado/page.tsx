const UnauthorizedPage: React.FC = () => {
    return (
        <div
            style={{
            backgroundColor: 'grey',
            height: '100vh',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
        <h1>No tienes autorización para acceder a esta página</h1>
        </div>
        );
    };
    
    export default UnauthorizedPage;