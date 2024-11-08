export default async function handler(req, res) {
    const token = req.headers.authorization?.split(' ')[1]; // Extrae el token del encabezado
    
    if (!token) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }
    
    try {
        const response = await fetch('http://localhost:4000/auth/verify', {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        return res.status(401).json({ message: 'Token inválido o expirado' });
    }

    const userData = await response.json();
    return res.status(200).json(userData);
    } catch (error) {
        return res.status(500).json({ message: 'Error en la verificación del usuario' });
    }
}