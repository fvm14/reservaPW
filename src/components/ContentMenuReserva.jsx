import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Box, Icon, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContentMenuReserva = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        codigo: '',
        cantidad: '',
    });

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos de reserva:', formData);
        setShowConfirmation(true);
    };

    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    return (
        <Box flex={19} sx={{ p: 6, gap: 4 }}>
            <Typography variant="h4" component="div" style={{ paddingTop: '16px', paddingBottom: '16px', borderBottom: '1px solid rgb(224, 224, 224)' }}>
                Reserva
            </Typography>

            <Box flex={7} sx={{ p: 3, padding: '24px' }}>
                <Typography variant="h4" component="div" style={{ paddingTop: '25px', paddingBottom: '10px', paddingLeft: '40px' }}>
                    Beekeper Sentencia de Muerte
                </Typography>

                <Box display="flex" alignItems="center" paddingBottom="25px">
                    <Box display="flex" alignItems="center">
                        <Icon color="gray" aria-label="Location" style={{ paddingTop: '0', paddingBottom: '25px', paddingLeft: '40px' }}>
                            <LocationOnIcon />
                        </Icon>
                        <Typography color="primary" variant="subtitle1" component="div" style={{ paddingLeft: '5px', margin: '0px', paddingTop: '0', marginTop: '-10px' }}>
                            1hrs 50min
                        </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" marginLeft={3}>
                        <Icon color="gray" aria-label="Location" style={{ paddingTop: '0', paddingBottom: '25px', paddingLeft: '40px' }}>
                            <LocationOnIcon />
                        </Icon>
                        <Typography color="primary" variant="subtitle1" component="div" style={{ paddingLeft: '5px', margin: '0px', paddingTop: '0', marginTop: '-10px' }}>
                            Sala 1
                        </Typography>
                    </Box>
                </Box>

                <Grid container spacing={7}>
                    <Grid item xs={12} md={6}>
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
                                />
                                <TextField
                                    label="Apellido"
                                    fullWidth
                                    margin="normal"
                                    name="apellido"
                                    value={formData.apellido}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Código"
                                    fullWidth
                                    margin="normal"
                                    name="codigo"
                                    value={formData.codigo}
                                    onChange={handleChange}
                                />
                                <TextField
                                    label="Cantidad"
                                    fullWidth
                                    margin="normal"
                                    name="cantidad"
                                    value={formData.cantidad}
                                    onChange={handleChange}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    style={{ backgroundColor: 'rgb(250, 117, 37)', color: 'white', paddingBottom: '5px', paddingTop: '5px' }}
                                >
                                    Reservar
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center" height="auto">
                            <img
                                src="https://cdn.apis.cineplanet.com.pe/CDN/media/entity/get/FilmPosterGraphic/HO00001889?referenceScheme=HeadOffice&allowPlaceHolder=true"
                                alt="Imagen"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
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
                        paddingBottom: '10px',
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
                        <Typography variant="body1">
                            {formData.nombre}
                        </Typography>
                        <Typography variant="body1">
                            {formData.apellido}
                        </Typography>
                        <Typography variant="body1">
                            {formData.codigo}
                        </Typography>
                        <Typography variant="body1">
                            {formData.cantidad}
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
