import React, { useContext } from 'react';
import { LanguageContext } from './context/LanguageContext';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email Address',
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Addresse Electronique',
    password: 'Mot do Passe',
    remember: 'Souviens-toi De Moi'
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electronico',
    password: 'Contrasena',
    remember: 'Recuerdame'
  }
}

const Form = props => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { signIn, email, password, remember } = words[language];

  return (
    <main className={classes.main}>
      <Paper elevation={4} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <FormControl variant="outlined" className={classes.select}>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='french'>French</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
        </FormControl>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' />
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary' />} label={remember} />
          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>{signIn}</Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form);