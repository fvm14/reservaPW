import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Icon, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContentMenuReserva = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        codigo: '',
        cantidad: '',
    });

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

      
        if (Object.values(formData).some((value) => value.trim() === '')) {
            setError('Por favor, complete todos los campos.');
        } else {
            console.log('Datos de reserva:', formData);
            setShowConfirmation(true);
        }
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
        setError(''); 
    };

    return (
        <Box flex={19} sx={{
            width: 'auto',
            height: 'auto',
            padding: '24px',
            gap: '10px'
        }}>
            <Box sx={{
                width: 'auto',
                height: 'auto',
                padding: '16px 0px',
                marginBottom: '20px'
            }}>
                <Box sx={{
                    width: 'auto',
                    height: 'auto',
                    gap: '8px'
                }}>
                    <Typography variant="h4" component="div" style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}>
                        Reserva
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                width: 'auto',
                height: 'auto',
                padding: '0px 24px',
                gap: '5px'
            }}>
                <Box sx={{
                    width: 'auto',
                    height: 'auto',
                    padding: '0px 24px 0px 24px'
                }}>
                    <Box sx={{
                        width: 'auto',
                        height: 'auto',
                        marginTop: '10px'
                    }}>
                        <Typography variant="h4" component="div" sx={{
                            width: 'auto',
                            height: 'auto',

                        }}>
                            Beekeper Sentencia de Muerte
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            alignItems: 'center',
                            paddingTop: '10px',
                            paddingBottom: '20px ',
                            height: 'auto',
                        }}>
                            <Icon sx={{
                                color: '#0000008F'
                            }} aria-label="Location">
                                <LocationOnIcon />
                            </Icon>
                            <Typography color="#2196F3" variant="subtitle1" component="div" sx={{ marginLeft: '5px' }}>
                                1hrs 50min
                            </Typography>
                            <Icon sx={{
                                color: '#0000008F'
                            }} aria-label="Location">
                                <LocationOnIcon />
                            </Icon>
                            <Typography color="#2196F3" variant="subtitle1" component="div" sx={{ marginLeft: '5px' }}>
                                Sala A
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: 'auto',
                        height: 'auto',
                        gap: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{
                            width: 'auto',
                            height: 'auto',
                            paddingLeft: '0px',

                        }}>
                            <Box style={{ paddingTop: '20px', paddingRight: '0px', paddingLeft: '0px', paddingBottom: '20px', marginLeft: '-45px' }}>
                                <Paper elevation={3} style={{ padding: '20px', boxShadow: '5px 5px 15px 0px rgba(0,0,0,0.1)' }}>
                                    <Typography variant="h5" component="div" gutterBottom>
                                        Información de reserva
                                    </Typography>
                                    <Typography variant="h6" component="div" gutterBottom style={{ borderBottom: '1px solid rgb(224, 224, 224)' }}>
                                        Lunes 08 - 15:00 hrs
                                    </Typography>
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            label="Nombre"
                                            fullWidth
                                            margin="normal"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            InputProps={{
                                                placeholder: "Nombre",
                                                style: { color: 'black' },
                                            }}
                                        />
                                        <TextField
                                            label="Apellido"
                                            fullWidth
                                            margin="normal"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleChange}
                                            InputProps={{
                                                placeholder: "Apellido",
                                                style: { color: 'black' },
                                            }}
                                        />
                                        <TextField
                                            label="Código"
                                            fullWidth
                                            margin="normal"
                                            name="codigo"
                                            value={formData.codigo}
                                            onChange={handleChange}
                                            InputProps={{
                                                placeholder: "Código",
                                                style: { color: 'black' },
                                            }}
                                        />
                                        <TextField
                                            label="Cantidad"
                                            fullWidth
                                            margin="normal"
                                            name="cantidad"
                                            value={formData.cantidad}
                                            onChange={handleChange}
                                            style={{ marginBottom: '20px' }}
                                            InputProps={{
                                                placeholder: "Cantidad",
                                                style: { color: 'black' },
                                            }}
                                        />

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="secondary"
                                            fullWidth
                                            style={{ backgroundColor: 'rgb(250, 117, 37)', color: 'white', padding: '15px', fontWeight: 'bold' }}
                                            disabled={Object.values(formData).some((value) => value.trim() === '')}
                                        >
                                            Reservar
                                        </Button>

                                        {error && (
                                            <Typography variant="body2" color="error" sx={{ paddingTop: '10px' }}>
                                                {error}
                                            </Typography>
                                        )}
                                    </form>
                                </Paper>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: 'auto',
                            height: 'auto',
                            borderRadius: '4px',
                            padding: '0px',
                            marginLeft: '-10px'
                        }}>
                            <Paper sx={{
                                borderRadius: '0', 
                                padding: '20px', 
                                boxShadow: 'none', 
                            }}>
                                <img
                                    src="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001896?referenceScheme=HeadOffice&allowPlaceHolder=true"
                                    alt="Imagen"
                                    style={{ maxWidth: '70%', height: 'auto' }}
                                />
                            </Paper>
                        </Box>

                    </Box>
                </Box>
            </Box>
            <Dialog open={showConfirmation} onClose={handleCloseConfirmation}
                PaperProps={{
                    style: {
                        padding: '10px',
                        minWidth: '600px',
                        borderRadius: '5px',
                    },
                }}>
                <DialogTitle variant="h5"
                    sx={{
                        paddingBottom: '25px',
                        fontWeight: 'bold'
                    }}>
                    Reserva confirmada
                </DialogTitle>
                <DialogContent>
                    <Box
                        borderRadius="10px"
                        border="1px dashed #ccc"
                        padding="20px"
                        sx={{
                            background: 'linear-gradient(0deg, rgba(250, 117, 37, 0.04), rgba(250, 117, 37, 0.04))',
                            color: '#FA7525',
                            border: '1px dashed #FA7525',
                        }}
                    >
                        <Typography variant="body1" sx={{
                            paddingLeft: '25px',
                        }}>
                            {formData.nombre}
                        </Typography>
                        <Typography variant="body1" sx={{
                            paddingLeft: '25px',
                        }}>
                            {formData.apellido}
                        </Typography>
                        <Typography variant="body1" sx={{
                            paddingLeft: '25px',
                        }}>
                            {formData.codigo}
                        </Typography>
                        <Typography variant="body1" sx={{
                            paddingLeft: '25px',
                        }}>
                            {formData.cantidad} pases
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirmation} color="primary">
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ContentMenuReserva;